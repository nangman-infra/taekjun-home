"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="relative mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-border/60 bg-background/70 pl-5 pr-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-base font-bold">
          <span className="size-2 rounded-full bg-primary" />
          정택준
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
            <Link href="/#contact">Contact</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-16 flex flex-col gap-1 rounded-3xl border border-border/60 bg-background/95 p-3 shadow-lg shadow-black/20 backdrop-blur-xl md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
