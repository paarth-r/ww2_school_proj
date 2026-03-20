"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type RoomHeroProps = {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
};

export function RoomHero({ src, alt, label, subtitle }: RoomHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <div ref={ref} className="room-hero">
      <motion.div
        className="room-hero-media"
        style={{ y, scale, opacity }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="room-hero-img"
        />
        <div className="room-hero-veil" aria-hidden />
      </motion.div>
      <div className="room-hero-copy">
        <motion.p
          className="room-hero-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="room-hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.h1>
      </div>
    </div>
  );
}
