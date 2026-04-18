"use strict";
const common_vendor = require("../common/vendor.js");
const startNode = "node_1";
const nodes = {
  node_1: {
    text: "你能感受到当下的情绪吗？",
    yes: "node_2",
    no: "node_20"
  },
  node_2: {
    text: "你允许这个感受存在吗？",
    yes: "node_3",
    no: "node_11"
  },
  node_3: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_6"
  },
  node_6: {
    text: "你能够放下头脑的解释，单纯的回归到的感受上吗？",
    next: "node_7"
  },
  node_7: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_9"
  },
  node_9: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_10"
  },
  node_10: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_11: {
    text: "你能够单纯的陪着它呆一会吗？",
    yes: "node_12",
    no: "node_14"
  },
  node_12: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_14: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_15"
  },
  node_15: {
    text: "感受有轻松一点了吗？",
    yes: "node_16",
    no: "node_11"
  },
  node_16: {
    text: "现在 we 什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_17"
  },
  node_17: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_20: {
    text: "你试图在寻找感受吗？",
    yes: "node_21",
    no: "node_30"
  },
  node_21: {
    text: "你能够放下试图寻找感受吗？",
    yes: "node_22",
    no: "node_30"
  },
  node_22: {
    text: "我们不需要寻找感受，我们无时无刻都在感受中，我们能允许最表面的感受存在吗？",
    next: "node_23"
  },
  node_23: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_25"
  },
  node_25: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_26"
  },
  node_26: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_30: {
    text: "你是否是没有感觉的？或者感觉不到东西空空的？",
    yes: "node_31",
    no: "node_45"
  },
  node_31: {
    text: "没有感觉也是一种感觉，麻木是一种麻木的感觉 你允许这个感觉存在吗？",
    yes: "node_32",
    no: "node_11"
  },
  node_32: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_33"
  },
  node_33: {
    text: "感受有轻松一点了吗？",
    yes: "node_34",
    no: "node_11"
  },
  node_34: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_35"
  },
  node_35: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_45: {
    text: "你是否在努力的释放呢？",
    yes: "node_46",
    no: "node_50"
  },
  node_46: {
    text: "你能够放下想要做为吗？只是单纯的没有目标的呆着",
    next: "node_47"
  },
  node_47: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_49"
  },
  node_49: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_44"
  },
  node_44: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_50: {
    text: "你能够放下头脑的解释，单纯的回归到的感受上吗？",
    next: "node_51"
  },
  node_51: {
    text: "感受有轻松一点了吗？",
    yes: "node_finish",
    no: "node_53"
  },
  node_53: {
    text: "现在我们什么都不做，就这样呆在当下，放松的呆一会",
    next: "node_54"
  },
  node_54: {
    text: "感觉有好一点吗？",
    yes: "node_finish",
    no: "node_11"
  },
  node_finish: {
    text: "很好，我们继续下去，直到这个感受彻底离开。",
    isEnd: true
  }
};
const releaseLogic = {
  startNode,
  nodes
};
const _sfc_main = {
  __name: "ReleaseGuide",
  setup(__props) {
    const isDarkMode = common_vendor.inject("isDarkMode");
    const currentNodeId = common_vendor.ref(releaseLogic.startNode);
    const history = common_vendor.ref([]);
    const currentNode = common_vendor.computed(() => {
      const node = releaseLogic.nodes[currentNodeId.value];
      return {
        id: currentNodeId.value,
        text: (node == null ? void 0 : node.text) || "流程结束",
        isEnd: (node == null ? void 0 : node.isEnd) || false
      };
    });
    const progress = common_vendor.computed(() => {
      const visited = new Set(history.value).size + 1;
      return Math.min(Math.round(visited / 15 * 100), 100);
    });
    const options = common_vendor.computed(() => {
      const node = releaseLogic.nodes[currentNodeId.value];
      if (!node || node.isEnd)
        return [];
      const res = [];
      if (node.yes)
        res.push({ label: "是 (Yes)", nextId: node.yes, type: "yes" });
      if (node.no)
        res.push({ label: "否 (No)", nextId: node.no, type: "no" });
      if (node.next)
        res.push({ label: "继续", nextId: node.next, type: "next" });
      return res;
    });
    const handleNavigate = (nextId) => {
      history.value.push(currentNodeId.value);
      currentNodeId.value = nextId;
    };
    const reset = () => {
      currentNodeId.value = releaseLogic.startNode;
      history.value = [];
    };
    const goBack = () => {
      if (history.value.length > 0) {
        currentNodeId.value = history.value.pop();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: progress.value + "%",
        b: common_vendor.o(reset),
        c: history.value.length === 0,
        d: common_vendor.o(goBack),
        e: history.value.length === 0 ? 1 : "",
        f: history.value.length === 0
      }, history.value.length === 0 ? {} : {}, {
        g: common_vendor.t(currentNode.value.text),
        h: !currentNode.value.isEnd
      }, !currentNode.value.isEnd ? {} : {}, {
        i: options.value.length > 0
      }, options.value.length > 0 ? {
        j: common_vendor.f(options.value, (option, k0, i0) => {
          return {
            a: common_vendor.t(option.label),
            b: option.nextId,
            c: common_vendor.o(($event) => handleNavigate(option.nextId), option.nextId),
            d: common_vendor.n("option-btn--" + option.type)
          };
        })
      } : common_vendor.e({
        k: currentNode.value.isEnd
      }, currentNode.value.isEnd ? {} : {}, {
        l: common_vendor.o(reset)
      }), {
        m: common_vendor.unref(isDarkMode) ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12142a85"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ReleaseGuide.js.map
