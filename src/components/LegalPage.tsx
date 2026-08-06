import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({
  title,
  updated = "August 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
          {children}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}