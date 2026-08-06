import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Parv Infosoft" },
      {
        name: "description",
        content:
          "Refund and cancellation policy for the paid live AI Automation Masterclass by Parv Infosoft.",
      },
      { property: "og:title", content: "Refund Policy | Parv Infosoft" },
      {
        property: "og:description",
        content: "When registration fees for the masterclass can be refunded.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Refund Policy">
      <p>
        The masterclass registration fee is a nominal commitment amount that reserves one of a
        limited number of live seats.
      </p>
      <h2>Cancellation by you</h2>
      <ul>
        <li>
          Request a full refund at least <strong>24 hours before</strong> the scheduled start time
          and we will process it, no questions asked.
        </li>
        <li>
          Within 24 hours of the session, or after it has begun, the fee is non-refundable because
          the seat can no longer be reallocated.
        </li>
        <li>Duplicate or failed-but-charged payments are always refunded in full.</li>
      </ul>
      <h2>Cancellation by us</h2>
      <p>
        If we cancel or reschedule a session and the new slot does not suit you, you receive a full
        refund or a free seat in the next batch — your choice.
      </p>
      <h2>How to request</h2>
      <p>
        WhatsApp <strong>{SITE.phone}</strong> or email <strong>{SITE.email}</strong> with your
        registered name, phone number and payment reference. Approved refunds are credited back to
        the original payment method within 5–7 working days.
      </p>
    </LegalPage>
  ),
});