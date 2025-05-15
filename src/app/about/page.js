"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialise in renovations, modernising, and extending living spaces, including loft conversions, kitchens, bathrooms, and more.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We work across Harrow, Rickmansworth, Watford, Ickenham, Uxbridge, Hayes, and surrounding areas.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Simply contact us through our website or call us directly. We'll arrange a visit and provide a detailed, no-obligation quote.",
  },
];

export default function AboutPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-card rounded-lg shadow p-8 mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary text-center">
          About Parwan Design and Build
        </h1>
        <p className="text-lg text-muted-foreground mb-4 text-center">
          Parwan Design and Build is dedicated to transforming homes and
          commercial spaces with creativity, quality, and care. Our team works
          closely with clients to deliver bespoke solutions that fit their needs
          and style.
        </p>
        <p className="text-base text-center">
          Our reputation is built on word-of-mouth recommendations and a
          commitment to excellence in every project, big or small.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-2xl bg-muted rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-semibold mb-6 text-accent text-center">
          FAQs
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-accent/30 rounded-lg p-4 bg-card"
            >
              <Button
                variant="ghost"
                className="w-full text-left text-primary font-semibold text-lg flex justify-between items-center"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <span className="ml-2">{open === idx ? "-" : "+"}</span>
              </Button>
              {open === idx && (
                <motion.div
                  id={`faq-answer-${idx}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-muted-foreground"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
