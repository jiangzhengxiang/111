"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (ReleaseGuide + BreathingGuide)();
}
const ReleaseGuide = () => "../../components/ReleaseGuide.js";
const BreathingGuide = () => "../../components/BreathingGuide.js";
const _sfc_main = {
  __name: "dashboard",
  setup(__props) {
    const isDarkMode = common_vendor.inject("isDarkMode");
    const tabs = [
      { id: "llm", name: "大模型", icon: "☁️" },
      { id: "kb", name: "知识库", icon: "📚" },
      { id: "release", name: "释放引导", icon: "🍃" },
      { id: "breathing", name: "呼吸引导", icon: "🌬️" }
    ];
    const activeTab = common_vendor.ref("llm");
    const selectedArticle = common_vendor.ref(null);
    const kbArticles = [
      {
        id: "emotion",
        title: "情绪：停止对抗，让一切流动",
        tag: "释放核心",
        description: "谈到情绪释放，一定绕不开莱斯特·利文森的释放理论，它是“圣多纳释放法”的核心基础。",
        sections: [
          { type: "text", content: "谈到情绪释放，一定绕不开莱斯特·利文森（Lester Levenson）的释放理论，是后来广为人知的“圣多纳释放法”（The Sedona Method）的核心基础。大卫·霍金斯早年曾与莱斯特共事，他的“放下”机制深受莱斯特启发。\n莱斯特认为，人类最大的误区在于将自己与情绪等同起来（比如认为“我是愤怒的”，而不是“我感觉到了愤怒”）。情绪只是一种受限的能量程序，并不属于你真正的本质。\n他提出了一个极其经典的隐喻：就像你手里紧紧握着一支笔。 是你主动在消耗能量去“抓着”这支笔不放，久了你的手会酸痛。只要你意识到这一点，并且愿意松开手指，笔自然会掉落。情绪也是如此，是我们潜意识里死死抓着它们，只要我们愿意，随时可以“松手”。" },
          { type: "quote", content: "人类通常用三种低效或有害的方式来处理情绪，这些方式本质上都是在制造阻力：\n压抑（Suppression/Repression）： 将情绪强行压入潜意识。这些被压抑的能量不会消失，而是会转化为焦虑、身体紧绷或失控的行为。\n表达（Expression）： 将情绪发泄出来。霍金斯认为，单纯的发泄（如愤怒地咆哮或抱怨）不仅不能释放底层能量，反而会赋予情绪更多能量，使其被进一步固化。\n逃避（Escape）： 通过娱乐、工作、转移注意力或无意识的消遣来避免感受内心的波动。" },
          { type: "text", content: "真正的释放：零阻力的“臣服”\n释放机制，是一种极度纯粹的觉知状态：\n允许其存在： 当一种情绪升起时，不抗拒它、不评判它、不试图改变它，也不试图推开它。\n抽离故事，只感受能量： 情绪总是伴随着无数的“念头”和情境“故事”。霍金斯强调，必须放下所有的念头，把注意力完全收回到感受情绪在身体里的“能量涌动”上。 念头是由底层的情绪能量驱动的；一旦这股纯粹的能量被允许流淌并释放，成千上万个由其衍生出的念头就会瞬间消散。\n能量的耗尽： 情绪本身就像是一股被压缩的能量。当你对它保持“零阻力”观察时，这股能量就会自然释放并耗尽。就像水流自然地漫过河床，没有刻意的摩擦和停滞，情绪也就流走了。" },
          { type: "quote", content: "这一点在古代中国有也有所表现，如《庄子·内篇·应帝王》用心若镜，不将不迎，应而不藏，故能胜物而不伤。\n佛陀教导要“观受如受”。当愤怒、悲伤升起时，修行者不是去压抑它，也不是被它带着走（即发泄），而是像一个旁观者一样观察它的生起、停留和消失。\n老子推崇的“柔弱”和莱斯特推崇的“释放”，指的都是“无阻力状态”也就是无为。天下莫柔弱于水，而攻坚强者莫之能胜。水没有固定的形状，它不与任何东西硬碰硬，而是顺势而为。所以老子提出了上善若水，像水一样生活。\n《登出键》的作者莫子在他的yuotube频道中也分享过对待情绪的办法，就是放下头脑的解释，安住覺察 （不解釋），看著情緒生滅起落，知道自己不是那个情绪。情绪就会被觉察消融。\n从霍金斯的“臣服”、莱斯特的“放手”、庄子的“用心若镜”，再到禅宗的“狂心顿歇”，莫子的“不解释”，你会发现人类顶级的智慧在处理内在冲突时，最终都指向了同一个动作——停止对抗。" },
          { type: "text", content: "没错，处理情绪最核心的方法不是对情绪做什么，而是对情绪什么都不做。放手，让情绪自然流动。\n但是我们经过常年累月的压抑，以至于我们太擅长压抑了，负面情绪一出现，通常我们还没有反应过来，就已经压抑下去了。扭转常年累积的“压抑习性”，本质上是在重塑你的神经回路。你的潜意识之所以在零点几秒内把情绪按下去，是因为它在过去几十年里形成了一个根深蒂固的认知：“我想要这些感受赶快离开，我不想要感受这些感受”\n因此，扭转这个习性的核心，不是用更大的力气去把情绪“挖”出来（那是一种暴力），而是通过不断地接受情绪出现，把注意力从“大脑故事”转移到“身体雷达”。情绪来的时候单纯体会这个感觉，不加以分析。通过这样持续不断的做，来让压抑的习性被扭转。这一切的过程中不需要大脑的参与。相反，你需要放下头脑。" }
        ]
      },
      {
        id: "desire",
        title: "欲望：匮乏的表达与能量机制",
        tag: "底层动力",
        description: "人类所有表层的负面情绪，都可以向下追溯到三个最核心的匮乏性欲望。",
        sections: [
          { type: "text", content: "在莱斯特的释放法中谈到：人类所有表层的负面情绪，都可以向下追溯到三个最核心的匮乏性欲望。这与东方智慧中的“三毒”完美契合\n想要控制（Wanting to Control）= 嗔（愤怒、抗拒）\n想要被认同/爱（Wanting Approval）= 贪（无餍足的抓取）\n想要安全（Wanting Security）= 痴（无明、恐惧）\n欲望是什么？你特别想要，想要的得不行，但是得不到。因为欲望这个感受在不断地阻止你得到。" },
          { type: "quote", content: "这背后的心理和能量机制在于：\n“欲求”是匮乏的表达： 当你极其强烈地“想要（Want）”某样东西时，你向潜意识发出的核心指令其实是——“我现在没有（Lack）”。\n阻力的诞生： “想要”会产生一种紧绷的能量（Force/用力）。这种紧绷感会扭曲你的动作，让你在做事时患得患失、动作变形，反而把目标推得更远。\n举一个例子：我们总想做好一件事，却怎么都做不好。然后说：‘算了，反正干不好，无所谓了。’ 结果反而很轻松地做好了。\n这里的“算了”，并不是放弃了做这件事本身，而是放下了“想要完美控制结果的欲望”。" },
          { type: "text", content: "零阻力状态： 当你说出“无所谓”的那一刻，你松开了紧紧攥着的手。匮乏感消失了，紧绷的阻力卸下了。此时，你不再用“小我”的焦虑去死磕，而是进入了如流水般自然的“心流”状态。事情还是那件事，但驱动你做事的能量从“恐惧/控制”变成了“纯粹的行动”，结果水到渠成。\n任何你紧抓不放的“想要”，都在不断确认你的“匮乏”。松开对结果的控制，接纳当下的发生，你才能从“阻力”切换到“毫不费力”。" },
          { type: "quote", content: "那要怎么释放欲望呢？ \n如同前面情绪所讲的，欲望也是一种感受。\n当你在用一种求生般的绝望去死磕一件事时，你发现自己是被欲望这种感受所驱动着，这时候我们放下头脑，单纯的回到这个感受上。可能是死死抓取的紧绷感，也可能是一种揪心、紧缩、或者像有爪子在心里挠的感觉。不管是什么感觉，不要去分析它。只是轻松的看着它，体会它，没一会他就会消散。\n你可以把释放欲望想象成你手里紧紧攥着的一把沙子，你越用力（想要），沙子越离不开手掌；当你放松手掌，沙子会轻松快速的离开。" }
        ]
      },
      {
        id: "relaxation",
        title: "放松的重要性：生理层面的开关",
        tag: "生理开关",
        description: "没有生理上的放松，就不可能有真正的情绪释放。",
        sections: [
          { type: "text", content: "当你受制于“想要控制、想要安全”等匮乏性欲望时，你的大脑会判定你正处于威胁之中。这会强制激活你的交感神经系统你的肌肉僵硬，呼吸变浅，大量的能量被用于维持这种“防御姿态”。\n 只有当你真正放松下来（哪怕只是做几次深长的腹式呼吸），你的副交感神经系统（休息与消化模式）才会被激活。在这个模式下，你自动化压抑的“盖子”才会被安全地掀开，那些淤堵的情绪能量才能像冰块融化一样通过身体的代谢自然流走。没有生理上的放松，就不可能有真正的情绪释放。" },
          { type: "quote", content: "杨定一博士有谈到一个可以帮助我们激活副交感神经系统的方法，那就是舌抵上腭。当你舌抵上腭时，你的嘴唇会自然闭合，迫使身体采用鼻腔呼吸。舌头根部与迷走神经有着紧密的连结。当你把舌头轻轻抵在上腭（门牙后方的齿龈隆起处）时，会向大脑发送一个极其强烈的“安全信号”，直接激活迷走神经，从而唤醒副交感神经系统。" },
          { type: "text", content: "在道家和中医理论中，这个动作被称为“搭鹊桥”。人体有两大核心经络：督脉（主阳气，沿后背上升，终于上唇系带）和任脉（主阴血，沿前胸下降，起于下唇承浆穴）。口部是这两条经络断开的“缺口”。当你将舌尖轻轻抵在门牙后方的上腭（天池穴附近）时，就像是闭合了一个电路开关。它能让原本容易郁结在大脑（导致思虑过载、焦虑）的能量，顺着任脉顺畅地降下来，形成“小周天”的循环。这就是生理层面的“不堵塞、零阻力”。" },
          { type: "quote", content: "杨博士常提到，保持这个姿势一段时间后，口腔内会自然分泌出大量的唾液。在古代修行中这被称为“甘露”或“玉液”。从现代医学看，这些唾液中含有大量的消化酶和免疫球蛋白，不仅能促进消化，本身就是身体进入极度放松和自我疗愈状态的标志。\n做这个动作时千万不要用力。不需要用舌头死死顶住上腭。正确的做法是：毫不费力地、轻轻地触碰，就像一片羽毛落在水面上一样。" }
        ]
      }
    ];
    const deepseekApiKey = common_vendor.ref("");
    const chatInput = common_vendor.ref("");
    const chatMessages = common_vendor.ref([]);
    const isSending = common_vendor.ref(false);
    const isThinking = common_vendor.ref(false);
    const showApiConfig = common_vendor.ref(false);
    const selectedModel = common_vendor.ref("deepseek-chat");
    const selectedKbIds = common_vendor.ref([]);
    const chatScrollTop = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      const savedKey = common_vendor.index.getStorageSync("deepseek_api_key");
      if (savedKey)
        deepseekApiKey.value = savedKey;
      const savedModel = common_vendor.index.getStorageSync("deepseek_model");
      if (savedModel)
        selectedModel.value = savedModel;
    });
    const saveApiKey = () => {
      common_vendor.index.setStorageSync("deepseek_api_key", deepseekApiKey.value);
      common_vendor.index.setStorageSync("deepseek_model", selectedModel.value);
      common_vendor.index.showToast({ title: "配置已保存", icon: "success" });
      showApiConfig.value = false;
    };
    const toggleKbSelection = (id) => {
      const index = selectedKbIds.value.indexOf(id);
      if (index > -1) {
        selectedKbIds.value.splice(index, 1);
      } else {
        selectedKbIds.value.push(id);
      }
    };
    const scrollToBottom = () => {
      common_vendor.nextTick$1(() => {
        chatScrollTop.value = 1e5 + Math.random();
      });
    };
    const arrayBufferToString = (buffer) => {
      const uint8Array = new Uint8Array(buffer);
      let out = "";
      for (let i = 0; i < uint8Array.length; i++) {
        out += String.fromCharCode(uint8Array[i]);
      }
      return decodeURIComponent(escape(out));
    };
    const sendMessage = async () => {
      if (!chatInput.value.trim() || isSending.value)
        return;
      const userMsg = { role: "user", content: chatInput.value };
      chatMessages.value.push(userMsg);
      chatInput.value;
      chatInput.value = "";
      isSending.value = true;
      isThinking.value = true;
      if (!deepseekApiKey.value) {
        chatMessages.value.push({ role: "assistant", content: "请先进入右上角设置配置 API Key" });
        isSending.value = false;
        isThinking.value = false;
        return;
      }
      let systemPrompt = "你是一位情绪释放引导者，擅长运用莱斯特·利文森的释放法和霍金斯的臣服机制帮助用户。";
      if (selectedKbIds.value.length > 0) {
        systemPrompt += "\n\n参考背景：\n";
        selectedKbIds.value.forEach((id) => {
          const art = kbArticles.find((a) => a.id === id);
          if (art) {
            systemPrompt += `--- ${art.title} ---
`;
            art.sections.forEach((s) => systemPrompt += s.content + "\n");
          }
        });
      }
      const botMsgIndex = chatMessages.value.length;
      chatMessages.value.push({ role: "assistant", content: "" });
      scrollToBottom();
      const requestTask = common_vendor.index.request({
        url: "https://api.deepseek.com/v1/chat/completions",
        method: "POST",
        header: {
          "Authorization": `Bearer ${deepseekApiKey.value}`,
          "Content-Type": "application/json",
          "Accept": "text/event-stream"
        },
        enableChunked: true,
        // 开启流式分块
        data: {
          model: selectedModel.value,
          messages: [{ role: "system", content: systemPrompt }, ...chatMessages.value.slice(0, -1)],
          stream: true
          // 开启模型流式输出
        },
        fail: (err) => {
          chatMessages.value[botMsgIndex].content = "请求失败，请检查网络";
          isSending.value = false;
          isThinking.value = false;
        }
      });
      requestTask.onChunkReceived((res) => {
        isThinking.value = false;
        const rawData = arrayBufferToString(res.data);
        const lines = rawData.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonStr = line.replace("data: ", "").trim();
            if (jsonStr === "[DONE]")
              continue;
            try {
              const json = JSON.parse(jsonStr);
              const content = json.choices[0].delta.content || "";
              chatMessages.value[botMsgIndex].content += content;
              scrollToBottom();
            } catch (e) {
            }
          }
        }
      });
      requestTask.onHeadersReceived(() => {
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: activeTab.value === "llm"
      }, activeTab.value === "llm" ? {
        b: common_vendor.t(showApiConfig.value ? "💬 对话" : "⚙️ 设置"),
        c: common_vendor.o(($event) => showApiConfig.value = !showApiConfig.value)
      } : {}, {
        d: common_vendor.t(common_vendor.unref(isDarkMode) ? "🌙" : "☀️"),
        e: common_vendor.o(($event) => isDarkMode.value = !common_vendor.unref(isDarkMode)),
        f: common_vendor.f(tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab.name),
            b: tab.id,
            c: common_vendor.o(($event) => {
              activeTab.value = tab.id;
              selectedArticle.value = null;
              showApiConfig.value = false;
            }, tab.id),
            d: common_vendor.n(activeTab.value === tab.id ? "tabs__item--active" : "")
          };
        }),
        g: activeTab.value === "llm"
      }, activeTab.value === "llm" ? common_vendor.e({
        h: showApiConfig.value
      }, showApiConfig.value ? {
        i: deepseekApiKey.value,
        j: common_vendor.o(($event) => deepseekApiKey.value = $event.detail.value),
        k: common_vendor.o(($event) => selectedModel.value = "deepseek-chat"),
        l: common_vendor.n(selectedModel.value === "deepseek-chat" ? "model-opt--active" : ""),
        m: common_vendor.o(($event) => selectedModel.value = "deepseek-reasoner"),
        n: common_vendor.n(selectedModel.value === "deepseek-reasoner" ? "model-opt--active" : ""),
        o: common_vendor.o(saveApiKey)
      } : common_vendor.e({
        p: common_vendor.f(kbArticles, (art, k0, i0) => {
          return {
            a: common_vendor.t(art.title),
            b: art.id,
            c: common_vendor.o(($event) => toggleKbSelection(art.id), art.id),
            d: common_vendor.n(selectedKbIds.value.includes(art.id) ? "kb-tag--active" : "")
          };
        }),
        q: chatMessages.value.length === 0
      }, chatMessages.value.length === 0 ? {} : {}, {
        r: common_vendor.f(chatMessages.value, (msg, i, i0) => {
          return common_vendor.e({
            a: msg.role === "assistant" && msg.content === "" && isThinking.value
          }, msg.role === "assistant" && msg.content === "" && isThinking.value ? {} : {
            b: common_vendor.t(msg.content)
          }, {
            c: i,
            d: common_vendor.n(msg.role === "user" ? "msg-row--user" : "msg-row--bot")
          });
        }),
        s: chatScrollTop.value,
        t: common_vendor.o(sendMessage),
        v: chatInput.value,
        w: common_vendor.o(($event) => chatInput.value = $event.detail.value),
        x: !isSending.value
      }, !isSending.value ? {} : {}, {
        y: common_vendor.o(sendMessage),
        z: isSending.value
      })) : {}, {
        A: activeTab.value === "kb"
      }, activeTab.value === "kb" ? common_vendor.e({
        B: !selectedArticle.value
      }, !selectedArticle.value ? {
        C: common_vendor.f(kbArticles, (article, k0, i0) => {
          return {
            a: common_vendor.t(article.tag),
            b: common_vendor.t(article.title),
            c: common_vendor.t(article.description),
            d: article.id,
            e: common_vendor.o(($event) => selectedArticle.value = article, article.id)
          };
        })
      } : {
        D: common_vendor.o(($event) => selectedArticle.value = null),
        E: common_vendor.t(selectedArticle.value.title),
        F: common_vendor.f(selectedArticle.value.sections, (sec, i, i0) => {
          return common_vendor.e({
            a: sec.type === "text"
          }, sec.type === "text" ? {
            b: common_vendor.t(sec.content)
          } : {}, {
            c: sec.type === "quote"
          }, sec.type === "quote" ? {
            d: common_vendor.t(sec.content)
          } : {}, {
            e: i
          });
        })
      }) : {}, {
        G: activeTab.value === "release"
      }, activeTab.value === "release" ? {} : {}, {
        H: activeTab.value === "breathing"
      }, activeTab.value === "breathing" ? {} : {}, {
        I: common_vendor.unref(isDarkMode) ? 1 : ""
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-75e816e7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/dashboard/dashboard.js.map
