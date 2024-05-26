import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import NavBar from "/src/components/NavBar";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <div className="h-24">
          <NavBar />
        </div>

        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <HireMe />

        <Footer />
      </main>
    </>
  );
}
