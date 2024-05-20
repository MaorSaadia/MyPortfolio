"use client";

import RecentProjects from "../components/RecentProjects";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-x-hidden lg:flex justify-center">
        <RecentProjects />
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
