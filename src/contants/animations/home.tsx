import { type Variants } from "framer-motion";

const slideInTitle: Variants = {
  initial: {
    y: "100%",

    scale: 0.7,
  },
  enter: {
    y: 0,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.2,
    },
  },
  exit: { y: 0, scale: 0, opacity: 0 },
};

const slideInLink: Variants = {
  initial: {
    y: "100%",
    scale: 0.5,
  },
  enter: (i: number) => ({
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4 * (i + 3),
      duration: 0.1,
    },
  }),
  exit: { y: 0, scale: 0, opacity: 0 },
};

const scrollSlideIn: Variants = {
  initial: {
    x: "200%",
  },
  enter: {
    x: 0,

    transition: {
      delay: 2,
      duration: 0.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    x: "-200%",
  },
};

export { slideInTitle, slideInLink, scrollSlideIn };
