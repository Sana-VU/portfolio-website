import clsx from "clsx";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};
export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 dark:bg-primary/90 dark:hover:bg-primary",
    secondary: "bg-accent text-dark hover:bg-accent/90",
    ghost:
      "border border-slate-300 hover:border-accent hover:text-accent dark:border-slate-700",
  } as const;
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-6 text-base",
  } as const;
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
