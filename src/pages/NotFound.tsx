export default function NotFound() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-slate-600 dark:text-slate-300">Page not found.</p>
      <a
        className="mt-4 inline-flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90"
        href="/"
      >
        Back home
      </a>
    </div>
  );
}
