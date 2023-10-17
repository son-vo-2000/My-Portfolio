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
  const {ref} = useScrollHook("Home", 0.5)

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
      >
        <Image
          className="h-24 w-24 rounded-full broder-[0.35rem] border-white shadow-xl"
          src={avatar}
          priority={true}
          quality="95"
          alt="Avatar"
          width={192}
          height={192}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-1xl font-small !leading-[1.5] sm:text-4xl sm:font-medium"
      >
        <span className="font-bold">Hello, My name is Son Vo. </span>I am a
        software engineer with a passion of{" "}
        <span className="font-bold">coding and solving problems. </span>I enjoy
        building websites and finding solutions for real-world challenges.
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 gap-3 sm:flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 py-3 outline-none flex items-center justify-center gap-2 rounded-full sm:hover:scale-110 sm:hover:bg-gray-950 transition"
        >
          Contact Me{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Resume.pdf"
          download
          className="group bg-white text-black cursor-pointer outline-none px-6 py-3 flex items-center justify-center gap-2 rounded-full sm:hover:scale-110 transition border border-black/10"
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
    </section>
  );
};

export default Intro;
