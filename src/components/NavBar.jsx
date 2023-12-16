"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";

const navLinks = [
  { path: "/", title: "Home" },
  { path: "/about/", title: "About" },
  { path: "/projects/", title: "Projects" },
  { path: "/articles/", title: "Articles" },
];

const socialLinks = [
  {
    path: "https://twitter.com",
    icon: <TwitterIcon />,
  },
  {
    path: "https://github.com",
    icon: <GithubIcon />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <LinkedInIcon />,
  },
  {
    path: "https://www.pinterest.com",
    icon: <PinterestIcon />,
    bgLight: true,
  },
  {
    path: "https://dribbble.com",
    icon: <DribbbleIcon />,
  },
];

const CustomLink = ({ href, title, className }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`absolute left-0 inline-block h-[1px] -bottom-0.5 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`relative group text-light dark:text-dark my-2 ${className}`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute left-0 inline-block h-[1px] -bottom-0.5 bg-light group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const MotionLink = motion(Link);

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* Nav */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <nav className="flex gap-6">
          {navLinks.map((link, index) => (
            <CustomLink
              key={index}
              href={link.path}
              title={link.title}
              className=""
            />
          ))}
        </nav>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((link, index) => (
            <MotionLink
              key={index}
              href={link.path}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-6  ${link.bgLight ? "bg-light rounded-full" : ""}`}
            >
              {link.icon}
            </MotionLink>
          ))}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center p-1 ml-3 rounded-full ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* mobileNav */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-between min-w-[70vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center ">
            {navLinks.map((link, index) => (
              <CustomMobileLink
                key={index}
                href={link.path}
                title={link.title}
                toggle={handleClick}
              />
            ))}
          </nav>
          <nav className="flex flex-wrap items-center justify-center gap-6 mt-2">
            {socialLinks.map((link, index) => (
              <MotionLink
                key={index}
                href={link.path}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-6 mx-3 sm:mx-1 ${
                  link.bgLight ? "bg-light rounded-full" : ""
                }`}
              >
                {link.icon}
              </MotionLink>
            ))}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center p-1 ml-3 rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
