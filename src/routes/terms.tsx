import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Parv Infosoft" },
      {
        name: "description",
        content:
          "Terms and conditions governing registration for the AI Automation Masterclass by Parv Infosoft.",
      },
      { property: "og:title", content: "Terms & Conditions | Parv Infosoft" },
      {
        property: "og:description",
        content: "Rules for registering and attending the AI Automation Masterclass.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions">
      <p>
        By registering for the AI Automation Masterclass operated by <strong>Parv Infosoft</strong>,
        you agree to the terms below.
      </p>
      <h2>The offering</h2>
      <p>
        The masterclass is a live online session of approximately 3 hours delivered on Zoom or
        Google Meet. The joining link, date and time are communicated on WhatsApp and email after
        registration. Schedules may change; we will always notify registrants in advance.
      </p>
      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate contact details at registration</li>
        <li>Arrange your own device and internet connection</li>
        <li>Your seat is personal and non-transferable</li>
      </ul>
      <h2>Intellectual property</h2>
      <p>
        All session content, recordings, templates and prompt packs remain the property of Parv
        Infosoft. Recording, redistributing or reselling any part of the session is prohibited.
      </p>
      <h2>No income guarantee</h2>
      <p>
        We teach skills, tools and workflows. We do not guarantee any specific income, job outcome
        or client result. Any figures mentioned are illustrative, not promises.
      </p>
      <h2>Conduct</h2>
      <p>
        We may remove any participant who disrupts the session, spams the chat or abuses other
        attendees, without refund.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with jurisdiction in Surat, Gujarat.</p>
      <h2>Contact</h2>
      <p>
        {SITE.email} · WhatsApp {SITE.phone} · {SITE.address}
      </p>
    </LegalPage>
  ),
});