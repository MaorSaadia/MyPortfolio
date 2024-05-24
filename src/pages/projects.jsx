"use client";

import RecentProjects from "../components/RecentProjects";
import Scroll from "../components/Scroll";
import TransitionEffect from "@/components/TransitionEffect";

const Projects = () => {
  return (
    <div className="h-full overflow-x-hidden lg:flex justify-center">
      <div className="py-10">
        <div className="flex items-center justify-center text-8xl text-center dark:text-white">
          My Works
        </div>
        <TransitionEffect />

        <div className="flex gap-12 justify-center mt-10">
          <Scroll />
        </div>
        <RecentProjects />
      </div>
    </div>
  );
};

export default Projects;
