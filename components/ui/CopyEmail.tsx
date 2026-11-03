"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

/** Copies an email address to the clipboard and confirms with a small animated label. */
export default function CopyEmail({ email, className, dark = false }: { email: string; className?: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex min-h-[54px] items-center gap-3 rounded-full border px-6 text-[15px] font-semibold transition-colors duration-500",
        dark ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-ink" : "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        className,
      )}
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
      <span className="relative inline-block min-w-[96px] text-left" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "done" : "idle"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {copied ? "Copied!" : "Copy email"}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
