// 导入图片
import blogImg from "../asset/blog.png";
import priceScoutImg from "../asset/PriceScout.png";
import witaiImg from "../asset/witai.jpg";

// 生活
import lifeImg1 from "../asset/MadisonMarathon.jpeg";
import lifeImg2 from "../asset/BeijingRunning.jpeg";
import lifeImg3 from "../asset/Liaoningmarathon.jpeg";

// 摄影
import photo1 from "../asset/photo1.jpg";
import photo2 from "../asset/photo2.jpg";
import photo3 from "../asset/photo3.jpg";
import photo4 from "../asset/photo4.jpg";
import photo5 from "../asset/photo5.jpg";
import photo6 from "../asset/photo6.jpeg";

// 后期需要修改只需要改中文

export const PROJECT = [
  {
    title: "个人博客",
    image: blogImg,
    link: "https://noah-wang.github.io/",
    description:
      "使用现代网页开发框架构建和维护个人博客。分享计算机科学主题、摄影和个人经验的见解。开发前端技能，框架使用，包括网站部署。",
  },
  {
    title: "PriceScout 购物助手",
    image: priceScoutImg,
    link: "https://price-scout.vercel.app",
    description: "一站式购物搜索工具，只需输入一次搜索词，选择目标购物网站，自动打开多个网站并显示搜索结果，大幅提高比价和购物效率。",
  },
  {
    title: "BadgerChat AI",
    image: witaiImg,
    link: "https://github.com/Noah-wang/BadgerChat-AI",
    description: "基于 Wit.AI 的智能购物聊天机器人，让用户通过自然语言对话实现商品浏览、购物车管理和结账流程。",
  }
];

// 创建英文版本的项目数据
export const PROJECT_EN = [
  {
    title: "Personal Blog",
    image: PROJECT[0].image,
    link: PROJECT[0].link,
    description:
      "Built and maintained a personal blog using modern web development frameworks. Share insights on computer science topics, photography, and personal experiences. Developed frontend skills and framework utilization, including website deployment.",
  },
  {
    title: "PriceScout Shopping Assistant",
    image: PROJECT[1].image,
    link: PROJECT[1].link,
    description: "One-stop shopping search tool that lets you enter a search term once, select target shopping websites, and automatically opens multiple sites displaying search results, greatly improving price comparison and shopping efficiency.",
  },
  {
    title: "BadgerChat AI",
    image: PROJECT[2].image,
    link: PROJECT[2].link,
    description: "An intelligent shopping chatbot based on Wit.AI, allowing users to browse products, manage shopping carts, and checkout through natural language dialogue.",
  }
];

export const EXPERIENCE = [
  {
    title: "海信集团有限公司",
    location: "北京，中国",
    date: "2024.5 - 2024.6",
    description: `协助修改和优化公司内部管理系统网站, 在企业环境中学习网站开发实践，获得团队合作经验。`,
  },
  {
    title: "机核",
    location: "北京，中国",
    date: "2023.6 - 2023.8",
    description:
      "协助组织和管理游戏展览，展示 Xbox 和 Microsoft 等公司以及独立开发者的新游戏和趋势游戏,了解中国游戏行业面临的挑战和监管限制。",
  },
  {
    title: "威斯康星大学麦迪逊分校中国本科生协会外联部 Chair",
    location: "麦迪逊，威斯康星",
    date: "2022.9 - 2023.9",
    description:
      "为超过 10,000 名国际中国学生和居民组织活动和服务,领导麦迪逊美食节，与当地餐厅合作提供折扣和宣传。",
  },
  {
    title: "Minerva 游戏工作室",
    location: "麦迪逊，威斯康星",
    date: "2023.9 - 2024.12",
    description:
      "使用 C # 开发游戏机制，包括角色移动、跳跃和环境互动, 创建游戏内收集系统，通过互动书籍增强游戏世界观，为玩家提供游戏背景故事。",
  },
  {
    title: '"Save America" 活动创始人',
    location: "北京，中国",
    date: "2020.6 - 2020.12",
    description:
      "在 COVID-19 口罩短缺期间，谈判、购买并交付了超过 2000 个口罩,帮助了 10 多个美国家庭应对口罩短缺问题。",
  },
  {
    title: "北京大兴鹿跑俱乐部成员",
    location: "北京，中国",
    date: "2023.9 - 2024.9",
    description:
      "参加每周团体跑步。担任每周训练跑的配速员，帮助其他跑者保持节奏。",
  },
];



// 创建英文版本的经验数据
export const EXPERIENCE_EN = [
  {
    title: "Hisense Group Co., Ltd.",
    location: "Beijing, China",
    date: "2024.5 - 2024.6",
    description: `Assisted in modifying and optimizing the company's internal management system website. Learned website development practices in a corporate environment and gained teamwork experience.`,
  },
  {
    title: "GCORES",
    location: "Beijing, China",
    date: "2023.6 - 2023.8",
    description:
      "Assisted in organizing and managing game exhibitions, showcasing new and trending games from companies like Xbox and Microsoft, as well as independent developers. Gained an understanding of the challenges and regulatory limitations facing the Chinese gaming industry.",
  },
  {
    title: "Business Dept Chair of UW-Madison Chinese Undergraduate Students Association",
    location: "Madison, Wisconsin",
    date: "2022.9 - 2023.9",
    description:
      "Organized events and services for over 10,000 international Chinese students and residents. Led the Madison Food Festival, collaborating with local restaurants to provide discounts and promotions.",
  },
  {
    title: "Minerva Game Studio",
    location: "Madison, Wisconsin",

    date: "2023.9 - 2024.12",
    description:
      "Developed game mechanics using C#, including character movement, jumping, and environmental interactions. Created an in-game collection system and enhanced the game world-building through interactive books providing background story for players.",
  },
  {
    title: '"Save America" Campaign Founder',
    location: "Beijing, China",
    date: "2020.6 - 2020.12",
    description:
      "During the COVID-19 mask shortage, negotiated, purchased, and delivered over 2,000 masks, helping more than 10 American families cope with mask shortages.",
  },
  {
    title: "Member of Beijing Daxing Deer Running Club",
    location: "Beijing, China",
    date: "2023.9 - 2024.9",
    description:
      "Participated in weekly group runs. Served as a pacer for weekly training runs, helping other runners maintain pace.",
  },
];


export const MY_LIFE = [
  {
    image: lifeImg1,
    description: "麦迪逊马拉松"
  },
  {
    image: lifeImg2,
    description: "北京跑山"
  },
  {
    image: lifeImg3,
    description: "锦州马拉松"
  },
]
// 创建英文版本的生活内容
export const MY_LIFE_EN = [
  {
    image: MY_LIFE[0].image,
    description: "Madison Marathon"
  },
  {
    image: MY_LIFE[1].image,
    description: "Beijing Mountain-Running"
  },
  {
    image: MY_LIFE[2].image,
    description: "Jinzhou Marathon"
  },
];

export const PHOTO = [
  {
    image: photo1
  },
  {
    image: photo2
  },
  {
    image: photo3
  },
  {
    image: photo4
  },
  {
    image: photo5
  },
  {
    image: photo6
  },

]