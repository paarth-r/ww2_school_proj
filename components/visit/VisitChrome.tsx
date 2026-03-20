"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { getTourNav, tourSteps } from "@/data/tour";
import { museumTitle } from "@/data/exhibits";

function useTourNav() {
  const pathname = usePathname() ?? "";
  return getTourNav(pathname);
}

export function VisitChrome({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const { prev, next, index, total } = useTourNav();

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
        aria-hidden
      />
      <header className="visit-topbar">
        <Link href="/" className="visit-brand">
          <span className="visit-brand-mark">◇</span>
          <span className="visit-brand-text">
            WWII Tech
            <small>{museumTitle}</small>
          </span>
        </Link>
        <nav className="visit-stepper" aria-label="Tour progress">
          {tourSteps.map((s, i) => {
            const active = i === index;
            const done = index > i;
            return (
              <Link
                key={s.path}
                href={s.path}
                className={`visit-step-dot${active ? " visit-step-dot--active" : ""}${done ? " visit-step-dot--done" : ""}`}
                title={`${s.label}: ${s.blurb}`}
              >
                <span className="sr-only">
                  {s.label} — {s.blurb}
                </span>
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="visit-body">{children}</div>
      <footer className="visit-rail">
        <div className="visit-rail-inner">
          {prev ? (
            <Link href={prev.path} className="visit-back">
              <span className="visit-back-arrow" aria-hidden>
                ←
              </span>
              <span>
                <span className="visit-rail-muted">Back</span>
                <span className="visit-rail-strong">
                  {prev.label}: {prev.blurb}
                </span>
              </span>
            </Link>
          ) : (
            <Link href="/" className="visit-back">
              <span className="visit-back-arrow" aria-hidden>
                ←
              </span>
              <span>
                <span className="visit-rail-muted">Back</span>
                <span className="visit-rail-strong">Entrance lobby</span>
              </span>
            </Link>
          )}
          {next ? (
            <Link href={next.path} className="visit-next">
              <span>
                <span className="visit-rail-muted">Continue</span>
                <span className="visit-rail-strong">
                  {next.label}: {next.blurb}
                </span>
              </span>
              <span className="visit-next-arrow" aria-hidden>
                →
              </span>
            </Link>
          ) : (
            <Link href="/" className="visit-next visit-next--end">
              <span>
                <span className="visit-rail-muted">End of tour</span>
                <span className="visit-rail-strong">Return to entrance</span>
              </span>
              <span className="visit-next-arrow" aria-hidden>
                ⌂
              </span>
            </Link>
          )}
        </div>
        <p className="visit-rail-count" aria-live="polite">
          Stop {index >= 0 ? index + 1 : "—"} of {total}
        </p>
      </footer>
    </>
  );
}
