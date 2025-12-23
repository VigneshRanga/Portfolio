import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,

  docker,

  skillbridge,
  mediconnect,
  videosorting,
  python,
  mysql,
  c,
  java,
  spring,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Architecture & UI Development",
    icon: web,
  },
  {
    title: "Backend APIs & Application logic",
    icon: backend,
  },
  {
    title: "Full-Stack Application Development",
    icon: mobile,
  },
  {
    title: "AI-Powered Solutions Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Frontend Development (React)",
    company_name: "Personal & Academic Projects",
    icon: web,
    iconBg: "#383E56",
    points: [
      "Designed and developed responsive user interfaces using React, JavaScript, and modern CSS frameworks.",
      "Built reusable components and managed application state for scalable frontend architecture.",
      "Implemented animations and interactive elements using libraries such as Framer Motion and Three.js.",
      "Ensured cross-browser compatibility and optimized UI performance."
    ],
  },
  {
    title: "Backend API Development",
    company_name: "Full-Stack Applications",
    icon: backend,
    iconBg: "#E6DEDD",
    points: [
      "Developed backend APIs to support frontend applications, including authentication and data handling.",
      "Worked with multiple backend technologies and architectures based on project requirements.",
      "Designed RESTful endpoints and integrated databases for data-driven features.",
      "Focused on clean structure, error handling, and maintainable backend logic."
    ],
  },
  {
    title: "Full-Stack Application Development",
    company_name: "End-to-End Projects",
    icon: mobile,
    iconBg: "#383E56",
    points: [
      "Built complete full-stack applications from concept to implementation.",
      "Integrated frontend interfaces with backend services and databases.",
      "Implemented role-based access, authentication flows, and API integrations.",
      "Prepared and actively worked toward deploying applications to production environments."
    ],
  },
  {
    title: "AI-Powered Application Development",
    company_name: "Applied AI Projects",
    icon: creator,
    iconBg: "#E6DEDD",
    points: [
      "Worked on integrating AI and capabilities into web applications.",
      "Built AI-driven features such as intelligent assistants, evaluations, and automation workflows.",
      "Connected AI models and APIs with frontend interfaces for real-time interaction.",
      "Focused on practical AI use cases rather than theoretical implementations."
    ],
  },
];

const projects = [
  {
    name: "SkillBridge",
    description:
      "A full-stack career accelerator platform that enables users to analyze skill gaps, follow structured learning paths, track progress, and prepare for technical interviews using AI-assisted features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "full-stack",
        color: "orange-text-gradient",
      },
      {
        name: "ai-integration",
        color: "pink-text-gradient",
      },
    ],
    image: skillbridge,
    //   source_code_link: "https://github.com/your-username/skillbridge",
  },
  {
    name: "MediConnect",
    description:
      "A full-stack healthcare management platform that connects patients and doctors through digital appointment scheduling, medical record management, and AI-assisted healthcare support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "full-stack",
        color: "orange-text-gradient",
      },
      {
        name: "ai-integration",
        color: "pink-text-gradient",
      },
    ],
    image: mediconnect, // make sure this is imported
    //   source_code_link: "https://github.com/your-username/mediconnect",
  },

  {
    name: "Video Learning & Progress Tracker",
    description:
      "A video-based learning application that organizes educational content, tracks watch progress in real time, and allows users to resume or rewatch videos seamlessly across sessions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "frontend-architecture",
        color: "green-text-gradient",
      },
      {
        name: "state-management",
        color: "orange-text-gradient",
      },
      {
        name: "progress-tracking",
        color: "pink-text-gradient",
      },
    ],
    image: videosorting, // make sure this asset is imported
    //   source_code_link: "https://github.com/your-username/video-learning-tracker",
  }
];

export { services, technologies, experiences, projects };