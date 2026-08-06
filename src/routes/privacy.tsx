import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Parv Infosoft" },
      {
        name: "description",
        content:
          "How Parv Infosoft collects, uses and protects the personal information of AI Automation Masterclass registrants.",
      },
      { property: "og:title", content: "Privacy Policy | Parv Infosoft" },
      {
        property: "og:description",
        content: "How we handle your data for the AI Automation Masterclass.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how <strong>Parv Infosoft</strong> ("we", "us") collects, uses
        and safeguards your information when you register for the AI Automation Masterclass or use
        this website.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Name, email address and mobile number provided at registration</li>
        <li>Payment confirmation details received from our payment partner (we never store card or UPI credentials)</li>
        <li>Basic technical data such as browser type, device and pages visited</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To deliver your webinar joining link, reminders and bonus resources</li>
        <li>To provide customer support over WhatsApp and email</li>
        <li>To share information about our related programs (you can opt out any time)</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We do not sell your data. We share it only with service providers who help us run the
        workshop — payment processing, email/WhatsApp delivery and webinar hosting — and where
        required by law.
      </p>
      <h2>Cookies &amp; analytics</h2>
      <p>
        We may use cookies and advertising pixels to measure campaign performance. You can disable
        cookies in your browser settings.
      </p>
      <h2>Your rights</h2>
      <p>
        Write to <strong>{SITE.email}</strong> to access, correct or delete your data, or to
        unsubscribe from our communications.
      </p>
      <h2>Contact</h2>
      <p>
        Parv Infosoft, {SITE.address}. Email {SITE.email} · WhatsApp {SITE.phone}.
      </p>
    </LegalPage>
  ),
});