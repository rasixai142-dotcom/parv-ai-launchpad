const tools = [
  "ChatGPT",
  "n8n",
  "Make.com",
  "Zapier",
  "Google Sheets",
  "WhatsApp API",
  "Gmail",
  "Claude",
  "Notion",
  "Airtable",
  "Gemini",
  "Perplexity",
];

export function ToolMarquee() {
  const row = [...tools, ...tools];
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-3">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="glass whitespace-nowrap px-4 py-2 text-xs font-semibold text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
