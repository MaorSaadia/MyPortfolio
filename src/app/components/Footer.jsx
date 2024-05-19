import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <div className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Resarved.</span>
      </div>
      Build With
      <span className="text-primary text-2xl px-1">&#9825; By Maor Saadia</span>
    </footer>
  );
};

export default Footer;
