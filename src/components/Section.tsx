import { HTMLAttributes, ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLElement> & {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className={("py-10 " + className).trim()} {...rest}>
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
