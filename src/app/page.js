"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import {
  CheckCircle,
  Users,
  Sparkles,
  Clock,
  MapPin,
  MessageSquare,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Parwan Design and Build | Home</title>
        <meta
          name="description"
          content="Parwan Design and Build specialises in renovations, modernising, and extending living spaces to make the most of the home you already love."
        />
      </Head>
      <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl text-center py-16 relative"
        >
          {/* Wavy SVG background */}
          <div className="absolute inset-0 -z-10">
            <svg
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="url(#hero-gradient)"
                fillOpacity="1"
                d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              />
              <defs>
                <linearGradient
                  id="hero-gradient"
                  x1="0"
                  y1="0"
                  x2="1440"
                  y2="320"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full flex flex-col items-center mb-8">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-primary/20 to-accent/30">
              {/* Hero Image Placeholder - replace src with your image */}
              <Image
                src="/hero-placeholder.jpg"
                alt="Parwan Design and Build Hero"
                fill
                style={{ objectFit: "cover" }}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary drop-shadow-lg">
            Designed & Built by <span className="text-accent">Parwan</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-secondary-foreground">
            Parwan Design and Build specialises in renovations, modernising, and
            extending living spaces to make the most of the home you already
            love. Why move, when you can improve?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/80"
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-5xl py-12 mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Why Choose Parwan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow">
              <Sparkles className="w-10 h-10 text-accent mb-2" />
              <h3 className="font-semibold text-lg mb-1">Creative Solutions</h3>
              <p className="text-muted-foreground">
                We bring innovative ideas to every project, ensuring your space
                is unique and functional.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow">
              <Users className="w-10 h-10 text-accent mb-2" />
              <h3 className="font-semibold text-lg mb-1">Client-Focused</h3>
              <p className="text-muted-foreground">
                We work closely with you, tailoring every detail to your needs
                and vision.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow">
              <CheckCircle className="w-10 h-10 text-accent mb-2" />
              <h3 className="font-semibold text-lg mb-1">Quality & Trust</h3>
              <p className="text-muted-foreground">
                Our reputation is built on word-of-mouth and a commitment to
                lasting quality.
              </p>
            </div>
          </div>
        </motion.section>

        {/* How We Work Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-4xl py-12 mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-accent">
            How We Work
          </h2>
          <ol className="relative border-l-4 border-primary/30 ml-4">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <h4 className="font-semibold text-lg mb-1">
                Consultation & Vision
              </h4>
              <p className="text-muted-foreground">
                We start with a detailed consultation to understand your goals
                and ideas.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-4 ring-4 ring-background">
                <Users className="w-5 h-5 text-white" />
              </span>
              <h4 className="font-semibold text-lg mb-1">Design & Planning</h4>
              <p className="text-muted-foreground">
                Our team creates a tailored design and plan, keeping you
                involved at every step.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                <Clock className="w-5 h-5 text-white" />
              </span>
              <h4 className="font-semibold text-lg mb-1">Build & Deliver</h4>
              <p className="text-muted-foreground">
                We execute the project with care and precision, delivering a
                space you&apos;ll love for years.
              </p>
            </li>
          </ol>
        </motion.section>

        {/* Service Areas */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-12 bg-primary/5"
        >
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Serving Greater London & Beyond
            </h2>
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              We&apos;ve worked across Harrow, Rickmansworth, Watford, Ickenham,
              Uxbridge, and Hayes, but we&apos;re happy to extend our knowledge
              of the surrounding areas, so don&apos;t feel excluded if you live
              further afield. Our commitment is to bring quality design and
              build services to a wide range of locations.
            </p>
            <Button
              variant="outline"
              asChild
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Link href="/contact">Discuss Your Location</Link>
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-3xl text-center py-12 mx-auto px-4 md:px-0"
        >
          <h2 className="text-3xl font-semibold mb-4 text-accent">
            Why move, when you can improve?
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            We work closely with our clients to deliver to their exact
            specifications. Our business is built almost exclusively on
            word-of-mouth recommendations. We pride ourselves on transparency
            and partnership.
          </p>
        </motion.section>

        {/* Projects Preview */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full px-4 md:px-8 py-12 bg-muted"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center text-primary">
              Some of Our Latest Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl shadow-xl p-6 flex flex-col items-center border border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative w-full h-56 rounded-lg mb-5 overflow-hidden shadow-md">
                    <Image
                      src={`/project-placeholder-${i}.jpg`}
                      alt={`Project Detail ${i}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-accent">
                    Project Showcase {i}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    A brief description of this stunning project, highlighting
                    key features and transformations.
                  </p>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-auto"
                  >
                    View Project
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full px-4 md:px-8 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-10 text-primary">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-xl border border-transparent hover:border-primary transition-all duration-300">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-lg text-foreground italic">
                  “Parwan Design and Build transformed our home beyond our
                  expectations. Highly recommended!”
                </p>
                <span className="block text-md text-accent font-semibold">
                  - JAG DHILLON -
                </span>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-xl border border-transparent hover:border-primary transition-all duration-300">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-lg text-foreground italic">
                  “Professional, creative, and reliable. We love our new space!
                  The attention to detail was incredible.”
                </p>
                <span className="block text-md text-accent font-semibold">
                  - S. KUMAR -
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Galleries Section (placeholder) */}
        <motion.section
          id="galleries"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full px-4 md:px-8 py-12 bg-primary/5"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-10 text-primary">
              Explore Our Galleries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {["interior", "kitchen", "exterior"].map((type, i) => (
                <div
                  key={type}
                  className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/${type}-gallery-placeholder.jpg`}
                    alt={`${
                      type.charAt(0).toUpperCase() + type.slice(1)
                    } Gallery`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <h4 className="text-2xl font-bold text-white capitalize tracking-wider">
                      {type}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground">
              Browse through our collections of Interiors, Loft conversions,
              Commercial spaces, Kitchens, Bathrooms, and Exteriors.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full px-4 md:px-8 py-16 bg-gradient-to-r from-accent to-primary"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-white drop-shadow-md">
              Good design. Built to last.
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to start your dream project? Let&apos;s build something
              amazing together.
            </p>
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
