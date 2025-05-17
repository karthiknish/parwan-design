"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Parwan Design and Build</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Parwan Design and Build's website and services."
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
            Terms & Conditions
          </h1>
          <p className="text-base text-muted-foreground mb-4">
            Welcome to Parwan Design and Build. By using our website and
            services, you agree to the following terms and conditions. Please
            read them carefully.
          </p>
          <div className="text-base text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                1. Introduction
              </h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use
                of the Parwan Design and Build website and any services provided
                by Parwan Design and Build (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;). By accessing or using our website or services,
                you agree to be bound by these Terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                2. Use of Website
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The content on this website is for general information
                  purposes only and does not constitute professional advice.
                </li>
                <li>
                  You agree not to misuse the website or attempt to gain
                  unauthorized access to any part of the website or its systems.
                </li>
                <li>
                  We reserve the right to restrict or terminate your access to
                  the website at our discretion.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                3. Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All services provided are subject to availability and a
                  separate written agreement or contract.
                </li>
                <li>
                  We reserve the right to refuse service to anyone for any
                  reason at any time.
                </li>
                <li>
                  Any quotations or estimates provided are subject to change
                  until a formal agreement is signed.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                4. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All content, images, graphics, logos, and materials on this
                  website are the property of Parwan Design and Build or its
                  licensors and are protected by copyright and other
                  intellectual property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, or otherwise use
                  any content from this website without our prior written
                  consent.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                5. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We do not guarantee the accuracy, completeness, or suitability
                  of the information on this website.
                </li>
                <li>
                  To the fullest extent permitted by law, Parwan Design and
                  Build shall not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising out of
                  your use of, or inability to use, the website or services.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                6. Privacy
              </h2>
              <p>
                Your use of our website is also governed by our{" "}
                <a href="/privacy" className="text-primary underline">
                  Privacy Policy
                </a>
                . Please review it to understand our practices.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                7. Links to Other Websites
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of those
                sites.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time
                without prior notice. Changes will be effective immediately upon
                posting on this page. Your continued use of the website
                constitutes acceptance of the revised Terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of England and Wales. Any disputes arising from these Terms
                or your use of the website shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                10. Contact
              </h2>
              <p>
                For any questions regarding these Terms &amp; Conditions, please
                contact us at{" "}
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
