import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold sm:text-xl md:text-2xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 md:text-lg xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div>
      <h2 className="font-bold text-5xl mb-16 w-full bg-gradient-to-br from-slate-400 to-slate-700 dark:from-slate-200 dark:to-slate-500 bg-clip-text text-center tracking-tight text-transparent">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[80%] md:w-full mb-10 mt"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-slate-600 origin-top dark:bg-slate-300 md:w-[2px] md:left-[30px] sm:left-[28px] xs:left-[18px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="B.Sc. in Software Engineering"
            time="2019-2024"
            place="SCE – Shamoon college of Engineering"
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
