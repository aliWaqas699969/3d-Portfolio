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
  redux,
  tailwind,
  git,
  docker,
  ybTech,
  shopify,
  ybtech,
  tapandeat,
  mragain,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "Three JS Developer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React JS Developer",
    company_name: "YBTech",
    icon: ybTech,
    iconBg: "#fff",
    date: "October 2022 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Next JS Developer",
    company_name: "YBTech",
    icon: ybTech,
    iconBg: "#fff",
    date: "October 2022 - January 2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pk Technology and Business Solution",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - March 2021",
    points: [
      "Developing and maintaining web applications using HTML,CSS  and Javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "YbTech",
    description:
      "Web-based platform that allows users to create, deploy, and manage web applications, providing a convenient and efficient solution for your Buiness.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ybtech,
    source_code_link: "https://ybsoft.tech/",
  },
  {
    name: "Tap and Eat",
    description:
      "Web application that enables users to search for Restaurants, view and order food, and locate available restaurants based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: tapandeat,
    source_code_link: "https://dev.admin.tapandeat.co/",
  },
  {
    name: "Mr Again",
    description:
      "A comprehensive mobile repair platform that allows users to book repair, shops, and also find for nearest shop from their current loaction, and also offers different services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ant design",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mragain,
    source_code_link: "https://www.mragain.nl/",
  },
];

export { services, technologies, experiences, projects };
