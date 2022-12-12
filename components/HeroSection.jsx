"use client";
import LinkButton from "../components/LinkButton";
import { motion } from "framer-motion";

const HeroSection = () => {
  const variant = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.2 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <section className="grid min-h-[60vh] items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
        className="flex flex-col gap-2 md:gap-4"
      >
        <motion.h1
          variants={variant}
          className="font-fira text-sm text-secondary"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          variants={variant}
          className="text-4xl font-bold text-primary-300 md:text-6xl lg:text-7xl"
        >
          Kamal Singh.
        </motion.h2>
        <motion.h2
          variants={variant}
          className="text-3xl font-bold text-gray-400 md:text-5xl"
        >
          I build things for the web
        </motion.h2>
        <motion.div variants={variant} className="mt-4 max-w-md text-gray-400">
          <p className="">
            I{"'"}m a self-taught Front End Developer specializing in developing
            beautifull and acessible websites.
          </p>
        </motion.div>
        <motion.span variants={variant} className="mt-7">
          <LinkButton
            variants={variant}
            displayText={"Contact Me"}
            link={"/"}
          />
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
