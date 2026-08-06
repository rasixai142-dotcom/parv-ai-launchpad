import { SITE } from "@/lib/site";

export function CtaButton({
  children,
  className = "",
  href = SITE.pay,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`bg-brand glow inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-100 ${className}`}
    >
      {children}
    </a>
  );
}