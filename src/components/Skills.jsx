import React from "react";
import { motion } from "framer-motion";

const skillData = [
  { name: "Web", x: "0vw", y: "0vw" },
  { name: "HTML", x: "-25vw", y: "2vw" },
  { name: "CSS", x: "-5vw", y: "-10vw" },
  { name: "Javascript", x: "20vw", y: "6vw" },
  { name: "ReactJS", x: "0vw", y: "12vw" },
  { name: "NextJS", x: "-20vw", y: "-15vw" },
  { name: "GatsbyJS", x: "15vw", y: "-12vw" },
  { name: "Web Design", x: "32vw", y: "-5vw" },
  { name: "Figma", x: "0vw", y: "-20vw" },
  { name: "Firebase", x: "-25vw", y: "18vw" },
  { name: "Tailwind CSS", x: "18vw", y: "18vw" },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full">
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark lg:p-6 md:p-4 xs:text-xs xs:p-2 lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        {skillData.map((item, index) => (
          <Skill key={index} name={item.name} x={item.x} y={item.y} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
