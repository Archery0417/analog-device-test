const dimensions = {
  reaction: {
    name: "启动节奏",
    detail: "你面对变化时，是偏向立刻动作，还是更习惯先蓄势、先观测。",
    bands: [
      {
        max: 33,
        label: "蓄势型",
        text: "你不会在第一秒就冲出去，更像先把电荷或状态攒够，再给出更稳的一次响应。"
      },
      {
        max: 66,
        label: "稳态型",
        text: "你不是拖，也不是莽，而是会先确认边界，再在可控范围内推进。"
      },
      {
        max: 100,
        label: "快启型",
        text: "你对变化反应很快，几乎是看到信号就能导通，适合开局、破冰和抢先行动。"
      }
    ]
  },
  structure: {
    name: "稳定方式",
    detail: "你维持秩序的方法，是设边界、定规则，还是根据现场持续调谐。",
    bands: [
      {
        max: 33,
        label: "感受型",
        text: "你对环境变化很敏感，愿意根据实际情况微调自己，不会死守一套固定阻值。"
      },
      {
        max: 66,
        label: "调谐型",
        text: "你既保留原则，也愿意校准参数，更像在不同工况下寻找合适工作点。"
      },
      {
        max: 100,
        label: "定标型",
        text: "你很擅长给系统设边界，让事情别飘、别炸、别无限发散。"
      }
    ]
  },
  expression: {
    name: "能量表达",
    detail: "你的存在感更像低耗持续、储放回弹，还是直接把局面放大。",
    bands: [
      {
        max: 33,
        label: "节制型",
        text: "你输出稳定、不过冲，更多是在关键时刻默默把能量耗散成可控状态。"
      },
      {
        max: 66,
        label: "储放型",
        text: "你平时可能不抢戏，但一旦需要就能把之前积攒的能量一次释放出来。"
      },
      {
        max: 100,
        label: "放大型",
        text: "你对团队气氛和项目走势有明显放大效应，小信号到你这里往往会变成大动静。"
      }
    ]
  },
  judgment: {
    name: "决策取向",
    detail: "你是更倾向单向裁断和过滤，还是偏向把多方信息校准成平衡状态。",
    bands: [
      {
        max: 33,
        label: "包容型",
        text: "你会给信息留缓冲区，不会太快下结论，更愿意先接住不同意见。"
      },
      {
        max: 66,
        label: "校准型",
        text: "你重视一致性，会不断比较输入和目标，让整体慢慢逼近更理想的状态。"
      },
      {
        max: 100,
        label: "定向型",
        text: "你很擅长做取舍，一旦认定方向，就会像单向导通一样果断过滤掉不必要的噪声。"
      }
    ]
  }
};

