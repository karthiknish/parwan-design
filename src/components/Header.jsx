"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-muted bg-background/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-xl tracking-tight text-primary">
          Parwan Design and Build
        </span>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#galleries">Galleries</a>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-muted px-4 pb-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          <Button variant="ghost" asChild onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild onClick={() => setOpen(false)}>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild onClick={() => setOpen(false)}>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" asChild onClick={() => setOpen(false)}>
            <a href="#galleries">Galleries</a>
          </Button>
          <Button variant="ghost" asChild onClick={() => setOpen(false)}>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
