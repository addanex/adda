"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { cn } from "cn";

type CaseStudy = {
  title: string;
  description: string;
  images: string[]; // phone mockup screenshots, left to right
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    images: [
      "/case-studies/firefit-1.png",
      "/case-studies/firefit-2.png",
      "/case-studies/firefit-3.png",
    ],
    link: "#",
  },
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    images: [
      "/case-studies/mygoals-1.png",
      "/case-studies/mygoals-2.png",
      "/case-studies/mygoals-3.png",
    ],
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4 gap-10 bg-gray-50">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 leading-tight">
          Our recent
          <br />
          <span className="font-bold text-gray-900">Case studies</span>
        </h2>
      </div>

      {/* Case study cards */}
      <div className="w-full max-w-400 flex flex-col gap-8">
        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row bg-primary/5"
            >
              {/* Phone mockups panel */}
              <div
                className={cn(
                  "flex items-end justify-center gap-4 p-8 md:w-1/2",
                  isEven ? "bg-primary/15" : "bg-primary/25",
                )}
              >
                {study.images.map((src, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-27.5 aspect-9/19 rounded-[1.5rem] overflow-hidden border-4 border-black bg-black shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`${study.title} screen ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text panel */}
              <div className="flex flex-col justify-center gap-4 p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {study.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {study.description}
                </p>
                <a
                  href={study.link}
                  className="self-end inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                >
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
