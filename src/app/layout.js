import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Parwan Design and Build",
  description:
    "Renovations, modernising, and extending living spaces. Inspired by shahdb.com.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Parwan Design and Build</title>
        <meta
          name="description"
          content="Renovations, modernising, and extending living spaces. Inspired by shahdb.com."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