const deviceProfiles = {
  resistor: {
    name: "电阻",
    subtitle: "稳稳控流型人格",
    image: "assets/resistor.svg",
    overview: "你像电阻一样，是系统里的定盘星。你不一定最显眼，但你能让局面不过载、不失控，别人会因为你的存在而更安心。",
    highlights: ["边界感强", "稳住全场", "不爱过冲"],
    notes: [
      "电阻的核心作用是限流与分压，对应到性格上，就是你很会给事情设阈值：什么时候该收、该停、该慢下来，你心里很清楚。",
      "你不依赖戏剧化爆发来证明自己，反而擅长通过稳定输出来提升整个系统的可靠性。",
      "当团队里有人情绪过热、方向发散时，你通常会成为那个把局面拉回工作点的人。"
    ],
    ideal: { reaction: 46, structure: 88, expression: 24, judgment: 60 }
  },
  capacitor: {
    name: "电容",
    subtitle: "蓄势回弹型人格",
    image: "assets/capacitor.svg",
    overview: "你像电容一样，不是立刻把所有东西抛出去，而是先接住、先储存，再在合适时机释放影响力。",
    highlights: ["情绪缓冲带", "记得住能量", "关键时刻很顶"],
    notes: [
      "电容擅长储能、滤波与耦合，对应到性格上，你常常先消化信息，再做表达，不容易在第一时间被情绪或噪声带跑。",
      "很多人会觉得你前期低调，但真正进入需要稳定输出的环节时，你会很自然地站出来补足缺口。",
      "你还自带缓冲属性，适合做团队里的降噪层和情绪减震器。"
    ],
    ideal: { reaction: 24, structure: 52, expression: 66, judgment: 42 }
  },
  inductor: {
    name: "电感",
    subtitle: "惯性推进型人格",
    image: "assets/inductor.svg",
    overview: "你像电感一样，对变化有自己的惯性。你不会被外界轻易拉着走，一旦认准方向，就会持续推着事情往前走。",
    highlights: ["后劲很足", "节奏感强", "抗打断能力高"],
    notes: [
      "电感会抗拒电流突变，这在性格里体现成你不喜欢随便改节奏，但也因此拥有很强的持续推进能力。",
      "你不是短跑式爆发，更像能把能量维持在长期通道里的那种人，越到中后程越显优势。",
      "别人临时起意的时候你可能不会立刻跟，但一旦你接入回路，往往能把整个过程带进稳定共振区。"
    ],
    ideal: { reaction: 18, structure: 70, expression: 82, judgment: 52 }
  },
  diode: {
    name: "二极管",
    subtitle: "单向判断型人格",
    image: "assets/diode.svg",
    overview: "你像二极管一样，方向感特别清楚。对的人和事你会迅速放行，不合适的噪声则会被你果断截止。",
    highlights: ["判断直接", "不爱拧巴", "过滤杂讯"],
    notes: [
      "二极管最鲜明的特征是单向导通，这意味着你在很多场景下并不靠犹豫来显得慎重，而是靠明确的标准减少系统损耗。",
      "你通常不会把所有选项都留着反复横跳，一旦识别出更优路径，就愿意尽快建立导通关系。",
      "你的优势在于清晰，但也要注意给复杂问题留一点反向恢复时间。"
    ],
    ideal: { reaction: 84, structure: 76, expression: 34, judgment: 94 }
  },
  transistor: {
    name: "三极管",
    subtitle: "小信号放大型人格",
    image: "assets/transistor.svg",
    overview: "你像三极管一样，对信号特别敏感。别人一句随口的话、一个很小的契机，到了你这里都有可能被放大成真正的推动力。",
    highlights: ["带动力强", "对机会敏锐", "擅长启动局面"],
    notes: [
      "三极管靠小信号控制大电流，这对应到性格上，就是你对细小机会、微弱情绪和局势苗头反应很快。",
      "你很擅长把看似不起眼的起点，变成能被整个团队感知到的行动量。",
      "你适合做启动器、放大器和连接器，但也要记得偶尔给自己加一点偏置校准，别把每个小信号都放得太大。"
    ],
    ideal: { reaction: 78, structure: 58, expression: 96, judgment: 66 }
  },
  opamp: {
    name: "运放",
    subtitle: "全局校准型人格",
    image: "assets/opamp.svg",
    overview: "你像运算放大器一样，擅长把复杂输入变成可用输出。你不仅会放大，还会比较、校准、整合，是那种能把系统组织起来的人。",
    highlights: ["统筹感强", "输入整合高手", "善于做闭环"],
    notes: [
      "运放不是单纯把信号变大，而是通过反馈网络把输出拉向目标值。这很像你处理问题的方式：先看输入差，再找方法闭环。",
      "你对整体结构、信息关系和最终结果都很敏感，适合做协调、分析和策略层的工作。",
      "别人看到的是一堆杂乱输入，你更容易看到可以被设计成稳定系统的可能性。"
    ],
    ideal: { reaction: 62, structure: 92, expression: 86, judgment: 90 }
  }
};

