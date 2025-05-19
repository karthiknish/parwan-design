export default function Footer() {
  return (
    <footer className="w-full border-t border-muted bg-background/80 py-6 mt-8">
      <div className="max-w-6xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="text-sm text-primary">
          Phone:{" "}
          <a href="tel:07769406432" className="text-accent hover:underline">
            07769 406432
          </a>
          {", "}
          <a href="tel:07380856052" className="text-accent hover:underline">
            07380 856052
          </a>
        </span>
        <span className="mx-2 hidden md:inline">|</span>
        <span className="text-sm text-primary">
          Email:{" "}
          <a
            href="mailto:admin@parwandb.co.uk"
            className="text-accent hover:underline"
          >
            admin@parwandb.co.uk
          </a>
        </span>
      </div>
      <div className="max-w-6xl mx-auto text-center text-sm text-primary font-semibold flex flex-col md:flex-row items-center justify-center gap-2 mt-2">
        <span>
          © {new Date().getFullYear()} All Rights Reserved | Parwan Design and
          Build
        </span>
        <span className="mx-2 hidden md:inline">|</span>
        <a
          href="/terms"
          className="underline hover:text-accent transition-colors"
        >
          Terms & Conditions
        </a>
        <span className="mx-2">|</span>
        <a
          href="/privacy"
          className="underline hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
