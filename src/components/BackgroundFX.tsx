export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="grid-fade absolute inset-0" />
      <div
        className="orb drift h-[26rem] w-[26rem] -top-24 -left-24"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        className="orb float-slow h-[22rem] w-[22rem] top-1/3 -right-28"
        style={{ background: "linear-gradient(120deg, var(--secondary), var(--primary))" }}
      />
      <div
        className="orb drift h-[20rem] w-[20rem] bottom-0 left-1/3 opacity-30"
        style={{ background: "linear-gradient(120deg, var(--accent), var(--primary))" }}
      />
    </div>
  );
}
