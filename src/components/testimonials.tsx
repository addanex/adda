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
import Wrapper from "./wrapper";
import Autoplay from "embla-carousel-autoplay";

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

    syncState();

    api.on("select", syncState);
    api.on("reInit", syncState);

    return () => {
      api.off("select", syncState);
      api.off("reInit", syncState);
    };
  }, [api]);

  return (
    <Wrapper className="flex flex-col gap-6 border">
      <div className="flex flex-col gap-2 items-center max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          magnam delectus dolorem ipsa corrupti inventore eum fugit rem unde
          eius iure?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Counter — top right */}
        <div className="flex justify-end text-sm font-medium text-gray-800">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-gray-400">/</span>
          <span>{String(count).padStart(2, "0")}</span>
        </div>

        {/* Carousel */}
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
            {testimonials.map((item, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={cn(
                      "flex flex-col gap-4 rounded-xl border bg-white p-6 h-full transition-all",
                      isActive
                        ? "border-primary shadow-lg"
                        : "border-transparent",
                    )}
                  >
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p
                          className={cn(
                            "font-semibold text-sm",
                            isActive ? "text-primary" : "text-gray-900",
                          )}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Bottom controls: ← dots → centered */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              autoplay.current.stop();
              api?.scrollPrev();
            }}
            className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

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

          <button
            onClick={() => {
              autoplay.current.stop();
              api?.scrollNext();
            }}
            className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

