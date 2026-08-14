import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { saveRegistration } from "@/lib/registrations.functions";
import { trackPixel } from "@/lib/pixel";
import { SITE } from "@/lib/site";

const PROFESSIONS = ["Student", "Working Professional", "Freelancer", "Business Owner", "Other"];

export function RegistrationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const submit = useServerFn(saveRegistration);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [profession, setProfession] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const digits = whatsapp.replace(/\D/g, "");
    if (!trimmedName) return setError("Please enter your name.");
    if (digits.length !== 10) return setError("Please enter a valid 10-digit WhatsApp number.");
    if (!profession) return setError("Please select your profession.");

    setLoading(true);
    try {
      await submit({ data: { name: trimmedName, whatsapp: digits, profession } });
      // Fires only after a successful save
      trackPixel("Lead");
      onClose();
      window.open(SITE.whatsappCommunity, "_blank", "noopener,noreferrer");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-background/70 p-4 backdrop-blur-sm sm:items-center">
      <div
        className="absolute inset-0"
        onClick={loading ? undefined : onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reg-title"
        className="glass glow reveal-up relative w-full max-w-md p-6 sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="reg-title" className="text-2xl font-extrabold">
          Almost <span className="text-gradient">there!</span>
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Fill this in and we'll send your Zoom link on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate={false}>
          <div>
            <label htmlFor="reg-name" className="text-sm font-semibold">
              Your Name
            </label>
            <input
              id="reg-name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Kaushal Tiwari"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="reg-whatsapp" className="text-sm font-semibold">
              WhatsApp Number
            </label>
            <input
              id="reg-whatsapp"
              required
              inputMode="numeric"
              pattern="\d{10}"
              maxLength={10}
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="9876543210"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="reg-profession" className="text-sm font-semibold">
              Profession
            </label>
            <select
              id="reg-profession"
              required
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className={field}
            >
              <option value="">Select one…</option>
              {PROFESSIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-brand glow inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-100 disabled:opacity-70"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Saving…" : "Confirm My Free Seat"}
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            100% free · No spam · Joining link on WhatsApp
          </p>
        </form>
      </div>
    </div>
  );
}