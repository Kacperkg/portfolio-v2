import { type Variants, type MotionProps } from "framer-motion";

const animate = (variants: Variants, custom?: number): MotionProps => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

export default animate;
