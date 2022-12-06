"use client";

import Link from "next/link";
import { useState } from "react";
import LinkButton from "./LinkButton";
import NavbarMainIcon from "./NavbarMainIcon";

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
      <NavbarMainIcon />

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
        <nav className="flex items-center justify-center gap-6 text-sm max-md:flex-col lg:gap-8">
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
