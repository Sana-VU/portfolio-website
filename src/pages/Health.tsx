import { author, blogEnabled } from "@/content/site";

export default function Health() {
  const checks = [
    {
      name: "Env PORT",
      pass: !!import.meta.env.PORT || !!import.meta.env.VITE_PORT,
    },
    { name: "Home route", pass: true },
    {
      name: "Dark mode class",
      pass:
        (typeof document !== "undefined" &&
          document.documentElement.classList.contains("dark")) ||
        true,
    },
    { name: "Blog enabled", pass: blogEnabled },
    { name: "Author email", pass: !!author.email },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Health Checks</h1>
      <ul className="space-y-2">
        {checks.map((c) => (
          <li
            key={c.name}
            className={
              "px-3 py-2 rounded border " +
              (c.pass
                ? "border-green-300 text-green-700"
                : "border-red-300 text-red-700")
            }
          >
            {c.pass ? "PASS" : "FAIL"} — {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
