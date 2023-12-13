import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark">
      <div className="flex items-center justify-between w-full p-32 py-8 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center ">
          Build With <span className="px-1 text-2xl text-primary">&#9825;</span>{" "}
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
