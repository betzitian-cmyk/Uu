"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Roster", href: "/roster" },
  { name: "Schedule", href: "/schedule" },
  { name: "Stats", href: "/stats" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/.95)] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background)/.8)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary))] font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--primary-foreground))]">
            TH
          </div>
          <div className="hidden sm:block">
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[hsl(var(--foreground))]">
              THUNDER HAWKS
            </p>
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
              Football Club
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[hsl(var(--primary))] px-6 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:bg-[hsl(var(--primary)/.9)] hover:scale-105"
          >
            Join The Team
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2.5 text-[hsl(var(--foreground))]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pb-6 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-center text-sm font-semibold text-[hsl(var(--primary-foreground))]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join The Team
          </Link>
        </div>
      </div>
    </header>
  );
}
