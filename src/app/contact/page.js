"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";

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
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground pt-16">
        {/* Contact Form and Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full px-4 md:px-8 py-8"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
              Contact Us
            </h1>
            <p className="text-muted-foreground mb-6 text-center">
              Have a question or want to discuss your project? Fill out the form
              below and we&apos;ll get back to you soon.
            </p>

            <div className="my-6 py-6 border-y border-muted text-center">
              <h2 className="text-xl font-semibold mb-3 text-accent">
                Direct Contact Information
              </h2>
              <div className="space-y-1">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@parwandesign.com"
                    className="text-primary hover:underline"
                  >
                    info@parwandesign.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+441234567890"
                    className="text-primary hover:underline"
                  >
                    +44 123 456 7890
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                We aim to respond to all inquiries within 1-2 business days.
              </p>
            </div>

            {Object.keys(validationErrors).length > 0 && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                <ul className="list-disc pl-5">
                  {Object.entries(validationErrors).map(([field, msg]) => (
                    <li key={field}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <form
              className="flex flex-col gap-4 bg-card p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
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
              <Button type="submit" className="mt-2" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {error && (
              <p className="text-red-600 mt-4 text-center bg-red-100 border border-red-400 px-4 py-3 rounded-md">
                {error}
              </p>
            )}
          </div>
        </motion.section>

        {/* Location Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full px-4 md:px-8 py-8 bg-muted"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
              Our Location
            </h2>
            <div className="w-full h-72 md:h-96 bg-gray-300 rounded-lg overflow-hidden mb-4 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.995059264415!2d-0.1277582842266497!3d51.50735097963576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3878d7c9%3A0x1a2f4ff87c1b9c3a!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1618931989871!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Our Location Map"
              ></iframe>
            </div>
            <p className="text-foreground">
              Parwan Design and Build
              <br />
              123 Example Street
              <br />
              London, AB1 2CD, UK
            </p>
          </div>
        </motion.section>
      </div>
    </>
  );
}