const questions = [
  {
    prompt: "老师突然说实验方案要大改，你第一反应更像哪种？",
    options: [
      {
        title: "先把不能乱动的地方理清，再慢慢改",
        text: "我会先搞清楚哪些是底线、哪些最容易出问题，然后再安排后面的事。",
        values: { reaction: 36, structure: 90, expression: 24, judgment: 68 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "先听听到底改了什么，缓一下再动",
        text: "我一般不会马上冲，通常会先把信息接住，等自己想清楚了再说。",
        values: { reaction: 20, structure: 48, expression: 58, judgment: 34 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "先挑最明显的一条路走起来",
        text: "我更习惯先把事情推进起来，有动静之后再慢慢修细节。",
        values: { reaction: 88, structure: 62, expression: 78, judgment: 86 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  },
  {
    prompt: "大家开会越聊越乱的时候，你通常会变成哪种人？",
    options: [
      {
        title: "把大家拉回来，别越聊越飘",
        text: "我会先收范围，让这场讨论别继续散下去。",
        values: { reaction: 44, structure: 92, expression: 18, judgment: 72 },
        devices: { resistor: 3, diode: 1 }
      },
      {
        title: "先把每个人的话都接住",
        text: "我会先听完大家在想什么，再慢慢整理出重点。",
        values: { reaction: 26, structure: 42, expression: 62, judgment: 28 },
        devices: { capacitor: 3, opamp: 1 }
      },
      {
        title: "抓住一个点，直接把气氛带起来",
        text: "我会挑最有戏的一条思路，先把场子带动起来再说。",
        values: { reaction: 80, structure: 58, expression: 96, judgment: 64 },
        devices: { transistor: 3, inductor: 1 }
      }
    ]
  },
  {
    prompt: "你平时学新东西，更像下面哪种节奏？",
    options: [
      {
        title: "先把基础打牢，不然心里不踏实",
        text: "我会先把最基本的东西搞明白，有了框架才安心继续学。",
        values: { reaction: 34, structure: 96, expression: 18, judgment: 66 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "前面有点慢，但后面会突然开窍",
        text: "我需要一点进入状态的时间，可一旦想通了，后劲会很强。",
        values: { reaction: 16, structure: 60, expression: 82, judgment: 44 },
        devices: { inductor: 3, capacitor: 1 }
      },
      {
        title: "先抓到关键点，再一路带开",
        text: "我喜欢先找到最核心的那个点，然后顺着它把整片内容串起来。",
        values: { reaction: 84, structure: 56, expression: 72, judgment: 88 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  },
  {
    prompt: "朋友情绪很满地来找你吐槽，你一般会怎么接？",
    options: [
      {
        title: "先让对方把情绪放出来",
        text: "我会先陪对方说，至少先让人缓下来再聊别的。",
        values: { reaction: 24, structure: 40, expression: 56, judgment: 22 },
        devices: { capacitor: 3, resistor: 1 }
      },
      {
        title: "先抓问题重点，再给建议",
        text: "我通常会很快判断问题在哪，然后直接告诉对方下一步可以怎么做。",
        values: { reaction: 82, structure: 72, expression: 32, judgment: 94 },
        devices: { diode: 3, opamp: 1 }
      },
      {
        title: "边听边帮对方把事情理顺",
        text: "我会一边听一边帮对方整理来龙去脉，尽量把事情变成一个能解决的问题。",
        values: { reaction: 60, structure: 88, expression: 86, judgment: 90 },
        devices: { opamp: 3, transistor: 1 }
      }
    ]
  },
  {
    prompt: "碰到特别吵、特别乱、信息很多的环境，你通常会？",
    options: [
      {
        title: "迅速过滤掉没用的信息",
        text: "我通常很快就能分出来什么值得听，什么可以直接忽略。",
        values: { reaction: 74, structure: 78, expression: 28, judgment: 96 },
        devices: { diode: 3, resistor: 1 }
      },
      {
        title: "先适应一下，找到自己的节奏",
        text: "我不会立刻进入状态，但一旦调整过来，就能稳住很久。",
        values: { reaction: 20, structure: 64, expression: 80, judgment: 46 },
        devices: { inductor: 2, capacitor: 2 }
      },
      {
        title: "主动把混乱重新整理一下",
        text: "我会开始帮大家理顺信息和目标，让局面重新有条理。",
        values: { reaction: 62, structure: 92, expression: 78, judgment: 88 },
        devices: { opamp: 3, resistor: 1 }
      }
    ]
  },
  {
    prompt: "如果让你带一个新项目开头，你更可能怎么做？",
    options: [
      {
        title: "先把流程和规则订清楚",
        text: "我会先把边界、分工和做事方式定好，再让大家开始动。",
        values: { reaction: 40, structure: 94, expression: 26, judgment: 72 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "先找个小突破口，把气氛带起来",
        text: "我喜欢先做出一点明显进展，让大家一下子有干劲。",
        values: { reaction: 86, structure: 54, expression: 94, judgment: 60 },
        devices: { transistor: 3, diode: 1 }
      },
      {
        title: "先慢慢攒资源，等时机成熟再发力",
        text: "我更在意前期准备够不够，准备到位了再集中推进会更舒服。",
        values: { reaction: 18, structure: 50, expression: 68, judgment: 38 },
        devices: { capacitor: 2, inductor: 2 }
      }
    ]
  },
  {
    prompt: "你对那种变化特别快的人和计划，通常是什么感觉？",
    options: [
      {
        title: "太快了我会先有点抗拒",
        text: "我不太喜欢被突然拽着跑，更习惯慢慢进入状态。",
        values: { reaction: 14, structure: 72, expression: 78, judgment: 50 },
        devices: { inductor: 3, resistor: 1 }
      },
      {
        title: "可以变，但别乱变",
        text: "我接受调整，只要别把原本稳住的东西一下子全打散。",
        values: { reaction: 48, structure: 88, expression: 24, judgment: 66 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "只要方向明确，我切得很快",
        text: "如果我看得出该往哪边走，我通常能很快跟上甚至直接冲过去。",
        values: { reaction: 90, structure: 62, expression: 44, judgment: 92 },
        devices: { diode: 3, transistor: 1 }
      }
    ]
  },
  {
    prompt: "在一群人里，你的影响力一般更像哪种？",
    options: [
      {
        title: "平时不抢镜，但很能稳住场面",
        text: "别人未必第一眼注意到我，但真到关键时候会发现少了我不太行。",
        values: { reaction: 42, structure: 90, expression: 22, judgment: 64 },
        devices: { resistor: 3, capacitor: 1 }
      },
      {
        title: "平时安静，关键时候突然很顶",
        text: "我不是一直都很有存在感，但重要节点通常能一下子补上力量。",
        values: { reaction: 22, structure: 48, expression: 72, judgment: 34 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "我一认真，场子就容易被带起来",
        text: "我的状态和动作会比较容易影响周围人，常常能把气氛一起推起来。",
        values: { reaction: 78, structure: 58, expression: 98, judgment: 62 },
        devices: { transistor: 3, opamp: 1 }
      }
    ]
  },
  {
    prompt: "你做决定的时候，通常更信哪一种感觉？",
    options: [
      {
        title: "先判断这事到底行不行",
        text: "我做决定时很看重明确标准，很多时候会先做一个清楚的取舍。",
        values: { reaction: 86, structure: 76, expression: 30, judgment: 98 },
        devices: { diode: 3, resistor: 1 }
      },
      {
        title: "先看看现在离理想状态差多远",
        text: "我喜欢先比较现实和目标之间的差距，再想怎么把它慢慢调到更合适。",
        values: { reaction: 60, structure: 90, expression: 82, judgment: 88 },
        devices: { opamp: 3, capacitor: 1 }
      },
      {
        title: "先看自己和局面的状态够不够",
        text: "我不会立刻拍板，通常会先判断现在有没有足够的精力和条件去做这件事。",
        values: { reaction: 18, structure: 54, expression: 74, judgment: 40 },
        devices: { capacitor: 2, inductor: 2 }
      }
    ]
  },
  {
    prompt: "如果让朋友形容你，他们更可能说哪句话？",
    options: [
      {
        title: "“你是真的稳。”",
        text: "我给人的感觉通常是靠谱、稳当、不容易让事情失控。",
        values: { reaction: 38, structure: 94, expression: 20, judgment: 64 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "“你前面看着安静，后面会突然很能打。”",
        text: "我可能不是一开始最显眼的那个，但到后面常常会越来劲。",
        values: { reaction: 20, structure: 52, expression: 70, judgment: 36 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "“你一认真，大家都会被你带动。”",
        text: "我一旦进入状态，通常会让周围人也跟着提起劲来。",
        values: { reaction: 82, structure: 56, expression: 96, judgment: 68 },
        devices: { transistor: 3, opamp: 1 }
      }
    ]
  },
  {
    prompt: "你最舒服的合作关系，更像下面哪一种？",
    options: [
      {
        title: "大家边界清楚，合作就会很顺",
        text: "我喜欢分工清晰、规则明确，这样合作起来更省心。",
        values: { reaction: 40, structure: 96, expression: 20, judgment: 70 },
        devices: { resistor: 3, diode: 1 }
      },
      {
        title: "大家能自然接住彼此的状态",
        text: "我很在意合作时有没有那种顺滑感，不想每一步都卡一下。",
        values: { reaction: 24, structure: 46, expression: 62, judgment: 30 },
        devices: { capacitor: 3, opamp: 1 }
      },
      {
        title: "能一起把一个目标越做越有劲",
        text: "我喜欢那种彼此会互相带动、越做越有气势的合作关系。",
        values: { reaction: 72, structure: 60, expression: 94, judgment: 66 },
        devices: { transistor: 2, opamp: 2 }
      }
    ]
  },
  {
    prompt: "学模电学到脑子冒烟的时候，你一般怎么自救？",
    options: [
      {
        title: "回到最基础的地方重新捋",
        text: "我会先回头看最基本的定义和条件，把自己重新稳下来。",
        values: { reaction: 34, structure: 98, expression: 18, judgment: 64 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "先停一下，让脑子缓口气",
        text: "我需要一点空档，不然越学越糊，缓过来以后反而能继续。",
        values: { reaction: 16, structure: 42, expression: 60, judgment: 26 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "先狠狠干一道最有感觉的题",
        text: "我会先找一个突破口狠狠干一下，靠重新找回手感把自己拉回来。",
        values: { reaction: 88, structure: 58, expression: 86, judgment: 90 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  }
];

const introPanel = document.getElementById("intro-panel");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const questionCount = document.getElementById("question-count");
const progressBadge = document.getElementById("progress-badge");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const resultTitle = document.getElementById("result-title");
const resultSubtitle = document.getElementById("result-subtitle");
const resultOverview = document.getElementById("result-overview");
const resultHighlights = document.getElementById("result-highlights");
const resultImage = document.getElementById("result-image");
const dimensionGrid = document.getElementById("dimension-grid");
const deviceNotes = document.getElementById("device-notes");

let currentIndex = 0;
let answers = [];
let activeQuestions = [];

function shuffleArray(items) {
  const cloned = [...items];

  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }

  return cloned;
}

function startQuiz() {
  currentIndex = 0;
  answers = [];
  activeQuestions = questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));
  introPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = activeQuestions[currentIndex];
  const progress = ((currentIndex + 1) / activeQuestions.length) * 100;

  questionCount.textContent = `第 ${currentIndex + 1} / ${activeQuestions.length} 题`;
  progressBadge.textContent = `进度 ${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;
  questionText.textContent = question.prompt;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + optionIndex)}. ${option.title}</strong><span>${option.text}</span>`;
    button.addEventListener("click", () => selectOption(button, option));
    optionsContainer.appendChild(button);
  });
}

function selectOption(button, option) {
  answers[currentIndex] = option;
  Array.from(optionsContainer.children).forEach((node) => node.classList.remove("selected"));
  button.classList.add("selected");

  setTimeout(() => {
    currentIndex += 1;
    if (currentIndex < activeQuestions.length) {
      renderQuestion();
      return;
    }
    showResult();
  }, 220);
}

function averageDimension(key) {
  const total = answers.reduce((sum, answer) => sum + answer.values[key], 0);
  return Math.round(total / answers.length);
}

function getBand(key, score) {
  return dimensions[key].bands.find((band) => score <= band.max);
}

function computeBestDevice(scores) {
  const totals = Object.fromEntries(Object.keys(deviceProfiles).map((key) => [key, 0]));

  answers.forEach((answer) => {
    Object.entries(answer.devices).forEach(([device, value]) => {
      totals[device] += value * 12;
    });
  });

  Object.entries(deviceProfiles).forEach(([device, profile]) => {
    Object.keys(dimensions).forEach((key) => {
      const distance = Math.abs(scores[key] - profile.ideal[key]);
      totals[device] += Math.max(0, 28 - distance / 3);
    });
  });

  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

function showResult() {
  const scores = {
    reaction: averageDimension("reaction"),
    structure: averageDimension("structure"),
    expression: averageDimension("expression"),
    judgment: averageDimension("judgment")
  };

  const bestDeviceKey = computeBestDevice(scores);
  const result = deviceProfiles[bestDeviceKey];

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  resultTitle.textContent = `你是模电里的${result.name}`;
  resultSubtitle.textContent = result.subtitle;
  resultOverview.textContent = result.overview;
  resultImage.src = result.image;
  resultImage.alt = `${result.name}卡通风格插画`;

  resultHighlights.innerHTML = result.highlights
    .map((item) => `<span class="highlight-chip">${item}</span>`)
    .join("");

  dimensionGrid.innerHTML = Object.entries(scores)
    .map(([key, score]) => {
      const meta = dimensions[key];
      const band = getBand(key, score);
      return `
        <article class="dimension-card">
          <div class="dimension-top">
            <div class="dimension-copy">
              <h4>${meta.name}</h4>
              <span class="trait-label">${band.label}</span>
            </div>
            <span class="dimension-score">${score}</span>
          </div>
          <div class="dimension-meter" aria-hidden="true">
            <div class="dimension-fill" style="width:${score}%"></div>
          </div>
          <div class="dimension-copy">
            <p>${meta.detail}</p>
            <p>${band.text}</p>
          </div>
        </article>
      `;
    })
    .join("");

  deviceNotes.innerHTML = result.notes.map((text) => `<p>${text}</p>`).join("");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
