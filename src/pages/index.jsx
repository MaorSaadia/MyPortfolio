import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

import { LinkArrow } from "@/components/Icons";
import { FlipWords } from "@/ui/FlipWords";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Scroll from "@/components/Scroll";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import SkillsList from "@/components/SkillsList";

// const programing = "/programing.jpg";

export default function Home() {
  const containerRef = useRef();

  const words = ["Frontend", "Backend", "Application"];

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
                text="Hi, i Am Maor Saadia"
                className="xs:text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-8 bg-gradient-to-br from-slate-400 to-slate-700 dark:from-slate-200 dark:to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent"
              />

              <div className="flex flex-col md:items-center self-center w-full text-center">
                <div className="xs:text-sm sm:text-2xl md:text-4xl lg:text-5xl mx-auto font-normal text-slate-500 dark:text-slate-300">
                  <FlipWords words={words} /> Developer
                </div>
              </div>
              <p className="my-4 text-base font-medium xs:text-sm lg:text-2xl">
                Software Engineer Developer with expertise in Frontend, Backend,
                and App development, specializing in the MERN Stack (MongoDB,
                Express.js, React.js/React Native, Node.js). Passionate about
                creating websites and applications that create meaningful user
                experiences, I continuously seek to expand my knowledge in
                cutting-edge technologies.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="MyResume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-slate-500 text-light p-2.5 px-6
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-slate-300 dark:text-dark hover:dark:bg-slate-500 hover:dark:text-light hover:dark:border-light
                    "
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="/projects"
                  target={"_blank"}
                  className="ml-4 xs:text-sm font-medium capitalize text-slate-600 underline dark:text-slate-300 md:text-base"
                >
                  My Works
                </Link>
              </div>
              <div className="flex flex-col mt-8 justify-center items-center">
                <Scroll />
              </div>
              <div className="flex flex-col gap-12 justify-center mt-8">
                <SkillsList />
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
