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
    <nav className="flex items-center justify-between p-7 md:p-10 lg:px-14">
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
      <div className="z-50 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className="aspect-square h-10">
            <svg
              className={`${
                isOpen ? "rotate-180" : ""
              } h-full w-full stroke-secondary transition-all duration-200 ease-in-out`}
              viewBox="0 0 148 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`${
                  isOpen ? "rotate-45" : ""
                } origin-center fill-secondary transition-all duration-200 ease-in-out`}
                x="18"
                y={isOpen ? "62" : "27"} // for better animations
                width="112"
                height="10"
                rx="5"
              />
              <rect
                className={`${
                  isOpen ? "opacity-0" : ""
                } fill-secondary transition-all duration-200 ease-in-out`}
                x="18"
                y="62"
                width="112"
                height="10"
                rx="5"
              />
              <rect
                className={`${
                  isOpen ? "-rotate-45" : ""
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
      <aside
        className={`${
          isOpen ? "" : "max-md:translate-x-full"
        } grid place-items-center transition-all duration-200 ease-in-out max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-2/3 max-md:bg-primary-800 `}
      >
        <nav className="flex items-center justify-center gap-6 max-md:flex-col lg:gap-8">
          <ol className="flex items-center justify-center gap-6 max-md:flex-col lg:gap-8">
            {navbarLinks.map((link, index) => (
              <li key={link.displayName}>
                <Link href={link.link} className="group block">
                  <div className="relative flex items-center justify-center py-2 after:absolute after:inset-y-0 after:left-0 after:h-full after:w-0 after:border-b-2 after:transition-all after:duration-200 after:ease-in-out hover:after:w-full max-md:flex-col md:gap-2">
                    <span className="font-fira text-secondary">
                      {String("0" + (index + 1)).slice(-2)}.
                    </span>
                    <span className="text-primary-300 transition-all duration-200 ease-in-out group-hover:text-secondary">
                      {link.displayName}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
          <LinkButton link={"/"} displayText={"Resume"} />
        </nav>
      </aside>
    </nav>
  );
}
