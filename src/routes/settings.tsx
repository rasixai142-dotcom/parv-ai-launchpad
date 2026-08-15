import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

type Result = { ok: boolean; message: string };

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · Parv Infosoft AI Masterclass" },
      {
        name: "description",
        content:
          "Internal settings for the AI Masterclass registration page — verify the Google Sheets connection before leads submit the form.",
      },
      { property: "og:title", content: "Settings · Parv Infosoft AI Masterclass" },
      {
        property: "og:description",
        content: "Verify the Google Sheets registration connection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const runTest = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/public/sheets-health");
      const raw = await res.text();
      let parsed: { ok?: boolean; error?: string; sheetTitle?: string } = {};
      try {
        parsed = JSON.parse(raw) as typeof parsed;
      } catch {
        parsed = { error: raw.slice(0, 300) };
      }
      setResult(
        res.ok && parsed.ok
          ? { ok: true, message: `Connected to “${parsed.sheetTitle ?? "spreadsheet"}”. Registrations will be saved.` }
          : { ok: false, message: parsed.error || `HTTP ${res.status}` },
      );
    } catch (err) {
      setResult({ ok: false, message: err instanceof Error ? err.message : String(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-5 py-16">
      <h1 className="text-3xl font-extrabold">
        Settings<span className="text-gradient">.</span>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Internal tools for the registration flow.
      </p>

      <section className="glass mt-8 p-6">
        <h2 className="text-lg font-bold">Google Sheets connection</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Checks that registrations can be written to the “Webinar Registrations” sheet.
        </p>

        <button
          type="button"
          onClick={runTest}
          disabled={loading}
          className="bg-brand glow mt-5 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-100 disabled:opacity-70"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Testing…" : "Test Google Sheets Connection"}
        </button>

        {result && (
          <div
            className={`mt-5 flex items-start gap-2.5 rounded-xl border p-4 text-sm ${
              result.ok
                ? "border-primary/40 text-foreground"
                : "border-destructive/50 text-destructive"
            }`}
          >
            {result.ok ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            <span className="break-words">{result.message}</span>
          </div>
        )}
      </section>
    </main>
  );
}
