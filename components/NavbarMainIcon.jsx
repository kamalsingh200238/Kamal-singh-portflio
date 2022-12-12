"use client";

import { motion } from "framer-motion";

export default function NavbarMainIcon() {
  return (
    <div className="aspect-square h-10 lg:h-12">
      <motion.svg
        className="h-full w-full stroke-secondary"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M9.69873 26.732L50 3.4641L90.3013 26.732V73.268L50 96.5359L9.69873 73.268V26.732Z"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: {
              pathLength: 0,
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1, type: "tween", ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          className="fill-secondary"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 1, duration: 0.1 },
            },
          }}
          d="M37.201 67V32.0909H43.5249V48.1307H43.951L57.5703 32.0909H65.2919L51.7919 47.7557L65.4112 67H57.809L47.3942 52.0341L43.5249 56.6023V67H37.201Z"
        />
      </motion.svg>
    </div>
  );
}
