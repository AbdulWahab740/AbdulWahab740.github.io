"use client";

import { useState } from "react";
import { me } from "@/lib/data";

const links = [
  { label: "Experience", href: "#experience-section" },
  { label: "Work", href: "#work-section" },
  { label: "Skills", href: "#skills-section" },
  { label: "Research", href: "#research-section" },
  { label: "Education", href: "#about-section" },
  { label: "Contact", href: "#contact-section" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-primary">
        <div className="max-w-[1440px] mx-auto px-4 md:px-gutter-desktop h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="font-headline-md text-headline-md tracking-tighter lowercase text-primary select-none whitespace-nowrap"
            >
              {me.name.replace(/\s+/g, "")}
              <span className="text-secondary">.</span>
            </a>
            <div className="h-4 w-[1px] bg-primary hidden sm:block"></div>
            <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant hidden sm:inline-block tracking-widest">
              {me.spec}
            </span>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
           
            <nav className="hidden lg:flex items-center space-x-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-space-sm py-1 font-body-sm text-body-sm uppercase tracking-wider text-on-surface hover:bg-primary hover:text-on-primary transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="lg:hidden font-mono-code text-mono-code uppercase border border-primary px-2 py-1"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-primary text-on-primary p-5 flex flex-col lg:hidden">
          <div className="flex items-center justify-between border-b border-on-primary pb-3">
            <span className="font-mono-code text-mono-code uppercase">NAV // DISPATCH</span>
            <button
              type="button"
              className="font-mono-code text-mono-code uppercase border border-on-primary px-2 py-1"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-end gap-3 text-4xl font-extrabold uppercase tracking-tighter">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
