"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeInOut, easeOut } from "@/lib/motion";

/**
 * Runs on every route change (used from app/template.tsx):
 * an ink curtain with a sunset edge lifts away, then the page rises in.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <>
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="page-curtain pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-ink"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeInOut }}
        >
          <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-sun via-sun-soft to-gold" />
          <motion.span
            className="font-display text-4xl font-extrabold uppercase tracking-[0.08em] text-paper"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            Obasuyi
          </motion.span>
        </motion.div>
      )}
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 0.35, ease: easeOut }}
      >
        {children}
      </motion.div>
    </>
  );
}
