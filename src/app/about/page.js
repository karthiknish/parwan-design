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
import Image from "next/image";

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
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full px-4 md:px-8 py-12 bg-gradient-to-b from-primary/10 to-transparent"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Building className="w-16 h-16 text-accent mx-auto mb-4" />
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Parwan Design and Build
            </motion.h1>
            <motion.p
              className="font-body text-lg md:text-xl text-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Parwan Design and Build is dedicated to transforming homes and
              commercial spaces with creativity, quality, and care. Our team
              works closely with clients to deliver bespoke solutions that fit
              their needs and style, ensuring every project is a true reflection
              of their vision.
            </motion.p>
            <motion.p
              className="font-body text-md md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our reputation is built on word-of-mouth recommendations and a
              commitment to excellence in every project, big or small. We
              believe in transparent communication and a collaborative approach
              from start to finish.
            </motion.p>
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

        {/* Collaborative Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="w-full px-4 md:px-8 py-12 bg-card/50"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaborating with client on design plans"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-accent">
                Collaborative Process
              </h2>
              <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
                We believe the best results come from working closely with our
                clients. From the initial design process onward, we collaborate
                with you to ensure your vision is realized. Our team focuses on
                their areas of expertise, but your input guides every decision.
              </p>
              <p className="font-body text-md text-muted-foreground mb-2">
                We work to your budget and timeline, involving you throughout so
                your project is delivered just as you imagined.
              </p>
              <span className="block font-heading text-accent mt-4">
                "We build the property. You make it a home."
              </span>
            </div>
          </div>
        </motion.section>

        {/* Superior Finishing Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full px-4 md:px-8 py-12"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luxury bathroom or kitchen finishing details"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-primary">
                Superior Finishing
              </h2>
              <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
                Our experienced specialists are happy to install your choice of
                accessories to enhance the look you want. From ceramic tiles for
                under-floor heating to luxury bathroom furniture, we create
                spaces you'll love.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interior Design Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full px-4 md:px-8 py-12 bg-card/50"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Interior design planning with professionals"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-accent">
                Interior Design
              </h2>
              <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
                We listen to your wishes and work with a full spectrum of
                professionals—from architects to kitchen and bedroom
                designers—to create the best look for your property. Our goal is
                to bring maximum light and style into your living space.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Communication Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-12"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Client communicating with builder via WhatsApp group"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-primary">
                Transparent Communication
              </h2>
              <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
                With your permission, we&apos;ll set up a WhatsApp group so you
                can communicate with us easily. We&apos;ll send you images at
                key stages, and you&apos;re always welcome to monitor our
                progress in person. Regular meetings help us answer your
                questions and plan for the delivery of your chosen fixtures and
                fittings.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Environmental Responsibility Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full px-4 md:px-8 py-12 bg-card/50"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Electric hybrid vehicle and eco-friendly building"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-accent">
                Caring for the Planet
              </h2>
              <p className="font-body text-lg text-foreground mb-4 leading-relaxed">
                We are committed to reducing our operational carbon footprint.
                Plans are in place to introduce electric hybrid vehicles into
                our fleet, and we keep up to date with developments that help us
                operate more sustainably.
              </p>
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
                    className="w-full text-left text-foreground font-semibold text-lg flex justify-between items-center hover:text-accent hover:bg-transparent"
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
