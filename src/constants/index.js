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
    roydan,
    accurate,
    rt,
    spectrum,
    uscellular,
    matts,
    wedo,
    encyclone,
    moodforfood,
    threejs,
    recordSite,
    profilePic,
    charlesArmon,
    FilmShareFeed,
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
      id: "projects",
      title: "Projects",
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
      title: "UX/UI Design",
      icon: mobile,
    },
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Software Developer",
      company_name: "Roydan Enterprises",
      icon: roydan,
      iconBg: "#383E56",
      date: "Sept 2024 - Present",
      points: [
        "Design and implement user interfaces using React, JavaScript and TypeScript.",
        "Optimize front-end performance for speed and scalability.",
        "Develop server-side logic, RESTful APIs, and web services.",
        "Write clean, maintainable, and efficient code utilizing C# and .NET.",
      ],
    },
    {
      title: "Software Programmer",
      company_name: "Accurate Controls",
      icon: accurate,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - Sept 2024",
      points: [
        "Design, modify, develop, write, and implement custom software applications for customer security systems.",
        "Participate in the testing process through test review and analysis, test witnessing and certification of software.",
        "Proficient in SQL-based databases and capable of applying programming knowledge to diverse environments.",
        "Developed Python scripts to reduce user data entry and reduce development time.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Spectrum",
      icon: spectrum,
      iconBg: "#383E56",
      date: "Oct 2020 - Apr 2024",
      points: [
        "Achieving consistent sales goals",
        "Mentoring peers and guiding others to be successful",
        "Maintaining expert system knowledge",
        "Kept up with knowledge of TV, Internet, Wireless products, Pricing plans, Promotions, and Services."
      ],
    },
    {
      title: "Retail Wireless Consultant",
      company_name: "US Cellular",
      icon: uscellular,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Oct 2020",
      points: [
        "Create customer value by asking discovery questions",
        "Driving sales results for my store",
        "Helping and teaching peers to excel and create results",
        "Top store and area performance results",
      ],
    },
    {
      title: "District Manager",
      company_name: "Matt's DJ Service",
      icon: matts,
      iconBg: "#383E56",
      date: "Sept 2016 - Jun 2019",
      points: [
        "DJ Weddings while bringing enthusiasm and great customer satisfaction",
        "Oversee safety regulations for travels in the Fox Valley area",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonial coming soon!",
      name: "Kevin Flood",
      designation: "CEO",
      company: "Record Entertainment",
      image: profilePic,
    },
    {
      testimonial:
        "Testimonial coming soon!",
      name: "Charles Armon",
      designation: "CEO",
      company: "Armon Empire",
      image: charlesArmon,
    },
    // {
    //   testimonial:
    //     "After Richie optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "We Do",
      description:
        "Find the right activity for you with We Do",
      tags: [
        {
          name: "handlebars",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "blue-text-gradient",
        border: "border-blue-500",
        bg: "bg-blue-800/50",
      },
      image: wedo,
      source_code_link: "https://github.com/ddwk21/we-do",
      live_site: "https://we-do-application.herokuapp.com/login",
    },
    {
      name: "Encyclone",
      description:
        "Browse through many different Enclyclopedia Brittanica topics",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "green-text-gradient",
        border: "border-green-500",
        bg: "bg-green-800/50",
      },
      image: encyclone,
      source_code_link: "https://github.com/ddwk21/cyclone",
      live_site: "https://fierce-sands-41595.herokuapp.com/",
    },
    {
      name: "FilmShare",
      capstone: true,
      description:
        "FilmShare is a platform for creators to showcase and share short films under 10 minutes, fostering a community of passionate filmmakers. It features a clean, modern design, with a user-driven feed, film ranking system, and a search functionality for discovering films, users, and series.",
      tags: [
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "pink-text-gradient",
        border: "border-pink-500",
        bg: "bg-pink-800/50",
      },
      image: FilmShareFeed,
      source_code_link: "https://github.com/richiethie/FilmProject",
      live_site: "https://filmshare.vercel.app/",
    },
    {
      name: "Record Entertainment",
      description:
        "Complete website makeover for Record Entertainment, a local Wedding Entertainment company",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "npm",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "orange-text-gradient",
        border: "border-orange-500",
        bg: "bg-orange-800/50",
      },
      image: recordSite,
      source_code_link: "https://recordentertainment.com/",
      live_site: "https://recordentertainment.com/",
    },
  ];

  const allProjects = [
    {
      name: "FilmShare",
      capstone: true,
      description:
        "FilmShare is a platform for creators to showcase and share short films under 10 minutes, fostering a community of passionate filmmakers. It features a clean, modern design, with a user-driven feed, film ranking system, and a search functionality for discovering films, users, and series.",
      tags: [
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "pink-text-gradient",
        border: "border-pink-500",
        bg: "bg-pink-800/50",
      },
      image: FilmShareFeed,
      source_code_link: "https://github.com/richiethie/FilmProject",
      live_site: "https://filmshare.vercel.app/",
    },
    {
      name: "We Do",
      description:
        "Find the right activity for you with We Do",
      tags: [
        {
          name: "handlebars",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "blue-text-gradient",
        border: "border-blue-500",
        bg: "bg-blue-800/60",
      },
      image: wedo,
      source_code_link: "https://github.com/ddwk21/we-do",
      live_site: "https://we-do-application.herokuapp.com/login",
    },
    {
      name: "Encyclone",
      description:
        "Browse through many different Enclyclopedia Brittanica topics",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "green-text-gradient",
        border: "border-green-500",
        bg: "bg-green-800/60",
      },
      image: encyclone,
      source_code_link: "https://github.com/ddwk21/cyclone",
      live_site: "https://fierce-sands-41595.herokuapp.com/",
    },
    {
      name: "Mood for Food",
      description:
        "Find your horoscope for the day and get recommended food based on your mood",
      tags: [
        {
          name: "jquery",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "pink-text-gradient",
        border: "border-pink-500",
        bg: "bg-pink-800/60",
      },
      image: moodforfood,
      source_code_link: "https://github.com/kevinkraiss/mood-for-food",
      live_site: "https://kevinkraiss.github.io/mood-for-food/",
    },
    {
      name: "Record Entertainment",
      description:
        "Complete website makeover for Record Entertainment, a local Wedding Entertainment company",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "npm",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      color: {
        text: "orange-text-gradient",
        border: "border-orange-500",
        bg: "bg-orange-800/60",
      },
      image: recordSite,
      source_code_link: "https://recordentertainment.com/",
      live_site: "https://recordentertainment.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, allProjects };