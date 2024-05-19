"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

import Skill from "./components/skill";
import Brain from "./components/brain";

const Homepage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();

  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJs",
    "React Native",
    "TanStackQuery",
    "NodeJs",
    "Express",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Python",
    "C",
    "Git",
    "Jest",
    "Jira",
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-16 lg:p-20 xl:p-30 flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-18 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* TITLE */}
          <div className="flex flex-col">
            <h1 className="text-7xl md:text-9xl font-bold m-0">Maor Saadia</h1>
            <h1 className="font-bold text-5xl m-0 text-slate-500">
              FullStack Developer
            </h1>
          </div>

          {/* DESC */}
          <p className="md:text-xl">
            Software Engineer Developer with Expertise in The MERN (MongoDB,
            Express.js, React.js, Node.js). I love developing websites and
            applications that create meaningful user experiences and expand my
            knowledge in new modern technologies.
          </p>
          {/* QUOTE */}
          <span className="italic">
            Always trying to learn the newest and hottest technologies.
          </span>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill}
                  isSkillRefInView={isSkillRefInView}
                />
              ))}
            </motion.div>
            <div className="flex flex-col gap-12 justify-center">
              {/* SCROLL SVG */}
              {/* <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg> */}
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        {/* EXPERIENCE CONTAINER */}
      </div>
      {/* SVG CONTAINER */}
    </motion.div>
  );
};

export default Homepage;
