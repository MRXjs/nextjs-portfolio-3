"use client";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import customPaginationarticle1Img from "@/public/images/articles/pagination component in reactjs.jpg";
import { motion, useMotionValue } from "framer-motion";

// motion use client  move FeaturedArticle & Article component separate files
const FramerImage = motion(Image);

const articleData = [
  {
    img: customPaginationarticle1Img,
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    time: "9 min read",
    summary: `Learn how to build a custom pagination component in ReactJS from scratch. 
    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`,
    link: "/",
    featuredArticle: true,
  },
  {
    img: customPaginationarticle1Img,
    title:
      "Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens",
    time: "10 min read",
    summary: `Learn how to create stunning loading screens in React with 3 different methods. 
    Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
    Improve the user experience.`,
    link: "/",
    featuredArticle: true,
  },
  {
    img: "sample",
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    date: "March 22, 2023",
    link: "/",
  },
  {
    img: "sample",
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    date: "March 22, 2023",
    link: "/",
  },
];

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={customPaginationarticle1Img}
        alt={title}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light text-dark first:mt-0 border-dark dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-4 -z-10 w-[100.5%] h-[105%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={customPaginationarticle1Img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-2 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm ">{summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Articles = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-16 mb-16 overflow-hidden dark:text-light">
      <AnimatedText
        text={"Words Can Change The World!"}
        className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
      />
      <ul className="grid w-full grid-cols-2 gap-16 p-5 lg:gap-8 md:grid-cols-1 md:gap-y-16">
        {articleData.map((article, index) =>
          article.featuredArticle ? (
            <FeaturedArticle
              key={index}
              img={article.img}
              title={article.title}
              time={article.time}
              summary={article.summary}
              link={article.link}
            />
          ) : null
        )}
      </ul>
      <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
        All Articles
      </h2>
      <ul className="w-full">
        {articleData.map((article, index) =>
          article.featuredArticle ? null : (
            <Article
              key={index}
              title={article.title}
              img={article.img}
              date={article.date}
              link={article.link}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Articles;
