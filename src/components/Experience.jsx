"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const experienceData = [
  {
    position: "Software Engineer",
    company: "Google",
    companyLink: "https://www.google.com",
    time: "2022-Present ",
    address: "Mountain View, CA",
    work: `Worked on a team responsible for developing new features for Google's 
    search engine, including improving the accuracy and relevance of search results and 
    developing new tools for data analysis and visualization.`,
  },
  {
    position: "Software Developer Intern",
    company: "Facebook",
    companyLink: "https://www.facebook.com",
    time: "Summer 2021",
    address: "Menlo Park, CA",
    work: `Worked on a team responsible for developing a new mobile app feature 
    that allowed users to create and share short-form video content, including 
    designing and implementing a new user interface and developing the backend 
    infrastructure to support the feature.`,
  },
  {
    position: "Software Developer",
    company: "Amazon",
    companyLink: "https://www.amazon.com",
    time: "2020-2021",
    address: "Seattle, WA",
    work: `Worked on a team responsible for developing Amazon's mobile app, 
    including implementing new features such as product recommendations and user 
    reviews, and optimizing the app's performance and reliability.`,
  },
  {
    position: "Software Developer Intern",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com",
    time: "Summer 2019",
    address: "Redmond, WA",
    work: `Worked on a team responsible for developing new features for Microsoft's 
    Windows operating system, including implementing a new user interface for a system 
    settings panel and optimizing the performance of a core system component.`,
  },
  {
    position: "Teaching Assistant",
    company: "MIT",
    companyLink: "https://www.mit.com",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA",
    work: `Assisted in teaching a course on computer programming, held office hours 
    to help students with assignments, and graded exams and assignments.`,
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {position}&nbsp;
          <Link
            href={companyLink}
            target="_blank"
            className="capitalize text-primary"
          >
            {company}
          </Link>
          <span className="font-medium capitalize text-dark/75">
            {time} | {address}
          </span>
          <p className="w-full font-medium">{work}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4">
          {experienceData.map((item, index) => (
            <Details
              key={index}
              position={item.position}
              company={item.company}
              companyLink={item.companyLink}
              time={item.time}
              address={item.address}
              work={item.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
