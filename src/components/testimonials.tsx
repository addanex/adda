"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/features/common/shadcn/carousel";

import { cn } from "cn";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string;
  rating: number; // 1-5
};

const testimonials: Testimonial[] = [
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    quote:
      "Without any doubt I recommend our team as one of the best web design and digital marketing agencies. Wouldn't hesitate to introduce their work to someone else.",
    avatar: "/avatars/romeena-1.jpg",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    quote:
      "The team understood our brand instantly and delivered a product that exceeded what we imagined going in.",
    avatar: "/avatars/romeena-2.jpg",
    rating: 5,
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    quote:
      "Without any doubt I recommend this team as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't hesitate to introduce their work to someone else.",
    avatar: "/avatars/imran.jpg",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    quote:
      "Communication was clear from day one and every milestone was delivered on time.",
    avatar: "/avatars/romeena-3.jpg",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    quote:
      "A genuinely reliable partner for anything from design to full product builds.",
    avatar: "/avatars/romeena-4.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const syncState = () => setCurrent(api.selectedScrollSnap());

    syncState();
    api.on("select", syncState);
    api.on("reInit", syncState);

    return () => {
      api.off("select", syncState);
      api.off("reInit", syncState);
    };
  }, [api]);

  const active = testimonials[current];

  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h2 className="text-3xl text-gray-800 text-center leading-tight">
        Why customers love
        <br />
        <span className="font-bold text-gray-900">working with us</span>
      </h2>

      {/* Quote row with nav arrows */}
      <div className="w-full max-w-400 flex items-center gap-4 mt-10">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous testimonial"
          className="shrink-0 flex items-center justify-center h-11 w-11 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <p className="flex-1 text-center text-gray-500 leading-relaxed min-h-24">
          {active.quote}
        </p>

        <button
          type="button"
          onClick={() => api?.scrollNext()}
          aria-label="Next testimonial"
          className="shrink-0 flex items-center justify-center h-11 w-11 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Avatar selector row */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-4xl mt-12"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((person, index) => {
            const isActive = index === current;
            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/3 md:basis-1/5"
              >
                <button
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className="w-full flex flex-col items-center gap-3 cursor-pointer"
                >
                  <div
                    className={cn(
                      "relative h-16 w-16 rounded-full overflow-hidden transition-all",
                      isActive
                        ? "ring-2 ring-primary ring-offset-2"
                        : "opacity-70",
                    )}
                  >
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={cn(
                          "h-3.5 w-3.5",
                          starIndex < person.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200",
                        )}
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-primary" : "text-gray-400",
                      )}
                    >
                      {person.name}
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        isActive ? "text-gray-700" : "text-gray-300",
                      )}
                    >
                      {person.role}
                    </p>
                  </div>
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}