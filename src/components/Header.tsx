"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Donate", href: "/donate" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="LabReNew"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[15px] font-medium text-lr-dark hover:text-lr-blue-light transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-lr-green px-6 py-2.5 text-[15px] font-semibold text-lr-dark hover:bg-lr-green/90 transition-colors"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[15px] font-medium text-lr-dark"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block w-full text-center rounded-lg bg-lr-green px-6 py-2.5 text-[15px] font-semibold text-lr-dark"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
