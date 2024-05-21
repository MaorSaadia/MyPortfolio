"use client";

import { motion } from "framer-motion";

const Skill = ({ name, isSkillRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="rounded p-2 text-sm cursor-pointer bg-black dark:bg-light text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
    >
      {name}
    </motion.div>
  );
};

export default Skill;
