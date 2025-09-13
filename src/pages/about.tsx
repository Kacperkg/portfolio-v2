import Page from "~/_components/page";
import yellow1 from "../../public/yellow-2.jpeg";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { slideInTitle } from "~/contants/animations/home";
import animate from "~/contants/animations/animate";

export default function AboutPage() {
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
    <Page>
      <section className="m-auto flex max-w-7xl flex-col px-2 uppercase md:px-8">
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
          className="mt-100 flex h-[90vh] flex-col-reverse lg:flex-row"
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
        <div className="h-screen"></div>
      </section>
    </Page>
  );
}
