"use client";
import Image from "next/image";
import React from "react";
import avatar from "../public/images/test.jpg";
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
      className="scroll-mt-[100rem] mb-28 max-w-[60rem] text-center sm:mb-0"
    >
      <motion.div
        className="flex items-center justify-center mb-8 "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
      >
        <Image
          className="h-26 w-26  rounded-lg broder-[0.35rem] border-white shadow-xl"
          src={avatar}
          priority={true}
          quality="95"
          alt="Avatar"
          width={192}
          height={192}
        />
      </motion.div>
      <div className="flex flex-col md:flex-row md:gap-5 mb-10 ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className=" px-4 text-1xl font-small !leading-[1.5] sm:text-3xl sm:font-medium mb-8 md:mb-0 "
        >
          <span className="font-bold">Hello, My name is Son Vo. </span>I am a
          software engineer with a passion of{" "}
          <span className="font-bold">coding and solving problems. </span>I
          enjoy building applications and finding solutions for complex
          challenges.
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 gap-3 sm:flex items-center justify-center flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="#contact"
            className="group bg-orange-700 text-white py-2 sm:px-6 sm:py-3 outline-none flex items-center justify-center gap-1 rounded-full sm:hover:scale-110 sm:hover:bg-orange-600 transition"
          >
            Contact Me{" "}
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="group bg-white text-black cursor-pointer outline-none py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-1 rounded-full sm:hover:scale-110 transition border border-black/10"
          >
            Download CV{" "}
            <HiDownload className="group-hover:translate-x-1 transition" />
          </a>
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
