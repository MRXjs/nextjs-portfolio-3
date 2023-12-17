"use client";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";

const Template = ({ children }) => {
  return (
    <AnimatePresence mode="await">
      <main className="z-0 inline-block w-full h-full p-32 pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <TransitionEffect />
        {children}
      </main>
    </AnimatePresence>
  );
};

export default Template;
