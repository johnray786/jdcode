import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bankimage from './bankimage.png';
import portfolio from './portfolio.png';
import studentmanagement from './studentmanagement.png'
import todo from './todo.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated PIAIC",
    location: "Karachi, Pakistan",
    description:
      "We graduated after 1 year of studying Web3, AI & Blockchain. We immdiately started our own IT solutions startup.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developers",
    location: "Karachi, Pakistan",
    description:
      "We worked as front-end developers for 1 year at JDCODE. We also upskilled to the full stack, AI, Cybersecurity, Graphic Design & Video Production.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developers",
    location: "Karachi, Pakistan",
    description:
      "We are now full-stack developers working as partners at JDCODE. Our stack includes React, Next.js, TypeScript & Tailwind. We are open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "We built a superb looking and functioning animated portfolio wesite.",
    tags: ["React", "Next.js", "HTML", "Tailwind","Typescript", "Framer"],
    imageUrl: portfolio,
  },
  {
    title: "Todo List",
    description:
      "Built an amazing todo list.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","HTML"],
    imageUrl: todo,
  },
  {
    title: "Student Management System",
    description:
      "An app for quick management of Students data.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","HTML"],
    imageUrl: studentmanagement,
  },
  {
    title: "Bank Deposit/ Withdrawal Software",
    description:
      "A Bank deposit/withdrawal software.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","HTML"],
    imageUrl: bankimage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "Web Development",
  "Logo Design",
  "Digital Marketing",
  "Cyber Security",
  "Prompt Enigineering",
  "Blockchain & Crypto",
  "Artificial Engineering"
] as const;