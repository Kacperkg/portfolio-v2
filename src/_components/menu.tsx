import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import LineThroughAnim from "./lineThroughAnim";
import UnderLineLink from "./underLineLink";
import animate from "../contants/animations/animate";

export default function MenuButton() {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="fixed bottom-12 left-[50%] w-fit -translate-x-1/2 text-xl font-medium text-white"
      {...animate(fadeIn)}
    >
      <button
        className="relative flex items-center justify-between gap-8 rounded-xl bg-zinc-800"
        onClick={() => setActive((prev) => !prev)}
      >
        <h2 className="z-5 rounded-xl bg-zinc-800 px-10 py-2">Menu</h2>
        <motion.div
          className="absolute bottom-3 left-1/2 flex h-[100px] w-[136px] origin-top -translate-x-1/2 flex-col items-center rounded-xl bg-zinc-800"
          animate={{ height: active ? 200 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="text-md mt-2 flex flex-col gap-4 py-2 text-left font-normal">
            {[
              { link: "/", label: "Home" },
              { link: "/projects", label: "Projects" },
              { link: "/about", label: "About" },
            ].map(({ link, label }, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
                transition={{
                  duration: 0.2,
                  delay: active ? 0.1 * (i + 1) : 0,
                }}
              >
                <LineThroughAnim>
                  <UnderLineLink link={link}>{label}</UnderLineLink>
                </LineThroughAnim>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </button>
    </motion.div>
  );
}

const fadeIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.25,
    },
  },
  exit: { opacity: 0, scale: 0 },
};
