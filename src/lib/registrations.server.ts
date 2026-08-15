import { z } from "zod";

const SPREADSHEET_ID = "1wbcmtOCGE5BkZ2QfpwjgbDaw0NotOtMtteTqI7WAlg0";
const SHEET_NAME = "Registrations";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

export const registrationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  whatsapp: z.string().trim().regex(/^\d{10}$/),
  profession: z.enum(["Student", "Working Professional", "Freelancer", "Business Owner", "Other"]),
});

export type Registration = z.infer<typeof registrationSchema>;

export async function checkSheetsConnection() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    return {
      ok: false as const,
      error:
        "Google Sheets connection is not configured (missing credentials). Link the Google Sheets connector in Lovable.",
    };
  }

  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}?fields=properties.title,sheets.properties.title`,
    {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
      },
    },
  );
  const body = await res.text();
  if (!res.ok) {
    console.error(`[registration] connection test failed [${res.status}]: ${body}`);
    return { ok: false as const, error: `Sheets check failed [${res.status}]: ${body.slice(0, 300)}` };
  }

  let title = "spreadsheet";
  let hasTab = false;
  try {
    const json = JSON.parse(body) as {
      properties?: { title?: string };
      sheets?: { properties?: { title?: string } }[];
    };
    title = json.properties?.title ?? title;
    hasTab = Boolean(json.sheets?.some((s) => s.properties?.title === SHEET_NAME));
  } catch {
    /* keep defaults */
  }

  if (!hasTab) {
    return { ok: false as const, error: `Connected, but no “${SHEET_NAME}” tab found in “${title}”.` };
  }
  return { ok: true as const, sheetTitle: title };
}

export async function appendRegistration(data: Registration) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    console.error("[registration] missing keys", {
      lovableKey: Boolean(lovableKey),
      connectionKey: Boolean(connectionKey),
    });
    throw new Error("Google Sheets connection is not configured");
  }

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
    console.error(`[registration] Sheets append failed [${res.status}]: ${body}`);
    throw new Error(`Sheets append failed [${res.status}]: ${body.slice(0, 300)}`);
  }

  console.log("[registration] saved", { name: data.name, profession: data.profession });
  return { ok: true as const };
}
