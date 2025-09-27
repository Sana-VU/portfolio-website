import { HTMLAttributes } from "react";

export default function Badge({
  className = "",
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={(
        "inline-flex items-center rounded border px-2 py-0.5 text-xs border-slate-200/70 dark:border-slate-800/70 text-slate-700 dark:text-slate-200 " +
        className
      ).trim()}
      {...rest}
    />
  );
}
