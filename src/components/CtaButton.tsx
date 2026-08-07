import { SITE } from "@/lib/site";
import { trackPixel } from "@/lib/pixel";

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
      onClick={() => trackPixel("Lead", { value: 99, currency: "INR" })}
      className={`bg-brand glow inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-100 ${className}`}
    >
      {children}
    </a>
  );
}