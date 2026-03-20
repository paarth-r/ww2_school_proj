import type { Metadata } from "next";
import { worksCitedUnique } from "@/data/exhibits";
import { hallMedia } from "@/data/tour";
import { RoomHero } from "@/components/visit/RoomHero";
import { ScrollReveal } from "@/components/visit/ScrollReveal";

export const metadata: Metadata = {
  title: "Works Cited — WWII Technology Museum",
  description: "Alphabetical works cited (MLA) for the virtual museum.",
};

export default function WorksCitedPage() {
  const media = hallMedia["works-cited"];

  return (
    <main>
      <RoomHero
        src={media.heroImage}
        alt={media.heroAlt}
        label="Stop 7 · Archive"
        subtitle="Works cited"
      />
      <div className="museum-shell room-inner">
        <ScrollReveal>
          <p className="image-credit">
            <strong>Banner image:</strong> {media.heroCredit}{" "}
            <a href={media.heroCreditUrl} target="_blank" rel="noopener noreferrer">
              View file
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p style={{ color: "var(--text-muted)", marginTop: 0 }}>
            Alphabetical list (MLA 9th edition style for books). These entries
            match the print sources used across the galleries.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="works-cited" style={{ marginTop: "1.5rem" }}>
            <ol>
              {worksCitedUnique.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
