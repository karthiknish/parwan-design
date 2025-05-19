"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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

// Fun confetti SVG for extra excitement
const projects = [
  {
    title: "Modern Loft Conversion",
    description:
      "Transformed an unused attic into a bright, modern living space with skylights, custom storage, and an en-suite bathroom.",
    image:
      "https://images.pexels.com/photos/6957094/pexels-photo-6957094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Harrow",
    year: 2023,
    tags: ["Loft", "Renovation", "Modern"],
  },
  {
    title: "Contemporary Kitchen Renovation",
    description:
      "Complete kitchen overhaul featuring open-plan layout, quartz countertops, and energy-efficient appliances.",
    image:
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Rickmansworth",
    year: 2022,
    tags: ["Kitchen", "Remodel", "Open Plan"],
  },
  {
    title: "Luxury Bathroom Upgrade",
    description:
      "Installed a walk-in rainfall shower, freestanding tub, and underfloor heating for a spa-like experience.",
    image:
      "https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Watford",
    year: 2023,
    tags: ["Bathroom", "Luxury", "Heating"],
  },
  {
    title: "Eco-Friendly Home Extension",
    description:
      "Added a sustainable rear extension with bi-fold doors, green roof, and solar panels to maximize light and efficiency.",
    image:
      "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Uxbridge",
    year: 2024,
    tags: ["Extension", "Eco-Friendly", "Sustainability"],
  },
  {
    title: "Open-Concept Living Area",
    description:
      "Removed interior walls to create a spacious, open living and dining area with engineered wood flooring.",
    image:
      "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Hayes",
    year: 2022,
    tags: ["Living Room", "Open Concept", "Flooring"],
  },
  {
    title: "Exterior Facade Refresh",
    description:
      "Modernized the exterior with new cladding, energy-efficient windows, and a landscaped front garden.",
    image:
      "https://images.pexels.com/photos/9828189/pexels-photo-9828189.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Ickenham",
    year: 2023,
    tags: ["Exterior", "Cladding", "Landscaping"],
  },
];

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
      <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-accent/10 text-foreground relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Hero Image Container */}
          <motion.div
            initial={{ scale: 1.1, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 h-[70vh] w-full"
          >
            <img
              src="https://images.pexels.com/photos/5644367/pexels-photo-5644367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Parwan Design and Build Hero"
              style={{ objectFit: "cover" }}
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
            {/* Animated Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 0.5, 0.7] }}
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/60"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-20 w-full max-w-4xl mx-auto px-4 pb-16 md:pb-24 text-center flex flex-col items-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight sshadow"
              initial={{ scale: 0.95 }}
              animate={{ scale: [1, 1.04, 1] }}
            >
              Designed &amp; Built by{" "}
              <span className="text-accent sshadow">PARWAN</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90 shadow-lg font-medium sshadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Parwan Design and Build specialises in{" "}
              <span className="text-accent font-bold sshadow">renovations</span>
              ,{" "}
              <span className="text-primary font-bold sshadow">
                modernising
              </span>
              , and{" "}
              <span className="text-accent font-bold sshadow">extending</span>{" "}
              living spaces to make the most of the home you already love.
              <br />
              <span className="italic text-white/80 sshadow">
                Why move, when you can improve?
              </span>
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="text-lg px-8 py-4 sshadow"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                asChild
                className="text-lg px-8 py-4 sshadow"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Parwan Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-5xl py-16 mx-auto"
        >
          <motion.h2
            className="text-4xl font-extrabold text-center mb-10 text-primary tracking-tight"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Parwan?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.07, rotate: -2 }}
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-muted via-white/80 to-accent/10 rounded-2xl shadow-2xl border-2 border-accent/10"
            >
              <Sparkles className="w-12 h-12 text-accent mb-3 animate-spin-slow" />
              <h3 className="font-semibold text-xl mb-2">Creative Solutions</h3>
              <p className="text-muted-foreground font-medium">
                We bring{" "}
                <span className="text-accent font-bold">innovative ideas</span>{" "}
                to every project, ensuring your space is unique and functional.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07, rotate: -2 }}
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-muted via-white/80 to-primary/10 rounded-2xl shadow-2xl border-2 border-primary/10"
            >
              <Users className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-semibold text-xl mb-2">Client-Focused</h3>
              <p className="text-muted-foreground font-medium">
                We work closely with you, tailoring every detail to your needs
                and vision.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07, rotate: -2 }}
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-muted via-white/80 to-accent/10 rounded-2xl shadow-2xl border-2 border-accent/10"
            >
              <CheckCircle className="w-12 h-12 text-accent mb-3 animate-pulse" />
              <h3 className="font-semibold text-xl mb-2">Quality & Trust</h3>
              <p className="text-muted-foreground font-medium">
                Our reputation is built on{" "}
                <span className="text-primary font-bold">word-of-mouth</span>{" "}
                and a commitment to lasting quality.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How We Work Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-4xl py-16 mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-10 text-accent tracking-tight">
            How We Work
          </h2>
          <ol className="relative border-l-4 border-primary/30 ml-4">
            <motion.li
              className="mb-12 ml-6"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full -left-5 ring-4 ring-background shadow-lg animate-spin-slow">
                <Sparkles className="w-6 h-6 text-white" />
              </span>
              <h4 className="font-semibold text-xl mb-2">
                Consultation & Vision
              </h4>
              <p className="text-muted-foreground font-medium">
                We start with a{" "}
                <span className="text-accent font-bold">
                  detailed consultation
                </span>{" "}
                to understand your goals and ideas.
              </p>
            </motion.li>
            <motion.li
              className="mb-12 ml-6"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full -left-5 ring-4 ring-background shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </span>
              <h4 className="font-semibold text-xl mb-2">Design & Planning</h4>
              <p className="text-muted-foreground font-medium">
                Our team creates a{" "}
                <span className="text-primary font-bold">tailored design</span>{" "}
                and plan, keeping you involved at every step.
              </p>
            </motion.li>
            <motion.li
              className="ml-6"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full -left-5 ring-4 ring-background shadow-lg animate-pulse">
                <Clock className="w-6 h-6 text-white" />
              </span>
              <h4 className="font-semibold text-xl mb-2">Build & Deliver</h4>
              <p className="text-muted-foreground font-medium">
                We execute the project with{" "}
                <span className="text-accent font-bold">
                  care and precision
                </span>
                , delivering a space you&apos;ll love for years.
              </p>
            </motion.li>
          </ol>
        </motion.section>

        {/* Service Areas */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-16 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-4xl font-extrabold mb-8 text-primary tracking-tight">
                We Serve Any Part of the UK
              </h2>
              <p className="text-xl md:text-2xl text-foreground mb-10 leading-relaxed font-medium">
                No matter where you are in the UK, Parwan Design and Build is
                ready to help bring your vision to life. We proudly serve
                clients nationwide.
              </p>
              <Button
                variant="outline"
                asChild
                className="animate-pulse text-lg px-8 py-4 self-center md:self-start"
              >
                <Link href="/contact">Discuss Your Location</Link>
              </Button>
            </div>
            {/* Image on the right */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Greater London Area"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-80"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Specialist Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full px-4 md:px-8 py-12 bg-card/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center text-accent">
              Our Specialist Services
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              We offer a wide range of services to meet your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Interiors */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <rect x="8" y="8" width="8" height="8" rx="2" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Interiors
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Bespoke interior design and renovation, maximizing light,
                  space, and style for every room in your home.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Interiors</a>
                </Button>
              </div>
              {/* Kitchens */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="7" width="18" height="10" rx="2" />
                  <rect x="7" y="3" width="10" height="4" rx="1" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Kitchens
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Bespoke kitchen design and installation, tailored to your
                  lifestyle and taste, with quality fittings and finishes.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Kitchens</a>
                </Button>
              </div>
              {/* Bathrooms */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="7" width="18" height="10" rx="2" />
                  <rect x="7" y="17" width="10" height="4" rx="1" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Bathrooms
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Transform your bathroom with modern design, luxury fittings,
                  and flawless installation from our experienced team.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Bathrooms</a>
                </Button>
              </div>
              {/* Bedrooms */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="4" y="8" width="16" height="10" rx="2" />
                  <rect x="8" y="4" width="8" height="4" rx="1" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Bedrooms
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Custom bedroom solutions, from fitted wardrobes to complete
                  refurbishments, for comfort and style.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Bedrooms</a>
                </Button>
              </div>
              {/* Tiles */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Tiles
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  From kitchen splashbacks to bathroom floors, our team supplies
                  and fits tiles for any space, large or small, with expert
                  precision and style.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Tiles</a>
                </Button>
              </div>
              {/* Exteriors */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="12" width="18" height="8" rx="2" />
                  <rect x="7" y="4" width="10" height="8" rx="2" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Exteriors
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Enhance your home&apos;s curb appeal with our exterior
                  renovation and landscaping services.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Exteriors</a>
                </Button>
              </div>
              {/* Windows & Doors */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <rect x="8" y="3" width="2" height="18" />
                  <rect x="14" y="3" width="2" height="18" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Windows & Doors
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Upgrade your home with our high-quality windows and doors,
                  expertly installed for security, energy efficiency, and curb
                  appeal.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Windows & Doors</a>
                </Button>
              </div>
              {/* Commercial */}
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-primary mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="7" width="18" height="10" rx="2" />
                  <rect x="7" y="3" width="10" height="4" rx="1" />
                  <rect x="7" y="17" width="10" height="4" rx="1" />
                </svg>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Commercial
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Comprehensive commercial building services for offices,
                  retail, and more—fit-out, refurbishment, and maintenance.
                </p>
                <Button variant="outline" asChild className="mt-auto">
                  <a href="/contact">Enquire about Commercial</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-3xl text-center py-16 mx-auto px-4 md:px-0"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-accent tracking-tight">
            Why move, when you can improve?
          </h2>
          <motion.p
            className="text-xl text-foreground leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            We work closely with our clients to deliver to their exact
            specifications. Our business is built almost exclusively on
            <span className="text-primary font-bold">
              {" "}
              word-of-mouth recommendations
            </span>
            . We pride ourselves on{" "}
            <span className="text-accent font-bold">transparency </span>
            and <span className="text-primary font-bold">partnership</span>.
          </motion.p>
          <div className="flex justify-center my-10">
            <Image
              src="https://images.pexels.com/photos/7642088/pexels-photo-7642088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team at work"
              width={800}
              height={500}
              className="rounded-2xl shadow-2xl object-cover w-full max-w-2xl"
              priority={false}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/about">
              <Button
                variant="default"
                size="lg"
                className="px-8 py-4 text-lg font-bold cursor-pointer"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Projects Preview */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full px-4 md:px-8 py-16 bg-gradient-to-br from-muted via-white/80 to-accent/10"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-extrabold mb-12 text-center text-primary tracking-tight">
              Some of Our Latest Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {projects.slice(0, 6).map((project, idx) => (
                <motion.div
                  key={project.title}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                  }}
                  className="bg-card rounded-2xl shadow-2xl p-8 flex flex-col items-center border-2 border-transparent hover:border-accent transition-all duration-300 transform"
                >
                  <div className="relative w-full h-56 rounded-lg mb-6 overflow-hidden shadow-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-80 flex items-center justify-center transition-opacity duration-300"
                      whileHover={{ opacity: 0.8 }}
                    >
                      <Sparkles className="w-10 h-10 text-accent animate-spin-slow" />
                    </motion.div>
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-accent">
                    {project.title}
                  </h4>
                  <p className="text-base text-muted-foreground mb-3 text-center font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full px-4 md:px-8 py-20 bg-gradient-to-r from-accent/10 via-white/80 to-primary/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-14 h-14 text-accent mx-auto mb-6" />
            <h3 className="text-4xl font-extrabold mb-12 text-primary tracking-tight">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="bg-card rounded-2xl p-10 shadow-2xl border-2 border-transparent hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse"
                    />
                  ))}
                </div>
                <p className="mb-5 text-xl text-foreground italic font-medium">
                  &quot;Parwan Design and Build transformed our home beyond our
                  expectations. Highly recommended!&quot;
                </p>
                <span className="block text-lg text-accent font-bold tracking-wider">
                  - JAG DHILLON -
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="bg-card rounded-2xl p-10 shadow-2xl border-2 border-transparent hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse"
                    />
                  ))}
                </div>
                <p className="mb-5 text-xl text-foreground italic font-medium">
                  &quot;Professional, creative, and reliable. We love our new
                  space! The attention to detail was incredible.&quot;
                </p>
                <span className="block text-lg text-accent font-bold tracking-wider">
                  - S. KUMAR -
                </span>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Galleries Section (placeholder) */}
        <motion.section
          id="galleries"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full px-4 md:px-8 py-16 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-4xl font-extrabold mb-12 text-primary tracking-tight">
              Explore Our Galleries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl group transform transition-transform duration-300 border-2 border-transparent hover:border-accent"
              >
                <Image
                  src={`https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt="Interior"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <h4 className="text-3xl font-extrabold text-white capitalize tracking-wider drop-shadow-lg animate-pulse">
                    Interior
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl group transform transition-transform duration-300 border-2 border-transparent hover:border-primary"
              >
                <Image
                  src="https://images.pexels.com/photos/32071593/pexels-photo-32071593/free-photo-of-colorful-facades-in-wroclaw-s-historic-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Exterior"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <h4 className="text-3xl font-extrabold text-white capitalize tracking-wider drop-shadow-lg animate-pulse">
                    Exterior
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl group transform transition-transform duration-300 border-2 border-transparent hover:border-accent"
              >
                <Image
                  src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Bathrooms"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <h4 className="text-3xl font-extrabold text-white capitalize tracking-wider drop-shadow-lg animate-pulse">
                    Bathrooms
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl group transform transition-transform duration-300 border-2 border-transparent hover:border-primary"
              >
                <Image
                  src="https://images.pexels.com/photos/210687/pexels-photo-210687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Kitchen"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <h4 className="text-3xl font-extrabold text-white capitalize tracking-wider drop-shadow-lg animate-pulse">
                    Kitchen
                  </h4>
                </div>
              </motion.div>
            </div>
            <p className="text-xl text-muted-foreground font-medium mb-8">
              Browse through our collections of{" "}
              <span className="text-accent font-bold">Interiors</span>,{" "}
              <span className="text-primary font-bold">Loft conversions</span>,
              <span className="text-accent font-bold"> Commercial spaces</span>,{" "}
              <span className="text-primary font-bold">Kitchens</span>,{" "}
              <span className="text-accent font-bold">Bathrooms</span>, and{" "}
              <span className="text-primary font-bold">Exteriors</span>.
            </p>
            <Link href="/gallery" className="inline-block cursor-pointer">
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-4  font-bold"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full px-4 md:px-8 py-20 bg-gradient-to-r from-accent to-primary shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3
              className="text-5xl font-extrabold mb-8 text-white drop-shadow-2xl tracking-tight"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Good design. Built to last.
            </motion.h3>
            <motion.p
              className="text-2xl text-white/90 mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Ready to start your dream project?{" "}
              <span className="text-accent font-bold">
                Let&apos;s build something amazing together.
              </span>
            </motion.p>
            <Button
              size="lg"
              variant="default"
              asChild
              className="text-lg px-8 py-6"
            >
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
