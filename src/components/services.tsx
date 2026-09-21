"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/features/common/shadcn/carousel";

import { cn } from "cn";
import Wrapper from "./wrapper";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: "/images/services/web-design.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We can help you to build a mobile app for your business. We can help you to build a mobile app for your business. We can help you to build a mobile app for your business.",
    image: "/images/services/mobile-app.png",
  },
  {
    id: 3,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 4,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 5,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 6,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 7,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 8,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 9,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
  {
    id: 10,
    title: "Software Testing & QA",
    description:
      "We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality. We can help you to test your software and ensure that it is of the highest quality.",
    image: "/images/services/software-testing.png",
  },
];

export default function Services() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    if (!api) return;

    const syncState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    syncState(); // initial sync

    api.on("select", syncState);
    api.on("reInit", syncState); // fires when breakpoints change slide count

    return () => {
      api.off("select", syncState);
      api.off("reInit", syncState);
    };
  }, [api]);

  return (
    <Wrapper className="flex flex-col gap-6 border">
      <div className="flex flex-col gap-2 items-center max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Services We Offers</h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          magnam delectus dolorem ipsa corrupti inventore eum fugit rem unde
          eius iure?
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((item, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    className={cn(
                      "flex flex-col gap-4 rounded-xl border bg-white p-6 h-full transition-all",
                      isActive
                        ? "border-primary shadow-lg"
                        : "border-transparent",
                    )}
                  >
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/30 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <h3
                      className={cn(
                        "font-semibold text-lg",
                        isActive ? "text-primary" : "text-gray-900",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors cursor-pointer",
                  index === current ? "bg-primary" : "bg-gray-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-gray-800 ml-auto">
            <span>{String(current + 1).padStart(2, "0")}</span>
            <div className="relative w-24 h-0.5 bg-gray-200">
              <div
                className="absolute left-0 top-0 h-0.5 bg-primary transition-all"
                style={{
                  width: `${count > 0 ? ((current + 1) / count) * 100 : 0}%`,
                }}
              />
            </div>
            <span>{String(count).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
