import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibits } from "@/data/exhibits";
import { hallMedia, tourSteps, type TourStepId } from "@/data/tour";
import { RoomHero } from "@/components/visit/RoomHero";
import { ScrollReveal } from "@/components/visit/ScrollReveal";
import { SketchfabEmbed } from "@/components/visit/SketchfabEmbed";

const hallSlugs = new Set(exhibits.map((e) => e.id));

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return exhibits.map((e) => ({ slug: e.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const ex = exhibits.find((e) => e.id === params.slug);
  if (!ex) return { title: "Hall not found" };
  return {
    title: `${ex.hallNumber}: ${ex.title}`,
    description: ex.subtitle,
  };
}

export default function HallPage({ params }: Props) {
  if (!hallSlugs.has(params.slug)) notFound();

  const ex = exhibits.find((e) => e.id === params.slug)!;
  const media = hallMedia[params.slug as TourStepId];

  const tourIndex = tourSteps.findIndex((s) => s.id === params.slug);
  const stopIndex = tourIndex >= 0 ? tourIndex + 1 : 0;

  return (
    <main>
      <RoomHero
        src={media.heroImage}
        alt={media.heroAlt}
        label={`Stop ${stopIndex} · ${ex.hallNumber}`}
        subtitle={ex.title}
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
          <p
            className="subtitle"
            style={{ fontStyle: "italic", color: "var(--text-muted)", marginTop: 0 }}
          >
            {ex.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.07}>
          <div className="placard">
            <div className="placard-label">Exhibit text</div>
            <p style={{ margin: 0 }}>{ex.mainIdeas}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.09}>
          <div className="why-matters">
            <strong>Why it matters</strong> — {ex.whyItMatters}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.11}>
          <div className="placard">
            <div className="placard-label">Research highlights</div>
            <p style={{ margin: 0 }}>{ex.research}</p>
          </div>
        </ScrollReveal>

        {media.sketchfab ? (
          <ScrollReveal delay={0.13}>
            <SketchfabEmbed
              uid={media.sketchfab.uid}
              title={media.sketchfab.title}
              author={media.sketchfab.author}
              modelPageUrl={media.sketchfab.url}
            />
            <p className="image-credit" style={{ marginTop: "0.75rem" }}>
              3D models are displayed via Sketchfab embeds for educational
              context; see each creator&apos;s page for license terms.
            </p>
          </ScrollReveal>
        ) : null}

        <ScrollReveal delay={0.15}>
          <div className="sources-block">
            <h2 className="section-title">Sources for this gallery (MLA)</h2>
            {ex.sources.map((s) => (
              <div key={s.mla} className="source-entry">
                <p className="mla">{s.mla}</p>
                <p className="used">
                  <strong>Used for:</strong> {s.usedFor}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.17}>
          <p className="image-credit">
            Jump ahead?{" "}
            <Link href="/visit/works-cited">Open the works cited archive</Link>.
          </p>
        </ScrollReveal>
      </div>
    </main>
  );
}
