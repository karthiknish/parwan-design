"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";

const projects = [
  {
    title: "Modern Loft Conversion",
    image: "/project-placeholder-1.jpg",
    description:
      "A stunning loft conversion that maximizes space and light, featuring bespoke storage and skylights.",
  },
  {
    title: "Open-Plan Kitchen",
    image: "/project-placeholder-2.jpg",
    description:
      "A contemporary kitchen extension with seamless indoor-outdoor flow and high-end finishes.",
  },
  {
    title: "Elegant Bathroom Remodel",
    image: "/project-placeholder-3.jpg",
    description:
      "A luxurious bathroom transformation with walk-in shower, underfloor heating, and custom tiling.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Parwan Design and Build</title>
        <meta
          name="description"
          content="Explore our portfolio of renovations, extensions, and modern living spaces."
        />
      </Head>
      <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full min-h-[40vh] flex flex-col justify-end mb-12"
        >
          <div className="absolute inset-0 w-full h-full h-[40vh] -z-10">
            <Image
              src="/project-placeholder-1.jpg"
              alt="Projects Hero"
              fill
              style={{ objectFit: "cover" }}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pb-12 text-center flex flex-col items-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-lg bg-white/70 rounded-xl px-4 py-2 inline-block">
              Our Projects
            </h1>
            <p className="font-body text-lg md:text-2xl mb-4 text-secondary-foreground bg-white/70 rounded-xl px-4 py-2 inline-block">
              Explore some of our recent work and see how we transform spaces.
            </p>
          </div>
        </motion.section>
        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-5xl px-4 md:px-0 mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-card rounded-xl shadow-xl p-6 flex flex-col items-center border border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-full h-56 rounded-lg mb-5 overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover"
                  />
                </div>
                <h4 className="font-heading font-bold text-xl mb-2 text-accent text-center">
                  {project.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-4 text-center">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-12 bg-gradient-to-r from-accent to-primary"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl font-bold mb-6 text-white drop-shadow-md">
              Inspired by our work?
            </h3>
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
