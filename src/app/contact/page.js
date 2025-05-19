"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (form.phone && form.phone.trim() !== "") {
      if (
        !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
          form.phone
        )
      ) {
        errors.phone = "Please enter a valid phone number.";
      }
    }
    if (!form.message.trim()) errors.message = "Message is required.";
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(null);
        setForm({ name: "", email: "", phone: "", message: "" });
        setValidationErrors({});
        router.push("/thankyou");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Parwan Design and Build</title>
        <meta
          name="description"
          content="Contact Parwan Design and Build for renovations, modernising, and extending your living spaces."
        />
      </Head>
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-accent/10 text-foreground">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full min-h-[35vh] flex flex-col justify-end mb-4"
        >
          <div className="absolute inset-0 w-full h-full h-[35vh] -z-10">
            <Image
              src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Contact Hero"
              fill
              style={{ objectFit: "cover" }}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4 pb-10 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <MessageSquare className="w-14 h-14 text-accent mx-auto mb-4" />
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-lg px-4 py-2 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="font-body text-lg md:text-2xl mb-4 text-secondary-foreground px-4 py-2 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Have a question or want to discuss your project? Fill out the form
              below and we&apos;ll get back to you soon.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form and Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-5xl mx-auto px-4 md:px-8 py-4 mt-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* Form Card */}
              <div className="bg-card rounded-2xl shadow-2xl p-6 flex flex-col justify-center">
                <h2 className="font-heading text-3xl font-bold mb-8 text-center text-primary">
                  Get in Touch
                </h2>
                {Object.keys(validationErrors).length > 0 && (
                  <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                    <ul className="list-disc pl-5">
                      {Object.entries(validationErrors).map(([field, msg]) => (
                        <li key={field}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    aria-invalid={!!validationErrors.name}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    aria-invalid={!!validationErrors.email}
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    aria-invalid={!!validationErrors.phone}
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    aria-invalid={!!validationErrors.message}
                  />
                  <Button
                    type="submit"
                    className="mt-2"
                    disabled={loading}
                    size="lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {error && (
                  <p className="text-red-600 mt-4 text-center bg-red-100 border border-red-400 px-4 py-3 rounded-md">
                    {error}
                  </p>
                )}
              </div>
              {/* Info Card */}
              <div className="bg-muted rounded-2xl shadow-xl p-8 flex flex-col justify-center gap-6">
                <h2 className="font-heading text-2xl font-bold mb-2 text-primary flex items-center gap-2">
                  <Mail className="w-6 h-6 text-accent" /> Email
                </h2>
                <a
                  href="mailto:admin@parwandb.co.uk"
                  className="text-lg text-primary hover:underline break-all"
                >
                  admin@parwandb.co.uk
                </a>
                <h2 className="font-heading text-2xl font-bold mb-2 text-primary flex items-center gap-2 mt-6">
                  <Phone className="w-6 h-6 text-accent" /> Phone
                </h2>
                <a
                  href="tel:07769406432"
                  className="text-lg text-primary hover:underline"
                >
                  07769 406432
                </a>
                <a
                  href="tel:07380856052"
                  className="text-lg text-primary hover:underline"
                >
                  07380 856052
                </a>
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    We aim to respond to all inquiries within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
