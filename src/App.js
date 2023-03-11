import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import ProfilePhoto from "./images/suraj.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks, Resume} from "./data";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/* Navigation bar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Suraj Singh</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
              duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
              duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
              duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
              duration-100 ease-in-out"
              >
                Contact
              </a>

              <a
                href={Resume.link}
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border
              border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100  ease-in-out"
              >
                Download
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center
              justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
                duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
                duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
                duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
                duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>

                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href={Resume.link}
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border
                border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100  ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* 3d desing */}
        <div className="relative" id="home">
          <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />

          <div className="absolute bottom-0 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl"></div>
            <p className="text-textBase">Press and drag to orbit</p>
          </div>
        </div>

        {/* Main Section */}
        <main className="w-[80%] mt-5">
          {/* About section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* image box*/}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover
                rounded-lg shadow-lg"
                  src={ProfilePhoto}
                  alt="user profile"
                />
              </div>
            </div>

            {/* content box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              {/* <p className="text-lg text-textBase text-center">
                Hey there, web world!
              </p> */}
              <p className="text-lg text-textBase text-center">
                I'm a MERN stack developer specializing in
                creating stunning and responsive web applications. 
                As a detail-oriented team player with good communication skills,
                I'm committed to delivering quality work within tight deadlines
                while staying up to date with the latest technologies.
                {/* I am a MERN stack web developer, as well as an open-source
                contributor. I like to work on real-life projects that
                contribute to the good of society. Some of such projects that I
                have worked on are "Project Rahat", and "Project
                SearchEverywhere". */}
              </p>
              {/* <p className="text-lg text-textBase text-center">
                I am comfortable working in new environments and teams and
                quickly match the required pace. I am always looking to learn
                more and upgrade myself each day. New technologies bring new
                ways to solve real-world problems, and this is what makes me
                eager to master them.
              </p> */}
              <p className="text-lg text-textBase mt-5 text-center">
                Find my CV below!
              </p>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center 
              justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium 
              text-gray-900 rounded-lg group bg-gray-900 bg-gradient-to-br from-green-400 to-blue-600 
              group-hover:from-green-400 group-hover:to-blue-600 hover:text-white 
              dark:text-white focus:ring-4 focus:ring-green-200 
              dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg 
              hover:dark:shadow-teal-800/80"
              >
                <a href={Resume.link}
                  className="w-full relative px-5 py-2.5 
                transition-all ease-in duration-75 bg-white dark:bg-gray-900 
                rounded-md group-hover:bg-opacity-0"
                >
                  Download
                </a>
              </motion.button>
            </div>
          </section>

          {/* Vertical Timeline (Work Experience) Section*/}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((item) => (
                  <VerticalTimelineElement
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={item.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={item.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.location}
                    </h4>
                    <p>{item.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* Projects Section */}
          <section
            className="flex flex-wrap items-center justify-around my-24 gap4"
            id="projects"
          >
            {Projects &&
              Projects.map((item) => (
                <div
                  key={item.id}
                  className="border border-zinc-800 rounded-md p-4 min-w-[275px]
                md:max-w-[320px] hover:border-zinc-600 duration-100 ease-in-out mb-5"
                >
                  <p className="text-md text-textBase text-ellipses font-medium uppercase text-center">
                    {item.name.length > 25
                      ? `${item.name.slice(0, 20)}...`
                      : item.name}
                  </p>

                  <img
                    src={item.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt="project1"
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {item.techs}
                      </span>
                    </p>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>

          {/* Contact Section */}
          <section
            className="flex flex-col items-center justify-center w-full my-24"
            id="contact"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((item) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={item.link}
                    key={item.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border 
                  border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100
                  ease-in-out cursor-pointer flex items-center justify-center gap-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.iconSrc}
                    <p className="text-lg text-textBase">{item.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
