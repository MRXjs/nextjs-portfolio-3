"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const educationData = [
  {
    type: "Bachelor Of Science In Computer Science",
    time: "2016-2020",
    place: "Massachusetts Institute Of Technology (MIT)",
    info: `Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.`,
  },
  {
    type: "Master Of Computer Science",
    time: "2020-2022",
    place: "Stanford University",
    info: `Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.`,
  },
  {
    type: "Online Coursework",
    time: "2016-2020",
    place: "Coursera And EdX",
    info: `Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.`,
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}{" "}
          <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {place}
          </span>
          <p className="w-full font-medium md:text-sm">{info}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          {educationData.map((item, index) => (
            <Details
              key={index}
              type={item.type}
              time={item.time}
              place={item.place}
              info={item.info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
