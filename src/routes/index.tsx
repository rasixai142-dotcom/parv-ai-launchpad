import { createFileRoute } from "@tanstack/react-router";
import {
  AlarmClock,
  BadgeCheck,
  Bot,
  Check,
  Clock,
  Gift,
  IndianRupee,
  Laptop,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib/site";
import kaushal from "@/assets/kaushal.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Build a Working AI Automation Live — 3 Hr Masterclass at ₹99" },
      {
        name: "description",
        content:
          "Join the live AI Automation Masterclass by Kaushal Tiwari (Parv Infosoft). Build a real AI automation live in 3 hours. No coding. ₹999 → ₹99. Limited seats.",
      },
      { property: "og:title", content: "Build a Working AI Automation Live — ₹99 Masterclass" },
      {
        property: "og:description",
        content:
          "3 hours, live on Zoom. Walk out with a working AI automation running in your own account. No coding needed.",
      },
    ],
  }),
  component: Landing,
});

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 py-14 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-extrabold sm:text-4xl">{children}</h2>;
}

const problems = [
  "You spend 3–4 hours a day on replies, reports and follow-ups that a bot could finish in 4 minutes.",
  "You've watched 40+ free AI reels but still haven't built a single thing that runs on its own.",
  "Clients ask for “AI automation” and you quietly say no because you don't know where to start.",
  "You opened ChatGPT, got a mediocre answer, and concluded AI is overhyped.",
  "Your juniors now do in 10 minutes what you bill 2 hours for — and you can feel the shift.",
  "You want a second income but every “AI side hustle” video ends without showing the actual build.",
];

const curriculum = [
  "The 4-layer AI automation stack: trigger → logic → tool → output (drawn on screen in plain Hindi/English).",
  "Prompt patterns that give consistent output every single time — the 6 templates we use with paying clients.",
  "LIVE BUILD: a WhatsApp/email lead-response automation that reads a new lead and replies in under 30 seconds.",
  "Connecting AI to Google Sheets, Gmail and WhatsApp without writing one line of code.",
  "Building an AI content engine: 30 posts + captions + images from one 10-minute input.",
  "How to package this as a ₹15,000–₹50,000/month service and what to say on the first client call.",
  "The 12-tool shortlist for 2026 — and the 40 tools you can safely ignore.",
];

const forYou = [
  "Job professionals who want to finish 8 hours of work in 2",
  "Freelancers & agency owners who want to sell AI automation",
  "Business owners drowning in repetitive team tasks",
  "Students & fresh graduates who want a 2026-proof skill",
  "Teachers, accountants, marketers, sales & support teams",
];

const notForYou = [
  "People who want to watch passively and build nothing",
  "Anyone looking for a get-rich-in-7-days shortcut",
  "People who won't open their laptop during the session",
  "Those expecting a free tool that prints money by itself",
];

const transformation = [
  ["Copy-pasting the same replies 50 times a day", "An automation that answers in 30 seconds, 24×7"],
  ["Random ChatGPT answers you have to rewrite", "Repeatable prompt templates with fixed output"],
  ["3 hours to write a week of content", "30 posts generated in one 10-minute sitting"],
  ["Saying “I don't do AI work” to clients", "Quoting ₹15,000+ for an automation setup"],
  ["Watching AI reels and feeling behind", "A live automation running in your own account"],
  ["Fear of being replaced by AI", "Being the person in the team who deploys AI"],
];

const bonuses = [
  ["500+ Ready-to-Use Prompt Vault (business, sales, content, HR)", 2999],
  ["10 Plug-and-Play Automation Templates you can import same day", 3999],
  ["AI Freelancing Starter Kit: proposal, pricing sheet & client script", 2499],
  ["The 12-Tool 2026 AI Stack Guide with free-tier limits", 1499],
  ["Recording + notes of the live build (live attendees only)", 1999],
  ["Private WhatsApp community access for doubt-solving", 1499],
];

const faqs = [
  [
    "When exactly is the session and how long is it?",
    "It runs live for approximately 3 hours. The exact date and time slot is sent to you on WhatsApp and email immediately after registration. Join 10 minutes early.",
  ],
  [
    "Is it really live, or a pre-recorded video?",
    "100% live on Zoom with Kaushal on camera. You can type questions in chat and get them answered during the session — that is the entire point of the format.",
  ],
  [
    "Will I get a recording?",
    "Yes — but only if you attend live. The recording and notes are released after the session to attendees only, as one of the bonuses. Registering and skipping the live class means no recording.",
  ],
  [
    "Do I need coding or technical experience?",
    "No. Zero coding. If you can use WhatsApp and Google Sheets, you can follow every step. We build with no-code tools on screen.",
  ],
  [
    "What should I prepare?",
    "A laptop or desktop (strongly recommended over mobile), stable internet, a free Google account, a notebook, and a quiet room for 3 hours.",
  ],
  [
    "What is the fee and is it refundable?",
    `The seat is ₹${SITE.price} instead of ₹${SITE.mrp}. It is a nominal commitment fee to keep the room serious. See our refund policy for details, or message our support team on WhatsApp.`,
  ],
  [
    "Will you sell something during the session?",
    "At the end we do share our advanced paid programs for people who want to go deeper. The 3 hours of teaching and the live build happen regardless — you owe nothing beyond ₹99.",
  ],
];

