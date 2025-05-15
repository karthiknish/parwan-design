import { motion } from "framer-motion";

export default function TermsPage() {
  return (
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
          Welcome to Parwan Design and Build. By using our website and services,
          you agree to the following terms and conditions. Please read them
          carefully.
        </p>
        <ul className="list-disc pl-6 text-base text-foreground">
          <li>All content is for informational purposes only.</li>
          <li>Services are subject to availability and agreement.</li>
          <li>We reserve the right to update these terms at any time.</li>
        </ul>
        <p className="text-base text-muted-foreground mt-4">
          For any questions regarding our terms, please contact us directly.
        </p>
      </motion.div>
    </div>
  );
}
