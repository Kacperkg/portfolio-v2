import Page from "~/_components/page";
import yellow1 from "../../public/yellow-2.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { slideInTitle } from "~/contants/animations/home";
import animate from "~/contants/animations/animate";

export default function AboutPage() {
  const coloredSectionRef = useRef<HTMLDivElement>(null!);
  const cardRef = useRef(null);
  const cardTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "end end"],
  });
  const { scrollYProgress: textScroll } = useScroll({
    target: cardRef,
    offset: ["start 0.3", "end end"],
  });

  const textSlide = useTransform(textScroll, [0, 1], ["100%", "0%"]);

  const right = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 1],
    ["-300%", "-150%", "-120%", "-45%"],
  );

  const rightDelayed = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 1],
    ["-300%", "-150%", "-120%", "-45%"],
  );
  const rotateCard = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [20, -10]);

  const whoAmI =
    "hey im kacper, a computing science (software engineering) graduate from heriot-watt university, specialising in front-end development. i enjoy building responsive, user-friendly web apps with modern technologies. (also who doesn't like a bit of animation?)";

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
        <motion.div
          ref={coloredSectionRef}
          className="mt-40 h-screen bg-zinc-800 px-8 text-stone-200"
          initial={{ scale: 0.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section className="flex h-screen w-full flex-col justify-center">
            <div className="flex">
              <h3 className="flex flex-1 text-5xl font-bold">[ Experience ]</h3>
              <ul className="flex flex-2 flex-col gap-8 text-xl">
                {[
                  {
                    period: "2021-2025",
                    title: "Heriot-Watt University",
                    subtitle:
                      "bsc computing science (software engineering) 2:1",
                    location: "edinburgh",
                  },
                  {
                    period: "2024-present",
                    title: "Samsung Experience Store",
                    subtitle: "customer experience expert & level 1 engineer",
                    location: "edinburgh",
                  },
                  {
                    period: "2022-2024",
                    title: "Virgin Media O2",
                    subtitle: "sales advisor",
                    location: "edinburgh, gyle",
                  },
                ].map((item, idx, arr) => (
                  <>
                    <li key={idx} className="flex w-full flex-col gap-8">
                      <div className="flex justify-between">
                        <h3>{item.period}</h3>
                        <h3 className="font-bold">{item.title}</h3>
                      </div>
                      <div className="flex justify-between">
                        <h3>{item.subtitle}</h3>
                        <h3>{item.location}</h3>
                      </div>
                    </li>
                    {idx < arr.length - 1 && (
                      <li key={`divider-${idx}`}>
                        <div className="h-px w-full bg-stone-200/50" />
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </section>
        </motion.div>
      </section>
    </Page>
  );
}
