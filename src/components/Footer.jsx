import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base">
      <div className="flex items-center justify-between w-full p-32 py-8 sm:p-0 sm:py-5 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link
            href=""
            target="_blank"
            className="underline underline-offset-2"
          >
            SampleName
          </Link>
        </div>
        <Link href="" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
