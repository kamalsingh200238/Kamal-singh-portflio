"use client";
import { motion } from "framer-motion";

const RightSideFixedButton = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-0 right-[4%] h-80 max-lg:hidden"
    >
      <div className="grid h-full grid-rows-2 place-items-center">
        <div className="vertical-text cursor-pointer text-sm text-gray-400 hover:text-secondary">
          kamalsingh200238@gmail.com
        </div>
        <div className="h-24 w-[1px] self-end bg-gray-400" />
      </div>
    </motion.aside>
  );
};

export default RightSideFixedButton;
