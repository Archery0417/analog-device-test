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
    prompt: "【学习】老师临时说这周要加一次随堂测，你第一反应更像哪种？",
    options: [
      {
        title: "先把重点和范围圈出来，别慌着乱学",
        text: "我会先判断哪些内容最值得补，尽量让自己回到可控节奏里。",
        values: { reaction: 34, structure: 92, expression: 20, judgment: 72 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "嘴上说完了，但其实会先发会儿呆",
        text: "我通常不会马上进入状态，会先消化一下焦虑，再决定怎么补。",
        values: { reaction: 18, structure: 42, expression: 56, judgment: 28 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "先找一套最像考点的题狠狠干起来",
        text: "我更容易靠立刻开做把状态拉起来，做着做着再补细节。",
        values: { reaction: 88, structure: 58, expression: 84, judgment: 86 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  },
  {
    prompt: "【学习】一个知识点你已经卡了很久，你更像会怎么处理？",
    options: [
      {
        title: "回到定义和最基础的推导，重新拆",
        text: "我宁愿慢一点，也想把底层逻辑补齐，不想靠蒙混过去。",
        values: { reaction: 30, structure: 96, expression: 22, judgment: 70 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "先放一放，等脑子自己转过弯",
        text: "我硬磕久了会更烦，通常会先缓一下，过阵子再回来。",
        values: { reaction: 14, structure: 50, expression: 68, judgment: 34 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "直接去找最会的人问，先打通再说",
        text: "我不太介意跳步骤，只要能先弄懂关键点，我就会立刻去做。",
        values: { reaction: 86, structure: 52, expression: 78, judgment: 92 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  },
  {
    prompt: "【日常】假期原本想早起做事，结果起床已经中午了，你更像哪种反应？",
    options: [
      {
        title: "重新排一下今天还能做什么，尽量别全盘报废",
        text: "我会快速止损，把剩下的时间安排得稍微像样一点。",
        values: { reaction: 46, structure: 88, expression: 24, judgment: 68 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "先自责一阵，然后继续躺着刷手机",
        text: "我有时会陷入“都这样了算了”的状态，恢复节奏需要一点时间。",
        values: { reaction: 12, structure: 30, expression: 44, judgment: 20 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "那就从现在开始狠狠干，硬把进度追回来",
        text: "我很容易被这种情况激出一种“现在就开始补回来”的劲头。",
        values: { reaction: 90, structure: 60, expression: 94, judgment: 74 },
        devices: { transistor: 3, diode: 1 }
      }
    ]
  },
  {
    prompt: "【日常】室友在你最烦的时候又开始外放视频，你大概率会？",
    options: [
      {
        title: "先忍一下，再挑合适的时机说",
        text: "我不太想当场爆炸，更可能先稳住自己，再找机会讲清楚。",
        values: { reaction: 22, structure: 76, expression: 30, judgment: 54 },
        devices: { resistor: 2, capacitor: 2 }
      },
      {
        title: "直接开口让他关掉，别磨叽",
        text: "我如果已经烦了，通常会很直接，不想让问题继续拖着。",
        values: { reaction: 82, structure: 70, expression: 40, judgment: 96 },
        devices: { diode: 3, resistor: 1 }
      },
      {
        title: "阴阳一句或者自己把气氛弄得很明显",
        text: "我不一定正面说，但会让对方明显感觉到我不爽了。",
        values: { reaction: 76, structure: 38, expression: 90, judgment: 62 },
        devices: { transistor: 3, inductor: 1 }
      }
    ]
  },
  {
    prompt: "【人际】大家开会越聊越散的时候，你通常会变成哪种人？",
    options: [
      {
        title: "把范围收回来，先让这事有主线",
        text: "我会开始帮大家定边界，不然继续聊下去只会更乱。",
        values: { reaction: 44, structure: 94, expression: 18, judgment: 76 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "先把每个人的意思都听完",
        text: "我更像缓冲层，想先知道大家到底在纠结什么。",
        values: { reaction: 24, structure: 40, expression: 64, judgment: 22 },
        devices: { capacitor: 3, opamp: 1 }
      },
      {
        title: "抓住一个能成的点，先把人带着往前走",
        text: "我很容易在这种时候直接选一条路，边做边修。",
        values: { reaction: 82, structure: 56, expression: 96, judgment: 72 },
        devices: { transistor: 3, diode: 1 }
      }
    ]
  },
  {
    prompt: "【人际】你和朋友因为一件小事有点别扭，你更像哪种？",
    options: [
      {
        title: "想找个合适时间说开，别让它一直卡着",
        text: "我不喜欢关系长期悬着，会想办法让事情回到正常状态。",
        values: { reaction: 52, structure: 86, expression: 46, judgment: 82 },
        devices: { opamp: 2, resistor: 2 }
      },
      {
        title: "表面没事，其实会默默冷一阵",
        text: "我不一定会马上翻脸，但情绪会先收起来，等自己缓过去再说。",
        values: { reaction: 16, structure: 44, expression: 58, judgment: 26 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "如果我觉得是对方的问题，我会明显拉开距离",
        text: "我对关系里的边界感很强，不想把精力浪费在反复消耗上。",
        values: { reaction: 78, structure: 74, expression: 32, judgment: 98 },
        devices: { diode: 3, resistor: 1 }
      }
    ]
  },
  {
    prompt: "【恋爱】喜欢的人回你消息忽快忽慢，你一般会怎么想？",
    options: [
      {
        title: "先观察一阵，不急着下结论",
        text: "我会想先看看对方的节奏和状态，不想因为一两次就把自己搞乱。",
        values: { reaction: 20, structure: 54, expression: 60, judgment: 30 },
        devices: { capacitor: 3, opamp: 1 }
      },
      {
        title: "如果我觉得不对劲，会主动确认关系走向",
        text: "我不太喜欢暧昧不清，宁愿早点知道到底有没有必要继续投入。",
        values: { reaction: 84, structure: 72, expression: 42, judgment: 96 },
        devices: { diode: 3, resistor: 1 }
      },
      {
        title: "嘴上说随便，心里已经脑补了一整季",
        text: "我很容易被一点点信号带着走，情绪起伏会比较明显。",
        values: { reaction: 74, structure: 34, expression: 94, judgment: 48 },
        devices: { transistor: 3, capacitor: 1 }
      }
    ]
  },
  {
    prompt: "【恋爱】如果你决定表白或摊牌，你更像下面哪种节奏？",
    options: [
      {
        title: "先反复确认时机和对方状态",
        text: "我会做很多心理建设，希望尽量把风险降到最低。",
        values: { reaction: 26, structure: 90, expression: 28, judgment: 74 },
        devices: { resistor: 2, opamp: 2 }
      },
      {
        title: "会憋很久，憋到实在憋不住才说",
        text: "我不容易轻易开口，但一旦到临界点，就会一下子全说出来。",
        values: { reaction: 18, structure: 46, expression: 82, judgment: 40 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "感觉到了就冲，不想一直猜",
        text: "我会更愿意直接给自己一个答案，哪怕结果不完美也比悬着强。",
        values: { reaction: 92, structure: 58, expression: 88, judgment: 90 },
        devices: { diode: 2, transistor: 2 }
      }
    ]
  },
  {
    prompt: "【学习】做小组作业时，队友迟迟不交东西，你更可能怎么做？",
    options: [
      {
        title: "先把框架和截止时间重新立住",
        text: "我会主动把要求说清楚，让大家知道再拖会出什么问题。",
        values: { reaction: 50, structure: 94, expression: 30, judgment: 78 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "先自己补一部分，尽量别让整体垮掉",
        text: "我不想当场撕破脸，通常会先接住烂摊子，再看后面怎么办。",
        values: { reaction: 24, structure: 48, expression: 66, judgment: 24 },
        devices: { capacitor: 3, resistor: 1 }
      },
      {
        title: "直接点名催，实在不行就换人",
        text: "我对这种拖全组后腿的情况忍耐度不高，会很快做取舍。",
        values: { reaction: 86, structure: 76, expression: 44, judgment: 98 },
        devices: { diode: 3, transistor: 1 }
      }
    ]
  },
  {
    prompt: "【生活】当你特别忙、消息又特别多的时候，你往往会变成哪种状态？",
    options: [
      {
        title: "先分类处理，能回的回，不能回的稍后再说",
        text: "我会尽量给事情排优先级，不让自己被信息洪水冲走。",
        values: { reaction: 56, structure: 92, expression: 24, judgment: 82 },
        devices: { opamp: 3, resistor: 1 }
      },
      {
        title: "脑子会先卡住，然后谁都不想理",
        text: "信息一多我容易短暂掉线，需要一点缓冲才能重新接上。",
        values: { reaction: 14, structure: 36, expression: 50, judgment: 18 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "会挑最重要的直接解决，其他先扔一边",
        text: "我能迅速切出主次，但也可能因为太快而显得有点冷。",
        values: { reaction: 88, structure: 68, expression: 36, judgment: 94 },
        devices: { diode: 3, resistor: 1 }
      }
    ]
  },
  {
    prompt: "【人际】别人对你随口说了一句“你最近状态不太对”，你更像会？",
    options: [
      {
        title: "先想一想，对方是不是说中了什么",
        text: "我会把这句话留在心里，慢慢消化，再判断要不要调整自己。",
        values: { reaction: 20, structure: 56, expression: 62, judgment: 34 },
        devices: { capacitor: 3, opamp: 1 }
      },
      {
        title: "表面无所谓，转头开始疯狂复盘",
        text: "我可能不会当场表现出来，但心里会把前前后后都想一遍。",
        values: { reaction: 28, structure: 74, expression: 78, judgment: 56 },
        devices: { inductor: 3, capacitor: 1 }
      },
      {
        title: "直接问清楚：你具体觉得哪里不对",
        text: "我更希望把话说实，不喜欢模糊提醒留在那里发酵。",
        values: { reaction: 82, structure: 72, expression: 48, judgment: 92 },
        devices: { diode: 2, opamp: 2 }
      }
    ]
  },
  {
    prompt: "【恋爱】吵架的时候，你最容易出现哪种模式？",
    options: [
      {
        title: "努力把情绪按住，想把问题说清楚",
        text: "哪怕我不爽，也会尽量让谈话留在能解决问题的轨道上。",
        values: { reaction: 46, structure: 90, expression: 34, judgment: 84 },
        devices: { opamp: 2, resistor: 2 }
      },
      {
        title: "先沉默，等情绪退一点再谈",
        text: "我在上头的时候不太会说好话，通常会先把自己抽离出来。",
        values: { reaction: 18, structure: 50, expression: 54, judgment: 28 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "一旦上头就会把积压的全倒出来",
        text: "我可能平时忍着，但真吵起来时会很有冲击力，什么都想一次讲完。",
        values: { reaction: 80, structure: 40, expression: 98, judgment: 58 },
        devices: { transistor: 3, capacitor: 1 }
      }
    ]
  },
  {
    prompt: "【生活】如果你连续几天状态很差、事情又堆着不动，你通常怎么救自己？",
    options: [
      {
        title: "先把任务拆小，至少恢复一点秩序",
        text: "我会先做最小的一步，让事情重新开始流动，而不是继续放着。",
        values: { reaction: 42, structure: 92, expression: 26, judgment: 74 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "先躲一会儿，等缓过劲再说",
        text: "我知道这样不一定最高效，但如果状态太差，硬顶只会更乱。",
        values: { reaction: 16, structure: 40, expression: 58, judgment: 24 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "会突然想狠狠干一波，把之前欠的都补回来",
        text: "我有时会从很丧直接切到很猛，靠一阵冲刺把局面救回来。",
        values: { reaction: 90, structure: 54, expression: 96, judgment: 68 },
        devices: { transistor: 3, diode: 1 }
      }
    ]
  },
  {
    prompt: "【学习】如果考试考砸了，你最像下面哪种后续反应？",
    options: [
      {
        title: "先找出到底是哪里失误，下次别再犯",
        text: "我更在意定位问题，想知道是方法错了还是节奏错了。",
        values: { reaction: 48, structure: 94, expression: 22, judgment: 88 },
        devices: { opamp: 3, resistor: 1 }
      },
      {
        title: "先emo一下，短期内不太想碰那科",
        text: "我需要先恢复心情，不然再看那科会更烦更抗拒。",
        values: { reaction: 12, structure: 34, expression: 52, judgment: 20 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "会立刻找题再刷，想赶紧把面子赢回来",
        text: "我不太能接受自己挂在那，会很想立刻证明这次只是失手。",
        values: { reaction: 92, structure: 58, expression: 88, judgment: 82 },
        devices: { transistor: 2, diode: 2 }
      }
    ]
  },
  {
    prompt: "【人际】别人一直试探你的边界，你更像会怎么处理？",
    options: [
      {
        title: "先提醒，再把规则说清楚",
        text: "我不会一开始就翻脸，但会很明确地告诉对方哪里不能再碰。",
        values: { reaction: 54, structure: 96, expression: 26, judgment: 90 },
        devices: { resistor: 3, diode: 1 }
      },
      {
        title: "会先忍，忍到某个点突然不想再理了",
        text: "我前期可能看起来很能包容，但一旦积累过量，就会直接抽离。",
        values: { reaction: 18, structure: 44, expression: 72, judgment: 32 },
        devices: { capacitor: 2, inductor: 2 }
      },
      {
        title: "当场切断，我没兴趣陪人反复试探",
        text: "我对边界被消耗这件事很敏感，通常会快速做出拒绝。",
        values: { reaction: 86, structure: 78, expression: 34, judgment: 100 },
        devices: { diode: 3, resistor: 1 }
      }
    ]
  },
  {
    prompt: "【综合】如果让熟人偷偷评价你的一个“毛病”，更可能是哪句？",
    options: [
      {
        title: "“你有时候太稳了，稳到有点慢。”",
        text: "我做事不容易失控，但也可能因为太想稳妥而错过一点时机。",
        values: { reaction: 28, structure: 96, expression: 18, judgment: 72 },
        devices: { resistor: 3, opamp: 1 }
      },
      {
        title: "“你容易闷着，很多情绪要攒很久才说。”",
        text: "我不太习惯即时表达，很多感受会先存在心里，拖久了才释放。",
        values: { reaction: 14, structure: 42, expression: 76, judgment: 26 },
        devices: { capacitor: 3, inductor: 1 }
      },
      {
        title: "“你一上头就特别有冲击力，有点难挡。”",
        text: "我一旦认定方向或进入情绪，整个人的存在感会一下子变得很强。",
        values: { reaction: 84, structure: 52, expression: 98, judgment: 70 },
        devices: { transistor: 3, diode: 1 }
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
