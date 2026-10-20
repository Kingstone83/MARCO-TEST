"use client";

import { useMemo, useRef, useState } from "react";
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
  const helpDialog = useRef<HTMLDialogElement>(null);

  const selectedAreas = useMemo(() => painAreas.filter((a) => selected.includes(a.id)), [selected]);
  const results = selectedAreas.length ? evaluateSymptoms(selectedAreas, intensity, duration) : [];
  const selectedLabels = selectedAreas.map((area) => area.label).join(", ");

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? [] : [id]);
  }

  function resetAssessment() {
    setSelected([]);
    setIntensity(5);
    setDuration("1to4w");
  }

  return (
    <main>
      <header className="header">
        <div className="brand">
          <img className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/biodinamica-logo.png`} alt="Biodinamica" />
        </div>
        <div className="hero-title"><h1>FOOT <span>MAP</span></h1><p>La mappa interattiva del dolore del piede.</p></div>
        <button className="ghost-button" type="button" aria-haspopup="dialog" onClick={() => helpDialog.current?.showModal()}>
          <span aria-hidden="true">?</span> COME FUNZIONA
        </button>
      </header>

      <section className="dashboard">
        <section className="visual-panel">
          <div className="sr-only">
            <h2>Seleziona l'area del dolore</h2>
            <p>Clicca sul punto dove avverti dolore. Puoi selezionare una sola area.</p>
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
            <div className="diagnosis-kicker">{results.length ? "ANALISI ORIENTATIVA" : "CLICCA UN PUNTO DEL PIEDE"}</div>
            <h2>{results.length ? "Possibili cause da approfondire" : "L'analisi appare qui"}</h2>
            <p className="selection-summary">
              {results.length
                ? `Area selezionata: ${selectedLabels}. Intensita ${intensity}/10, durata: ${durations.find((item) => item.value === duration)?.label}.`
                : "Seleziona un punto doloroso sulla mappa: il pannello si aggiorna subito senza premere altri pulsanti."}
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
        <div><strong>NON È UNA DIAGNOSI MEDICA.</strong><p>È un orientamento informativo basato sul punto selezionato e su fonti podologiche. La conferma richiede una visita specialistica.</p></div>
        <div className="bottom-actions">
          <button className="reset-button" type="button" onClick={resetAssessment} disabled={!selected.length && intensity === 5 && duration === "1to4w"}>
            RESET
          </button>
          <div className="source-pill">Fonte: Wikipodia + regole locali</div>
        </div>
      </section>

      <dialog
        ref={helpDialog}
        className="help-dialog"
        aria-labelledby="help-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) helpDialog.current?.close();
        }}
      >
        <div className="help-dialog-content">
          <header>
            <div>
              <span>FOOT MAP</span>
              <h2 id="help-title">Come funziona</h2>
            </div>
            <button type="button" className="dialog-close" onClick={() => helpDialog.current?.close()} aria-label="Chiudi la guida" title="Chiudi">×</button>
          </header>
          <ol>
            <li><strong>Seleziona il punto</strong><span>Tocca l'area del piede dove senti dolore. Un nuovo punto sostituisce quello precedente.</span></li>
            <li><strong>Indica intensità e durata</strong><span>Regola il valore da 0 a 10 e scegli da quanto tempo è presente.</span></li>
            <li><strong>Consulta l'analisi</strong><span>Leggi le possibili cause, gli indicatori e il professionista consigliato.</span></li>
          </ol>
          <p>Foot Map offre un orientamento informativo e non sostituisce una diagnosi medica.</p>
          <button type="button" className="dialog-primary" onClick={() => helpDialog.current?.close()}>INIZIA</button>
        </div>
      </dialog>
    </main>
  );
}
