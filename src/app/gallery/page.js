"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { Image as GalleryIcon } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern living room",
    aspect: "portrait",
  },
  {
    src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kitchen renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Team at work",
    aspect: "square",
  },
  {
    src: "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury bathroom",
    aspect: "portrait",
  },

  {
    src: "https://images.pexels.com/photos/5644367/pexels-photo-5644367.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Exterior design",
    aspect: "portrait",
  },
  {
    src: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Renovated interior",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Home exterior with garden",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/4249585/pexels-photo-4249585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/5849419/pexels-photo-5849419.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Contemporary kitchen design",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Eco-friendly home",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern staircase renovation",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Interior",
    aspect: "landscape",
  },
];

// Helper to generate a random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Predefine possible random heights for each aspect
const randomHeights = {
  portrait: [64, 72, 80, 96, 60, 88], // Tailwind h-16 to h-24+ (rem units)
  landscape: [40, 48, 56, 60, 64, 72],
  square: [48, 56, 64, 72, 80],
};

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  // Memoize random heights for each image so they don't change on rerender
  const imageHeights = useMemo(() => {
    return galleryImages.map((img) => {
      const aspect = img.aspect || "square";
      const heights = randomHeights[aspect] || randomHeights.square;
      // Pick a random height from the list
      const h = heights[randomInt(0, heights.length - 1)];
      return h;
    });
    // eslint-disable-next-line
  }, []); // Only run once

  return (
    <>
      <Head>
        <title>Gallery | Parwan Design and Build</title>
        <meta
          name="description"
          content="Browse our gallery of completed projects and design inspiration."
        />
      </Head>
      <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-accent/10 text-foreground">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full min-h-[40vh] flex flex-col justify-end mb-12"
        >
          <div className="absolute inset-0 w-full h-[40vh] -z-10">
            <Image
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gallery Hero"
              fill
              style={{ objectFit: "cover" }}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pb-12 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <GalleryIcon className="w-16 h-16 text-accent mx-auto mb-4" />
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-lg px-4 py-2 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Gallery
            </motion.h1>
            <motion.p
              className="font-body text-lg md:text-2xl mb-4 text-secondary-foreground  px-4 py-2 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Browse our collection of completed projects and design
              inspiration.
            </motion.p>
          </div>
        </motion.section>
        {/* Irregular Masonry Gallery Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-6xl px-4 md:px-0 mx-auto mb-16"
        >
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => {
              // Pick a random height for this image (memoized)
              const height = imageHeights[i];
              // Compose a Tailwind class for the height, e.g. h-80, h-64, etc.
              // If not a standard Tailwind class, use inline style.
              // We'll use inline style for more flexibility.
              return (
                <button
                  key={i}
                  className="w-full mb-4 rounded-xl overflow-hidden shadow-lg group focus:outline-none hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setSelected(i)}
                  aria-label={`Open ${img.alt}`}
                  style={{ breakInside: "avoid" }}
                >
                  <div
                    className="relative w-full"
                    style={{ height: `${height * 0.25}rem` }} // 1rem = 4px in Tailwind, so h-80 = 20rem
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="object-cover"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.section>
        {/* Modal/Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative w-[90vw] max-w-2xl h-[60vh] bg-background rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selected].src}
                  alt={galleryImages[selected].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-12 bg-gradient-to-r from-accent to-primary"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl font-bold mb-6 text-white drop-shadow-md">
              Like what you see?
            </h3>
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              Get in touch to discuss your own project or request more examples.
            </p>
            <Button size="lg" variant="default" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
