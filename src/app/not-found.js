"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
