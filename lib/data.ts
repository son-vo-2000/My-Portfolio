import test from "../public/images/test.jpg";
import quizImage from "../public/images/Screenshot 2023-12-15 112944.png";
import getFitImage from "../public/images/getfit.png";
import aiImage from "../public/images/ai.png";
import blogImage from '../public/images/blog.png'

export const navLinks = [
  { name: "Home", location: "#home" },
  { name: "About", location: "#about" },
  { name: "Project", location: "#project" },
  { name: "Skills", location: "#skills" },
  { name: "Contact", location: "#contact" },
] as const;

export const projects = [
  {
    title: "AI Image Generator",
    desc: "Created AI image generator by fetching and retrieving data from OpenAI API. The application generates AI images base on users' input",
    technologiesTag: ["Next.js", "Tailwind CSS", "typescript"],
    websiteUrl: "https://youtu.be/VTD4UO77NZ8",
    imageUrl: aiImage,
  },
  {
    title: "Blog Application",
    desc: "A Full-Stack blog application that allows users to create, delete and update their own blogs and view other people blogs. The application also lets users to sort blogs by categories, provides login system",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MySQL"],
    websiteUrl: "https://blog-client-8cv5.onrender.com/",
    imageUrl: blogImage,
  },
  {
    title: "Manage Your Fitness",
    desc: "A Full-stack web application that allow users to keep track of their clients execirses. The application is based on CRUD concept, that's used to create, read, update & delete data.",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    websiteUrl: "https://youtu.be/MHKPvbi9Jeo",
    imageUrl: getFitImage,
  },
  {
    title: "Quiz Application",
    desc: "A fully functional quiz application with timer, score, and different topics that users can select. The app fetches questions and answers from an open-source database https://opentdb.com",
    technologiesTag: ["HTML", "CSS", "Javascript"],
    websiteUrl: "https://son-vo-2000.github.io/quiz_app/",
    imageUrl: quizImage,
  },
] as const;

import js from "../public/images/js.png";
import html from "../public/images/html.png";
import css from "../public/images/css-3.png";
import react from "../public/images/react.png";
import typescript from "../public/images/typescript.png";
import reactNative from "../public/images/react_native.png";
import tailwind from "../public/images/tailwind.png";
import redux from "../public/images/redux.png";
import node from "../public/images/nodejs.png";
import express from "../public/images/express-logo.png";
import c from "../public/images/c-sharp.png";
import next from "../public/images/nextjs-boilerplate-logo.png";
import mongodb from "../public/images/mongo.png";
import sql from "../public/images/sql.png";
import figma from "../public/images/figma.png";
import github from "../public/images/github.png";
import docker from '../public/images/docker.png';
import asp from '../public/images/web.png';
import bootstrap from '../public/images/bootstrap.png'

export const skills = [
  {
    title: "Client",
    skill: [
      { title: "HTML 5", icon: html },
      { title: "CSS 3", icon: css },
      { title: "Javascript", icon: js },
      { title: "React", icon: react },
      { title: "Typescript", icon: typescript },
      { title: "React Native", icon: reactNative },
      { title: "Tailwind CSS", icon: tailwind },
      { title: "Bootstrap", icon: bootstrap },
      { title: "Redux toolkit", icon: redux },
    ],
  },
  {
    title: "Server",
    skill: [
      { title: "Node JS", icon: node },
      { title: "Express", icon: express },
      { title: "C#", icon: c },
      { title: "ASP.NET Core", icon: asp },
      { title: "Next JS", icon: next },
      { title: "MongoDB", icon: mongodb },
      { title: "MySQL", icon: sql },
    ],
  },
  {
    title: "Others",
    skill: [
      { title: "Figma", icon: figma },
      { title: "Github", icon: github },
      {title: "Docker", icon:docker}
    ],
  },
];
