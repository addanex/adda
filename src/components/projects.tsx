"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

import { cn } from "cn";
import Wrapper from "./wrapper";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Escaply",
    tagline: "Escaply - Making Education Fun!",
    description: "Turn learning into an adventure",
    image: "/projects/escaply.png",
    imageAlt: "Escaply website and app preview",
    href: "#",
  },
  {
    title: "Link-Builders",
    tagline: "Data-Driven Link Building",
    description: "Time to Upgrade?",
    image: "/projects/link-builders.png",
    imageAlt: "Link-Builders website preview",
    href: "#",
  },
  {
    title: "AffCollect",
    tagline: "Finally, a Simple & Accurate Stat Collector",
    description:
      "AffCollect is a one-stop-shop solution that places data accuracy, reliability, and ease of use at the forefront.",
    image: "/projects/affcollect.png",
    imageAlt: "AffCollect dashboard preview",
    href: "#",
  },
  {
    title: "Arkena",
    tagline: "Sourcing Smallholder Coffee Made Easy",
    description:
      "Better coffee, better people. Building community through coffee.",
    image: "/projects/arkena.png",
    imageAlt: "Arkena website and app preview",
    href: "#",
  },
];

export default function Projects() {
  return (
    <Wrapper className="flex flex-col gap-6 border">
      <div className="flex flex-col gap-2 items-center max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          magnam delectus dolorem ipsa corrupti inventore eum fugit rem unde
          eius iure, sunt, repellendus veritatis cupiditate quas nostrum quae
          voluptatem ea?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="flex justify-end">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-primary hover:text-primary transition-colors"
        >
          View All Projects
        </a>
      </div>
    </Wrapper>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group relative w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-50"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-contain object-bottom p-6 transition-opacity duration-300 group-hover:opacity-20"
      />

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center text-center px-8",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        )}
      >
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.tagline}</p>

        <span className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 text-gray-900 text-sm font-medium bg-white">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}
