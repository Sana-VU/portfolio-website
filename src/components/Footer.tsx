export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-sm md:flex-row">
        <p className="text-white/80">
          © {new Date().getFullYear()} Muhammad Shahid Imtiaz
        </p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-accent" href="/sitemap.xml">
            Sitemap
          </a>
          <a className="hover:text-accent" href="/rss.xml">
            RSS
          </a>
          <a className="hover:text-accent" href="/robots.txt">
            Robots
          </a>
        </nav>
      </div>
    </footer>
  );
}
