"use client";

import LineThroughAnim from "./lineThroughAnim";
import UnderLineLink from "./underLineLink";

export default function Header() {
  return (
    <header className="border-stone/20 border-b p-4 font-medium">
      <div className="mx-auto flex max-w-7xl items-start justify-between">
        <div className="flex cursor-default flex-col gap-1.5 uppercase">
          {["Kacper Gajdarski", "Comp Sci Grad", "At Heriot-Watt"].map(
            (text) => (
              <LineThroughAnim key={text}>
                <h3 className="text-sm">{text}</h3>
              </LineThroughAnim>
            ),
          )}
        </div>

        <div className="flex cursor-default flex-col gap-2 text-sm uppercase">
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

        <div className="flex cursor-default flex-col gap-2 text-sm uppercase">
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
