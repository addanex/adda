"use client";

import Wrapper from "./wrapper";

export default function Hero() {
  return (
    <Wrapper className="flex flex-col items-center justify-center border">
      <h1 className="text-4xl md:text-7xl leading-tight text-gray-900 text-center">
        Great <span className="text-primary font-bold">Product</span> is
        <br />
        <span className="font-bold">
          built by great <span className="text-primary">teams</span>
        </span>
      </h1>
      <p className="mt-6 text-gray-500 leading-relaxed max-w-md text-center">
        We help build and manage a team of world-class developers to bring your
        vision to life
      </p>
      <a
        href="#"
        className="mt-8 inline-flex items-center justify-center w-fit px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Let&apos;s get started!
      </a>
    </Wrapper>
  );
}
