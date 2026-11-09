"use client";

import { useState } from "react";
import { Chip } from "../ui/primitives";
import { WhatsAppButton } from "../ui/Button";

type Props = {
  areas: string[];
  description: string;
};

/** Pick an area, then enquire on WhatsApp about Bleach / D-Tan for that area. */
export function BleachAreaSelector({ areas, description }: Props) {
  const [area, setArea] = useState(areas[0]);
  const service = `Bleach / D-Tan for the ${area}`;

  return (
    <div className="rounded-card border border-line bg-surface-container-lowest p-5 md:p-7">
      <p className="type-eyebrow text-primary" id="bleach-areas-label">
        Choose an area
      </p>
      <div
        role="group"
        aria-labelledby="bleach-areas-label"
        className="mt-3 flex flex-wrap gap-2"
      >
        {areas.map((a) => (
          <Chip key={a} active={a === area} aria-pressed={a === area} onClick={() => setArea(a)}>
            {a}
          </Chip>
        ))}
      </div>
      <div className="mt-6 rounded-tile bg-surface p-5 ring-1 ring-gold/25" aria-live="polite">
        <h3 className="type-h3 text-on-surface">Bleach / D-Tan: {area}</h3>
        <p className="type-body mt-2 text-on-surface-variant">{description}</p>
        <WhatsAppButton service={service} className="mt-5">
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
