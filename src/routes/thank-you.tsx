import { createFileRoute } from "@tanstack/react-router";
import {
  BellRing,
  Bot,
  Briefcase,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  Gift,
  Headphones,
  Mail,
  MessageCircle,
  Monitor,
  Ticket,
  TrendingUp,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Reveal } from "@/components/Reveal";
import { BackgroundFX } from "@/components/BackgroundFX";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Seat Confirmed — AI Automation Masterclass | Parv Infosoft" },
      {
        name: "description",
        content:
          "Your seat for the AI Automation Masterclass is reserved. Join the official WhatsApp community for your webinar link, reminders and bonus resources.",
      },
      { property: "og:title", content: "Seat Confirmed — AI Automation Masterclass" },
      {
        property: "og:description",
        content: "You're registered. Next step: join the official WhatsApp community.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

const learn = [
  [Bot, "AI Automation", "End-to-end workflows that run without you"],
  [Zap, "Smart Workflows", "Systems that read, decide and reply on their own"],
  [Briefcase, "AI for Business", "Sales, support and reporting on autopilot"],
  [Wallet, "AI Freelancing", "How to package and price this as a service"],
  [Wrench, "Live AI Workflow Demo", "Built from a blank screen during the session"],
  [TrendingUp, "Future Career Paths", "Where the 2026 AI roles actually are"],
];

const checklist = [
  "Join 10 minutes early",
  "Use a laptop or desktop if possible",
  "Keep a notebook ready",
  "Stable internet connection",
  "Attend from a quiet environment",
];

function ThankYou() {
  return (
    <main className="min-h-screen">
      <BackgroundFX />
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-14 pb-10 text-center sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="pop-in mx-auto grid h-24 w-24 place-items-center rounded-full bg-success/15 ring-1 ring-success/40">
            <CheckCircle2 className="h-14 w-14 text-success" />
          </div>
          <h1 className="reveal mt-6 text-3xl font-extrabold sm:text-5xl">
            🎉 Congratulations! <br />
            <span className="text-gradient">Your seat has been reserved.</span>
          </h1>
          <p className="reveal mt-4 text-sm text-muted-foreground sm:text-base">
            You're officially registered for the AI Automation Masterclass. Get ready to discover
            how AI Automation can help you save time, increase productivity, and
            create new income opportunities.
          </p>
          <div className="reveal mt-6 inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-bold text-success ring-1 ring-success/40">
            <Check className="h-4 w-4" /> Registration Confirmed
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-5 py-8">
        <div className="glass mx-auto max-w-3xl p-6 sm:p-8">
          <h2 className="text-xl font-extrabold sm:text-2xl">Your Webinar Details</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [CalendarDays, "Date", "To be announced on WhatsApp"],
              [Clock, "Time", "To be announced on WhatsApp"],
              [Clock, "Duration", "Approximately 3 hours"],
              [Monitor, "Platform", "Zoom / Google Meet"],
              [Ticket, "Entry", "Paid live workshop"],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof Clock;
              return (
                <div
                  key={label as string}
                  className="flex items-start gap-3 rounded-2xl border border-border p-4"
                >
                  <I className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {label as string}
                    </div>
                    <div className="text-sm font-semibold">{value as string}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Please join 10 minutes before the session starts.
          </p>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="px-5 py-8">
        <div className="glass glow mx-auto max-w-3xl border-success/40 p-6 text-center sm:p-10">
          <h2 className="text-xl font-extrabold sm:text-3xl">
            ⚠ Important: Join our official WhatsApp community
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">This is where you'll receive:</p>
          <ul className="mx-auto mt-5 grid max-w-md gap-2 text-left text-sm">
            {[
              "Webinar link",
              "Live reminders",
              "Bonus resources",
              "Session updates",
              "Important announcements",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-success" /> {i}
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-success px-7 py-4 text-base font-bold text-success-foreground transition-transform duration-200 hover:scale-[1.05] active:scale-100 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Join WhatsApp Community
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Don't skip this step. All important communication will happen through WhatsApp.
          </p>
        </div>
      </section>

      {/* LEARN */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-extrabold sm:text-3xl">What you'll learn</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learn.map(([Icon, title, body]) => {
              const I = Icon as typeof Bot;
              return (
                <Reveal key={title as string} delay={60}>
                  <div className="glass card-hover group h-full p-5 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                    <div className="bg-brand grid h-10 w-10 place-items-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <I className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold">{title as string}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHECKLIST + BONUS */}
      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          <div className="glass card-hover p-6 hover:-translate-y-1 hover:border-primary/40">
            <div className="flex items-center gap-2">
              <BellRing className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-extrabold">Before you join</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {checklist.map((c) => (
                <li key={c} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass border-accent/40 p-6">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-extrabold">🎁 Your registration bonus</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              As a registered participant you'll also receive:
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {["AI resources", "Prompt collection", "Automation templates", "Exclusive offers"].map(
                (c) => (
                  <li key={c} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {c}
                  </li>
                ),
              )}
            </ul>
            <span className="mt-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              FREE WITH YOUR REGISTRATION
            </span>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="px-5 py-8 pb-16">
        <div className="glass mx-auto max-w-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-extrabold">Need any help?</h2>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a
              href={SITE.whatsappSupport}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border p-4 transition-colors hover:border-primary"
            >
              <MessageCircle className="h-5 w-5 text-success" />
              <div className="mt-2 text-sm font-bold">WhatsApp Support</div>
              <div className="text-xs text-muted-foreground">{SITE.phone}</div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-2xl border border-border p-4 transition-colors hover:border-primary"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div className="mt-2 text-sm font-bold">Email Support</div>
              <div className="truncate text-xs text-muted-foreground">{SITE.email}</div>
            </a>
            <div className="rounded-2xl border border-border p-4">
              <Clock className="h-5 w-5 text-secondary" />
              <div className="mt-2 text-sm font-bold">Business Hours</div>
              <div className="text-xs text-muted-foreground">Mon–Sat · 10 AM – 7 PM</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}