"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MdLaunch } from "react-icons/md";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectItemsProps = {
  project: any;
  index: number;
};

const ProjectItems = ({ project, index }: ProjectItemsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group"
    >
      <section
        className="dark:bg-gray-700 hover:dark:bg-gray-500 bg-gray-100 hover:bg-gray-200 transition 
       border rounded-lg border-black/5 
      overflow-hidden sm:h-[30rem] sm:flex"
        key={index}
      >
        <div
          className="h-full flex flex-col pt-4 pb-7 px-4 sm:pl-10 sm:pr-2 sm:pt-10 
      max-w-[100%] sm:max-w-[50%]  "
        >
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className=" dark:text-white mt-2 leading-relaxed text-gray-700">
            {project.desc}
          </p>
          {project.note && (
            <p className="mt-2">
              {project.note} <br />{" "}
              <small>
                Note: If the app freezes please refresh and give it 1 minute.
                Thank you
              </small>{" "}
            </p>
          )}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.technologiesTag.map((tag: string, index: number) => (
              <li
                className="bg-orange-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex items-center w-full justify-center">
          <a
            className="p-3 bg-orange-500 text-sm text-white rounded-lg w-full flex items-center justify-center gap-2"
            href={project.websiteUrl}
            target="_blank"
          >
            Launch App <MdLaunch />
          </a>
        </div>
        <div
          className=" hidden sm:flex flex-col text-center p-2 transition align-center justify-center "
        >
          <Image
            className="w-[27rem] rounded-xl h-[80%] mb-6 hover:scale-95 transition"
            src={project.imageUrl}
            alt={project.title}
            quality={95}
          ></Image>
          <a className="rounded-xl py-2 text-white bg-orange-500 hover:bg-orange-600" href={project.websiteUrl} target="_blank">Visit</a>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectItems;
