import { motion, type Variants, type MotionProps } from "framer-motion";

const LineSlide: Variants = {
  initial: {
    scaleX: 1,
    originX: 1,
  },
  enter: {
    scaleX: 0,
    originX: 1,
    transition: {
      delay: 0.6,
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
    transitionEnd: {
      scaleX: 0,
      originX: 1,
    },
  },
  exit: {
    scaleX: 0,
    originX: 1,
  },
};

const animate = (variants: Variants): MotionProps => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const LineThroughAnim = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none absolute h-full w-full bg-zinc-800"
        {...animate(LineSlide)}
      />
      {children}
    </div>
  );
};

export default LineThroughAnim;
