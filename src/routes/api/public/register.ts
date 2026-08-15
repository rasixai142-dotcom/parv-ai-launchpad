import { createFileRoute } from "@tanstack/react-router";

import { appendRegistration, registrationSchema } from "@/lib/registrations.server";

const cors = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "content-type",
  "access-control-allow-methods": "POST, OPTIONS",
};

export const Route = createFileRoute("/api/public/register")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: cors }),
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
            status: 400,
            headers: cors,
          });
        }

        const parsed = registrationSchema.safeParse(payload);
        if (!parsed.success) {
          const error = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
          console.error(`[registration] validation failed: ${error}`);
          return new Response(JSON.stringify({ ok: false, error }), { status: 400, headers: cors });
        }

        try {
          await appendRegistration(parsed.data);
          return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.error(`[registration] handler error: ${message}`);
          return new Response(JSON.stringify({ ok: false, error: message }), {
            status: 500,
            headers: cors,
          });
        }
      },
    },
  },
});
