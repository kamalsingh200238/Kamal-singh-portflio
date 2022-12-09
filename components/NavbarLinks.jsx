"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { useEffect } from "react";
import LinkButton from "./LinkButton";

const navbarLinks = [
  {
    link: "/",
    displayName: "About",
  },
  {
    link: "/",
    displayName: "Work",
  },
  {
    link: "/",
    displayName: "Contact",
  },
];

export default function NavbarLinks({ isOpen, setIsOpen, navbarRef }) {
  
  // this function converts 1 => 01 or 2 => 02
  const addingZero = (index) => {
    return String("0" + index).slice(-2);
  };

  // animation for navbar links children (li)
  const linkVarient = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.01 },
      },
    },
  };

  useEffect(() => {
    const handler = (e) => {
      if (
        !navbarRef.current.contains(
          e.target
        ) /* && !hamburgerMenuRef.current.contains(e.target) */
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <aside
      ref={navbarRef}
      className={`${
        isOpen ? "" : "max-md:translate-x-full"
      } grid place-items-center transition-all duration-200 ease-in-out max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-2/3 max-md:max-w-xs max-md:bg-primary-800 `}
    >
      <nav className="text-sm max-md:text-lg">
        <motion.ol
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="flex items-center justify-center gap-6 max-md:flex-col lg:gap-8"
        >
          {navbarLinks.map((link, index) => (
            <motion.li variants={linkVarient} key={link.displayName}>
              <Link href={link.link} className="group block">
                <div className="relative flex items-center justify-center py-2 after:absolute after:inset-y-0 after:left-0 after:h-full after:w-0 after:border-b-2 after:border-b-secondary after:transition-all after:duration-200 after:ease-in-out hover:after:w-full max-md:flex-col md:gap-2">
                  <span className="font-fira text-secondary">
                    {addingZero(index + 1)}.
                  </span>
                  <span className="text-primary-300 transition-all duration-200 ease-in-out group-hover:text-secondary">
                    {link.displayName}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
          <motion.li variants={linkVarient}>
            <LinkButton link={"/"} displayText={"Resume"} />
          </motion.li>
        </motion.ol>
      </nav>
    </aside>
  );
}
