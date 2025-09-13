import { motion, type Variants, type MotionProps } from "framer-motion";
import Head from "next/head";
import Page from "~/_components/page";
import TypescriptIcon from "~/_components/svg/typescript";
import NextjsIcon from "~/_components/svg/nextjs";
import ReactIcon from "~/_components/svg/react";
import FramermotionIcon from "~/_components/svg/motion";
import VercelIcon from "~/_components/svg/vercel";
import FigmaIcon from "~/_components/svg/figma";
import UnderLineLink from "~/_components/underLineLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kacper Gajdarski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        {/* Title */}
        <div className="flex h-[80vh] flex-col items-center justify-center px-2">
          <div className="flex w-full flex-col justify-end overflow-hidden">
            <motion.h1
              className="text-center text-4xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7em]/40"
              {...animate(slideIn)}
            >
              [ Front-End Dev ]
            </motion.h1>
          </div>
          {/* Quick Links */}
          <div className="mt-20 flex flex-col items-center justify-center gap-10 text-xl sm:flex-row xl:text-2xl">
            {[
              { link: "/projects", label: "[ Projects ]" },
              { link: "/about", label: "[ about ]" },
            ].map(({ link, label }, index) => (
              <UnderLineLink key={label} link={link}>
                <div className="overflow-hidden">
                  <motion.p {...animate(slideInLink, index)}>{label}</motion.p>
                </div>
              </UnderLineLink>
            ))}
          </div>
          {/* Scroller */}
          <ScrollItems />
        </div>
      </Page>
    </>
  );
}

const animate = (variants: Variants, custom?: number): MotionProps => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

const slideIn: Variants = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: {
      delay: 1,
      duration: 0.1,
    },
  },
  exit: { y: 0 },
};

const slideInLink: Variants = {
  initial: {
    y: "100%",
  },
  enter: (i: number) => ({
    y: 0,
    transition: {
      delay: 0.4 * (i + 3),
      duration: 0.1,
    },
  }),
  exit: { y: 0 },
};

const logos = [
  {
    name: "TypeScript",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <TypescriptIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Next.js",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <NextjsIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "React",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <ReactIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Framer Motion",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FramermotionIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Vercel",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <VercelIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Figma",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FigmaIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "TypeScript",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <TypescriptIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Next.js",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <NextjsIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "React",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <ReactIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Framer Motion",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FramermotionIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Vercel",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <VercelIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Figma",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FigmaIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "TypeScript",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <TypescriptIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Next.js",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <NextjsIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "React",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <ReactIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Framer Motion",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FramermotionIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Vercel",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <VercelIcon {...props} color="#27272a" />
    ),
  },
  {
    name: "Figma",
    component: (props: React.SVGProps<SVGSVGElement>) => (
      <FigmaIcon {...props} color="#27272a" />
    ),
  },
];

const ScrollItems = () => {
  return (
    <div className="relative z-0 mx-auto mt-20 h-[100px] w-[90%] max-w-[1536px] overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]">
      <motion.div
        className="flex"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="mx-2 flex h-[100px] w-[200px] items-center justify-center rounded-md"
            title={logo.name}
          >
            {logo.component ? (
              <logo.component
                className="max-h-[60px] max-w-[120px]"
                width={120}
                height={60}
                color="#27272a"
              />
            ) : null}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
