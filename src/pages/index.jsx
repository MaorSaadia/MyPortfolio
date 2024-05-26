import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { LinkArrow } from "../components/Icons";
import { skills } from "@/data";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "../components/AnimatedText";
import Scroll from "@/components/Scroll";
import Skill from "@/components/Skill";
import Education from "@/components/Education";

// const programing = "/programing.jpg";

export default function Home() {
  const containerRef = useRef();
  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <>
      <Head>
        <title>Maor_saadia/Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 ">
          <div
            className="flex items-center justify-between w-full flex-col"
            ref={containerRef}
          >
            <div className="w-1/2 md:w-full">
              {/* <Image
                src={programing}
                alt="M"
                responsive="true"
                width={700}
                height={700}
                className="rounded-full 
                //h-autow-fullmax-h-[700px]max-w-[700px]"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              /> */}
            </div>
            <div className="flex flex-col md:items-center md:self-center md:w-full md:text-center">
              <AnimatedText
                text="Hi, I Am Maor Saadia"
                className="text-base xs:text-4xl md:text-5xl lg:text-7xl"
              />
              <AnimatedText
                text="FullStack Developer"
                className="text-base xs:text-2xl md:text-4xl lg:text-5xl"
              />
              <p className="my-4 text-base font-medium xs:text-sm lg:text-2xl">
                Software Engineer Developer with Ex pertise in The MERN
                (MongoDB, Express.js, React.js, Node.js). I love developing
                websites and applications that create meaningful user
                experiences and expand my knowledge in new modern technologies.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="myresume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    "
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="/projects"
                  target={"_blank"}
                  className="ml-4 xs:text-sm font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  My Works
                </Link>
              </div>
              <div className="flex flex-col mt-8 justify-center items-center">
                <Scroll />
              </div>
              <div
                className="flex flex-col gap-12 justify-center mt-8"
                ref={skillRef}
              >
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-4xl"
                >
                  SKILLS
                </motion.h1>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap"
                >
                  {skills.map((skill, index) => (
                    <Skill
                      key={index}
                      name={skill}
                      isSkillRefInView={isSkillRefInView}
                    />
                  ))}
                </motion.div>
                <div className="flex flex-col gap-12 justify-center items-center">
                  <Scroll />
                </div>
                <Education />
              </div>
            </div>
          </div>
        </Layout>

        {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Tyler" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
