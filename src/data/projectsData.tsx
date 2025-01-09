export interface IProjectsData {
  projectId: number;
  projectType: string;
  projectName: string;
  projectImage: string[];
  desc: string;
  timeStart: string;
  timeEnd: string;
  linkDeployed: string;
  nameLinkDeployed: string;
  linkSourceCode: string;
  responsibilities: string[];
  technologies: string[];
}
export const projectsData: IProjectsData[] = [
  {
    projectId: 1,
    projectType: "website",
    projectName: "Gimme Shoes Store",
    projectImage: [
      "/images/e1.png",
      "/images/e2.png",
      "/images/e3.png",
      "/images/e4.png",
      "/images/e5.png",
      "/images/e6.png",
      "/images/e7.png",
      "/images/e8.png",
    ],
    desc: "",
    timeStart: "Oct, 2023",
    timeEnd: "Dec, 2023",
    linkDeployed: "https://thesis-shoes-shop-client.vercel.app",
    nameLinkDeployed: "gimme-shoes.vercel.app",
    linkSourceCode:
      "https://github.com/thoaihuynh0109/Thesis_Shoes_Shop_Client",
    responsibilities: [
      "Analyze requirements, e-commerce functionality, and survey some similar websites.",
      "Implement according to the proposed team’s sample user interface.",
      "Develop and build the user interface for client and Admin.",
      "Research and deploy website on Vercel",
    ],
    technologies: ["Javascript", "ReactJS", "SASS", "Material-UI", "Redux."],
  },
  {
    projectId: 2,
    projectType: "website",
    projectName: "Level Up Studio",
    projectImage: [
      "/images/l1.png",
      "/images/l3.png",
      "/images/l4.png",
      "/images/l5.png",
      "/images/l6.png",
    ],
    desc: "Build a website to showcase the game company and the games it creates, as well as the companies it partners with.",
    timeStart: "Dec, 2023",
    timeEnd: "Mar, 2024",
    linkDeployed: "null",
    nameLinkDeployed: "Not Available",
    linkSourceCode: "https://github.com/thoaihuynh0109/LevelUp_WebStory",
    responsibilities: [
      "Worked part-time as a Front-end developer.",
      "Developed the website application based on the company requirement.",
      "Worked with the design team of the company.",
    ],
    technologies: [
      "Javascript",
      "ReactJS",
      "SASS",
      "Material-UI",
      "TailwindCSS.",
    ],
  },
  {
    projectId: 3,
    projectType: "website",
    projectName: "Aikotoba Social",
    projectImage: [
      "/images/s1.png",
      "/images/s2.png",
      "/images/s3.png",
      "/images/s4.png",
      "/images/s5.png",
    ],
    desc: "Developing a simple career social media website. With some basic features of the social application.",

    timeStart: "Mar, 2024",
    timeEnd: "Aug, 2024",
    linkDeployed: "https://career-social-website.vercel.app/signed-in",
    nameLinkDeployed: "aikotoba-social.vercel.app",
    linkSourceCode: "https://github.com/khoa36isefiw/Thesis-Social-Media-Jobs",
    responsibilities: [
      "Analyze requirements and social media functionality.",
      "Implementing client-side: posting, chatting, commenting and changing user profiles.",
      "Responsiveness for all devices.",
      "Researching and using animations.",
      "Responsiveness for all devices.",
      "Deploy website on Vercel",
    ],
    technologies: ["Javascript", "ReactJS", "SASS", "Material-UI", "Redux."],
  },
  {
    projectId: 4,
    projectType: "website",
    projectName: "Tomtoc Perfumes",
    projectImage: [
      "/images/e1.png",
      "/images/e2.png",
      "/images/e3.png",
      "/images/e4.png",
      "/images/e5.png",
      "/images/e6.png",
      "/images/e7.png",
      "/images/e8.png",
    ],

    desc: "Developing an e-commerce website to sell perfume products. With some essential features of the e-commerce website.",

    timeStart: "09/2024",
    timeEnd: "12/2024",
    linkDeployed: "https://perfume-webiste-thesis.vercel.app",
    nameLinkDeployed: "tomtoc-perfume.vercel.app",
    linkSourceCode: "https://github.com/khoa36isefiw/Perfume-Webiste-Thesis",
    responsibilities: [
      "Analyzing requirements and survey features of websites.",
      "Implementing client-side and admin dashboard.",
      "Optimizing layout adaptability for various devices.",
      "Implementing API in Front-end connect to Back-end.",
      "Implementing language support for foreigners and Vietnamese people",
    ],
    technologies: ["Javascript", "ReactJS", "Material-UI", "Redux Toolkit."],
  },
  {
    projectId: 5,
    projectType: "mobile",
    projectName: "Travel Application",
    projectImage: [
      "/images/e1.png",
      "/images/e2.png",
      "/images/e3.png",
      "/images/e4.png",
      "/images/e5.png",
      "/images/e6.png",
      "/images/e7.png",
      "/images/e8.png",
    ],
    desc: "Developing a simple travel application UI in React Native with expo router for navigating between different screens of the app.",

    timeStart: "Sep, 2024",
    timeEnd: "Sep, 2024",
    linkDeployed: "",
    nameLinkDeployed: "",
    linkSourceCode: "https://github.com/khoa36isefiw/travel-app",
    responsibilities: [
      "Implementing some User Interfaces: Travel App Home Screen, World popular places list, Travel Groups and Popular places details.",
      "Researching and using animations.",
    ],
    technologies: ["Typescript", "React Native."],
  },
  {
    projectId: 6,
    projectType: "website",
    projectName: "Portfolio with React",
    projectImage: [
      "/images/e1.png",
      "/images/e2.png",
      "/images/e3.png",
      "/images/e4.png",
      "/images/e5.png",
      "/images/e6.png",
      "/images/e7.png",
      "/images/e8.png",
    ],
    desc: "Design portfolio website to introduce myself.",
    //  "Developing a simple travel application UI in React Native with expo router for navigating between different screens of the app.",
    timeStart: "Sep, 2024",
    timeEnd: "Sep, 2024",
    linkDeployed: "https://khoa-portfolio-kappa.vercel.app/en",
    nameLinkDeployed: "my-portfolio",
    linkSourceCode: "https://github.com/khoa36isefiw/my-portfolio",
    responsibilities: [
      "Implementing some User Interfaces: Travel App Home Screen, World popular places list, Travel Groups and Popular places details.",
      "Researching and using animations.",
    ],
    technologies: ["Javascript", "ReactJS", "Material-UI."],
  },
  {
    projectId: 7,
    projectType: "website",
    projectName: "Portfolio with Next",
    projectImage: [
      "/images/e1.png",
      "/images/e2.png",
      "/images/e3.png",
      "/images/e4.png",
      "/images/e5.png",
      "/images/e6.png",
      "/images/e7.png",
      "/images/e8.png",
    ],
    desc: "Design portfolio website to introduce myself.",
    //  "Developing a simple travel application UI in React Native with expo router for navigating between different screens of the app.",
    timeStart: "Sep, 2024",
    timeEnd: "Sep, 2024",
    linkDeployed: "https://khoa-portfolio-kappa.vercel.app/en",
    nameLinkDeployed: "my-portfolio",
    linkSourceCode: "https://github.com/khoa36isefiw/my-portfolio",
    responsibilities: [
      "Implementing some User Interfaces: Travel App Home Screen, World popular places list, Travel Groups and Popular places details.",
      "Researching and using animations.",
    ],
    technologies: ["Javascript", "ReactJS", "Material-UI."],
  },
];

// github: https://cdn-icons-png.flaticon.com/512/25/25231.png
