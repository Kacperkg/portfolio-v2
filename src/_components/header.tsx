"use client";

import LineThroughAnim from "./lineThroughAnim";

export default function Header() {
  return (
    <header className="border-stone/20 border-b p-4 font-medium">
      <div className="mx-auto flex max-w-7xl items-start justify-between">
        <div className="flex w-full cursor-default justify-between gap-1.5 uppercase md:w-fit md:flex-col">
          {["Kacper Gajdarski", "Comp Sci Grad", "At Heriot-Watt"].map(
            (text) => (
              <LineThroughAnim key={text}>
                <h3 className="text-sm">{text}</h3>
              </LineThroughAnim>
            ),
          )}
        </div>

        <div className="hidden cursor-default gap-2 text-sm uppercase md:flex md:flex-col">
          {[
            { text: "On-site", className: "text-base" },
            { text: "Edinbrugh" },
            { text: "Glasgow" },
          ].map(({ text, className }) => (
            <LineThroughAnim key={text}>
              <h3 className={className}>{text}</h3>
            </LineThroughAnim>
          ))}
        </div>

        <div className="hidden cursor-default flex-col gap-2 text-sm uppercase md:flex">
          {[
            { text: "remote", className: "text-base" },
            { text: "united-kingdom" },
            { text: "poland" },
            { text: "Europe" },
          ].map(({ text, className }) => (
            <LineThroughAnim key={text}>
              <h3 className={className}>{text}</h3>
            </LineThroughAnim>
          ))}
        </div>
      </div>
    </header>
  );
}
