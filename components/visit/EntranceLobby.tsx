"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function EntranceLobby() {
  return (
    <div className="lobby">
      <div className="lobby-bg" aria-hidden />
      <div className="lobby-grid" aria-hidden />
      <motion.div
        className="lobby-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p className="lobby-kicker" variants={item}>
          Guided tour
        </motion.p>
        <motion.h1 className="lobby-title" variants={item}>
          Technological Advances in World War II
        </motion.h1>
        <motion.p className="lobby-lead" variants={item}>
          Follow the sequence of galleries—each room opens on its own page with
          artifacts, a 3D viewer, and citations. Scroll to read the placards;
          use the rail below on each stop to move backward or forward.
        </motion.p>
        <motion.div variants={item}>
          <Link href="/visit/atrium" className="lobby-cta">
            Enter the museum
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
        <motion.p className="lobby-hint" variants={item}>
          Seven stops · about 15–20 minutes · best on a wide screen for 3D
        </motion.p>
      </motion.div>
    </div>
  );
}
