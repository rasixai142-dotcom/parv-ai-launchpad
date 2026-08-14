import { useState } from "react";
import { RegistrationModal } from "@/components/RegistrationModal";

export function CtaButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const [open, setOpen] = useState(false);
  const classes = `bg-brand glow inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-100 ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={classes}>
        {children}
      </button>
      <RegistrationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}