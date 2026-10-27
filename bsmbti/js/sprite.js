// BlackSoul角色资料库：补齐完整16MBTI，不新增角色，仅两组重复MBTI：ISFP、ENFJ，共18角色
const spriteLibrary = [
    {
        mbti: "INTJ",
        img: "../images/rek.png",
        name: "蕾克（小红帽）",
        desc: "忠于内心的少女，能认识到这扭曲的世界本不应该是她的命运，能够用行动表达出自己的温柔或者 红之惨剧？ (创造出我的,既不是疯狂的神明，也不是母亲… 而是你… 就只有你啊，格林。)（“我是不会死的，在斩下「你」的头颅之前”）"
    },
    {
        mbti: "ENFP",
        img: "../images/liyefu.png",
        name: "莉耶芙",
        desc: "活泼的绿色妖精或者 最终的黑幕？，创造力与好奇心旺盛的存在。（对你的背叛可是人家爱情的表现呢！不要放在心上啦？诶嘿嘿♡）“···嘻嘻嘻，这不过是刚开始而已。人家是作者。是登场人物。是黑幕。又或者是公主大人。把这出戏完美地演下去吧。即使因此被杀害，我也想为这个结局增添色彩。你可要好好接受哟格林？这就是人家的情书。甜美的团圆结局也好，蒙上阴影的苦涩结局也好，无比绝望的坏结局也好，我会全部混在一起带给你的♪”"
    },
    {
        mbti: "INFJ",
        img: "../images/alice.png",
        name: "爱丽丝",
        desc: "是心爱的少女，是女主角，是爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝爱丽丝。（……有谁在呼唤着你，惹人怜爱的，绮丽的，微微带着一种透明感的声音，传递到了你的耳朵里。……啊啊，你听过这声音。从久眠中苏醒而来的意识，逐渐开始变得清醒了起来。对，在你身边的就是属于你的……）"
    },
    {
        mbti: "ISFJ",
        img: "../images/zhende.png",
        name: "贞德",
        desc: "作为圣骑士的少女，体贴奉献的守护者，象征着务实的洁白与秩序，传闻在熏烟之森的岩浆瀑布后能找到她的东西。（为何会出现战争呢。为何人类会如此丑恶呢。我再也不会去信奉什么神明了。在业火之中，魔女如此想到。）"
    },
    {
        mbti: "INTP",
        img: "../images/norden.png",
        name: "诺登（白兔）",
        desc: "在图书馆之梦书桌前的白兔，理性的有着母性光辉的少女。原本是这个世界的白之女王，结果“为了心爱的男人放弃了国家”。（我深深爱慕着您。）"
    },
    {
        mbti: "ESFP",
        img: "../images/dudu.png",
        name: "愚鸟渡渡",
        desc: "热忱周到的渡渡鸟少女，站在进行赛跑游戏的动物们中间。（吾辈是真的，真的，没有觉得寂寞哦……？ 所，所以呢，请你不要再悲伤了…… 我啊，最喜欢你了……就算转个三圈也不会忘掉你的……）"
    },
    {
        mbti: "ISTP",
        img: "../images/miranda.png",
        name: "米兰达",
        desc: "手持镰刀，被黑之裁判当成武器的少女，尊重强者，可爱（我是，米兰达………才不是什么梅莉菲利亚…）（感受到了 黑 的气息）"
    },
    {
        mbti: "ESTP",
        img: "../images/guzi.png",
        name: "古兹",
        desc: "可爱的拥有红色羽毛的 黄金鹅少女？，擅长临场把握现实机遇，如果你在她这里寄存了过多东西，她也许会跑路。（当这孩子露出笑容时，就是幸福来到的证明哦。）"
    },
    {
        mbti: "ESTJ",
        img: "../images/luolina.png",
        name: "萝丽娜（红心女王）",
        desc: "不可思议之国的女王，希望得到爱的少女。（为什么你总是只对爱丽丝偏爱呢？？也为我写本书嘛。）“一个人独占老师这种事绝对不能原谅。只要能得到老师的关心的话，哪怕是将灵魂献给邪恶的神明我也愿意。”"
    },
    {
        // 修改：原ISFJ → ESFJ，补齐缺失人格
        mbti: "ESFJ",
        img: "../images/victoria.png",
        name: "维多利亚",
        desc: "是贴心的女仆或者可爱的魅魔。（“致我敬爱的主人大人：我会再来见您的”）"
    },
    {
        mbti: "ENFJ",
        img: "../images/doluoxi.png",
        name: "多罗茜",
        desc: "是师匠和强大的魔法师，十分满意自己目前的女性身躯。（“笨蛋弟子。”）"
    },
    {
        mbti: "ENFJ",
        img: "../images/katalina.png",
        name: "圣女卡塔丽娜",
        desc: "慈悲的救赎者，洁白的圣女。拥有虔诚无比的信仰心，然而这个世界观的神是什么存在呢。（信仰越深，就越会对神的存在感到怀疑。）（世界都已经变成了这副样子，神又跑到哪里去了？）"
    },
    {
        mbti: "ISFP",
        img: "../images/baixue.png",
        name: "白雪姬",
        desc: "清冷唯美的公主，对于真心爱上的异性很温柔。（全部……杀掉的话…… 不用说誓约……连成为你的妻子也没问题……）"
    },
    {
        mbti: "INFP",
        img: "../images/lanjielina.png",
        name: "暴杀天使兰洁莉娜",
        desc: "浪漫的箱庭最可爱小天使。（我不是什么坏事都没做吗！我只是个拯救那些可怜的人们的 善良的天使哦？？）（啦啦啦，没有翅膀的人类很不幸 很不幸哦~）"
    },
    {
        mbti: "ISFP",
        img: "../images/yilishabai.png",
        name: "伊丽莎白",
        desc: "有着金色头发的少妇，魂之贵妇人。（才不会结束…… 这是……我的梦啊……）（其实妾身已经隐约察觉到了。自己的灵魂，被什么人缠上了操纵的丝线 尽管如此，妾身却无法挣脱丝线的牵引，反而被憎恶与嫉妒的火焰所驱使…因为妾身就是这样的「人物」，对吧？）"
    },
    {
        // 修改：原INTJ → ISTJ，补齐缺失人格
        mbti: "ISTJ",
        img: "../images/xinduraila.png",
        name: "仙度瑞拉",
        desc: "作为灰姑娘的少女，也是王座之上的女王，擅长编织美梦。（原来如此，我只是用无数谎言堆积起来的造物么...）"
    },
    {
        mbti: "ENTP",
        img: "../images/sanyuetu.png",
        name: "赫伊尔（三月兔）",
        desc: "色气的粉红头发兔子少女。（感谢您的指名，我是只属于你的兔女郎哟）"
    },
    {
        mbti: "ENTJ",
        img: "../images/meibell.png",
        name: "梅贝尔",
        desc: "虚无的少女，脑洞充沛古灵精怪的可爱女孩（变·态·不·死·者·先·生。）（对了。  就让你看看我的「夜空」吧。）"
    }
];

