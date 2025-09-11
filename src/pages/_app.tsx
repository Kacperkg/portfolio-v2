import { type AppType } from "next/app";
import localFont from "next/font/local";

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

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <div className={Subjectivity.className}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
