"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Parwan Design and Build</title>
        <meta
          name="description"
          content="Read the privacy policy for Parwan Design and Build to learn how your data is handled."
        />
      </Head>
      <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl bg-card rounded-lg shadow p-8 mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-primary text-center">
            Privacy Policy
          </h1>
          <p className="text-base text-muted-foreground mb-4">
            Your privacy is important to Parwan Design and Build. This policy
            explains how we collect, use, and protect your information.
          </p>
          <div className="text-base text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> We only collect
                  information you provide to us directly, such as your name,
                  email address, phone number, and any details you include in
                  your inquiry or communication.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect non-personal
                  information about how you interact with our website, such as
                  your IP address, browser type, and pages visited, for
                  analytics and security purposes.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide our services.</li>
                <li>To improve our website and services.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                3. Data Sharing and Disclosure
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We do not share your information with third parties except as
                  required by law or to fulfill your requests (for example, if
                  we need to coordinate with a subcontractor for your project,
                  we will only do so with your consent).
                </li>
                <li>
                  We do not sell or rent your personal information to anyone.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                4. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, or loss. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                5. Your Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You have the right to request access to, correction of, or
                  deletion of your personal information.
                </li>
                <li>
                  To exercise these rights, please contact us using the details
                  below.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                7. Contact Us
              </h2>
              <p>
                For more details or questions about our privacy practices,
                please contact us at{" "}
                <a
                  href="mailto:info@parwandesignandbuild.co.uk"
                  className="text-primary underline"
                >
                  info@parwandesignandbuild.co.uk
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}
