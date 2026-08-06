import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  const href = `${SITE.whatsappSupport}?text=${encodeURIComponent("Hi, I need support")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-success/50" aria-hidden />
      <MessageCircle className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-xl bg-card px-3 py-2 text-xs font-semibold text-card-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
        Need help? Chat with us
      </span>
    </a>
  );
}