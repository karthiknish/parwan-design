import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Parwan Design and Build",
  description:
    "Renovations, modernising, and extending living spaces. Inspired by shahdb.com.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
