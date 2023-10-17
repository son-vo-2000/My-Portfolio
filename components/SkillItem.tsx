"use client";
import React, { useState } from "react";
import { skills } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScrollHook } from "@/lib/scrollHooks";

const SkillItem = () => {
  const [selectedTab, setSelectedTab] = useState(skills[0]);
  const { ref } = useScrollHook("Skills", 0.5);

  return (
    <div ref={ref} className="dark:bg-gray-700 bg-white p-2 rounded-lg min-h-[30rem] shadow-2xl">
      <ul className="flex items-center justify-evenly h-[3rem] sm:h-[5rem] text-center">
        {skills.map((item, index) => (
          <li
            key={index}
            className={`bg-gray-${
              item === selectedTab ? "200" : ""
            } 
            dark:bg-gray-${
              item === selectedTab ? "500" : ""
            } 
            sm:text-2xl font-semibold cursor-pointer h-full  w-full flex items-center justify-evenly rounded-t-lg transition`}
            onClick={() => setSelectedTab(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center  ">
        <AnimatePresence mode="wait">
          <motion.ul
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3  md:grid-cols-5 gap-y-10 w-[100%] pt-8 justify-items-center content-center	"
          >
            {selectedTab
              ? selectedTab.skill.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-between gap-3 "
                  >
                    <Image
                      className="w-[2rem] md:w-[4rem]"
                      src={item.icon}
                      alt="icon"
                      quality={95}
                    />
                    <h2 className="font-semibold text-sm sm:text-1xl">
                      {item.title}
                    </h2>
                  </li>
                ))
              : "Empty"}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillItem;
