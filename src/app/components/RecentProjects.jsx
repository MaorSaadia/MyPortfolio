"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "../ui/Card";
import { projects } from "../data";

const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center p-16 xs:gap-y-64 sm:gap-y-10 gap-x-20 xs:mt-32 sm:mt-4">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[37rem] h-auto rounded-xl p-8 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white mb-4"
                >
                  {item.title}
                </CardItem>

                <CardItem
                  as={Link}
                  href={item.git}
                  translateZ="100"
                  className="w-full mt-4"
                >
                  <Image
                    src={item.img}
                    height="1200"
                    width="1200"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <p className="text-lg dark:text-light mt-4">
                  Technologies Used:
                </p>
                <div className="flex items-center mt-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-slate-700 dark:bg-slate-300 w-10 h-10  flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-2">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Site →
                  </CardItem>
                  <CardItem
                    as={Link}
                    href={item.git}
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Git
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default RecentProjects;
