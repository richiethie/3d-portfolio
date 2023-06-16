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
    rt,
    spectrum,
    uscellular,
    matts,
    wedo,
    encyclone,
    moodforfood,
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
      title: "Web Developer",
      company_name: "Freelance",
      icon: rt,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Developed and maintained responsive websites for clients across various industries, utilizing HTML, CSS, and JavaScript",
        "Collaborated with clients to determine their needs and goals, and provided recommendations to improve their online presence",
        "Maintained and updated existing websites, fixing bugs and enhancing functionality as needed.",
        "Implemented SEO best practices to improve website visibility and search engine rankings.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Spectrum",
      icon: spectrum,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Present",
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
      iconBg: "#383E56",
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
      iconBg: "#E6DEDD",
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
        "I thought it was impossible to make a website as beautiful as our product, but Richie proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Richie does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Richie optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
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
      image: moodforfood,
      source_code_link: "https://github.com/kevinkraiss/mood-for-food",
      live_site: "https://kevinkraiss.github.io/mood-for-food/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };