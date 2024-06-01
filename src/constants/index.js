import { ChartDonut } from "@phosphor-icons/react";
import {
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
    nodejs,
    mongodb,
    git,
    ff,
    facebook,
    chatty,
    hatespeechdetection,
    vestipy_temp,
    nitplogo,
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
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Market Analyst Intern",
      company_name: "Futures First",
      icon: ff,
      iconBg: "#383E56",
      date: "Jan 2022 - Jun 2024",
      points: [
        "Traded US Short Term Interest Rate Futures contract in live market",
        "Learnt about biggest financial hub and market",
        "Learnt how microeconomics and macroeconomics impacts various market",
      ],
    },
    {
      title: "Building",
      company_name: "Vestipy",
      icon: vestipy_temp,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Currently",
      points: [
        "Materializing idea into reality",
        "Working on Backend as well as Frontend development from scractch",
        "Skills and Tools used: React, JavaScript, FastApi, Python, Javascript Frameworks, PostgressSQL",
      ],
    },
    {
      title: "Computer Science and Engineering",
      company_name: "National Institute of Technology Patna",
      icon: nitplogo,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - May 2024",
      points: [
        "Pr Co-Coordinator, Incubation Centre NIT Patna - Spearheaded the successful activities at Incubation Centre NIT Patna.",
        "Discipline Lead, HackSlash NIT Patna -Demonstrated exceptional leadership skills as the Discipline Lead for Hackslash",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Aryan is a web-wizard who transformed our vision into reality at unbelievable pace.",
      name: "Himanshu Singh",
      designation: "Founder and CEO",
      company: "Prowess",
      image: "https://media.licdn.com/dms/image/C5603AQEIsGpGhaBPKQ/profile-displayphoto-shrink_800_800/0/1523463774017?e=1700697600&v=beta&t=FQMN64FYM7WQE-e0qbDKzWE_Tvlu3k2iImFHVxa3KM4",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Aryan does.",
      name: "Nishant Veer",
      designation: "CEO and CTO",
      company: "Deepsight AI Labs",
      image: "https://media.licdn.com/dms/image/D4D35AQFSWrHFencXNQ/profile-framedphoto-shrink_800_800/0/1695135926732?e=1695848400&v=beta&t=1Y-AfjyaPJtRPHIOSJivYxMFaio743X869IKNjMLUr4",
    },
    {
      testimonial:
        "Aryan, has an extremely strong work ethic and his contributions to our tech blogs totally exceeded our expectations.",
      name: "Karthik MSN",
      designation: "Co-Founder",
      company: "Zipy.ai",
      image: "https://media.licdn.com/dms/image/C5603AQEeariJQTP6OA/profile-displayphoto-shrink_800_800/0/1631616475799?e=1700697600&v=beta&t=ycyibwoOMG8TwygV_N8fvNiXbnT2_ZJiVuQUTJctNOE",
    },
  ];
  
  const projects = [
    {
      name: "Social Media",
      description:
        "Developed a basic version of facebook app where users can interact with each other",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "React Js",
          color: "pink-text-gradient",
        },
      ],
      image: facebook,
      source_code_link: "https://github.com/prashantkmr389/facebook",
    },
    {
      name: "Chatty",
      description: "RealTime messaging app with clear user inteface in React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: chatty,
      source_code_link: "https://github.com/prashantkmr389/chatty",
    },
    {
      name: "Hate Speech Detection",
      description:
        "A Machine Learnig application where it will detect whether given text is hate speech or not",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
      ],
      image: hatespeechdetection,
      source_code_link:
        "https://github.com/Prashantkmr389/hate-speech-detection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };