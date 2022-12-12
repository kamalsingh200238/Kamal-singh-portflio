"use client";
import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const LeftSideFixedButton = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-0 left-[4%] h-60 max-lg:hidden"
    >
      <div className="grid h-full grid-rows-2 place-items-center">
        <div className="grid h-full gap-1 text-xl text-gray-400">
          <Link
            href={"https://github.com/kamalsingh200238"}
            target="_blank"
            className="transition-all duration-200 ease-in-out hover:text-secondary"
          >
            <AiFillGithub />
          </Link>
          <Link
            href={"https://twitter.com/Kamalsingh1605"}
            target="_blank"
            className="transition-all duration-200 ease-in-out hover:text-secondary"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/kamal--singh/"}
            target="_blank"
            className="transition-all duration-200 ease-in-out hover:text-secondary"
          >
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="h-24 w-[1px] self-end bg-gray-400" />
      </div>
    </motion.aside>
  );
};

export default LeftSideFixedButton;
