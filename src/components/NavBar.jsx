"use client";
import Link from "next/link";
import React from "react";
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

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const MotionLink = motion(Link);

  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light">
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
            className="w-6 "
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
