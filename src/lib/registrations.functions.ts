import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "1wbcmtOCGE5BkZ2QfpwjgbDaw0NotOtMtteTqI7WAlg0";
const SHEET_NAME = "Registrations";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  whatsapp: z.string().trim().regex(/^\d{10}$/),
  profession: z.enum(["Student", "Working Professional", "Freelancer", "Business Owner", "Other"]),
});

export const saveRegistration = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
    if (!lovableKey || !connectionKey) throw new Error("Google Sheets connection is not configured");

    const res = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:D:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": connectionKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [
            [
              data.name,
              `'${data.whatsapp}`,
              data.profession,
              new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            ],
          ],
        }),
      },
    );

    if (!res.ok) {
      const body = await res.text();
      console.error(`Sheets append failed [${res.status}]: ${body}`);
      throw new Error(`Could not save registration [${res.status}]`);
    }

    return { ok: true };
  });