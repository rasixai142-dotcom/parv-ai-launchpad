import { createFileRoute } from "@tanstack/react-router";

import { checkSheetsConnection } from "@/lib/registrations.server";

const headers = { "content-type": "application/json" };

export const Route = createFileRoute("/api/public/sheets-health")({
  server: {
    handlers: {
      GET: async () => {
        const result = await checkSheetsConnection();
        return new Response(JSON.stringify(result), {
          status: result.ok ? 200 : 500,
          headers,
        });
      },
    },
  },
});
