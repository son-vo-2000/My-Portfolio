"use client";
import Image from "next/image";
import React from "react";
import avatar from "../public/images/avata2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { useScrollHook } from "@/lib/scrollHooks";

const Intro = () => {
  const { ref } = useScrollHook("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] max-w-[1264px] my-28 sm:mb-0 flex items-center text-center flex-col justify-center sm:flex-row-reverse sm:justify-between  gap-20"
    >
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
      >
        <Image
          className="h-26 w-26 rounded-lg broder-[0.35rem] border-white shadow-xl"
          src={avatar}
          priority={true}
          quality="95"
          alt="Avatar"
          width={250}
          height={250}
        />
      </motion.div>
      <div className="flex flex-col sm:items-start items-center text-start gap-8 mb-10 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:text-start text-center max-w-[500px] flex flex-col gap-3"
        >
          <h1 className="text-4xl !leading-[1.5] sm:text-5xl font-bold">
            Full-Stack Engineer
          </h1>
          <span className="text-md font-light">
            Hi, My name is Son Vo. An engineer with a passion of coding and
            solving problems.
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-4">
            <Link
              href="#contact"
              className=" bg-orange-700 text-white py-2 px-4 sm:px-6 sm:py-3 outline-none flex items-center justify-center gap-1 rounded-full sm:hover:scale-110 sm:hover:bg-orange-600 transition"
            >
              <span>Contact Me</span>
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <a
              href="/Resume.pdf"
              download
              className="group bg-white text-black cursor-pointer outline-none py-2 px-4 sm:px-6 sm:py-3 flex items-center justify-center gap-1 rounded-full sm:hover:scale-110 transition border border-black/10"
            >
              <span>Download CV</span>
              <HiDownload className="group-hover:translate-x-1 transition" />
            </a>
          </div>
          <div className="flex gap-3">
            <a
              className="bg-white border border-black/10 text-gray-700 cursor-pointer p-4 flex items-center justify-center gap-2 rounded-full sm:hover:scale-125 transition"
              href="https://www.linkedin.com/in/son-vo-b55ba0284/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="bg-white border border-black/10 text-gray-700 cursor-pointer p-4 flex items-center justify-center gap-2 rounded-full sm:hover:scale-125 transition"
              href="https://twitter.com/sonvo4519789534"
              target="_blank"
            >
              <RiTwitterXFill />
            </a>
            <a
              className="bg-white border border-black/10 text-gray-700 cursor-pointer p-4 flex items-center justify-center gap-2 rounded-full sm:hover:scale-125 transition"
              href="https://github.com/son-vo-2000"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
