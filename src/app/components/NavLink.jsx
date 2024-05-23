"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 hover ${
        pathName === link.url
          ? "bg-black dark:bg-light text-white dark:text-dark"
          : "hover:bg-black hover:dark:bg-light hover:text-light hover:dark:text-dark"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
