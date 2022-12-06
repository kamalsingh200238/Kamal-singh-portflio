"use client";

import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarMainIcon from "./NavbarMainIcon";

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
      <NavbarLinks isOpen={isOpen} />
    </nav>
  );
}
