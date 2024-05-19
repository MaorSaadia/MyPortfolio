"use client";

const About = () => {
  return (
    <>
      {/* TITLE */}
      <div className="flex flex-col">
        <h1 className="text-7xl md:text-9xl font-bold m-0">Maor Saadia</h1>
        <h1 className="font-bold text-5xl m-0 text-slate-500">
          FullStack Developer
        </h1>
      </div>

      <p className="md:text-xl">
        Software Engineer Developer with Expertise in The MERN (MongoDB,
        Express.js, React.js, Node.js). I love developing websites and
        applications that create meaningful user experiences and expand my
        knowledge in new modern technologies.
      </p>

      {/* QUOTE */}
      <span className="italic">
        Always trying to learn the newest and hottest technologies.
      </span>

      {/* BUTTONS */}
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
          View My Work
        </button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </>
  );
};

export default About;
