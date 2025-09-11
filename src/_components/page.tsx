"use client";

import Header from "./header";
import { motion, type Variants } from "framer-motion";

export default function Page({ children }: { children: React.ReactNode }) {
  const animate = (variants: Variants, custom?: Number) => {
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
    enter: (i: any) => ({
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
    exit: (i: any) => ({
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
      <div className="pointer-events-none fixed top-0 left-0 flex h-screen w-screen">
        {[...Array(numOfCols)].map((_, i) => (
          <motion.div
            key={i}
            className="relative z-4 h-full w-full bg-zinc-800"
            {...animate(expand, numOfCols - i)}
          />
        ))}
      </div>
      <Header />
      {children}
    </div>
  );
}
