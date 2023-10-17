"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useScrollHook } from "@/lib/scrollHooks";
const Contact = () => {
  const { ref } = useScrollHook("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className=" scroll-mt-28 max-w-[800px] w-[90%] mb-28 sm:mb-60"
    >
      <SectionHeading>Contact me</SectionHeading>
      <div className="flex flex-col sm:flex-row items-center justify-evenly mb-10 ">
        <div className="flex-1 py-6 flex flex-col items-center gap-3 rounded-lg cursor-default hover:bg-gray-200 hover:dark:bg-gray-700">
          <BsFillTelephoneFill className="text-xl" />
          <span className="text-md font-semibold">(228) 617-3473</span>
        </div>
        <a
          className="flex-1 py-6 flex flex-col items-center gap-3 text-center rounded-lg hover:bg-gray-200 hover:dark:bg-gray-700"
          href="mailto:trongsonvo2000@gmail.com"
        >
          <AiOutlineMail className="text-2xl" />
          <span className="text-md font-semibold">
            trongsonvo2000@gmail.com
          </span>
        </a>
      </div>

      <form
        action="https://formsubmit.co/trongsonvo2000@gmail.com"
        method="POST"
        className="max-w-full drop-shadow-2xl dark:bg-gray-700 bg-white p-2 sm:py-10 sm:px-8 rounded-lg flex flex-col gap-8"
      >
        <h1 className="sm:text-2xl font-semibold">Message Form</h1>
        <input
          className="dark:bg-gray-300 dark:text-black text-sm p-3 rounded-lg sm:text-xl bg-gray-100 focus:bg-white"
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          maxLength={500}
          className="dark:bg-gray-300 dark:text-black  p-3 text-sm rounded-lg sm:text-xl bg-gray-100 focus:bg-white"
        />

        <textarea
          name="message"
          rows={10}
          placeholder="Message"
          required
          className="dark:bg-gray-300 dark:text-black  resize-none p-3 text-sm rounded-lg sm:text-xl bg-gray-100 focus:bg-white"
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white sm:text-2xl rounded-lg py-4 opacity-[1] sm:opacity-[0.7] hover:opacity-[1] transition"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
