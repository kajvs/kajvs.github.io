// 洛克精灵资料库：全30只，按MBTI匹配，支持单MBTI多精灵
const spriteLibrary = [
    // 原有18只
    {
        img: "../images/dimo.png",
        name: "迪莫",
        mbti: "ESFP",
        desc: "天生的主角，唯一的迪莫，光之精灵王大人，永远主动保护伙伴，热爱冒险与光明剧情，是团队的活力核心，敢冲敢拼，待人纯粹直白。"
    },
    {
        img: "../images/huoshen.png",
        name: "火神",
        mbti: "ESTP",
        desc: "好战直率，偏爱吹火，爆发力极强，护短重情义，做事冲动但内心善良。 “有感觉了！开吹！”"
    },
    {
        img: "../images/shuilanlan.png",
        name: "水蓝蓝",
        mbti: "ISFP",
        desc: "心地善良，温柔细腻，十分美丽，共情力极强，习惯包容他人矛盾，不爱争斗，擅长辅助队友彩蝶鲨鲨，喜欢休闲玩法。"
    },
    {
        img: "../images/miaomiao.png",
        name: "喵喵",
        mbti: "INFP",
        desc: "佛系慢热，偏爱植物与自然，不喜内卷，专注种植、农场养成，向往安静独处，共情万物，性格与世无争。 “我的喵喵来接我了！“"
    },
    {
        img: "../images/yilisi.png",
        name: "彩虹独角兽伊里斯",
        mbti: "INFJ",
        desc: "浪漫温柔，向往云端仙境，内心纯粹通透，擅长洞察他人情绪，偏爱治愈系辅助宠物，追求美好剧情，厌恶算计与博弈，擅长折射。"
    },
    {
        img: "../images/yiwang.png",
        name: "圣羽翼王里奥",
        mbti: "ENTP",
        desc: "心胸开阔向往自由，擅长飞行系战术，大局观极强，喜欢探索全地图高空区域，洒脱不拘小节，自带领袖气场，思维灵活多变。"
    },
    {
        img: "../images/haibao.png",
        name: "海豹船长",
        mbti: "ESFJ",
        desc: "风趣开朗，热爱航海、海岛探险，天生气氛担当，重情重义，擅长听桥与斩断，走到哪里都能结交大量好友（指狼王队）。"
    },
    {
        img: "../images/bulusi.png",
        name: "冰钻布鲁斯",
        mbti: "ISTJ",
        desc: "外表冷静，偏爱冰系精灵，做事严谨克制，擅长消耗拉扯战术（你猜我力增还是跺地），会默默长期守护在意的伙伴。"
    },
    {
        img: "../images/emolang.png",
        name: "恶魔狼王",
        mbti: "INTJ",
        desc: "独立戒备心强，偏爱古堡、恶魔系场景，战术心机深沉，恩怨分明，外表冷漠疏离，只对完全信任的人付出全部忠诚。"
    },
    {
        img: "../images/juhuali.png",
        name: "菊花梨",
        mbti: "ISFJ",
        desc: "恬淡柔和，钟情植物园花草养成，节奏舒缓，擅长培育花瓶、园艺道具，擅长捕捉生活里细碎温柔，从不主动与人产生冲突。"
    },
    {
        img: "../images/xiaoye.png",
        name: "小夜",
        mbti: "INTP",
        desc: "内敛神秘，擅长变化，喜欢独自研究宠物种族值、配招公式，小众审美，不爱社交，但内心知识储备丰富。"
    },
    {
        img: "../images/dingding.png",
        name: "恶魔叮",
        mbti: "ENFP",
        desc: "古灵精怪，喜欢恶作剧，脑洞天马行空，偏爱趣味娱乐玩法，总能用新奇思路整活，给身边洛克带来欢乐。"
    },
    {
        img: "../images/xueying.png",
        name: "雪影娃娃",
        mbti: "ISTP",
        desc: "清冷优雅，雪队女王，冰系颜值天花板，情绪稳定克制，对战操作细腻丝滑，待人有礼克制，自带干净清冷氛围感。"
    },
    {
        img: "../images/hongrongshizi.png",
        name: "红绒十字",
        mbti: "ENFJ",
        desc: "慈悲善良，热衷于帮助新手洛克，擅长辅助回血、增益类配招，责任感极强，是很多精灵的父亲，愿意牺牲自身节奏成全团队，温柔且拥有强大力量。"
    },
    {
        img: "../images/luoyin.png",
        name: "罗隐",
        mbti: "ISTJ",
        desc: "厚重沉稳，偏爱矿山，极致抗压，可以用血作为能量使用，不善言辞，习惯独自扛下所有对战压力，是所有伙伴最坚实的后盾。"
    },
    {
        img: "../images/yinsuquan.png",
        name: "音速犬",
        mbti: "ESTJ",
        desc: "聪慧机敏，火系速攻代表，反应极快，擅长速推爆发战术，入场即爆发，做事高效干脆，无论是热身还是跌落，都能带给对面不小的压力，他同时也是小洛克最忠实的伙伴。"
    },
    {
        img: "../images/huayidie.png",
        name: "花衣蝶",
        mbti: "ISFP",
        desc: "精致浪漫，痴迷花园,是虫系精灵们最重要的伙伴，热爱装扮家园、稀有服饰，感知美好，性格柔软温和，社交得体优雅。"
    },
    {
        img: "../images/cuidingfuren.png",
        name: "翠顶夫人",
        mbti: "ENTJ",
        desc: "端庄成熟，擅长统筹与传递，情商极高，平衡队内矛盾，指挥对战从容稳重，处事有分寸，自带成熟领导者气场。"
    },

    // 新增12只
    {
        mbti: "ESFP",
        img: "../images/shasha.png",
        name: "彩蝶鲨",
        desc: "灵动活泼的水中精灵，每天都很开心，热爱与雨天的同伴结伴冒险，是队伍里的活力小太阳与中心人物。"
    },
    {
        mbti: "ESTP",
        img: "../images/xiuluo.png",
        name: "厉毒修罗",
        desc: "可爱又强大的毒队中心，擅长压制对手，遇强则强，做事不绕弯子，对战主打一个痛快，骨子里带着不服输的劲。"
    },
    {
        mbti: "INFP",
        img: "../images/xingtu.png",
        name: "落陨星兔",
        desc: "携星光而来的浪漫精灵，偏爱独处幻想，沉醉于在星空（指星陨印记）下慢慢欣赏（指连击），性格柔软慢热，向往没有纷争的静谧世界。"
    },
    {
        mbti: "INFJ",
        img: "../images/xingcheng.png",
        name: "暮星辰",
        desc: "深邃通透的星夜精灵，擅长洞察情绪与宿命，自带温柔的治愈感，追求精神共鸣，引爆两人的共同话题（指印记），厌恶世间的算计与纷争。"
    },
    {
        mbti: "ISFJ",
        img: "../images/sonzai.png",
        name: "松仔",
        desc: "生长在林间的温柔精灵，钟情森林花草养成，性格恬淡不争，会默默照料身边的伙伴，就像植物光合作用一样捕捉细碎的自然美好。"
    },
    {
        mbti: "INTJ",
        img: "../images/buku.png",
        name: "怖哭菇",
        desc: "可爱又易碎的精灵。擅长编制星星（印记），拥有一颗温柔的心，喜欢恬淡与高质量的日常。"
    },
    {
        mbti: "ISTP",
        img: "../images/qiuka.png",
        name: "裘卡",
        desc: "清冷寡言的毒系高冷精灵，对战操作细腻丝滑，习惯独自行动，情绪稳定克制，自带干净利落的飒爽感，也有反差的一面（龙系血脉）。"
    },
    {
        mbti: "ENFJ",
        img: "../images/honron.png",
        name: "红绒十字",
        desc: "慈悲温柔的守护者，热衷于帮助弱小，擅长辅助续航与增益，责任感极强，擅长治愈他人。"
    },
    {
        mbti: "ESTJ",
        img: "../images/paer.png",
        name: "龙息帕尔",
        desc: "最为忠诚的传说精灵，既有强大的攻击性也很可爱（露萌），行事有序执行力拉满，入场即压制对手，是可靠的伙伴。"
    },
    {
        mbti: "ENTJ",
        img: "../images/qiqi.png",
        name: "棋绮后",
        desc: "气场强大的棋局女王,地系与武系的王者，擅长统筹布局与队伍指挥，处事从容有分寸，自带成熟领导者风范。"
    },
    {
        mbti: "ESFJ",
        img: "../images/jugu.png",
        name: "巨鼓象",
        desc: "小洛克忠心伙伴，重情重义，天生的队伍气氛担当，会主动照顾身边每一个队友，S2马戏团中不可缺少的一份子"
    },
    {
        mbti: "ENFP",
        img: "../images/shengjian.png",
        name: "圣剑-X",
        desc: "即使在机械精灵中，也是最为高大的那一类，有责任心，也拥有为队伍创造生机的能力。"
    }
];

