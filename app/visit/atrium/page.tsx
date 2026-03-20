import type { Metadata } from "next";
import { atrium } from "@/data/exhibits";
import { hallMedia } from "@/data/tour";
import { RoomHero } from "@/components/visit/RoomHero";
import { ScrollReveal } from "@/components/visit/ScrollReveal";
import { SketchfabEmbed } from "@/components/visit/SketchfabEmbed";

export const metadata: Metadata = {
  title: "Atrium — WWII Technology Museum",
  description: atrium.overview.slice(0, 155),
};

export default function AtriumPage() {
  const media = hallMedia.atrium;

  return (
    <main>
      <RoomHero
        src={media.heroImage}
        alt={media.heroAlt}
        label="Stop 1 · Atrium"
        subtitle={atrium.headline}
      />
      <div className="museum-shell room-inner">
        <ScrollReveal>
          <p className="image-credit">
            <strong>Gallery image:</strong> {media.heroCredit}{" "}
            <a href={media.heroCreditUrl} target="_blank" rel="noopener noreferrer">
              View file
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p>{atrium.overview}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="section-title">Key ideas</p>
          <ul className="key-list">
            {atrium.keyPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </ScrollReveal>

        {media.sketchfab ? (
          <ScrollReveal delay={0.1}>
            <SketchfabEmbed
              uid={media.sketchfab.uid}
              title={media.sketchfab.title}
              author={media.sketchfab.author}
              modelPageUrl={media.sketchfab.url}
            />
          </ScrollReveal>
        ) : null}

        <ScrollReveal delay={0.12}>
          <div className="sources-block">
            <h2 className="section-title">Sources (MLA)</h2>
            {atrium.sources.map((s) => (
              <div key={s.mla} className="source-entry">
                <p className="mla">{s.mla}</p>
                <p className="used">
                  <strong>Used for:</strong> {s.usedFor}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
