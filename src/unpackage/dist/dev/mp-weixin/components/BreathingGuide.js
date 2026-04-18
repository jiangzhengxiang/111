"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "BreathingGuide",
  setup(__props) {
    const isDarkMode = common_vendor.inject("isDarkMode");
    const modes = [
      { id: "abdominal", name: "腹式呼吸", desc: "吸气鼓肚，呼气缩肚" },
      { id: "hold", name: "闭气练习", desc: "吸满闭气，向腹部加压" }
    ];
    const currentMode = common_vendor.ref("abdominal");
    const isRunning = common_vendor.ref(false);
    const phase = common_vendor.ref("准备");
    const counter = common_vendor.ref(0);
    const cycleCount = common_vendor.ref(0);
    const inhaleDuration = common_vendor.ref(6);
    const holdDuration = common_vendor.ref(5);
    const exhaleDuration = common_vendor.ref(6);
    const activeHoldTime = common_vendor.ref(5);
    let timer = null;
    const scale = common_vendor.computed(() => {
      if (!isRunning.value)
        return 1;
      if (phase.value === "吸气" && inhaleDuration.value > 0)
        return 1 + counter.value / inhaleDuration.value * 0.5;
      if (phase.value === "闭气")
        return 1.5;
      if (phase.value === "呼气" && exhaleDuration.value > 0)
        return 1.5 - counter.value / exhaleDuration.value * 0.5;
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
      phase.value = "准备";
      counter.value = 0;
      clearInterval(timer);
    };
    const runInhale = () => {
      if (inhaleDuration.value === 0) {
        if (currentMode.value === "hold")
          runHold();
        else
          runExhale();
        return;
      }
      phase.value = "吸气";
      counter.value = 0;
      timer = setInterval(() => {
        counter.value++;
        if (counter.value >= inhaleDuration.value) {
          clearInterval(timer);
          if (currentMode.value === "hold")
            runHold();
          else
            runExhale();
        }
      }, 1e3);
    };
    const runHold = () => {
      if (holdDuration.value === 0) {
        runExhale();
        return;
      }
      phase.value = "闭气";
      counter.value = 0;
      timer = setInterval(() => {
        counter.value++;
        if (counter.value >= activeHoldTime.value) {
          clearInterval(timer);
          runExhale();
        }
      }, 1e3);
    };
    const runExhale = () => {
      if (exhaleDuration.value === 0) {
        cycleCount.value++;
        runInhale();
        return;
      }
      phase.value = "呼气";
      counter.value = 0;
      timer = setInterval(() => {
        counter.value++;
        if (counter.value >= exhaleDuration.value) {
          clearInterval(timer);
          cycleCount.value++;
          if (currentMode.value === "hold" && cycleCount.value % 2 === 0)
            activeHoldTime.value++;
          runInhale();
        }
      }, 1e3);
    };
    common_vendor.onUnmounted(() => {
      clearInterval(timer);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(modes, (mode, k0, i0) => {
          return {
            a: common_vendor.t(mode.name),
            b: mode.id,
            c: common_vendor.o(($event) => !isRunning.value && (currentMode.value = mode.id), mode.id),
            d: common_vendor.n(currentMode.value === mode.id ? "mode-tab--active" : "")
          };
        }),
        b: common_vendor.n(isRunning.value ? "mode-tab--disabled" : ""),
        c: !isRunning.value
      }, !isRunning.value ? common_vendor.e({
        d: common_vendor.t(inhaleDuration.value),
        e: inhaleDuration.value,
        f: common_vendor.o((e) => inhaleDuration.value = e.detail.value),
        g: currentMode.value === "hold"
      }, currentMode.value === "hold" ? {
        h: common_vendor.t(holdDuration.value),
        i: holdDuration.value,
        j: common_vendor.o((e) => holdDuration.value = e.detail.value)
      } : {}, {
        k: common_vendor.t(exhaleDuration.value),
        l: exhaleDuration.value,
        m: common_vendor.o((e) => exhaleDuration.value = e.detail.value)
      }) : {}, {
        n: `scale(${scale.value * 1.5})`,
        o: isRunning.value ? 1 : 0,
        p: common_vendor.t(counter.value || ""),
        q: phase.value === "闭气" ? 1 : "",
        r: `scale(${scale.value})`,
        s: !isRunning.value
      }, !isRunning.value ? {} : phase.value === "吸气" ? {} : phase.value === "闭气" ? {} : phase.value === "呼气" ? {} : {}, {
        t: phase.value === "吸气",
        v: phase.value === "闭气",
        w: phase.value === "呼气",
        x: common_vendor.t(isRunning.value ? "Breathe with awareness" : modes.find((m) => m.id === currentMode.value).desc),
        y: !isRunning.value
      }, !isRunning.value ? {
        z: common_vendor.o(startBreathing)
      } : {
        A: common_vendor.o(stopBreathing)
      }, {
        B: common_vendor.unref(isDarkMode) ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e5cd526"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/BreathingGuide.js.map
