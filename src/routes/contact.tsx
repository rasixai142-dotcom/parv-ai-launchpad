import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Users } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Parv Infosoft — Masterclass Support" },
      {
        name: "description",
        content:
          "Reach the Parv Infosoft team on WhatsApp at +91 93045 77051, by email, or at our Surat office for AI Automation Masterclass support.",
      },
      { property: "og:title", content: "Contact Parv Infosoft" },
      {
        property: "og:description",
        content: "WhatsApp, email and office details for masterclass support.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Contact us</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Questions about your registration, payment or the session itself? WhatsApp is the fastest
          way to reach us — we reply Monday to Saturday, 10 AM to 7 PM IST.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={SITE.whatsappSupport}
            target="_blank"
            rel="noreferrer"
            className="glass p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <MessageCircle className="h-6 w-6 text-success" />
            <h2 className="mt-3 text-base font-bold">WhatsApp Support</h2>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.phone}</p>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="glass p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-base font-bold">Email</h2>
            <p className="mt-1 truncate text-sm text-muted-foreground">{SITE.email}</p>
          </a>
          <a
            href={SITE.whatsappCommunity}
            target="_blank"
            rel="noreferrer"
            className="glass p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <Users className="h-6 w-6 text-secondary" />
            <h2 className="mt-3 text-base font-bold">WhatsApp Community</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Registered participants — join here
            </p>
          </a>
          <div className="glass p-6">
            <Clock className="h-6 w-6 text-accent" />
            <h2 className="mt-3 text-base font-bold">Business Hours</h2>
            <p className="mt-1 text-sm text-muted-foreground">Monday–Saturday · 10 AM – 7 PM IST</p>
          </div>
        </div>

        <div className="glass mt-4 p-6">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-base font-bold">Surat Office</h2>
          <address className="mt-1 text-sm not-italic text-muted-foreground">
            Parv Infosoft
            <br />
            4019 The Palladium Mall, Near Vijaynagar,
            <br />
            Chikuwadi, Nana Varachha, Surat, Gujarat 395010
          </address>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}