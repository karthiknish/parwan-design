"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import {
  Building,
  Users,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";

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
    <>
      <Head>
        <title>About | Parwan Design and Build</title>
        <meta
          name="description"
          content="Learn more about Parwan Design and Build, our values, and frequently asked questions."
        />
      </Head>
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground pt-16">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full px-4 md:px-8 py-12 bg-gradient-to-b from-primary/10 to-transparent"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Parwan Design and Build
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
              Parwan Design and Build is dedicated to transforming homes and
              commercial spaces with creativity, quality, and care. Our team
              works closely with clients to deliver bespoke solutions that fit
              their needs and style, ensuring every project is a true reflection
              of their vision.
            </p>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              Our reputation is built on word-of-mouth recommendations and a
              commitment to excellence in every project, big or small. We
              believe in transparent communication and a collaborative approach
              from start to finish.
            </p>
          </div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full px-4 md:px-8 py-12"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-accent">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg">
                <Sparkles className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace creative solutions and modern techniques to bring
                  fresh perspectives to every design.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Your vision is our blueprint. We work with you every step of
                  the way to ensure your dream space becomes a reality.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty and transparency, building trust
                  through reliable service and quality craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full px-4 md:px-8 py-12 bg-muted"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">
              <HelpCircle className="inline-block w-8 h-8 mr-2 text-accent" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 bg-card shadow-sm transition-all hover:shadow-md"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-left text-foreground font-semibold text-lg flex justify-between items-center hover:bg-transparent"
                    onClick={() => setOpen(open === idx ? null : idx)}
                    aria-expanded={open === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: open === idx ? 180 : 0 }}
                      className="ml-2 text-accent"
                    >
                      ▼
                    </motion.span>
                  </Button>
                  {open === idx && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
