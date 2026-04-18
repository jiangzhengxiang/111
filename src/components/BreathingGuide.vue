<script setup>
import { ref, onUnmounted, computed, inject } from 'vue';

const isDarkMode = inject('isDarkMode');
const modes = [
  { id: 'abdominal', name: '腹式呼吸', desc: '吸气鼓肚，呼气缩肚' },
  { id: 'hold', name: '闭气练习', desc: '吸满闭气，向腹部加压' }
];

const currentMode = ref('abdominal');
const isRunning = ref(false);
const phase = ref('准备');
const counter = ref(0);
const cycleCount = ref(0);

// 自定义时间配置：吸气/呼气默认 6s (0-12)，闭气默认 5s (0-120)
const inhaleDuration = ref(6);
const holdDuration = ref(5);
const exhaleDuration = ref(6);

const activeHoldTime = ref(5);
let timer = null;

const scale = computed(() => {
  if (!isRunning.value) return 1;
  if (phase.value === '吸气' && inhaleDuration.value > 0) return 1 + (counter.value / inhaleDuration.value) * 0.5;
  if (phase.value === '闭气') return 1.5;
  if (phase.value === '呼气' && exhaleDuration.value > 0) return 1.5 - (counter.value / exhaleDuration.value) * 0.5;
  return 1;
});

const startBreathing = () => {
  isRunning.value = true;
  cycleCount.value = 0;
  activeHoldTime.value = holdDuration.value;
  runInhale();
};

const stopBreathing = () => {
  isRunning.value = false;
  phase.value = '准备';
  counter.value = 0;
  clearInterval(timer);
};

const runInhale = () => {
  if (inhaleDuration.value === 0) {
    if (currentMode.value === 'hold') runHold();
    else runExhale();
    return;
  }
  phase.value = '吸气';
  counter.value = 0;
  timer = setInterval(() => {
    counter.value++;
    if (counter.value >= inhaleDuration.value) {
      clearInterval(timer);
      if (currentMode.value === 'hold') runHold();
      else runExhale();
    }
  }, 1000);
};

const runHold = () => {
  if (holdDuration.value === 0) {
    runExhale();
    return;
  }
  phase.value = '闭气';
  counter.value = 0;
  timer = setInterval(() => {
    counter.value++;
    if (counter.value >= activeHoldTime.value) {
      clearInterval(timer);
      runExhale();
    }
  }, 1000);
};

const runExhale = () => {
  if (exhaleDuration.value === 0) {
    cycleCount.value++;
    runInhale();
    return;
  }
  phase.value = '呼气';
  counter.value = 0;
  timer = setInterval(() => {
    counter.value++;
    if (counter.value >= exhaleDuration.value) {
      clearInterval(timer);
      cycleCount.value++;
      // 闭气模式下，每两个循环增加 1 秒闭气时间（原逻辑保留）
      if (currentMode.value === 'hold' && cycleCount.value % 2 === 0) activeHoldTime.value++;
      runInhale();
    }
  }, 1000);
};

onUnmounted(() => { clearInterval(timer); });
</script>

<template>
  <view :class="{ 'dark': isDarkMode }" class="breathing-container">
    <view class="guide-card">
      
      <view class="guide-header">
        <view class="mode-selector">
          <view 
            v-for="mode in modes" 
            :key="mode.id"
            @tap="!isRunning && (currentMode = mode.id)"
            :class="['mode-tab', currentMode === mode.id ? 'mode-tab--active' : '', isRunning ? 'mode-tab--disabled' : '']"
          >
            <text>{{ mode.name }}</text>
          </view>
        </view>

        <!-- 调节滑块：自定义时间重构 -->
        <view v-if="!isRunning" class="settings-panel">
           <view class="setting-item">
              <text class="setting-label">吸气时长: {{ inhaleDuration }}s</text>
              <slider :value="inhaleDuration" @change="e => inhaleDuration = e.detail.value" min="0" max="12" activeColor="#10b981" block-size="16" />
           </view>
           <view v-if="currentMode === 'hold'" class="setting-item">
              <text class="setting-label">闭气时长: {{ holdDuration }}s</text>
              <slider :value="holdDuration" @change="e => holdDuration = e.detail.value" min="0" max="120" activeColor="#f59e0b" block-size="16" />
           </view>
           <view class="setting-item">
              <text class="setting-label">呼气时长: {{ exhaleDuration }}s</text>
              <slider :value="exhaleDuration" @change="e => exhaleDuration = e.detail.value" min="0" max="12" activeColor="#6366f1" block-size="16" />
           </view>
        </view>
      </view>

      <view class="breathing-core">
        <view class="sphere-wrapper">
          <view 
            class="sphere-outer"
            :style="{ transform: `scale(${scale * 1.5})`, opacity: isRunning ? 1 : 0 }"
          ></view>
          <view 
            class="sphere-inner"
            :class="{ 'animate-vibrate': phase === '闭气' }"
            :style="{ transform: `scale(${scale})` }"
          >
            <text class="sphere-text">{{ counter || '' }}</text>
          </view>
        </view>

        <view class="guide-text-area">
          <view class="main-text">
            <text v-if="!isRunning">静心，准备</text>
            <text v-else-if="phase === '吸气'" class="text-inhale">吸气，肚子鼓起来</text>
            <text v-else-if="phase === '闭气'" class="text-hold">闭气，把气往肚子压住</text>
            <text v-else-if="phase === '呼气'" class="text-exhale">吐气，肚子收缩</text>
          </view>
          <text class="sub-text">
            {{ isRunning ? 'Breathe with awareness' : modes.find(m => m.id === currentMode).desc }}
          </text>
        </view>
      </view>

      <view class="controls">
        <button v-if="!isRunning" @tap="startBreathing" class="btn-start">开始呼吸</button>
        <button v-else @tap="stopBreathing" class="btn-stop">结束练习</button>
      </view>

    </view>
  </view>
