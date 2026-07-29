"use client";

import { painAreas } from "@/data/painAreas";

type Props = {
  selected: string[];
  onToggle: (id: string) => void;
};

export function FootDiagram({ selected, onToggle }: Props) {
  return (
    <div className="foot-card" aria-label="Mappa interattiva delle aree del piede">
      <img
        className="foot-map-image"
        src="/foot-pain-map-real.png"
        alt="Piede visto da pianta e dorso con punti selezionabili per indicare il dolore"
      />
      {painAreas.map((area) => {
        const active = selected.includes(area.id);
        return (
          <button
            key={area.id}
            className={`pain-point ${active ? "active" : ""}`}
            style={{ left: `${area.x}%`, top: `${area.y}%` }}
            onClick={() => onToggle(area.id)}
            aria-pressed={active}
            aria-label={`${active ? "Deseleziona" : "Seleziona"} ${area.label}`}
            title={area.label}
          />
        );
      })}
    </div>
  );
}
