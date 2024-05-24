import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed right-6 bottom-12 flex items-center justify center overflow-hidden w-24 lg:w-48">
      <div className="w-48 h-auto flex items-center justify-center relativ">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="mailto:maorsa9@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid
           border-dark w-12 h-12 text-[10px] rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
           lg:w-20 lg:h-20 lg:text-[20px]
"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
