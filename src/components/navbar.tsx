"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const primaryLinks = [
  { label: "About", href: "#who-we-are" },
  { label: "Leadership", href: "#leadership" },
  { label: "Services", href: "#services" },
  { label: "Give", href: "#give" },
];

const menuLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Story", href: "#our-story" },
  { label: "Our Spiritual Assignment", href: "#spiritual-assignment" },
  { label: "The Commission", href: "#commission" },
  { label: "Leadership", href: "#leadership" },
  { label: "Services", href: "#services" },
  { label: "Prayer & Counselling", href: "#prayer" },
  { label: "Giving", href: "#give" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[var(--font-cormorant)] text-3xl font-semibold tracking-wide text-white"
        >
          PAM
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
            Menu
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu panel */}
      {open && (
        <div className="mx-4 overflow-hidden border border-white/10 bg-[#171614]/95 backdrop-blur-md md:absolute md:right-6 md:top-20 md:mx-0 md:w-[360px] lg:right-8">
          <div className="grid">
            {menuLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/10 px-6 py-4 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                <span className="mr-4 text-xs text-[#b08d57]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}