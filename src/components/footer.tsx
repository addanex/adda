"use client";

import Image from "next/image";
import Wrapper from "./wrapper";

type FooterLink = {
  label: string;
  href: string;
};

const links: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Areas We Serve", href: "#" },
];

const socials = [
  { name: "F", href: "#", label: "Facebook" },
  { name: "I", href: "#", label: "Instagram" },
  { name: "T", href: "#", label: "Twitter" },
  { name: "L", href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <Wrapper className="grid grid-cols-1 md:grid-cols-4 gap-12 border mt-24 h-96">
      <div className="col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/logo.svg" alt="IK Developers" width={24} height={24} />
          <span className="font-semibold text-gray-800 italic">
            IK developers
          </span>
        </div>

        <p className="text-gray-500 leading-relaxed max-w-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2">
          <Image
            src="/google-pagespeed.svg"
            alt="Google PageSpeed"
            width={110}
            height={24}
          />
          <span className="font-semibold text-emerald-500">100</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Links</h3>
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Contact us</h3>
        <p className="text-gray-500 leading-relaxed mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a
          href="tel:+923183561921"
          className="text-gray-500 hover:text-primary transition-colors"
        >
          +923183561921
        </a>

        <div className="flex items-center gap-3 mt-8">
          {socials.map(({ name: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <div>{Icon}</div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Contact us</h3>
        <p className="text-gray-500 leading-relaxed mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a
          href="tel:+923183561921"
          className="text-gray-500 hover:text-primary transition-colors"
        >
          +923183561921
        </a>

        <div className="flex items-center gap-3 mt-8">
          {socials.map(({ name: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <div>{Icon}</div>
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
