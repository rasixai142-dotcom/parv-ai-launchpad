import { useEffect, useState } from "react";

function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}

export function getDeadline() {
  const d = new Date();
  d.setHours(23, 59, 59, 0);
  return d;
}

export function Countdown({ label = "Offer closes in" }: { label?: string }) {
  const hydrated = useHydrated();
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const target = getDeadline().getTime();
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.floor(left / 1000);
  const parts = [
    { v: Math.floor(s / 3600), l: "Hours" },
    { v: Math.floor((s % 3600) / 60), l: "Mins" },
    { v: s % 60, l: "Secs" },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <div className="flex gap-2">
        {parts.map((p) => (
          <div key={p.l} className="glass min-w-[68px] px-3 py-2 text-center">
            <div className="font-display text-2xl font-bold tabular-nums">
              {hydrated ? String(p.v).padStart(2, "0") : "--"}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}