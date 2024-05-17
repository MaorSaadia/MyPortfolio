"use client";

import { motion } from "framer-motion";

const Skill = ({ name, isSkillRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
    >
      {name}
    </motion.div>
  );
};

export default Skill;
