"use client";

import React from "react";
import { Play } from "lucide-react";

export default function TrustSection() {
  return (
    <div className="max-w-400 mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 lg:px-12 border">
      {/* Text column */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl lg:text-4xl text-gray-800 leading-tight">
          Leading companies trust us
          <br />
          <span className="font-bold text-gray-900">to develop software</span>
        </h2>

        <p className="mt-6 text-gray-500 leading-relaxed">
          We{" "}
          <span className="text-pink-600 font-medium">
            add development capacity
          </span>{" "}
          to tech teams. Our value isn&apos;t limited to building teams but is
          distributed across the project lifecycle. We are a custom software
          development company that guarantees the successful delivery of your
          project.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-pink-700 font-medium hover:gap-3 transition-all"
        >
          <span>See more Informations</span>
          <span aria-hidden="true">{"->"}</span>
        </a>
      </div>

      {/* Video column */}
      <div className="flex-1 w-full bg-green-500">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            poster="/path-to-poster-image.jpg"
            src="https://youtu.be/JEHosJ4Yyr0?list=RD-8FiK4uuarw"
            muted
            playsInline
          />

          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm shadow-lg group-hover:scale-105 transition-transform">
              <Play className="h-6 w-6 text-purple-700 fill-purple-700 ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
