import { type AppType } from "next/app";
import { type AppProps } from "next/app";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/react";

import "~/styles/globals.css";
import { AnimatePresence } from "framer-motion";

const Subjectivity = localFont({
  src: [
    {
      path: "../fonts/Subjectivity-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Super.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const MyApp: AppType = ({ Component, pageProps, router }: AppProps) => {
  return (
    <div className={Subjectivity.className}>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          smoothWheel: true,
        }}
      >
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
    </div>
  );
};

export default MyApp;
