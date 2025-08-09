import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost", size?: "md" | "lg" | "sm"};
export default function Button({ className="", variant="primary", size="md", ...props }: Props){
  const cls = [
    "rounded-2xl px-4 py-2 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed",
    size==="lg"?"px-5 py-3":"", size==="sm"?"px-3 py-1.5 text-sm":"",
    variant==="primary"?"bg-[var(--brand)] text-white hover:bg-[var(--brand-600)]":"bg-transparent hover:bg-black/5",
    className
  ].join(" ");
  return <button className={cls} {...props} />;
}
