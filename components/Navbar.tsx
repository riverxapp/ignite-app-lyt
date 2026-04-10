"use client";

import { cn } from "../lib/utils";
import { ThemeToggle } from "./theme/theme-toggle";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false); // for mobile nav, optional
  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-30">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 flex h-16 items-center justify-between" aria-label="Primary">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--accent)]">
            PersonalSite
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--accent)] transition-colors px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;