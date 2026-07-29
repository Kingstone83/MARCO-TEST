"use client";

import { useMemo, useState } from "react";
import { FootDiagram } from "./FootDiagram";
import { painAreas } from "@/data/painAreas";
import { evaluateSymptoms } from "@/lib/evaluateSymptoms";
import { PainDuration } from "@/types/assessment";

const durations: { value: PainDuration; label: string }[] = [
  { value: "lt1w", label: "Meno di 1 settimana" },
  { value: "1to4w", label: "Da 1 a 4 settimane" },
  { value: "1to3m", label: "Da 1 a 3 mesi" },
  { value: "gt3m", label: "Più di 3 mesi" }
];

export function AssessmentApp() {
  const [selected, setSelected] = useState<string[]>([]);
  const [intensity, setIntensity] = useState(5);
  const [duration, setDuration] = useState<PainDuration>("1to4w");

  const selectedAreas = useMemo(() => painAreas.filter((a) => selected.includes(a.id)), [selected]);
  const results = selectedAreas.length ? evaluateSymptoms(selectedAreas, intensity, duration) : [];
  const selectedLabels = selectedAreas.map((area) => area.label).join(", ");

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function resetAssessment() {
    setSelected([]);
    setIntensity(5);
    setDuration("1to4w");
  }

  return (
    <main>
      <header className="header">
        <div className="brand"><span className="brand-mark">B</span><div><strong>BIODINAMICA</strong><small>PIEDE E MOVIMENTO</small></div></div>
        <div className="hero-title"><h1>FOOT <span>PAIN</span> IDENTIFIER</h1><p>Indica dove senti dolore per aiutarci a comprenderne meglio le possibili cause.</p></div>
        <button className="ghost-button">? COME FUNZIONA</button>
      </header>

      <section className="dashboard">
        <section className="visual-panel">
          <div className="sr-only">
            <h2>Seleziona l'area del dolore</h2>
            <p>Clicca sui punti dove avverti dolore. Puoi selezionare più aree.</p>
          </div>
          <div className="feet-grid">
            <FootDiagram selected={selected} onToggle={toggle} />
          </div>
        </section>

        <aside className="controls-panel">
          <section className="control-section">
            <div className="section-copy compact"><span>2.</span><div><h2>INTENSITÀ DEL DOLORE</h2><p>Quanto è forte il dolore?</p></div></div>
            <div className="range-value">{intensity}</div>
            <input aria-label="Intensità del dolore" type="range" min="0" max="10" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} />
            <div className="range-labels"><span>Nessun dolore</span><span>Moderato</span><span>Molto forte</span></div>
          </section>

          <section className="control-section">
            <div className="section-copy compact"><span>3.</span><div><h2>DA QUANTO TEMPO?</h2><p>Seleziona la durata del dolore.</p></div></div>
            <div className="duration-list">
              {durations.map((item) => (
                <button key={item.value} className={duration === item.value ? "selected" : ""} onClick={() => setDuration(item.value)} aria-pressed={duration === item.value}>
                  <span>{item.label}</span><b>{duration === item.value ? "✓" : ""}</b>
                </button>
              ))}
            </div>
          </section>

          <section className={`live-diagnosis ${results.length ? "diagnosis-ready" : ""}`} aria-live="polite">
            <div className="diagnosis-kicker">{results.length ? "DIAGNOSI ORIENTATIVA LIVE" : "CLICCA UN PUNTO DEL PIEDE"}</div>
            <h2>{results.length ? "Possibili cause da approfondire" : "La diagnosi appare qui"}</h2>
            <p className="selection-summary">
              {results.length
                ? `Aree selezionate: ${selectedLabels}. Intensita ${intensity}/10, durata: ${durations.find((item) => item.value === duration)?.label}.`
                : "Seleziona una o piu aree dolorose sulla mappa: il pannello si aggiorna subito senza premere altri pulsanti."}
            </p>

            {results.length > 0 && (
              <div className="diagnosis-list">
                {results.map((item) => (
                  <article key={item.title} className={`diagnosis-card ${item.attention}`}>
                    <div className="diagnosis-meta">
                      <span>Compatibilita {item.confidence}%</span>
                      <b>{item.attention}</b>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.explanation}</p>
                    <div className="diagnosis-block">
                      <strong>Indicatori</strong>
                      <ul>{item.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
                    </div>
                    <div className="diagnosis-block">
                      <strong>Cosa fare ora</strong>
                      <ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                    </div>
                    <p className="specialist"><strong>Professionista:</strong> {item.specialist}</p>
                    {item.warning && <div className="warning">{item.warning}</div>}
                    <a className="source-link" href={item.sourceUrl} target="_blank" rel="noreferrer">Fonte dati: {item.sourceTitle}</a>
                  </article>
                ))}
              </div>
            )}
          </section>
        </aside>
      </section>

      <section className="bottom-bar">
        <div><strong>NON È UNA DIAGNOSI MEDICA.</strong><p>È un orientamento informativo basato sui punti selezionati e su fonti podologiche. La conferma richiede una visita specialistica.</p></div>
        <div className="bottom-actions">
          <button className="reset-button" type="button" onClick={resetAssessment} disabled={!selected.length && intensity === 5 && duration === "1to4w"}>
            RESET
          </button>
          <div className="source-pill">Fonte: Wikipodia + regole locali</div>
        </div>
      </section>
    </main>
  );
}
