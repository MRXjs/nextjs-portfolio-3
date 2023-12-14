import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/public/images/projects/crypto-screener-cover-image.jpg";

const projectData = [
  {
    type: "Featured Project",
    title: "Crypto Screener Application",
    summary: `A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`,
    img: { project1 },
    link: "/",
    github: "/",
  },
  {
    type: "Featured Project",
    title: "Crypto Screener ",
    summary: `A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`,
    img: { project1 },
    link: "/",
    github: "/",
  },
];

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer"
      >
        <Image src={project1} alt={title} className="w-full h-auto " />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article>
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <Image src={project1} alt={title} className="w-full h-auto " />
      </Link>
      <div className="flex flex-col items-start justify-between w-full pl-6">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left">{title}</h2>
        </Link>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16 mb-16">
      <AnimatedText text={`Imagination Trumps Knowledge!`} className="mb-16" />
      <div className="grid grid-cols-12 gap-24">
        {projectData.map((item, index) => (
          <div key={item.title + index} className="col-span-12">
            {item.featuredProject ? (
              <FeaturedProject
                type={item.type}
                title={item.title}
                summary={item.summary}
                img={item.img}
                link={item.link}
                github={item.github}
              />
            ) : null}
          </div>
        ))}
        {projectData.map((item, index) => (
          <div key={item.title + index} className="col-span-6">
            {!item.featuredProject ? (
              <Project
                title={item.title}
                type={item.type}
                img={item.img}
                link={item.link}
                github={item.github}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
