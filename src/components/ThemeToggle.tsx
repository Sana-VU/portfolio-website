import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);
  if (!mounted) return null;
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-lg p-2 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span className="sr-only">Toggle theme</span>🌓
    </button>
  );
}
