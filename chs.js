/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "HoG by FG": "星系核心重制版 by FG",
    "Initializing game...": "初始化游戏...",
    "Atmosphere": "大气层",
    "Bonus": "奖励",
    "Bonus Time": "奖励时间",
    "Continue": "继续",
    "Controlled by": "控制者",
    "Day": "天",
    "Disable Tutorial": "禁用教程",
    "Disabled": "已禁用",
    "Efficiency": "效率",
    "Energy": "能源",
    "Extraction": "萃取",
    "Fleets": "舰队",
    "Fuel": "汽油",
    "Game": "游戏",
    "Graphite": "石墨",
    "in the bottom-right corner of the screen": "在屏幕的右下角",
    "Influence": "影响",
    "Iron": "铁",
    "Labs": "实验室",
    "Map": "地图",
    "Methane": "甲烷",
    "Oil": "油",
    "Orbital Distance": "轨道距离",
    "Others": "其他",
    "Overview": "概览",
    "Oxigen": "氧气",
    "Production": "生产",
    "Radius": "半径",
    "Research": "研究",
    "Research Point": "研究点",
    "Research Points": "研究点",
    "Resumed": "已恢复",
    "Sand": "沙",
    "Shipyard": "船厂",
    "Silicon": "硅",
    "Status": "状态",
    "Steel": "钢",
    "Temperature": "温度",
    "Terrestrial": "陆地",
    "This version is a rewriting/remake of the original game. It is still under development so bugs and data lost could happen!": "此版本是对原始游戏的重写/重制。 它仍在开发中，因此可能会发生错误和数据丢失！",
    "Titanium": "钛",
    "Tutorial": "教程",
    "Type": "类型",
    "Uranium": "铀",
    "Welcome Commander": "欢迎指挥官",
    "Year": "年",
    "You can disable this tutorial. To open it again, click on the icon": "您可以禁用本教程。 要再次打开它，请单击图标",
    "You finally woke up after a long cryosleep. 232 years have passed since you boarded the Vitha, but finally you reached your new home": "经过长时间的低温睡眠，你终于醒了。 232年过去了，你登上了Vitha，终于到了你的新家",
    "Click on the icon": "点击图标",
    "extracted": "萃取的",
    "in the bottom menu to access the": "在底部菜单中访问",
    "In this page you can see basic infos about your planet.": "在此页面中，您可以查看有关您的星球的基本信息。",
    "Let's do a little briefing": "让我们做一个简单的介绍",
    "On the left you can see a list of resources that can be": "在左侧，您可以看到可以使用的资源列表",
    "on this planet, like": "在这个星球上，就像",
    "page.": "页。",
    "1 on the right of": "1 在右边",
    "About": "关于",
    "Become a supporter": "成为支持者",
    "Buy me a Ko-fi": "请我喝杯咖啡",
    "Chemical Engineering": "化学工程",
    "Electronic": "电子",
    "Foundry": "铸造厂",
    "Geology": "地质学",
    "Graphite Extractor": "石墨萃取器",
    "Hard reset": "硬重置",
    "Import Save": "导入存档",
    "Import save from original game is not supported for the moment": "暂不支持从原游戏导入存档",
    "In this page, you can construct buildings to extract resources. By clicking on the desired building, you can see more details about it.": "在此页面中，您可以建造建筑物以萃取资源。 通过单击所需的建筑物，您可以查看有关它的更多详细信息。",
    "Interstellar Travel": "星际旅行",
    "Laboratory": "实验室",
    "Let's extract Iron": "让我们萃取铁",
    "Level up": "升级",
    "Locked": "未解锁",
    "Lvl": "等级",
    "Make a donation": "捐赠作者",
    "Material Science": "材料科学",
    "Methane Extractor": "甲烷萃取器",
    "Methane Processer": "甲烷处理器",
    "Mining Plant": "采矿厂",
    "News and information": "新闻资讯",
    "Now click on the icon": "现在点击图标",
    "Nuclear Physics": "核物理",
    "On the left you can see how many resources are being produced every second.": "在左侧，您可以看到每秒生产了多少资源。",
    "Scientific Research": "科学研究",
    "There is no building to show": "没有建筑物可显示",
    "This is a rewriting/remake of the original game created by": "这是对由",
    "This is still under development with bugs and maybe data lost!": "这仍在开发中，有错误，可能会丢失数据！",
    "to build 1 more.": "再建1个。",
    "To support the dev and to stay informed": "支持开发人员并随时了解情况",
    "Wipe Local Data": "擦除本地数据",
    "You must research Interstellar Travel first!": "你必须先研究星际旅行！",
    "at level": "在等级",
    "Each level increases the range of visible planets": "每个级别都会增加可见行星的范围",
    "Game saved in local storage!": "游戏保存在本地存储中！",
    "Improves": "改善",
    "Speed": "速度",
    "Trade Hub": "贸易中心",
    "Unlocks": "解锁",
    ", until you reach 10 of them. Should only take few seconds!": "，直到达到 10 个。 应该只需要几秒钟！",
    "Algae Oil Farm": "藻油农场",
    "alone is not that useful, we need": "单独用处不大，我们需要",
    "Build": "建造",
    "Building": "建筑",
    "Destroy": "摧毁",
    "Destruction": "摧毁",
    "Disable": "禁用",
    "Got it": "知道了",
    "Great! But": "牛皮！ 但是",
    "is not the only resource you will need.": "不是您需要的唯一资源。",
    "Join Discord server": "加入 Discord 服务器",
    "Keep building": "继续建造",
    "Lava Mine": "熔岩矿",
    "Let's build a": "让我们建造一个",
    "Let's go further": "让我们更进一步",
    "Metal Collector": "金属收集器",
    "Mining Plants": "采矿厂",
    "Next steps of tutorial are under development.": "教程的后续步骤正在开发中。",
    "Perfect! But": "完美！ 但是",
    "Perfect! You can now see on the right how": "完美的！ 您现在可以在右侧看到如何",
    "Prod": "产出",
    "production has doubled!": "产量翻了一番！",
    "Pumpjack": "抽油机",
    "Queue": "队列",
    "Rhodium Extractor": "铑萃取器",
    "Sand Mine": "砂矿",
    "Sand Quarry": "采砂场",
    "Small Generator": "小型发电机",
    "Submerged Metal Mine": "水下金属矿",
    "Submerged Sand Mine": "水下砂矿",
    "Sulfur Mine": "硫磺矿",
    "To be informed when new steps and new features will be ready, please join Discord server.": "要在准备好新步骤和新功能时得到通知，请加入 Discord 服务器。",
    "to extract": "萃取",
    "Tutorial in progress": "教程进行中",
    "Ceramic Foundry": "陶瓷铸造厂",
    "Nanotube Dome": "纳米管穹顶",
    "Nanotube Factory": "纳米管厂",
    "Plastic Factory": "塑料厂",
    "Polymerizer": "聚合器",
    "Methane Aggregator": "甲烷集聚器",
    "Methane Harvester": "甲烷收集器",
    "Oil Refinery": "炼油厂",
    "Stopped due to lack of": "已停止由于缺乏",
    "Thermal Plant": "热电厂",
    "Cargo": "货物",
    "Colonial": "殖民",
    "Colonize  to unlock": "殖民解锁",
    "Coolant": "冷却液",
    "Cryogenics": "低温学",
    "Each level increases the production of Research Points": "每个级别都会增加研究点的产生",
    "Ground Ships": "地面船舶",
    "HP": "生命值",
    "Ice": "冰",
    "No One": "无",
    "Orbitting Fleets": "轨道舰队",
    "ships": "船舶",
    "Storage": "仓储",
    "Travelling Fleets": "旅行舰队",
    "Unarmed": "未武装",
    "Weapon": "武器",
    "Armor": "盔甲",
    "Battery Charger": "充电器",
    "Battery Factory": "电池厂",
    "Battery Power Plant": "电池发电厂",
    "Cells Factory": "细胞工厂",
    "Electronic Facility": "电子设备",
    "Fighter": "战斗机",
    "Floating Reactor": "浮式反应器",
    "Fusion Reactor": "聚变反应堆",
    "Giant Gas": "巨气",
    "Hydrogen": "氢",
    "Hydrogen Condenser": "氢气冷凝器",
    "Hydrology": "水文",
    "Laser": "激光",
    "Nuclear Powerplant": "核电站",
    "Ocean": "海洋",
    "Power": "力量",
    "Pressurized Water Reactor": "压力水冷反应堆",
    "Requirements": "要求",
    "Sand Smelter": "砂冶炼厂",
    "Solar Central": "太阳能中心",
    "Superconductors Factory": "超导体厂",
    "Technetium": "锝",
    "Water": "水",
    "Bonus Time disabled! Game speed normal!": "奖励时间已禁用！ 游戏速度正常！",
    "Bonus Time enabled! Game speed x5!": "奖励时间已启用！ 游戏速度x5！",
    "Enabled": "已启用",
    "There is no orbitting fleet to show": "没有可显示的轨道舰队",
    "There is no ship on the ground": "地面上没有飞船",
    "There is no travelling fleet to show": "没有可显示的旅行舰队",
    "Ammunition": "弹药",
    "Ballistic": "弹道",
    "Circuit": "电路",
    "Foxar": "福克斯",
    "Luxis": "鲁西斯",
    "Muralla": "穆拉拉",
    "Piercing": "冲孔",
    "Plastic": "塑料",
    "Shield": "护盾",
    "Sky Dragon": "天龙",
    "Thermal": "热力",
    "Autoroute": "自动路线",
    "Create Fleet": "创建舰队",
    "Experience": "经验",
    "Load": "装载",
    "Military Value": "军事价值",
    "Move to": "移动到",
    "New Fleet": "新舰队",
    "Total HP": "总生命值",
    "Total Power": "总战力",
    "Cancel": "取消",
    "Create": "创建",
    "Create autoroute with": "创建自动路线到",
    "Destination": "目的地",
    "Fleet Storage": "舰队仓储",
    "No destination selected": "未选择目的地",
    "Origin": "出发地",
    "Load resources into": "装载资源到",
    "Unload": "卸载",
    "Move": "移动",
    "Select a destination": "请选择一个目的地",
    "to": "到",
    "Rename": "重命名",
    "Type a new name": "请输入一个新名称",
    "Enable": "启用",
    "Angel Eyes": "天使之眼",
    "ARK-55b": "方舟-55b",
    "ARK-PRP": "方舟-PRP",
    "Aurora": "极光",
    "Civilization": "文明",
    "Metallic": "金属",
    "Metallokopta's Biology": "金属目生物学",
    "Military Technology": "军事技术",
    "Nanotube": "纳米管",
    "No Name Ship": "无名船",
    "O.L. Defence Fleet": "OL 国防舰队",
    "Orion League": "猎户座联盟",
    "Osmium": "锇",
    "Pirates": "海盗",
    "Rhodium": "铑",
    "The Bad": "坏的",
    "The City's Council": "市议会",
    "The Good": "好的",
    "The Keeper": "守护者",
    "The Key": "钥匙",
    "The Ugly": "丑陋的",
    "Thorium": "钍",
    "Tuco Ramirez": "图科·拉米雷斯",
    "U-Ammunition": "U-弹药",
    "The Trade Hub enables trading with other civilizations. Multiple trade hubs on the same planet reduce the buying price of resources. This effect stacks globally.": "贸易中心允许与其他文明进行贸易。 同一星球上的多个贸易中心降低了资源的购买价格。 此效果全局叠加。",
    "Acanthus": "鼠尾草",
    "Alptraum": "阿尔普特拉姆",
    "Auxilia Beta": "辅助测试版",
    "CO2": "二氧化碳",
    "Darkmatter": "暗物质",
    "Die Schoene": "死神",
    "Purification Fleet": "净化舰队",
    "Vernichtung": "警告",
    "Babilo Protector": "巴比罗保护者",
    "Colonize": "殖民",
    "Marduk": "马杜克",
    "Mastodon": "乳齿象",
    "Phantids Defence Fleet": "凤蝶防御舰队",
    "Ammonia Refrigerator": "氨制冷机",
    "Coolant Factory": "冷却液厂",
    "Cryogenic Laboratory": "低温实验室",
    "Cryogenic Laboratoryy": "低温实验室",
    "Ice Drill": "冰钻",
    "Ice Melter": "融冰机",
    "RP": "研究点",
    "Water Freezer": "冷水机",
    "Electrolyzer": "电解槽",
    "Oceanographic Center": "海洋研究所",
    "Pumping Platform": "抽水平台",
    "Submerged Oil Refinery": "水下炼油厂",
    "Unload resources from": "卸载资源从",
    "Water Pump": "水泵",
    "Hydroelectric Plant": "水力发电厂",
    "Hydrothermal Plant": "水热发电厂",
    "Floating Fuel Converter": "浮动燃料转换器",
    "Floating Generator": "浮动发电机",
    "Fluidodynamics Center": "流体力学中心",
    "Game paused!": "游戏已暂停！",
    "Game resumed!": "游戏已恢复！",
    "Paused": "已暂停",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Tataridu": "塔塔里杜",
    "Traumland": "灵域",
    "Engel": "恩格尔",
    "Federal Quris Empire": "联邦库里斯帝国",
    "Green Republic": "绿色共和国",
    "New Babilo": "新巴比罗",
    "The City": "城市",
    "Antirion": "安提里翁",
    "Glass Burson": "格拉斯伯森",
    "Ishtar Gate": "伊什塔尔门",
    "": "",
    "Babayaga": "巴巴亚加",
    "Orpheus": "奥菲斯",
    "Aequoreas": "水母星",
    "Perseus Arm": "英仙臂",
    "Vasilis": "瓦西利斯",
    "New Human Horizons": "锅巴帝国",
    "heartofgalaxy.com": "heartofgalaxy.com",
    "Cheslava": "切斯拉瓦",
    "Vitha": "维萨",
    "Promision": "Git游戏",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'K': 'K',
    'M': 'M',
    'T': 'T',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\-([\d\.]+)$/,
    /^\+([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)d ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) km$/,
    /^ZB\-([\d\.,]+)$/,
    /^ARK\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^\+([\d\.]+) in queue$/, '\+$1 到队列'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) Shipyards required$/, '$1 船厂要求'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);