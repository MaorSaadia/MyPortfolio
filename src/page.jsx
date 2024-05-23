"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// import Brain from "./components/Brain";
import About from "./components/About";
import Skill from "./components/Skill";
import Scroll from "./components/Scroll";
import Education from "./components/Education";
import { skills } from "./data";

const Homepage = () => {
  const containerRef = useRef();

  // const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();

  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-x-hidden" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-16 lg:p-20 xl:p-30 flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-18 lg:w-2/3 lg:pr-0 xl:w-1/2 dark:text-white">
          <About />

          <div className="flex flex-col gap-12 justify-center">
            <Scroll />
          </div>

          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
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
            <Scroll />
            <Education />
          </div>
        </div>
        {/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Homepage;