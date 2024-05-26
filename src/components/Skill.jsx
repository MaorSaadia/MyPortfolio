"use client";

import { motion } from "framer-motion";

const Skill = ({ name, isSkillRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="rounded p-2 text-sm cursor-pointer bg-slate-700 text-white dark:bg-slate-300 dark:text-black hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white"
    >
      {name}
    </motion.div>
  );
};

export default Skill;