/**
 * 四维计分函数 16题版本
 * Q1‑Q4 E/I  1=外向E  4=内向I  ≥10→I
 * Q5‑Q8 S/N 1=务实S  4=直觉N ≥10→N
 * Q9‑Q12 T/F 1=理性T 4=感性F ≥10→F
 * Q13‑Q16 J/P 1=规划J 4=随性P ≥10→P
 */
function submitTest() {
    let scoreE = 0;
    let scoreS = 0;
    let scoreT = 0;
    let scoreJ = 0;

    // E/I Q1~4
    for(let i = 1; i <= 4; i++){
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if(!radio){
            alert(`请完成第${i}题！`);
            return;
        }
        scoreE += Number(radio.value);
    }
    // S/N Q5~8
    for(let i = 5; i <= 8; i++){
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if(!radio){
            alert(`请完成第${i}题！`);
            return;
        }
        scoreS += Number(radio.value);
    }
    // T/F Q9~12
    for(let i = 9; i <= 12; i++){
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if(!radio){
            alert(`请完成第${i}题！`);
            return;
        }
        scoreT += Number(radio.value);
    }
    // J/P Q13~16
    for(let i = 13; i <= 16; i++){
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        if(!radio){
            alert(`请完成第${i}题！`);
            return;
        }
        scoreJ += Number(radio.value);
    }

    // 分界阈值：单维度4题，中点10
    let eChar = scoreE >= 10 ? "I" : "E";
    let sChar = scoreS >= 10 ? "N" : "S";
    let tChar = scoreT >= 10 ? "F" : "T";
    let jChar = scoreJ >= 10 ? "P" : "J";
    const finalMBTI = eChar + sChar + tChar + jChar;

    localStorage.setItem("userMBTI", finalMBTI);
    localStorage.setItem("eScore", scoreE);
    localStorage.setItem("sScore", scoreS);
    localStorage.setItem("tScore", scoreT);
    localStorage.setItem("jScore", scoreJ);

    window.location.href = "result.html";
}

/**
 * 渲染函数：同MBTI多个角色时随机选取其一，兜底防止null空白
 */
function renderSprite() {
    const mbti = localStorage.getItem("userMBTI");
    if(!mbti){
        document.getElementById("spriteName").innerText = "暂无测试数据";
        document.getElementById("spriteDesc").innerText = "请完整做完16道题目再提交";
        return;
    }

    // 获取全部匹配该MBTI角色
    const matchList = spriteLibrary.filter(item => item.mbti === mbti);
    let targetSprite;

    if(matchList.length > 0){
        // 多条重复角色随机抽取
        const randomIndex = Math.floor(Math.random() * matchList.length);
        targetSprite = matchList[randomIndex];
    }else{
        // 兜底：无匹配取最后一位梅贝尔
        targetSprite = spriteLibrary.at(-1);
        document.getElementById("spriteDesc").innerText = "MBTI暂无匹配角色，默认匹配梅贝尔";
    }

    document.getElementById("spriteImg").src = targetSprite.img;
    document.getElementById("spriteName").innerText = `${targetSprite.name}（${mbti}）`;
    document.getElementById("spriteDesc").innerText = targetSprite.desc;
}