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
        className=" dark:bg-gray-700 hover:dark:bg-gray-500 bg-gray-100 hover:bg-gray-200 transition 
       border rounded-lg border-black/5 overflow-hidden md:h-[50rem] sm:flex sm:flex-col p-3 sm:justify-between"
        key={index}
      >
        <div className=" hidden sm:flex flex-col text-center transition align-center justify-center ">
          <Image
            className="w-[auto] rounded-xl h-[450px] mb-6 hover:scale-95 transition"
            src={project.imageUrl}
            alt={project.title}
            quality={95}
          ></Image>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col text-center transition align-center justify-center ">
            <a
              className="rounded-xl py-2 text-white bg-orange-500 hover:bg-orange-600"
              href={project.websiteUrl}
              target="_blank"
            >
              Visit
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectItems;
