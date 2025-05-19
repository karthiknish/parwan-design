"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [open, setOpen] = useState(false);

  // Custom styles for nav links
  const navButtonClass =
    "px-6 py-3 font-heading text-lg md:text-xl font-semibold tracking-wide rounded-lg text-primary hover:bg-accent/20 hover:text-accent transition-all duration-200 border border-transparent hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/40";

  const mobileNavButtonClass =
    "w-full text-left font-heading text-lg font-semibold tracking-wide rounded-md  text-primary hover:bg-accent/20 hover:text-accent transition-all duration-200 border border-transparent hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <nav className="w-full sticky top-0 z-30 bg-background/70 backdrop-blur-lg shadow-md border-b border-muted/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-1 md:py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Parwan Design and Build"
            width={150}
            height={150}
          />
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-3 ml-8">
          <Link href="/">
            <Button variant="ghost" className={navButtonClass}>
              <span className="font-heading">Home</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className={navButtonClass}>
              <span className="font-heading">About</span>
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="ghost" className={navButtonClass}>
              <span className="font-heading">Gallery</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className={navButtonClass}>
              <span className="font-heading">Contact</span>
            </Button>
          </Link>
        </div>

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
            <Button variant="ghost" className={mobileNavButtonClass}>
              <span className="font-heading">Home</span>
            </Button>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <Button variant="ghost" className={mobileNavButtonClass}>
              <span className="font-heading">About</span>
            </Button>
          </Link>
          <Link href="#projects" onClick={() => setOpen(false)}>
            <Button variant="ghost" className={mobileNavButtonClass}>
              <span className="font-heading">Projects</span>
            </Button>
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            <Button variant="ghost" className={mobileNavButtonClass}>
              <span className="font-heading">Gallery</span>
            </Button>
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button variant="ghost" className={mobileNavButtonClass}>
              <span className="font-heading">Contact</span>
            </Button>
          </Link>
          {/* Contact info mobile */}
          <div className="flex flex-col gap-1 mt-2 text-left">
            <a
              href="mailto:admin@parwandb.co.uk"
              className="text-base text-accent hover:underline font-heading"
            >
              admin@parwandb.co.uk
            </a>
            <a
              href="tel:07769406432"
              className="text-base text-primary hover:underline font-heading"
            >
              07769 406432
            </a>
            <a
              href="tel:07380856052"
              className="text-base text-primary hover:underline font-heading"
            >
              07380 856052
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}