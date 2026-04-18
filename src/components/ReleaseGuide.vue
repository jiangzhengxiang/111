<script setup>
import { ref, computed, inject } from 'vue';
import releaseLogic from '../release-logic.json';

const isDarkMode = inject('isDarkMode');
const currentNodeId = ref(releaseLogic.startNode || 'node_1');
const history = ref([]);

const currentNode = computed(() => {
  const node = releaseLogic.nodes[currentNodeId.value];
  return {
    id: currentNodeId.value,
    text: node?.text || '流程结束',
    isEnd: node?.isEnd || false
  };
});

// 计算进度
const progress = computed(() => {
  const visited = new Set(history.value).size + 1;
  return Math.min(Math.round((visited / 15) * 100), 100);
});

const options = computed(() => {
  const node = releaseLogic.nodes[currentNodeId.value];
  if (!node || node.isEnd) return [];
  
  const res = [];
  if (node.yes) res.push({ label: '是 (Yes)', nextId: node.yes, type: 'yes' });
  if (node.no) res.push({ label: '否 (No)', nextId: node.no, type: 'no' });
  if (node.next) res.push({ label: '继续', nextId: node.next, type: 'next' });
  
  return res;
});

const handleNavigate = (nextId) => {
  history.value.push(currentNodeId.value);
  currentNodeId.value = nextId;
};

const reset = () => {
  currentNodeId.value = releaseLogic.startNode || 'node_1';
  history.value = [];
};

const goBack = () => {
  if (history.value.length > 0) {
    currentNodeId.value = history.value.pop();
  }
};
</script>

<template>
  <view :class="{ 'dark': isDarkMode }" class="release-container">
    <view class="guide-card-wrapper">
      <!-- 背景光晕 -->
      <view class="glow-effect"></view>

      <!-- 主卡片 -->
      <view class="main-card">
        
        <!-- 顶部状态 -->
        <view class="card-header">
          <view class="status-info">
            <view class="indicator">
              <view class="dot animate-pulse"></view>
              <text class="status-label">Mindfulness Guidance</text>
            </view>
            <view class="progress-bar">
              <view class="progress-inner" :style="{ width: progress + '%' }"></view>
            </view>
          </view>

          <view class="action-icons">
            <button @tap="reset" class="icon-btn">↺</button>
            <button :disabled="history.length === 0" @tap="goBack" class="icon-btn" :class="{ 'icon-btn--disabled': history.length === 0 }">↩</button>
          </view>
        </view>

        <!-- 核心内容 -->
        <view class="card-body">
          <view v-if="history.length === 0" class="tip-box">
            <text class="tip-text">释放情绪前最好进行一次呼吸引导</text>
          </view>

          <view class="icon-decoration">
            <view class="outer-circle">
              <view class="inner-dot"></view>
            </view>
          </view>

          <view class="text-content">
            <text class="main-question">{{ currentNode.text }}</text>
            <text v-if="!currentNode.isEnd" class="pause-hint animate-pulse">
              阅读完问题，请尝试停顿 30 秒左右
            </text>
          </view>
        </view>

        <!-- 操作区 -->
        <view class="card-footer">
          <template v-if="options.length > 0">
            <button 
              v-for="option in options" 
              :key="option.nextId"
              @tap="handleNavigate(option.nextId)"
              :class="['option-btn', 'option-btn--' + option.type]"
            >
              <text>{{ option.label }}</text>
            </button>
          </template>
          
          <template v-else>
            <view class="end-view">
              <text v-if="currentNode.isEnd" class="quote-text">
                “心如工画师，能画诸世间。”
              </text>
              <button @tap="reset" class="btn-restart">
                再次开启内在之旅
              </button>
            </view>
          </template>
        </view>

        <!-- 底部标语 -->
        <view class="footer-slogan">
          Pause &bull; Feel &bull; Release
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.release-container { padding: 40rpx 0; }