/**
 * 四维计分逻辑（与重排题号后的test页完全对应）
 * E/I: Q1-Q6 | S/N: Q7-Q12 | T/F: Q13-Q18 | J/P: Q19-Q24
 */
function submitTest() {
    let scoreE = 0;
    let scoreS = 0;
    let scoreT = 0;
    let scoreJ = 0;

    // E/I 维度
    for (let i = 1; i <= 6; i++) {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if (!radio) {
            alert(`请完成第${i}题！`);
            return;
        }
        scoreE += Number(radio.value);
    }
    // S/N 维度
    for (let i = 7; i <= 12; i++) {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if (!radio) {
            alert(`请完成第${i}题！`);
            return;
        }
        scoreS += Number(radio.value);
    }
    // T/F 维度
    for (let i = 13; i <= 18; i++) {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if (!radio) {
            alert(`请完成第${i}题！`);
            return;
        }
        scoreT += Number(radio.value);
    }
    // J/P 维度
    for (let i = 19; i <= 24; i++) {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if (!radio) {
            alert(`请完成第${i}题！`);
            return;
        }
        scoreJ += Number(radio.value);
    }

    // 判定MBTI
    const eChar = scoreE >= 15 ? "I" : "E";
    const sChar = scoreS >= 16 ? "N" : "S";
    const tChar = scoreT >= 16 ? "F" : "T";
    const jChar = scoreJ >= 16 ? "P" : "J";
    const finalMBTI = eChar + sChar + tChar + jChar;

    localStorage.setItem("userMBTI", finalMBTI);
    localStorage.setItem("scoreE", scoreE);
    localStorage.setItem("scoreS", scoreS);
    localStorage.setItem("scoreT", scoreT);
    localStorage.setItem("scoreJ", scoreJ);

    window.location.href = "result.html";
}

