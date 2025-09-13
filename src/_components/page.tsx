"use client";

import Header from "./header";
import { motion, type Variants } from "framer-motion";
import MenuButton from "./menu";

export default function Page({ children }: { children: React.ReactNode }) {
  const animate = (variants: Variants, custom?: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: { top: 0 },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
    }),
  };

  const numOfCols = 5;

  return (
    <div className="relative h-screen">
      <div className="pointer-events-none fixed top-0 left-0 z-4 flex h-screen w-screen">
        {Array.from({ length: numOfCols }).map((_, i) => (
          <motion.div
            key={i}
            className="relative z-4 h-full w-full bg-zinc-800"
            {...animate(expand, numOfCols - i)}
          />
        ))}
      </div>
      <Header />
      {children}
      <MenuButton />
    </div>
  );
}
