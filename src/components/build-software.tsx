"use client";

import React from "react";
import Image from "next/image";

import { cn } from "cn";

type Block = {
  heading: string;
  paragraph: string;
  highlightedPhrase: string;
  paragraphAfterHighlight: string;
  quote: string;
  personName: string;
  personRole: string;
  personAvatar: string;
  image: string;
  imageAlt: string;
};

const blocks: Block[] = [
  {
    heading: "Build the right team to scale",
    paragraph:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    highlightedPhrase: "delivery model",
    paragraphAfterHighlight: " helps you cut costs and deliver within budget.",
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    personName: "Jeewa markram",
    personRole: "CEO",
    personAvatar: "/avatars/jeewa-1.jpg",
    image: "/case-studies/team-planning.jpg",
    imageAlt: "Team planning around a whiteboard",
  },
  {
    heading: "Build the right team to scale",
    paragraph:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    highlightedPhrase: "delivery model",
    paragraphAfterHighlight: " helps you cut costs and deliver within budget.",
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    personName: "Jeewa markram",
    personRole: "CEO",
    personAvatar: "/avatars/jeewa-2.jpg",
    image: "/case-studies/workshop.jpg",
    imageAlt: "Presenter speaking to a seated audience",
  },
  {
    heading: "Build the right team to scale",
    paragraph:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    highlightedPhrase: "delivery model",
    paragraphAfterHighlight: " helps you cut costs and deliver within budget.",
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    personName: "Jeewa markram",
    personRole: "CEO",
    personAvatar: "/avatars/jeewa-2.jpg",
    image: "/case-studies/workshop.jpg",
    imageAlt: "Presenter speaking to a seated audience",
  },
];

export default function BuildingSoftware() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h2 className="text-3xl text-gray-800 text-center leading-tight mb-16">
        Way of building
        <br />
        <span className="font-bold text-gray-900">Great Software</span>
      </h2>

      <div className="w-full max-w-400 flex flex-col gap-20">
        {blocks.map((block, index) => {
          const imageFirst = index % 2 !== 0;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Image */}
              <div
                className={cn(
                  "w-full md:w-1/2",
                  imageFirst ? "md:order-1" : "md:order-2",
                )}
              >
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={cn(
                  "w-full md:w-1/2 flex flex-col gap-4",
                  imageFirst ? "md:order-2" : "md:order-1",
                )}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {block.heading}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {block.paragraph}
                </p>

                <p className="text-gray-500 leading-relaxed">
                  Our{" "}
                  <span className="text-primary font-medium">
                    {block.highlightedPhrase}
                  </span>
                  {block.paragraphAfterHighlight}
                </p>

                <blockquote className="border-l-2 border-primary pl-4 italic text-primary/80">
                  &ldquo;{block.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-2">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={block.personAvatar}
                      alt={block.personName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {block.personName}
                    </p>
                    <p className="text-xs text-gray-400">{block.personRole}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
