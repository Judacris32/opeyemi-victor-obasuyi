"use client";

import { useEffect, useState } from "react";

/** Live local time for a city. Renders a placeholder on the server to avoid a hydration mismatch. */
export default function LocalTime({ tz }: { tz: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [tz]);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}