/**
 * 结果渲染逻辑：支持单MBTI多精灵选择
 */
function renderSprite() {
    const mbti = localStorage.getItem("userMBTI");
    const resultBox = document.getElementById("resultBox");
    const selectBox = document.getElementById("spriteSelect");

    // 无数据兜底
    if (!mbti) {
        document.getElementById("spriteName").innerText = "暂无测试数据";
        document.getElementById("spriteDesc").innerText = "请返回首页完成测试";
        return;
    }

    // 筛选当前MBTI对应的所有精灵
    const matchedList = spriteLibrary.filter(item => item.mbti === mbti);

    // 无匹配兜底
    if (matchedList.length === 0) {
        const defaultSprite = spriteLibrary[spriteLibrary.length - 1];
        renderSingleSprite(defaultSprite, mbti);
        document.getElementById("spriteDesc").innerText = "MBTI暂无匹配精灵，默认匹配翠顶夫人";
        return;
    }

    // 仅1只：直接渲染
    if (matchedList.length === 1) {
        renderSingleSprite(matchedList[0], mbti);
        return;
    }

    // ≥2只：显示选择题，隐藏默认结果
    resultBox.style.display = "none";
    selectBox.style.display = "block";
    document.getElementById("selectTitle").innerText = `当前${mbti}人格对应两只精灵，请选择你更喜欢的一只：`;
    document.getElementById("optionA").innerText = `A. ${matchedList[0].name}`;
    document.getElementById("optionB").innerText = `B. ${matchedList[1].name}`;

    // 绑定选择事件
    document.getElementById("optionA").onclick = () => {
        renderSingleSprite(matchedList[0], mbti);
        selectBox.style.display = "none";
        resultBox.style.display = "block";
    };
    document.getElementById("optionB").onclick = () => {
        renderSingleSprite(matchedList[1], mbti);
        selectBox.style.display = "none";
        resultBox.style.display = "block";
    };
}

// 单只精灵渲染工具函数
function renderSingleSprite(sprite, mbti) {
    document.getElementById("spriteImg").src = sprite.img;
    document.getElementById("spriteName").innerText = `${sprite.name}（${mbti}）`;
    document.getElementById("spriteDesc").innerText = sprite.desc;
}