.guide-card-wrapper { position: relative; }

.glow-effect {
  position: absolute;
  inset: -10rpx;
  background: linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(79, 70, 229, 0.1));
  border-radius: 80rpx;
  filter: blur(40rpx);
  z-index: 0;
}

.main-card {
  position: relative;
  background-color: var(--bg-card);
  backdrop-filter: blur(60rpx);
  border: 1rpx solid var(--border-color);
  box-shadow: 0 32rpx 64rpx -16rpx rgba(0, 0, 0, 0.08);
  border-radius: 70rpx;
  padding: 60rpx;
  min-height: 900rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  animation: card-float 10s ease-in-out infinite;
}

.card-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.indicator {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 12rpx;
}

.dot {
  width: 12rpx;
  height: 12rpx;
  background-color: #10b981;
  border-radius: 50%;
}

.status-label {
  font-size: 18rpx;
  font-weight: bold;
  letter-spacing: 4rpx;
  text-transform: uppercase;
  color: var(--text-sub);
}

.progress-bar {
  width: 200rpx;
  height: 6rpx;
  background-color: var(--border-color);
  border-radius: 100rpx;
  overflow: hidden;
}

.progress-inner {
  height: 100%;
  background: linear-gradient(to right, #34d399, #6366f1);
  transition: width 1s;
}

.action-icons { display: flex; gap: 10rpx; }

.icon-btn {
  background: transparent;
  color: var(--text-sub);
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20rpx;
}

.icon-btn--disabled { opacity: 0.1; }

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40rpx 0;
}

.tip-box {
  background-color: rgba(16, 185, 129, 0.05);
  padding: 12rpx 30rpx;
  border-radius: 100rpx;
  border: 1rpx solid rgba(16, 185, 129, 0.1);
  margin-bottom: 60rpx;
}

.tip-text {
  font-size: 22rpx;
  color: #059669;
}

.icon-decoration { margin-bottom: 60rpx; opacity: 0.1; }

.outer-circle {
  width: 80rpx;
  height: 80rpx;
  border: 4rpx solid var(--text-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner-dot {
  width: 12rpx;
  height: 12rpx;
  background-color: var(--text-main);
  border-radius: 50%;
}

.main-question {
  font-size: 44rpx;
  font-weight: 300;
  color: var(--text-main);
  line-height: 1.6;
  display: block;
}

.pause-hint {
  font-size: 24rpx;
  color: var(--text-sub);
  margin-top: 40rpx;
  font-style: italic;
  letter-spacing: 4rpx;
  display: block;
}

.card-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30rpx;
  align-items: center;
}

.option-btn {
  min-width: 360rpx;
  padding: 30rpx 60rpx;
  border-radius: 40rpx;
  font-size: 30rpx;
  transition: all 0.3s;
}

.option-btn--yes {
  background-color: #059669;
  color: #fff;
  box-shadow: 0 20rpx 40rpx rgba(16, 185, 129, 0.2);
}

.option-btn--no {
  background-color: var(--bg-card);
  border: 1rpx solid var(--border-color);
  color: var(--text-sub);
}

.option-btn--next {
  background-color: var(--text-main);
  color: var(--bg-main);
}

.end-view { text-align: center; }

.quote-text {
  font-size: 32rpx;
  font-style: italic;
  color: var(--text-sub);
  opacity: 0.6;
  margin-bottom: 60rpx;
  display: block;
}

.btn-restart {
  background: linear-gradient(to right, #10b981, #4f46e5);
  color: #fff;
  padding: 30rpx 80rpx;
  border-radius: 40rpx;
  font-weight: bold;
}

.footer-slogan {
  margin-top: 60rpx;
  font-size: 18rpx;
  text-transform: uppercase;
  letter-spacing: 8rpx;
  color: var(--text-sub);
  opacity: 0.3;
}

@keyframes card-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16rpx); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
</style>
