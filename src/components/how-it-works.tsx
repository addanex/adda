"use client";

import React from "react";

type Step = {
  number: number;
  title: string;
  description: string;
  position: "top" | "bottom";
};

const steps: Step[] = [
  {
    number: 1,
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    position: "top",
  },
  {
    number: 2,
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    position: "bottom",
  },
  {
    number: 3,
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    position: "top",
  },
  {
    number: 4,
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    position: "bottom",
  },
  {
    number: 5,
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
    position: "top",
  },
  {
    number: 6,
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
    position: "bottom",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h2 className="text-3xl text-gray-800 text-center leading-tight mb-16">
        How development
        <br />
        <span className="font-bold text-gray-900">through Alcaline works</span>
      </h2>

      <div className="w-full max-w-400">
        {/* Top row */}
        <div className="grid grid-cols-3 gap-8 px-8">
          {steps
            .filter((s) => s.position === "top")
            .map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
        </div>

        {/* Timeline line with ticks */}
        <div className="relative flex items-center h-16 mt-4 mb-4">
          <div className="absolute inset-x-0 h-0.5 bg-primary" />
          <div className="w-full flex justify-between px-[calc(100%/12)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`relative w-0.5 h-6 bg-primary ${
                  step.position === "top" ? "-translate-y-1/2" : "translate-y-1/2"
                }`}
              />
            ))}
          </div>
          <div className="absolute right-0 translate-x-full text-2xl">
            🏆
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-8 px-8">
          {steps
            .filter((s) => s.position === "bottom")
            .map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl">
      <p className="mb-2">
        <span className="text-primary font-bold">#{step.number}</span>{" "}
        <span className="font-bold text-gray-900">{step.title}</span>
      </p>
      <p className="text-gray-500 text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}