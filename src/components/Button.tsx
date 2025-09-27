import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  className = "",
  variant = "primary",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = "btn ";
  const styles: Record<Variant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };
  return (
    <button
      className={base + styles[variant] + (className ? " " + className : "")}
      {...rest}
    />
  );
}
