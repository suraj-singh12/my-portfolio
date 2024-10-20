import { IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  } from "react-icons/io5";
import img1 from "./images/fkart-min.jpg";
import img2 from "./images/projects-library-min.jpg";
import img3 from "./images/project-search-everywhere.jpeg";
import img4 from "./images/any-to-pdf.png";
import img5 from "./images/bash-scripts-min.jpg";
import img6 from "./images/project-rahat.png"


export const Experience = [
    // {
    //   id: 1,
    //   date: "2016 - present",
    //   iconsSrc: <IoCodeWorking />,
    //   title: "Creative Director",
    //   location: "Doha, Qatar",
    //   description:
    //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    // },
    {
      id: 1, 
      date: "Jan 2024 - Present",
      iconsSrc: <IoCodeWorking />,
      title: "Software Engineer I @ J.P. Morgan Chase & Co",
      location: "Bangalore, India",
      description:
      "Focused on component-driven UI development, leveraging an in-house component library for creating efficient user interfaces. Integrated backend services using Spring Boot to deliver scalable and robust solutions.",
      techStack: 'ReactJS · SpringBoot · AWS · JUnit · Agile Methodology'
    },
    {
      id: 2, 
      date: "May 2023 - July 2023",
      iconsSrc: <IoCodeWorking />,
      title: "Software Engineering Intern | J.P. Morgan Chase & Co",
      location: "Bangalore, India",
      description:
      "Contributed to the advancement of the organization's robust Document Manager web application. Improved user experience and productivity by implementing comprehensive row grouping, column filtering and data filtering functionality using Angular Ag-Grid.",
      techStack: 'Angular · Ag-Grid · TypeScript · Karma · Jasmine · Unit Testing · Responsiveness · Agile Methodology'
    },
    { 
      id: 3,
      date: "Jan 2023",
      iconsSrc: <IoCodeWorking />,
      title: "UltraHacx Hackathon",
      location: "LPU, Punjab",
      description:
        "Developed a Certificate-indexing web app that assigns a score according to the nature and credibility of the certificate and credits the owner with equivalent coins.",
      techStack: 'Ethereum · Blockchain · React.js · Node.js · REST APIs'
    },
    {
      id: 4,
      date: "June 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Code For Good | JPMorgan Chase",
      location: "Remote",
      description:
        "Developed a comprehensive website utilizing the MERN Stack for online education, including live scheduling, content sharing, performance tracking, and analysis of student and teacher progress.",
      techStack:
        "HTML5 · CSS3 · Responsive Web Design · React.js · Node.js · MongoDB · Git",
    },
    {
      id: 5,
      date: "Feb 2022 - Aug 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Full Stack Web Developer | Edureka",
      location: "Remote",
      description: 
        "Worked on 2 web applications: Fkart App, and Zomato Clone and implemented the same using the MERN Technologies from scratch in a deadline-driven environment.",
      techStack:
        "JavaScript · ReactJS · NodeJS · ExpressJS · MongoDB · REST APIs · Responsive Web Design",
        // Front-End Development · Back-End Web Development · 
    },
    {
      id: 6,
      date: "Aug 2021 - May 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Technical Team Member | GeeksForGeeks",
      location: "LPU, Punjab",
      description:
        "Worked as a Technical Team Member in the GeeksForGeeks Student Chapter at Lovely Professional University. I was responsible for conducting technical sessions when things were in online mode.",
      techStack:
        " Data Structures · Technical Support · Java · Problem Solving · C++",
    },
  ];

  export const Projects = [
    {
      id: 1,
      name: "Fkart APP | MERN ",
      imageSrc: img1,
      techs: "NodeJS, ReactJS, Bootstrap, ExpressJS, Mongodb, REST APIs",
      github: "https://github.com/suraj-singh12/flipkart-project",
    },
    {
      id: 2,
      name: "Projects Library | React",
      imageSrc: img2,
      techs: "HTML5, CSS3, JavaScript, React Js, Node JS",
      github: "https://github.com/suraj-singh12/projects-library",
    },
    {
      id: 3,
      name: "Search-EveryWhere | Linux",
      imageSrc: img3,
      techs: "grep, search, linux, ubuntu, python3, bash scripts",
      github: "https://github.com/suraj-singh12/Project-SearchEverywhere",
    },
    {
      id: 4,
      name: "Rahat | Cross-platform",
      imageSrc: img6,
      techs: "PyQT5, PostGre SQL, python3, qtdesigner pycharm-ide",
      github: "https://github.com/suraj-singh12/Project-Rahat",
    },
    {
      id: 5,
      name: "Bash Scripts",
      imageSrc: img5,
      techs: "linux, bash, linux-desktop, scripting, enhancements",
      github: "https://github.com/suraj-singh12/BashScripts",
    },
    {
      id: 6,
      name: "Any To PDF",
      imageSrc: img4,
      techs: "Python3, Tkinter, ppt, docs, img, txt to pdf convertor",
      github: "https://github.com/suraj-singh12/any-to-pdf",
    },
  ]; 

  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/suraj-singh12",
    },
    // {
    //   id: 2,
    //   iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    //   name: "YouTube",
    //   link: "#",
    // },
    {
      id: 3,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/suraj_singh_12",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/suraj-singh-5092/",
    },
    // {
    //   id: 5,
    //   iconSrc: (
    //     <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    //   ),
    //   name: "Whatsapp",
    //   link: "https://wa.me/<number>",
    // },
    // {
    //   id:  6,
    //   iconSrc: (
    //     <IoMail className="text-purple-300 text-3xl cursor-pointer" />
    //   ), 
    //   name: "Gmail",
    //   link: "mailto:surajsingh5092@gmail.com"
    // }
  ];
  
export const Resume = {
  link: 'https://drive.usercontent.google.com/u/0/uc?id=1eCiCNGHtatlBOFB6V7eOePNzCRSHa6ui&export=download'
}

