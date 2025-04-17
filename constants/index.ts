import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiGmail, SiCodeforces } from "react-icons/si";
export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vraj-amin-3465b3257/",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=vraj.amin1274@gmail.com&su=Hello%20Vraj&body=I%20just%20checked%20your%20portfolio!",
  }, {
    name: "Codeforces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/vrajj_",
  }
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "PYTHON",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JAVA",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },

] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },


] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },

] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Writewave",
    description:
      'Developed a dynamic blogging platform enabling users to create, manage, and interact with posts in real time. Engineered using Node.js, Express.js, MongoDB, and EJS, the application features a responsive UI powered by Bootstrap. Implemented secure authentication using JWT and cookie-based sessions, ensuring data privacy and access control. Optimized backend performance by 30% with efficient routing, middleware, and database queries. Enhanced user experience through image upload support (Multer) and streamlined error handling for seamless navigation.',
    image: "/projects/project-1.png",
    link: "https://github.com/vrajj1274/WriteWave",
  },
  {
    title: "MailMatrix",
    description:
      'Built a full-stack web application to automate personalized email campaigns by importing Excel files and dispatching dynamic, template-based emails. Developed with Next.js, React, Tailwind CSS, and ExcelJS, the platform supports real-time Excel parsing, preview, and validation. Integrated SendGrids SMTP API to securely deliver high- volume emails with tracking and dynamic content.Reduced manual effort and dispatch time by over 70 % through streamlined workflows, robust form handling, and backend optimization.'

    ,
    image: "/projects/project-2.png",
    link: "https://github.com/vrajj1274/MailMatrix",
  },
  {
    title: "CryptoWeather Nexus",
    description:
      'Designed and developed a multi-feature dashboard that combines real-time cryptocurrency data and live weather updates in a single interface. Built using Next.js, React, Redux, and Tailwind CSS, the platform integrates CoinGecko, OpenWeatherMap, and WebSocket APIs for seamless data streaming and user interactivity. Implemented a favorites system with persistent storage and Redux state management, enhancing user personalization. Optimized UI/UX for responsiveness and clarity, delivering fast, dynamic insights across devices.',
    image: "/projects/project-3.png",
    link: "https://github.com/vrajj1274/CrptoWeather-Nexus",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vrajj1274",
      },

    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/vrajj_",
      },

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/vraj-amin-3465b3257",
      },
    ],
  },
  {
    title: "Handles",
    data: [
      {
        name: "Codeforces",
        icon: null,
        link: "https://codeforces.com/profile/vrajj_",
      },
      {
        name: "CodeChef",
        icon: null,
        link: "https://www.codechef.com/users/vrajj",
      },
      {
        name: "LeetCode",
        icon: null,
        link: "https://leetcode.com/u/VrajjAmin/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
