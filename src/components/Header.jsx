"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-30 bg-background/70 backdrop-blur-lg shadow-md border-b border-muted/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center rounded-full bg-accent/20 p-2 mr-2">
            <Sparkles className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform duration-300" />
          </span>
          <span className="font-heading text-2xl md:text-2xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors duration-300">
            Parwan Design <span className="text-accent">&amp; Build</span>
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-1 ml-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="px-4 py-2 font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="ghost"
              className="px-4 py-2 font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              About
            </Button>
          </Link>

          <Link href="/gallery">
            <Button
              variant="ghost"
              className="px-4 py-2 font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Gallery
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="px-4 py-2 font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Contact
            </Button>
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <Button
          variant="ghost"
          className="md:hidden rounded-full p-2 hover:bg-accent/10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="w-7 h-7 text-accent" />
          ) : (
            <Menu className="w-7 h-7 text-primary" />
          )}
        </Button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 border-t border-muted/40 px-4 pb-4 pt-2 flex flex-col gap-2 rounded-b-2xl shadow-xl animate-in fade-in slide-in-from-top-2">
          <Link href="/" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full text-left font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Home
            </Button>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full text-left font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              About
            </Button>
          </Link>
          <Link href="#projects" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full text-left font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Projects
            </Button>
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full text-left font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Gallery
            </Button>
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button
              variant="ghost"
              className="w-full text-left font-heading text-base hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
 