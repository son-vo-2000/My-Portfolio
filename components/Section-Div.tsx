"use client"
import React from "react";
import { motion } from "framer-motion";

const SectionDiv = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        deplay:0.125
      }}
      className="bg-gray-200 dark:bg-opacity-50 my-24 h-20 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
};

export default SectionDiv;
