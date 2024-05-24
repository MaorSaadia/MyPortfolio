"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import NavLink from "./NavLink";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { LinkedInIcon, GithubIcon, MoonIcon, SunIcon } from "./Icons";

const links = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
    opened: {
      rotate: 45,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
    opened: {
      opacity: 0,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
    opened: {
      rotate: -45,
      backgroundColor: mode === "light" ? "#000000" : "#ffffff",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl dark:text-light">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/7 ">
        {/* <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link> */}
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href="https://github.com/MaorSaadia"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href="https://www.linkedin.com/in/maor-saadia-2022b7289/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`justify-center rounded-full p-2
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
