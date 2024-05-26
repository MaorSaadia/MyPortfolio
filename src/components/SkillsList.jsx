import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import Skill from "@/components/Skill";
import { skills } from "@/data";

const Skills = () => {
  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <div className="flex flex-col gap-12 justify-center mt-6" ref={skillRef}>
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-4xl bg-gradient-to-br from-slate-400 to-slate-700 dark:from-slate-200 dark:to-slate-500 bg-clip-text text-center tracking-tight text-transparent"
      >
        SKILLS
      </motion.h1>
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} isSkillRefInView={isSkillRefInView} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
