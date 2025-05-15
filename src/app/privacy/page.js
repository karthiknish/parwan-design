import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
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
        <ul className="list-disc pl-6 text-base text-foreground">
          <li>We only collect information you provide to us directly.</li>
          <li>
            Your data is used solely to respond to your inquiries and provide
            our services.
          </li>
          <li>
            We do not share your information with third parties except as
            required by law.
          </li>
        </ul>
        <p className="text-base text-muted-foreground mt-4">
          For more details or questions about our privacy practices, please
          contact us.
        </p>
      </motion.div>
    </div>
  );
}
