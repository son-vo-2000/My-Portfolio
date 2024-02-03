"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useScrollHook } from "@/lib/scrollHooks";

const About = () => {
  const {ref} = useScrollHook("About");
  
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ deplay: 0.175 }}
      className="flex flex-col scroll-mt-28 items-center justify-center text-center mb-28 max-w-[1264px] sm:mb-60"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 sm:text-xl">
        I graduated with a
        <span className="font-bold text-orange-700"> Bachelor degree in Computer Science. </span>
        Coding and problem-solving have been my guiding passions throughout my
        time at the university. I am a
        <span className="font-bold text-orange-700"> fast learner</span> and easily adapts to any
        work enviroment. I am excited to take the knowledge I have learned and
        apply it to the real world.
      </p>
      <p className="mb-3 sm:text-xl">
        In my free time, I enjoy playing video game, watching movies, and
        reading news.
      </p>
    </motion.section>
  );
};

export default About;
