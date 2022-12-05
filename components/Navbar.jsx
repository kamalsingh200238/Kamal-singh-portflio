"use client";

import Link from "next/link";
import { useState } from "react";
import LinkButton from "./LinkButton";

const navbarLinks = [
  {
    id: "01",
    link: "/",
    displayName: "About",
  },
  {
    id: "02",
    link: "/",
    displayName: "Work",
  },
  {
    id: "03",
    link: "/",
    displayName: "Contact",
  },
];

export default function Navbar() {
  // state to track navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-7 md:px-10 md:py-10 lg:px-14">
      {/* Kamal Singh Logo */}
      <div className="aspect-square h-10 lg:h-12">
        <svg
          className="h-full w-full stroke-secondary"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.69873 26.732L50 3.4641L90.3013 26.732V73.268L50 96.5359L9.69873 73.268V26.732Z"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="fill-secondary"
            d="M37.201 67V32.0909H43.5249V48.1307H43.951L57.5703 32.0909H65.2919L51.7919 47.7557L65.4112 67H57.809L47.3942 52.0341L43.5249 56.6023V67H37.201Z"
          />
        </svg>
      </div>

      {/* Button to open/close navbar */}
      <div className="z-50 h-full md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className="aspect-square h-10">
            <svg
              className={`${isOpen ? "rotate-180" : ""
                } h-full w-full stroke-secondary transition-all duration-200 ease-in-out`}
              viewBox="0 0 148 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`${isOpen ? "rotate-45" : ""
                  } origin-center fill-secondary transition-all duration-200 ease-in-out`}
                x="18"
                y={isOpen ? "62" : "27"} // for better animations
                width="112"
                height="10"
                rx="5"
              />
              <rect
                className={`${isOpen ? "opacity-0" : ""
                  } fill-secondary transition-all duration-200 ease-in-out`}
                x="18"
                y="62"
                width="112"
                height="10"
                rx="5"
              />
              <rect
                className={`${isOpen ? "-rotate-45" : ""
                  } origin-center fill-secondary transition-all duration-200 ease-in-out`}
                x="18"
                y={isOpen ? "62" : "97"} // for better animations
                width="112"
                height="10"
                rx="5"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* navbar links */}
      <div
        className={`${isOpen ? "" : "max-md:translate-x-full"
          } flex items-center justify-between gap-6 text-lg transition-all duration-200 ease-in-out max-md:absolute max-md:inset-y-0 max-md:right-0 max-md:w-2/3 max-md:flex-col max-md:bg-primary-800 max-md:py-40 md:gap-10`}
      >
        {navbarLinks.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className="group flex items-center justify-center max-md:flex-col"
          >
            <div className="relative flex items-center justify-center py-2 after:absolute after:inset-y-0 after:left-0 after:h-full after:w-0 after:border-b-2 after:transition-all after:duration-200 after:ease-in-out hover:after:w-full max-md:flex-col md:gap-2">
              <span className="text-secondary">{link.id}.</span>
              <span className="text-primary-300 transition-all duration-200 ease-in-out group-hover:text-secondary">
                {link.displayName}
              </span>
            </div>
          </Link>
        ))}
        <LinkButton link={"/"} displayText={"Resume"} />
      </div>
    </nav>
  );
}

