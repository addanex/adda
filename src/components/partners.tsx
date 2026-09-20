"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/features/common/shadcn/carousel";

import { cn } from "cn";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Sampath Cream House", logo: "/logos/sampath.png" },
  { name: "AdClipse", logo: "/logos/adclipse.png" },
  { name: "PJC Bridge", logo: "/logos/pjc-bridge.png" },
  { name: "ClickOrder", logo: "/logos/clickorder.png" },
  { name: "TechMate", logo: "/logos/techmate.png" },
];

export default function Partners() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="w-full flex flex-col">
      {/* Header row */}
      <div className="flex items-start justify-between w-400 mx-auto">
        <h2 className="text-3xl text-gray-800 leading-tight">
          Meet the People
          <br />
          <span className="font-bold text-gray-900">We are Working With</span>
        </h2>

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous"
            className="flex items-center justify-center h-10 w-10 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Logo strip */}
      <div className="w-full bg-gray-50 py-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-4 lg:px-12"
        >
          <CarouselContent className="-ml-8">
            {partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "pl-8 basis-1/2 md:basis-1/3 lg:basis-1/5",
                  "flex items-center justify-center",
                )}
              >
                <div className="relative h-10 w-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
