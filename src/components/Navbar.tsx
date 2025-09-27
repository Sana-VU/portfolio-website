import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-dark/85 backdrop-blur supports-[backdrop-filter]:bg-dark/70 text-white border-b border-white/5">
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="/"
          className="font-heading text-xl tracking-wide hover:text-accent"
        >
          Muhammad Shahid Imtiaz
        </a>
        <div className="hidden md:flex gap-6">
          {["Projects", "Experience", "Blog", "About", "Contact"].map((i) => (
            <a
              key={i}
              href={`/${i.toLowerCase()}`}
              className="text-sm text-white/90 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              {i}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/cv"
            className="hidden sm:inline-block rounded-lg border border-accent/60 px-3 py-2 text-sm hover:bg-accent hover:text-dark"
          >
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