function Landing() {
  const totalBonus = bonuses.reduce((a, b) => a + (b[1] as number), 0);

  return (
    <main className="min-h-screen pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-10 pb-14 sm:pt-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="glass reveal mx-auto inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold">
            <Sparkles className="h-4 w-4 text-accent" />
            Parv Infosoft · AI Mastery Program
          </div>
          <h1 className="reveal mt-5 text-[2rem] leading-[1.05] font-extrabold sm:text-6xl">
            Build a working <span className="text-gradient">AI automation live</span> — in this 3-hour
            session
          </h1>
          <p className="reveal mt-4 text-base text-muted-foreground sm:text-lg">
            Not theory. You'll leave with an automation that replies to leads in 30 seconds, a
            500+ prompt vault, and a plan to charge ₹15,000+ for this skill. No coding.
          </p>

          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MonitorPlay className="h-4 w-4 text-primary" /> Live on Zoom
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> ~3 hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" /> Limited to 100 seats
            </span>
          </div>

          <div className="reveal mt-6 flex items-center justify-center gap-3">
            <span className="text-xl text-muted-foreground line-through">₹{SITE.mrp}</span>
            <span className="font-display inline-flex items-center text-4xl font-extrabold">
              <IndianRupee className="h-7 w-7" />
              {SITE.price}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              90% OFF TODAY
            </span>
          </div>

          <div className="reveal mt-6">
            <CtaButton className="w-full sm:w-auto">Reserve my seat for ₹{SITE.price}</CtaButton>
            <p className="mt-2 text-xs text-muted-foreground">
              Instant confirmation · WhatsApp joining link sent right after payment
            </p>
          </div>

          <div className="mt-8">
            <Countdown label="Registration closes in" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section>
        <H2>Is this you right now?</H2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p} className="glass flex gap-3 p-4 text-sm sm:text-base">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <span className="min-w-0">{p}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-base font-semibold sm:text-lg">
          None of that is a knowledge problem. It's a “nobody ever built it in front of me”
          problem. That's exactly what these 3 hours fix.
        </p>
      </Section>

      {/* COST COMPARISON */}
      <Section>
        <H2>The old way vs. this way</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="glass p-6">
            <h3 className="text-lg font-bold text-muted-foreground">The old expensive way</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Hiring a junior executive: ₹18,000/month, forever",
                "An agency automation setup: ₹40,000+ one time",
                "A 6-month “AI diploma”: ₹60,000 and zero live builds",
                "Learning free on YouTube: 80+ hours, still nothing shipped",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass glow border-primary/40 p-6">
            <h3 className="text-gradient text-lg font-bold">This masterclass</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                `₹${SITE.price} one time — less than two coffees`,
                "3 hours, one sitting, one working automation",
                "Free-tier tools only — ₹0 monthly running cost to start",
                `₹${totalBonus.toLocaleString("en-IN")} worth of templates included free`,
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CURRICULUM */}
      <Section>
        <H2>What we cover — minute by minute</H2>
        <p className="mt-3 text-muted-foreground">
          One of these is built <strong className="text-foreground">live on screen</strong>, in a
          fresh account, from zero.
        </p>
        <ol className="mt-6 space-y-3">
          {curriculum.map((c, i) => (
            <li key={c} className="glass flex gap-4 p-4">
              <span className="bg-brand grid h-8 w-8 shrink-0 place-items-center rounded-xl text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="min-w-0 text-sm sm:text-base">{c}</span>
            </li>
          ))}
        </ol>
        <div className="glass mt-6 flex items-start gap-3 border-accent/40 p-5">
          <Zap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p className="text-sm sm:text-base">
            <strong>Live build guarantee:</strong> by minute 120 you will watch a lead-response AI
            automation go from blank screen to sending a real reply — and you'll build it along with us.
          </p>
        </div>
      </Section>

      {/* QUALIFIERS */}
      <Section>
        <H2>Who this is for (and who it isn't)</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="glass p-6">
            <h3 className="text-lg font-bold">This is for you if…</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {forYou.map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="text-lg font-bold">Please don't register if…</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {notForYou.map((i) => (
                <li key={i} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* BEFORE / AFTER */}
      <Section>
        <H2>Before this session vs. after</H2>
        <div className="glass mt-6 overflow-hidden">
          <div className="grid grid-cols-2 border-b border-border text-xs font-bold uppercase tracking-widest">
            <div className="p-4 text-muted-foreground">Before</div>
            <div className="bg-brand p-4 text-primary-foreground">After</div>
          </div>
          {transformation.map(([b, a]) => (
            <div key={b} className="grid grid-cols-2 border-b border-border last:border-0 text-sm">
              <div className="p-4 text-muted-foreground">{b}</div>
              <div className="p-4 font-medium">{a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* MENTOR */}
      <Section>
        <div className="glass grid gap-6 p-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:p-8">
          <img
            src={kaushal.url}
            alt="Kaushal Tiwari, founder of Parv Infosoft"
            className="mx-auto h-56 w-56 rounded-3xl object-cover sm:h-full sm:w-full"
            loading="lazy"
            width={440}
            height={440}
          />
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Hi, I'm Kaushal Tiwari — I'll be leading this session
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I founded Parv Infosoft in Surat, Gujarat. My team and I build AI automations and
              software for businesses every single day — lead-response automations, WhatsApp bots,
              reporting pipelines, content engines. Nothing I teach in this class is theory I read
              somewhere; it's the exact stack we deploy for clients.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm not going to spend 3 hours showing slides. I'll share my screen, open a blank
              account, and build a working automation with you watching every click. If it breaks live,
              you'll see how I fix it — that's the part nobody shows you.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
              {[
                ["7+ yrs", "in software & automation"],
                ["Surat", "HQ, Gujarat"],
                ["3 hrs", "live, on camera"],
                ["Live build", "done with you, step by step"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border p-3">
                  <div className="font-display text-lg font-bold text-gradient">{n}</div>
                  <div className="text-[11px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BONUSES */}
      <Section>
        <H2>6 bonuses for live attendees</H2>
        <p className="mt-3 text-muted-foreground">
          Released in the session and dropped in the WhatsApp community afterwards — attendees only.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {bonuses.map(([name, value], i) => (
            <div key={name as string} className="glass flex items-start gap-3 p-4">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <div className="text-sm font-semibold sm:text-base">
                  Bonus {i + 1}: {name}
                </div>
                <div className="text-xs text-muted-foreground">
                  Worth ₹{(value as number).toLocaleString("en-IN")}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="glass glow mt-6 p-6 text-center">
          <p className="text-sm text-muted-foreground">Total bonus value</p>
          <p className="font-display mt-1 text-3xl font-extrabold">
            ₹{totalBonus.toLocaleString("en-IN")}
          </p>
          <p className="mt-1 text-sm">
            Yours free with a ₹{SITE.price} seat — if you show up live.
          </p>
        </div>
      </Section>

      {/* TRANSPARENCY (in place of fake proof) */}
      <Section>
        <H2>Full transparency before you pay</H2>
        <p className="mt-3 text-muted-foreground">
          This is a new public masterclass, so we're not going to paste screenshots of testimonials
          we don't have. Here's the honest picture instead:
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            [ShieldCheck, "Real company, real address", `Parv Infosoft, ${SITE.address}. Walk in and meet us.`],
            [BadgeCheck, "A named human, on camera", "Kaushal Tiwari hosts every session personally — not a sales rep, not a recording."],
            [Bot, "Built live, not promised", "The automation is created from a blank screen during the class. You judge it in real time."],
            [AlarmClock, "Yes, there's a paid program after", "At the end we present our advanced tiers. Buying is optional; the full 3 hours is delivered either way."],
          ].map(([Icon, title, body]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="glass p-5">
                <I className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-base font-bold">{title as string}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* URGENCY */}
      <Section>
        <div className="glass glow p-6 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            100 seats. Then registration closes.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            We cap the room at 100 so questions actually get answered live. Register before the
            timer hits zero to unlock all ₹{totalBonus.toLocaleString("en-IN")} of bonuses — the
            price moves back to ₹{SITE.mrp} after that.
          </p>
          <div className="mt-6">
            <Countdown label="Seats + bonuses close in" />
          </div>
          <CtaButton className="mt-6 w-full sm:w-auto">Grab my seat — ₹{SITE.price}</CtaButton>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <H2>Questions people ask before registering</H2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="glass group p-5">
              <summary className="cursor-pointer list-none text-sm font-bold sm:text-base">
                {q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CLOSING */}
      <Section>
        <div className="glass p-6 text-center sm:p-10">
          <Laptop className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl">
            3 hours from now, you can own a working AI automation
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Live on Zoom with Kaushal Tiwari. One live build. ₹
            {totalBonus.toLocaleString("en-IN")} in templates and prompts. Zero coding. The seat is
            ₹{SITE.price} instead of ₹{SITE.mrp}, and only while the timer is running.
          </p>
          <CtaButton className="mt-7 w-full sm:w-auto">
            Yes — reserve my ₹{SITE.price} seat
          </CtaButton>
          <p className="mt-3 text-xs text-muted-foreground">
            Need help? WhatsApp us at {SITE.phone}
          </p>
        </div>
      </Section>

      <SiteFooter />

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-lg">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold">
              <span className="text-muted-foreground line-through">₹{SITE.mrp}</span> ₹{SITE.price}{" "}
              · Live AI Masterclass
            </div>
            <div className="truncate text-[11px] text-muted-foreground">
              Limited to 100 seats · closes today
            </div>
          </div>
          <CtaButton className="shrink-0 px-5 py-3 text-sm">Register</CtaButton>
        </div>
      </div>
    </main>
  );
}
