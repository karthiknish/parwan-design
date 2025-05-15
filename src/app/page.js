"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl text-center py-16"
      >
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Designed & Built by <span className="text-accent">Parwan</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-secondary-foreground">
          Parwan Design and Build specialises in renovations, modernising, and
          extending living spaces to make the most of the home you already love.
          Why move, when you can improve?
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

      {/* Service Areas */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-3xl text-center py-8"
      >
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          Serving Greater London & Beyond
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          We've worked across Harrow, Rickmansworth, Watford, Ickenham,
          Uxbridge, and Hayes, but we're happy to extend our knowledge of the
          surrounding areas, so don't feel excluded if you live further afield.
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-3xl text-center py-8"
      >
        <h2 className="text-2xl font-semibold mb-2 text-accent">
          Why move, when you can improve?
        </h2>
        <p className="text-base md:text-lg">
          We work closely with our clients to deliver to their exact
          specifications. Our business is built almost exclusively on
          word-of-mouth recommendations.
        </p>
      </motion.section>

      {/* Projects Preview */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-5xl py-8"
      >
        <h3 className="text-xl font-semibold mb-6 text-center text-primary">
          Some of our latest projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg shadow p-6 flex flex-col items-center border border-accent/30"
            >
              <div className="relative w-full h-40 rounded mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30">
                {/* Project Image Placeholder - replace src with your image */}
                <Image
                  src={`/project-placeholder-${i}.jpg`}
                  alt={`Project Detail ${i}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold mb-2 text-accent">Project Detail {i}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                A brief description of the project goes here.
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-4xl py-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-6 text-accent">
          What Our Clients Say
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-muted rounded-lg p-6 shadow text-left flex-1">
            <p className="mb-2 text-lg">
              “Parwan Design and Build transformed our home beyond our
              expectations. Highly recommended!”
            </p>
            <span className="block text-sm text-primary font-semibold">
              - JAG DHILLON -
            </span>
          </div>
          <div className="bg-muted rounded-lg p-6 shadow text-left flex-1">
            <p className="mb-2 text-lg">
              “Professional, creative, and reliable. We love our new space!”
            </p>
            <span className="block text-sm text-primary font-semibold">
              - S. KUMAR -
            </span>
          </div>
        </div>
      </motion.section>

      {/* Galleries Section (placeholder) */}
      <motion.section
        id="galleries"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-full max-w-5xl py-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-6 text-primary">Galleries</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {["interior", "kitchen", "exterior"].map((type, i) => (
            <div
              key={type}
              className="relative w-full h-40 rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10"
            >
              {/* Gallery Image Placeholder - replace src with your image */}
              <Image
                src={`/${type}-gallery-placeholder.jpg`}
                alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Gallery`}
                fill
                style={{ objectFit: "cover" }}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-base text-muted-foreground">
          Interiors, Loft conversions, Commercial, Kitchens, Bathrooms,
          Exteriors
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="w-full max-w-2xl text-center py-12"
      >
        <h3 className="text-2xl font-semibold mb-4 text-accent">
          Good design. Built to last.
        </h3>
        <Button
          size="lg"
          variant="default"
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.section>
    </div>
  );
}
