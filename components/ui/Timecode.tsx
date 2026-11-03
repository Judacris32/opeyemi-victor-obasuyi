"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const FPS = 24;
const START = (8 * 60 + 18) * FPS + 2;
const pad = (n: number) => String(n).padStart(2, "0");

function format(frames: number) {
  const total = Math.floor(frames / FPS);
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor(total / 60) % 60)}:${pad(total % 60)}:${pad(frames % FPS)}`;
}

/** A running 24fps timecode readout, like the one on a camera monitor. */
export default function Timecode() {
  const reduce = useReducedMotion();
  const [frames, setFrames] = useState(START);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setFrames((n) => n + 1), 1000 / FPS);
    return () => window.clearInterval(id);
  }, [reduce]);

  return <span className="tabular-nums">{format(frames)}</span>;
}
