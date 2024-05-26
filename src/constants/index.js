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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    deepsight,
    zipy,
    prowess,
    wealthbridge,
    library,
    bytebit,
    bit,
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
      title: "Software Engineer Intern",
      company_name: "Deepsight AI Labs",
      icon: deepsight,
      iconBg: "#383E56",
      date: "July 2023 - August 2023",
      points: [
       "Proposed the architecture, and implemented an end-to-end project of a sophisticated Visitor Management Solution with Facial Recognition based check-in, and checkout system.",
       "This impacted the organisation to have 34% faster registrations and reduced manual errors by 70%, benchmarked against the previous system.",
       "Designed and executed the entire frontend of the Administrative Dashboard, strategically incorporating Key Performance Indicators (KPIs) for data-driven insights and actionable decision-making.",
       "Proficiently diagnosed and fixed bugs and critical memory leaks in the existing software at priority, significantly boosting performance by 800% ",
      ],
    },
    {
      title: "Technical Content Engineer Intern",
      company_name: "Zipy.ai",
      icon: zipy,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Apr 2023",
      points: [
        "Worked on the technical documentation for the software , including API reference and troubleshooting guides.",
        "Wrote and published 9 technical articles on the company blog, which had over 30,000 hits.",
        "Skills and Tools used: React, JavaScript, Node.js, Express.js, Javascript Frameworks, Error-Monitoring",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company_name: "Prowess",
      icon: prowess,
      iconBg: "#383E56",
      date: "July 2022 - Aug 2022",
      points: [
        "Built a Resume Parser System in the profile-building section, which dynamically auto-populates the fields after parsing the media through the JSON response from the API.",
        "Integrated a Stripe payment gateway to the platform for users wanting to upgrade their plan, and for employers.",
        "Worked with a fully remote team which were spread out in different time zones.",
      ],
    },
    {
      title: "MS. Mathematics and Computing",
      company_name: "Birla Institute of Technology",
      icon: bit,
      iconBg: "#E6DEDD",
      date: "May 2019 - Present",
      points: [
       "President, Rotaract Club of BIT Mesra- Spearheaded a team of 170 members for the institute's socio-cultural chapter, Rotaract Club." ,
       "Editor-in-Chief, News and Publications Society- Took interviews of imminent personalities, and wrote multiple editorials and articles to college newspaper. Interfaced with the college administration and the media houses to get the newspaper published." 
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
      name: "Wealthbridge",
      description:
        "Developed a full-stack finance dashboard with Machine Learning predictions and forecasting abilities using the MERN stack (MongoDB, Express, React, Node). Developed the backend using Node.js and Express.js as the framework, and used MongoDB to store all the        financial and user-specific data.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "material ui",
          color: "pink-text-gradient",
        },
      ],
      image: wealthbridge,
      source_code_link: "https://github.com/aryan-139/wealthbridge",
    },
    {
      name: "LibraryPlus",
      description:
        "LibraryPlus is a Library Management System, which aims to fix the efficiency and organization issues faced by libraries. It is an admin based web application, which allows the admin to manage the library, and the users to access the library. One can issue books, return books, search for books, and view the library catalog.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        }
      ],
      image: library,
      source_code_link: "https://github.com/aryan-139/Libraryplus",
    },
    {
      name: "ByteBit",
      description:
        "The Huffman Coding Compression System is a software tool that utilizes the Huffman coding algorithm to compress and decompress files. Huffman coding is a popular lossless data compression algorithm that assigns variable-length codes to different characters based on their frequencies in the input file.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "material ui",
          color: "pink-text-gradient",
        },
        {
          name: "multer",
          color: "blue-text-gradient",
        }
      ],
      image: bytebit,
      source_code_link: "https://github.com/aryan-139/bytebit",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };