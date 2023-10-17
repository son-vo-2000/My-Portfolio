import test from "../public/images/test.jpg";

export const navLinks = [
  { name: "Home", location: "#home" },
  { name: "About", location: "#about" },
  { name: "Project", location: "#project" },
  { name: "Skills", location: "#skills" },
  { name: "Contact", location: "#contact" },
] as const;

export const projects = [
  {
    title: "Get Fit",
    desc: "A coaching and managing clients' execercises flatform for everyone. Users can easily register and login, make a new client. User can create, edit, mark and delete client's exercises",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    websiteUrl: "https://www.google.com/",
    imageUrl: test,
  },
  {
    title: "Quick Blog",
    desc: "A Full-Stack blog application that allows users to create, delete and update their own blogs and view other people blogs. The application also let users to sort blogs by categories",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MySQL"],
    websiteUrl: "https://www.google.com/",
    imageUrl: test,
  },
  {
    title: "Quick Blog",
    desc: "A Full-Stack blog application that allows users to create, delete and update their own blogs and view other people blogs. The application also let users to sort blogs by categories",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MySQL"],
    websiteUrl: "https://www.google.com/",
    imageUrl: test,
  },
  {
    title: "Quick Blog",
    desc: "A Full-Stack blog application that allows users to create, delete and update their own blogs and view other people blogs. The application also let users to sort blogs by categories",
    technologiesTag: ["React", "CSS", "Node.js", "Express", "MySQL"],
    websiteUrl: "https://www.google.com/",
    imageUrl: test,
  },
] as const;

import js from '../public/images/js.png';
import html from '../public/images/html.png';
import css from '../public/images/css-3.png';
import react from '../public/images/react.png';
import typescript from '../public/images/typescript.png';
import reactNative from '../public/images/react_native.png';
import tailwind from '../public/images/tailwind.png';
import redux from '../public/images/redux.png';
import node from '../public/images/nodejs.png';
import express from '../public/images/express-logo.png';
import c from '../public/images/c-.png';
import next from '../public/images/nextjs-boilerplate-logo.png';
import mongodb from '../public/images/mongo.png';
import sql from '../public/images/sql.png';
import figma from '../public/images/figma.png';
import github from '../public/images/github.png';

export const skills = [
  {
    title: "Client",
    skill: [
      { title: "HTML 5", icon: html },
      { title: "CSS 3", icon: css },
      { title: "Javascript", icon:js},
      { title: "React", icon: react },
      { title: "Typescript", icon: typescript },
      { title: "React Native", icon: reactNative },
      { title: "Tailwind CSS", icon: tailwind },
      { title: "Redux toolkit", icon: redux },
    ],
  },
  {
    title: "Server",
    skill: [
      { title: "Node JS", icon: node },
      { title: "Express", icon: express },
      { title: "C++", icon:c},
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
    ],
  },
];
