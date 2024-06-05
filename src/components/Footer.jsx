import { motion } from "framer-motion";

import Layout from "./Layout";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light">
      <Layout className="flex items-center justify-between md:flex-row md:py-6 xs:py-2 xs:flex-col">
        <span className="text-xs xs:text-xxs md:text-lg">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex lg:py-2">
          <span className="text-sm md:text-2xl px-1">Build By Maor Saadia</span>
        </div>
        <div className="flex">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-2"
            href="https://github.com/MaorSaadia"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-2"
            href="https://www.linkedin.com/in/maor-saadia-2022b7289/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
