"use client";

import React from "react";
import {
  Rocket,
  Code2,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Lock,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  paragraph: string;
};

const features: Feature[] = [
  {
    icon: Rocket,
    title: "UX Driven Engineering",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: Code2,
    title: "Developing Shared Understanding",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: Activity,
    title: "Proven Experience and Expertise",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Intellectual Property (IP)",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: CheckCircle2,
    title: "Code Reviews",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: Lock,
    title: "Quality Assurance & Testing",
    paragraph:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
];

export default function Approach() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4 bg-gray-50">
      {/* Header */}
      <h2 className="text-3xl text-gray-800 text-center leading-tight mb-16">
        Our design and
        <br />
        <span className="font-bold text-gray-900">development approach</span>
      </h2>

      {/* Grid */}
      <div className="w-full max-w-400 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex gap-5 p-8 bg-white border border-gray-200 rounded-xl"
            >
              <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Unlike other companies, we are a{" "}
                  <span className="text-primary font-medium">UX first</span>{" "}
                  development company. Projects are driven by designers and they
                  make sure design and experiences translate to code.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
