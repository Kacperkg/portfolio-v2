import Page from "~/_components/page";
import yellow1 from "../../public/yellow-2.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { slideInTitle } from "~/contants/animations/home";
import animate from "~/contants/animations/animate";

export default function AboutPage() {
  const coloredSectionRef = useRef<HTMLDivElement>(null!);

  const { scrollYProgress: horiScroll } = useScroll({
    target: coloredSectionRef,
  });

  const x = useTransform(horiScroll, [0, 1], ["1%", "-95%"]);

  const fadeIn: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Page observedRef={coloredSectionRef}>
      <section className="m-auto flex flex-col uppercase">
        {/* hero */}
        <div className="relative flex h-[60vh] flex-col items-center justify-center">
          <div className="flex w-full flex-col justify-end overflow-hidden">
            <motion.h1
              className="text-center text-4xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7em]/40"
              {...animate(slideInTitle)}
            >
              [ About ]
            </motion.h1>
          </div>
          <motion.p
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-zinc-800/50"
            {...animate(fadeIn)}
          >
            Scroll
          </motion.p>
        </div>

        {/* who am i */}
        <WhoAmI />

        <motion.div
          ref={coloredSectionRef}
          className="relative mt-40 h-[200vh] bg-zinc-800 text-stone-200"
          initial={{ scaleY: 0.1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ amount: "some", margin: "0px 0px 50% 0px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="sticky top-0 flex h-screen overflow-hidden">
            <motion.div className="flex gap-4" style={{ x }}>
              {/* Experience Section */}
              <section className="flex h-screen min-w-screen flex-col items-center justify-center">
                <motion.h3
                  className="text-center text-7xl font-bold"
                  initial={{ x: "-100%", opacity: 0, scale: 0.3 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 1, duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  [ Experience ]
                </motion.h3>
                <ExperienceAndEducation />
              </section>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Page>
  );
}

const WhoAmI = () => {
  const cardRef = useRef(null);
  const cardTextRef = useRef(null);

  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "end end"],
  });

  const { scrollYProgress: textScroll } = useScroll({
    target: cardRef,
    offset: ["start 0.3", "end end"],
  });

  const textSlide = useTransform(textScroll, [0, 1], ["100%", "0%"]);

  const right = useTransform(
    cardScroll,
    [0, 0.05, 0.1, 1],
    ["-300%", "-150%", "-120%", "-45%"],
  );

  const rightDelayed = useTransform(
    cardScroll,
    [0, 0.05, 0.5, 1],
    ["-300%", "-150%", "-120%", "-45%"],
  );
  const rotateCard = useTransform(cardScroll, [0, 1], [20, -20]);
  const rotateImg = useTransform(cardScroll, [0, 1], [20, -10]);

  const whoAmI =
    "hey im kacper, a graduate from heriot-watt university, specialising in front-end development. i enjoy building responsive, user-friendly web apps with modern technologies. (also who doesn't like a bit of animation?)";

  return (
    <div
      className="m-auto mt-100 flex h-[90vh] max-w-7xl flex-col-reverse lg:flex-row"
      ref={cardRef}
    >
      <div className="flex basis-full flex-col justify-center gap-8">
        <div className="w-fit overflow-hidden" ref={cardTextRef}>
          <motion.h1
            className="text-4xl font-bold"
            style={{
              y: textSlide,
            }}
          >
            [ so who am i ]
          </motion.h1>
        </div>
        {/* Animated word-by-word  */}
        <div className="overflow-hidden text-2xl leading-relaxed">
          {whoAmI.split(" ").map((word, idx) => (
            <div
              key={idx}
              className="mr-2 inline-block overflow-hidden align-bottom"
            >
              <motion.span
                className="inline-block"
                style={{
                  y: textSlide,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex basis-full">
        <motion.div
          style={{
            right: right,
            rotate: rotateCard,
          }}
          className="absolute left-1/2 aspect-[17/25] h-full -translate-x-1/2 -translate-y-1/2 scale-150 rounded-xl bg-zinc-800 lg:top-1/2 lg:-right-1/4 lg:left-[auto] lg:h-7/10 lg:translate-x-0 lg:scale-100 xl:h-8/10"
        />
        <motion.div
          style={{
            right: rightDelayed,
            rotate: rotateImg,
          }}
          className="absolute left-1/2 aspect-[17/25] h-full -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden rounded-xl lg:top-1/2 lg:-right-1/4 lg:left-[auto] lg:h-7/10 lg:translate-x-0 lg:scale-100 xl:h-8/10"
        >
          <Image
            src={yellow1}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

const experienceItems = [
  {
    key: "samsung",
    title: "Samsung Experience Store",
    date: "11/2024 - Present",
    role: "Customer Expert & Level 1 Engineer",
    location: "Edinburgh",
  },
  {
    key: "virgin",
    title: "Virgin Media O2",
    date: "05/2022 - 11/2024",
    role: "Sales Expert",
    location: "Edinburgh",
  },

  {
    key: "hw",
    title: "Heriot-Watt University",
    date: "2021 - 2025",
    role: "BSc Computing Science (Software Engineering)",
    location: "Edinburgh",
  },
];

const ExperienceAndEducation = () => {
  return (
    <section className="mt-40 flex w-full flex-col items-center justify-center">
      <motion.div
        className="flex h-full max-h-[80vh] w-full max-w-6xl flex-col gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {experienceItems.map((item, idx) => (
          <motion.div key={item.key} className="flex flex-col gap-2">
            {/* Title and Date */}
            <div className={`flex items-center justify-between`}>
              <h3 className="text-xl">{item.title}</h3>
              <h3 className="text-sm font-bold">{item.date}</h3>
            </div>
            {/* Role and Location */}
            <div className="flex justify-between">
              <h3 className="text-sm">{item.role}</h3>
              <h3 className="text-sm">{item.location}</h3>
            </div>
            {/* Divider except after last item */}
            {idx < experienceItems.length - 1 && (
              <div className="mt-2 h-px w-full bg-zinc-300/50" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
