import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="w-full border-b border-muted bg-background/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-xl tracking-tight text-primary">
          Parwan Design and Build
        </span>
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/about">About</a>
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
      </div>
    </nav>
  );
}
