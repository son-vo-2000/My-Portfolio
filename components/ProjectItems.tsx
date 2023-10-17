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
  const translateXProgress = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        translateX:translateXProgress
      }}
      className="group"
    >
      <section
        className="dark:bg-gray-700 hover:dark:bg-gray-500 bg-gray-100 hover:bg-gray-200 transition 
       border relative rounded-lg border-black/5 
      overflow-hidden sm:h-[25rem]"
        key={index}
      >
        <div
          className="h-full flex flex-col pt-4 pb-7 px-4 sm:pl-10 sm:pr-2 sm:pt-10 
      max-w-[100%] sm:max-w-[50%]  sm:group-even:ml-[22rem]"
        >
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className=" dark:text-white mt-2 leading-relaxed text-gray-700">{project.desc}</p>
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

        <a
          className="hidden sm:block sm:absolute sm:top-10 sm:-right-[6rem] 
        sm:max-w-[50%]  h-full 
        sm:group-even:-left-[6rem] 
        group-hover:-translate-x-7 
        group-hover:translate-y-3 
        group-hover:scale-[1.04]
        group-hover:-rotate-3 
        group-even:group-hover:translate-x-7 
        group-even:group-hover:-translate-y-2 
        group-even:group-hover:rotate-3 
        transition"
          href={project.websiteUrl}
          target="_blank"
        >
          <Image
            className="w-[28.25rem] rounded-lg "
            src={project.imageUrl}
            alt={project.title}
            quality={95}
          ></Image>
        </a>
      </section>
    </motion.div>
  );
};

export default ProjectItems;
