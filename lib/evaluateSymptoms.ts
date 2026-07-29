import { AssessmentResult, PainArea, PainDuration } from "@/types/assessment";

const wikiBaseUrl = "https://kingstone83.github.io/podologica-wiki/";

function durationWeight(duration: PainDuration) {
  if (duration === "gt3m") return 2;
  if (duration === "1to3m") return 1;
  return 0;
}

function attentionFor(score: number): AssessmentResult["attention"] {
  if (score >= 8) return "alto";
  if (score >= 5) return "medio";
  return "basso";
}

function result(input: {
  title: string;
  explanation: string;
  specialist: string;
  score: number;
  confidence: number;
  sourceTitle: string;
  sourcePath: string;
  signals: string[];
  actions: string[];
  warning?: string;
}): AssessmentResult {
  return {
    title: input.title,
    explanation: input.explanation,
    attention: attentionFor(input.score),
    specialist: input.specialist,
    confidence: input.confidence,
    sourceTitle: input.sourceTitle,
    sourceUrl: `${wikiBaseUrl}${input.sourcePath}`,
    signals: input.signals,
    actions: input.actions,
    warning: input.warning
  };
}

export function evaluateSymptoms(
  areas: PainArea[],
  intensity: number,
  duration: PainDuration
): AssessmentResult[] {
  const results: AssessmentResult[] = [];
  const score = intensity + durationWeight(duration);
  const categories = new Set(areas.map((a) => a.category));
  const ids = new Set(areas.map((a) => a.id));

  if (ids.has("plantar-big-toe-tip") || ids.has("plantar-big-toe-joint")) {
    results.push(result({
      title: "Possibile alluce valgo o irritazione metatarso-falangea",
      explanation: "Il dolore sull'alluce, soprattutto vicino alla prima articolazione, puo essere collegato a pressione della calzatura, deviazione dell'alluce, borsite o rigidita articolare.",
      specialist: "Podologo, tecnico ortopedico o ortopedico del piede",
      score: score + 1,
      confidence: 82,
      sourceTitle: "Wikipodia: 3) ALLUCE VALGO",
      sourcePath: "voci/023-3-alluce-valgo.html",
      signals: ["Dolore localizzato sull'alluce", "Possibile conflitto con scarpe strette o punta corta", "Peggioramento se compare arrossamento o prominenza mediale"],
      actions: ["Controllare volume e forma della punta della scarpa", "Valutare separatori o ortesi solo dopo visita", "Prenotare valutazione se il dolore persiste o l'alluce devia"]
    }));
  }

  if (categories.has("dita")) {
    results.push(result({
      title: "Sovraccarico o deformita delle dita",
      explanation: "Il dolore sulle dita puo derivare da compressione, callosita, dita a martello/griffe o alterazioni dell'appoggio che aumentano lo sfregamento.",
      specialist: "Podologo o tecnico ortopedico",
      score,
      confidence: 72,
      sourceTitle: "Wikipodia: deformita e problemi dermatologici del piede",
      sourcePath: "voci/215-abduttore-del-quinto-dito-stabilizza-e-abduce-il-quinto-dito.html",
      signals: ["Dolore sulle dita o sulle articolazioni interfalangee", "Possibile sfregamento con tomaia o punta", "Callosita o irritazioni aumentano la probabilita"],
      actions: ["Verificare che la calzatura non comprima le dita", "Non rimuovere calli profondi in autonomia", "Richiedere valutazione se c'e deformita progressiva"]
    }));
  }

  if (categories.has("avampiede")) {
    results.push(result({
      title: "Possibile metatarsalgia da sovraccarico",
      explanation: "Il dolore sotto l'avampiede e le teste metatarsali e spesso legato a carico ripetuto, scarpe inadatte, arco alto o distribuzione non equilibrata della pressione.",
      specialist: "Podologo, tecnico ortopedico o fisioterapista",
      score: score + 1,
      confidence: 86,
      sourceTitle: "Wikipodia: patologie biomeccaniche e metatarsalgia",
      sourcePath: "voci/216-piede-equino-posizione-in-flessione-plantare-permanente-del-piede-spesso-legata-a-problemi.html",
      signals: ["Dolore sotto l'avampiede", "Peggiora camminando, correndo o con tacchi", "Possibile beneficio da scarico metatarsale valutato su misura"],
      actions: ["Ridurre temporaneamente carichi e impatto", "Controllare ammortizzazione e spazio in punta", "Valutare esame baropodometrico se ricorrente"]
    }));
  }

  if (categories.has("bordo")) {
    const lateral = ids.has("plantar-outer-forefoot");
    results.push(result({
      title: lateral ? "Possibile supinazione o sovraccarico laterale" : "Possibile iperpronazione o sovraccarico mediale",
      explanation: lateral
        ? "Il dolore sul bordo esterno puo indicare appoggio in supinazione, piede cavo o carico laterale eccessivo."
        : "Il dolore sul bordo interno puo indicare iperpronazione, piede piatto o stress sull'arco mediale.",
      specialist: "Podologo, tecnico ortopedico o fisioterapista",
      score,
      confidence: 78,
      sourceTitle: "Wikipodia: patologie biomeccaniche",
      sourcePath: "voci/211-2-patologie-biomeccaniche.html",
      signals: lateral
        ? ["Dolore sul margine esterno", "Possibile appoggio laterale", "Rischio di carichi concentrati su avampiede e tallone"]
        : ["Dolore sul margine interno", "Possibile caduta dell'arco", "Rischio di stress su fascia plantare e tibiale posteriore"],
      actions: ["Valutare postura, usura scarpe e distribuzione del carico", "Evitare correzioni plantari casuali", "Fare analisi del cammino se il dolore ritorna"]
    }));
  }

  if (categories.has("arco")) {
    results.push(result({
      title: "Possibile fascite plantare o stress dell'arco",
      explanation: "Il dolore nell'arco plantare puo essere collegato a tensione della fascia plantare, piede piatto con iperpronazione oppure piede cavo con carico concentrato.",
      specialist: "Podologo o fisioterapista",
      score,
      confidence: 84,
      sourceTitle: "Wikipodia: arco alto e fascia plantare",
      sourcePath: "voci/008-arco-alto.html",
      signals: ["Dolore lungo la pianta o arco", "Possibile rigidita o flessibilita eccessiva", "Spesso collegato a carico, scarpe e appoggio"],
      actions: ["Ridurre carico se il dolore aumenta", "Valutare stretching guidato di fascia plantare e polpaccio", "Considerare plantare personalizzato dopo analisi"]
    }));
  }

  if (categories.has("tallone")) {
    results.push(result({
      title: "Possibile tallonite, fascite plantare o borsite retrocalcaneare",
      explanation: "Il dolore al tallone puo nascere da fascia plantare, sperone calcaneare, borsite o sovraccarico del retropiede, specie se aumenta al carico.",
      specialist: "Podologo, fisioterapista o medico dello sport",
      score: score + 1,
      confidence: 88,
      sourceTitle: "Wikipodia: dolore e infiammazioni del tallone",
      sourcePath: "voci/216-piede-equino-posizione-in-flessione-plantare-permanente-del-piede-spesso-legata-a-problemi.html",
      signals: ["Dolore concentrato sul tallone", "Peggioramento al primo appoggio o dopo carico", "Possibile relazione con arco alto/basso e ammortizzazione"],
      actions: ["Usare calzature ammortizzate e stabili", "Evitare corsa o salti finche il dolore e alto", "Valutare visita se dura oltre 1-4 settimane"]
    }));
  }

  if (categories.has("dorso")) {
    results.push(result({
      title: "Possibile tendinopatia, compressione dorsale o neuroma",
      explanation: "Il dolore sul dorso o fra metatarsi puo essere associato a lacci troppo stretti, tendini estensori irritati, sovraccarico o irritazione di un nervo interdigitale.",
      specialist: "Podologo, fisioterapista o ortopedico",
      score,
      confidence: 74,
      sourceTitle: "Wikipodia: neuroma di Morton, tendinopatie e traumi",
      sourcePath: "voci/216-piede-equino-posizione-in-flessione-plantare-permanente-del-piede-spesso-legata-a-problemi.html",
      signals: ["Dolore sul dorso dell'avampiede o tra le dita", "Bruciore/formicolio aumenta il sospetto nervoso", "Lacci o tomaia stretti possono irritare i tessuti"],
      actions: ["Allentare o cambiare allacciatura", "Controllare larghezza della scarpa", "Valutare il professionista se compare formicolio persistente"]
    }));
  }

  if (categories.has("caviglia")) {
    results.push(result({
      title: "Possibile distorsione, tendinopatia o irritazione articolare",
      explanation: "Il dolore vicino alla caviglia richiede attenzione a stabilita, trauma recente, gonfiore e capacita di carico.",
      specialist: "Fisioterapista, ortopedico o medico dello sport",
      score: score + 1,
      confidence: 76,
      sourceTitle: "Wikipodia: distorsioni, tendinopatie e articolazioni",
      sourcePath: "voci/217-distorsioni-lesioni-ai-legamenti-in-particolare-della-caviglia-o-del-piede.html",
      signals: ["Dolore vicino alla caviglia", "Instabilita o gonfiore alzano la priorita", "Trauma recente richiede valutazione piu rapida"],
      actions: ["Evitare carichi instabili se c'e dolore", "Monitorare gonfiore, lividi e appoggio", "Contattare un medico se non riesci a camminare normalmente"]
    }));
  }

  if (!results.length) {
    results.push(result({
      title: "Valutazione generale",
      explanation: "Le informazioni inserite non indicano una singola causa. E consigliabile osservare l'andamento e richiedere una valutazione professionale se il dolore persiste.",
      specialist: "Medico di base o podologo",
      score,
      confidence: 50,
      sourceTitle: "Wikipodia: conosci il tuo piede",
      sourcePath: "voci/005-il-nostro-piede.html",
      signals: ["Dolore non specifico", "Serve combinare punto, carico, durata e calzatura"],
      actions: ["Aggiungere altri punti se il dolore e diffuso", "Osservare quando compare il sintomo", "Valutare un professionista se persiste"]
    }));
  }

  if (intensity >= 9 || (duration === "gt3m" && intensity >= 7)) {
    results.unshift(result({
      title: "Priorita clinica alta",
      explanation: "Un dolore molto forte o persistente merita una valutazione rapida, soprattutto se limita il carico o la deambulazione.",
      specialist: "Medico, ortopedico o servizio sanitario",
      score: 10,
      confidence: 95,
      sourceTitle: "Wikipodia: dichiarazione cautelativa",
      sourcePath: "dichiarazione-cautelativa.html",
      signals: ["Dolore molto intenso o persistente", "Possibile limitazione del cammino", "Trauma, gonfiore o perdita di sensibilita richiedono attenzione"],
      actions: ["Non forzare il carico", "Richiedere una valutazione sanitaria", "Usare il risultato solo come orientamento"],
      warning: "Richiedi assistenza rapidamente in caso di trauma importante, deformita, gonfiore marcato, febbre, perdita di sensibilita o impossibilita a camminare."
    }));
  }

  return results.sort((a, b) => b.confidence - a.confidence).slice(0, 4);
}
