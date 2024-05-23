"use client";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-7xl md:text-9xl font-bold m-0 dark:text-light">
          Maor Saadia
        </h1>
        <h1 className="font-bold text-5xl m-0 dark:text-light">
          FullStack Developer
        </h1>
      </div>

      <p className="md:text-xl dark:text-light">
        Software Engineer Developer with Expertise in The MERN (MongoDB,
        Express.js, React.js, Node.js). I love developing websites and
        applications that create meaningful user experiences and expand my
        knowledge in new modern technologies.
      </p>

      <span className="italic dark:text-light">
        Always trying to learn the newest and hottest technologies.
      </span>

      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white dark:ring-white dark:bg-white  dark:text-black">
          View My Work
        </button>
        <button className="p-4 rounded-lg ring-1 ring-black dark:ring-white">
          Contact Me
        </button>
      </div>
    </>
  );
};

export default About;
