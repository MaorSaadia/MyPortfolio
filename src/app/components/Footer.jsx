import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-slate-200 font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Resarved.</span>
        <span className="text-primary text-2xl px-1">Build By Maor Saadia</span>
      </Layout>
    </footer>
  );
};

export default Footer;
