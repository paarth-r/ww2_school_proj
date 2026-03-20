"use client";

import { useState } from "react";

type SketchfabEmbedProps = {
  uid: string;
  title: string;
  author: string;
  modelPageUrl: string;
};

export function SketchfabEmbed({
  uid,
  title,
  author,
  modelPageUrl,
}: SketchfabEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://sketchfab.com/models/${uid}/embed?autostart=0&ui_theme=dark&ui_animations=0&ui_infos=1`;

  return (
    <figure className="sketchfab-figure">
      <figcaption className="sketchfab-caption">
        <span className="sketchfab-tag">3D object</span>
        <strong>{title}</strong>
        <span className="sketchfab-by">
          {" "}
          by {author} on{" "}
          <a href={modelPageUrl} target="_blank" rel="noopener noreferrer">
            Sketchfab
          </a>
          . Rotate and zoom inside the frame; opens externally via the link.
        </span>
      </figcaption>
      <div className="sketchfab-frame">
        {!loaded && <div className="sketchfab-skeleton" aria-hidden />}
        <iframe
          title={`Interactive 3D: ${title}`}
          src={src}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`sketchfab-iframe${loaded ? " sketchfab-iframe--ready" : ""}`}
        />
      </div>
    </figure>
  );
}
