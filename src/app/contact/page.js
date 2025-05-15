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
      <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-lg bg-card rounded-lg shadow p-8"
        >
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-muted-foreground mb-6 text-center">
            Have a question or want to discuss your project? Fill out the form
            below and we'll get back to you soon.
          </p>
          {Object.keys(validationErrors).length > 0 && (
            <div className="mb-4">
              <ul className="text-red-600 text-sm list-disc pl-5">
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
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
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
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </motion.div>
      </div>
    </>
  );
}