</template>

<style scoped>
.breathing-container { padding: 40rpx 0; }
.guide-card {
  position: relative;
  background-color: var(--bg-card);
  backdrop-filter: blur(60rpx);
  border: 1rpx solid var(--border-color);
  box-shadow: var(--shadow);
  border-radius: 70rpx;
  padding: 60rpx;
  min-height: 1000rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.guide-header { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 40rpx; }
.mode-selector { display: flex; gap: 12rpx; padding: 12rpx; background-color: var(--border-color); border-radius: 30rpx; }
.mode-tab { padding: 16rpx 40rpx; font-size: 28rpx; border-radius: 20rpx; transition: all 0.3s; color: var(--text-sub); }
.mode-tab--active { background-color: var(--bg-card); color: var(--accent); box-shadow: var(--shadow); }
.mode-tab--disabled { opacity: 0.5; }
.settings-panel { width: 100%; background-color: rgba(255, 255, 255, 0.4); padding: 30rpx; border-radius: 40rpx; border: 1rpx solid rgba(255, 255, 255, 0.4); }
.setting-item { margin-bottom: 30rpx; }
.setting-label { font-size: 22rpx; font-weight: bold; color: var(--text-sub); display: block; margin-bottom: 8rpx; }
.breathing-core { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
.sphere-wrapper { position: relative; width: 450rpx; height: 450rpx; display: flex; align-items: center; justify-content: center; }
.sphere-outer { position: absolute; inset: 0; background-color: rgba(16, 185, 129, 0.1); border-radius: 50%; transition: all 1s ease-in-out; }
.sphere-inner { width: 280rpx; height: 280rpx; background: linear-gradient(135deg, #10b981, #2dd4bf); border-radius: 50%; box-shadow: 0 0 60rpx rgba(16, 185, 129, 0.3); display: flex; align-items: center; justify-content: center; transition: transform 1s ease-in-out; z-index: 10; }
.sphere-text { color: #fff; font-size: 80rpx; font-weight: 300; }
.guide-text-area { margin-top: 60rpx; text-align: center; height: 160rpx; }
.main-text { font-size: 44rpx; font-weight: 300; color: var(--text-main); margin-bottom: 20rpx; }
.text-inhale { color: #10b981; }
.text-hold { color: #f59e0b; }
.text-exhale { color: #6366f1; }
.sub-text { font-size: 24rpx; color: var(--text-sub); letter-spacing: 4rpx; text-transform: uppercase; }
.controls { padding-bottom: 40rpx; }
.btn-start { padding: 0 120rpx; height: 100rpx; line-height: 100rpx; background-color: var(--text-main); color: var(--bg-main); border-radius: 50rpx; font-weight: bold; letter-spacing: 4rpx; box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.1); }
.btn-stop { padding: 0 120rpx; height: 100rpx; line-height: 100rpx; border: 2rpx solid var(--border-color); color: var(--text-sub); background: transparent; border-radius: 50rpx; font-weight: bold; }
@keyframes vibrate { 0%, 100% { transform: scale(1.5) translate(0); } 25% { transform: scale(1.505) translate(1rpx, 1rpx); } 50% { transform: scale(1.495) translate(-1rpx, 1rpx); } 75% { transform: scale(1.5) translate(1rpx, -1rpx); } }
.animate-vibrate { animation: vibrate 0.3s linear infinite; }
</style>
