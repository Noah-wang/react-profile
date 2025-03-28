import { EXPERIENCE, PROJECT, MY_LIFE, PROJECT_EN, EXPERIENCE_EN, MY_LIFE_EN } from "../Constant/index"

export const locations = {
  zh: {
    beijing: {
      title: "北京",
      desc: "我的家乡"
    },
    madison: {
      title: "麦迪逊",
      desc: "我的大学"
    },
    la: {
      title: "洛杉矶",
      desc: "未来...?"
    }
  },
  en: {
    beijing: {
      title: "Beijing",
      desc: "My Hometown"
    },
    madison: {
      title: "Madison",
      desc: "My University"
    },
    la: {
      title: "Los Angeles",
      desc: "Future...?"
    }
  }
};

export const translations = {
  // 根据语言设置卡片内容

  zh: {
    // 导航栏
    home: "首页",
    about: "关于我",
    projects: "项目",
    contact: "联系我",

    // 首页
    welcomeMessage: "欢迎来到我的个人网站",

    // 关于页面
    aboutMe: "关于我",
    myExperience: "我的经历",
    myLifeTitle: "我的生活",
    runnerDesc: "我是一个跑者，欢迎访问我的",
    blogLink: "博客",
    runningStory: "，了解更多我的跑步故事",
    photographyDesc: "我还喜欢摄影，欢迎访问我的",
    photoLink: "500px",
    viewProject: "查看项目",

    // 项目页面
    myProjects: "我的项目",
    projectHeading: "项目",
    projects: PROJECT,

    // 经验部分
    experienceTitle: "经验",
    experiences: EXPERIENCE,

    // 生活部分
    myLifes: MY_LIFE,

    // 联系页面
    getInTouch: "联系方式",
    email: "邮箱",
    phone: "电话",
    wechat: "微信",
    copied: "已复制:",

    // 语言切换
    switchLanguage: "English"
  },
  en: {
    // 导航栏
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",

    // 首页
    welcomeMessage: "Welcome to my personal website",

    // 关于页面
    aboutMe: "About Me",
    myExperience: "My Experience",
    myLifeTitle: "My Life",
    runnerDesc: "I'm a runner, welcome to visit my",
    blogLink: "blog",
    runningStory: " to learn more about my running stories",
    photographyDesc: "I also enjoy photography, welcome to visit my",
    photoLink: "500px",
    viewProject: "View Project",

    // 项目页面
    myProjects: "My Projects",
    projectHeading: "Projects",
    projects: PROJECT_EN,

    // 经验部分
    experienceTitle: "Experience",
    experiences: EXPERIENCE_EN,

    // 生活部分
    myLifes: MY_LIFE_EN,

    // 联系页面
    getInTouch: "Get in Touch",
    email: "Email",
    phone: "Phone",
    wechat: "WeChat",
    copied: "Copied:",

    // 语言切换
    switchLanguage: "中文"
  }
};


