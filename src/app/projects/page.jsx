"use client";

import RecentProjects from "../components/RecentProjects";
import { motion } from "framer-motion";
import Scroll from "../components/Scroll";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-x-hidden lg:flex justify-center">
        <div className="py-10">
          <div className="flex items-center justify-center text-8xl text-center dark:text-white">
            My Works
          </div>
          <div className="flex gap-12 justify-center mt-10">
            <Scroll />
          </div>
          <RecentProjects />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
