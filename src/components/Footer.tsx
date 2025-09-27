export default function Footer() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-sm md:flex-row">
        <p className="text-white/80">
          © {new Date().getFullYear()} Muhammad Shahid Imtiaz
        </p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-accent" href={`${base}sitemap.xml`}>
            Sitemap
          </a>
          <a className="hover:text-accent" href={`${base}rss.xml`}>
            RSS
          </a>
          <a className="hover:text-accent" href={`${base}robots.txt`}>
            Robots
          </a>
        </nav>
      </div>
    </footer>
  );
}
