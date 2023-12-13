import Link from "next/link";
import React from "react";

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
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
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
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
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
