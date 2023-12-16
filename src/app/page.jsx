import Image from "next/image";
import profilePic from "@/public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "@/public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between w-full dark:text-light lg:flex-col">
        <div className="w-1/2 md:w-full">
          <Image
            src={profilePic}
            alt="sampleName"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
          <AnimatedText
            text={"Turning Vision Into Reality With Code And Design."}
            className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center">
            <Link
              href="/dummy.pdf"
              target="_blank"
              download={true}
              className="flex items-center p-2 px-6 text-lg font-semibold border-2 border-transparent border-solid rounded-lg bg-dark text-light hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
            >
              Resume
              <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link
              href="mailto:sureshmadawa763@gmail.com"
              target="_blank"
              className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
        <Image src={lightBulb} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}
