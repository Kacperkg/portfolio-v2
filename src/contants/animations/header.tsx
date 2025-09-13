import { type Variants } from "framer-motion";

const slideOutHeader: Variants = {
  initial: {
    y: "-100%",
  },
  enter: {
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.2,
    },
  },
};

export { slideOutHeader };
