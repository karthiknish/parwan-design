import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-lg bg-card rounded-lg shadow p-8 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your message has been received. We appreciate your interest and will
          get back to you as soon as possible.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
