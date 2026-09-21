"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/features/common/shadcn/button";
import Wrapper from "./wrapper";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NAV_ITEM_WIDTH = "w-32";

type NavDropdownItem = {
  id: string;
  name: string;
};

type NavItem = {
  id: string;
  name: string;
  type: "link" | "drop-down";
  dropdownItems?: NavDropdownItem[];
};

const navItems: NavItem[] = [
  {
    id: "services",
    name: "Services",
    type: "drop-down",
    dropdownItems: [
      { id: "web-design", name: "Web Design & Development" },
      { id: "mobile-app", name: "Mobile App Development" },
      { id: "software-testing", name: "Software Testing & QA" },
    ],
  },
  { id: "projects", name: "Projects", type: "link" },
  {
    id: "career",
    name: "Careers",
    type: "drop-down",
    dropdownItems: [
      { id: "open-roles", name: "Open Roles" },
      { id: "life-at-company", name: "Life at Company" },
      { id: "benefits", name: "Benefits" },
    ],
  },
  { id: "testimonials", name: "Testimonials", type: "link" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <Wrapper className="flex items-center justify-between">
        <Link href="/">LOGO</Link>
        <div className="flex items-center gap-0">
          {navItems.map((item) => {
            return (
              <div key={item.id} className={NAV_ITEM_WIDTH}>
                {item.type === "link" ? (
                  <Button
                    variant="link"
                    className="w-full text-gray-700 hover:text-gray-900 cursor-pointer"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <NavDropdown
                    label={item.name}
                    items={item.dropdownItems ?? []}
                    onSelect={(id) => scrollToSection(id)}
                  />
                )}
              </div>
            );
          })}
        </div>
        <Button
          onClick={() => router.push("/contact-us")}
          className="cursor-pointer"
        >
          Contact Us
        </Button>
      </Wrapper>
    </div>
  );
}

function NavDropdown({
  label,
  items,
  onSelect,
}: {
  label: string;
  items: NavDropdownItem[];
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${NAV_ITEM_WIDTH}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`${NAV_ITEM_WIDTH} flex items-center justify-center gap-1 text-sm text-gray-700 hover:text-gray-900 py-2 cursor-pointer`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && items.length > 0 && (
        <div
          role="menu"
          className={`absolute top-full left-0 mt-2 ${NAV_ITEM_WIDTH} bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50`}
        >
          {items.map((menuItem) => (
            <button
              key={menuItem.id}
              type="button"
              role="menuitem"
              onClick={() => {
                onSelect(menuItem.id);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {menuItem.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
