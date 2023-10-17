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
      className="flex flex-col scroll-mt-28 items-center justify-center text-center mb-28 max-w-[50rem] sm:mb-60"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-xl">
        I'm a recent graduate from The Southern University of Mississippi with a{" "}
        <span className="font-bold">Bachelor degree in Computer Science.</span>{" "}
        Coding and problem-solving have been my guiding passions throughout my
        time at the university. I'm a{" "}
        <span className="font-bold">fast learner</span> and easily adapts to any
        work enviroment. Now, I'm excited to take the knowledge I've learned and
        apply it to the real world.
      </p>
      <p className="mb-3 text-xl">
        In my free time, I enjoy playing video game, watching movies, and
        reading news.
      </p>
    </motion.section>
  );
};

export default About;
