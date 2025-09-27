import React from "react";
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-light px-3 py-1 text-xs font-medium text-secondary dark:bg-slate-800">
      {children}
    </span>
  );
}
