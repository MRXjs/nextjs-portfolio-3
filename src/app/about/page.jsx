"use client";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "@/public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const descriptions = [
  {
    description: `Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion
  for creating beautiful, functional, and user-centered digital
  experiences. With 4 years of experience in the field. I am always
  looking for new and innovative ways to bring my clients' visions to
  life`,
    my: true,
  },
  {
    description: `I believe that design is about more than just making things look
  pretty it's about solving problems and creating intuitive, enjoyable
  experiences for users.`,
    my: true,
  },
  {
    description: `Whether I'm working on a website, mobile app, or other digital
  product, I bring my commitment to design excellence and
  user-centered thinking to every project I work on. I look forward to
  the opportunity to bring my skills and passion to your next project.`,
    my: false,
  },
];

const workStatus = [
  { text: "satisfied clients", count: 50 },
  { text: "projects completed", count: 40 },
  { text: "years of experience", count: 4 },
];

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-16 dark:text-light">
      <AnimatedText
        text="Passion Fuels Purpose! "
        className="mb-16 text-6xl lg:text-7xl xs:text-4xl sm:mb-8"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          {descriptions.map((item, index) => (
            <p key={index} className={`${item.my ? "my-4" : ""} font-medium`}>
              {item.description}
            </p>
          ))}
        </div>
        <div className="relative col-span-3 p-8 border-2 border-solid rounded-2xl h-max border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-white" />
          <Image
            src={profilePic}
            alt=""
            priority
            className="w-full h-auto rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
          {workStatus.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-end justify-center xl:items-center"
            >
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={item.count} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                {item.text}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
