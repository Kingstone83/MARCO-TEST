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

const metatarsalNames: Record<string, string> = {
  "metatarsalgia-1": "1° metatarso",
  "metatarsalgia-2": "2° metatarso",
  "metatarsalgia-3": "3° metatarso",
  "metatarsalgia-4": "4° metatarso",
  "metatarsalgia-5": "5° metatarso"
};

export function evaluateSymptoms(
  areas: PainArea[],
  intensity: number,
  duration: PainDuration
): AssessmentResult[] {
  const results: AssessmentResult[] = [];
  const score = intensity + durationWeight(duration);
  const categories = new Set(areas.map((area) => area.category));

  if (categories.has("cheratosi-dorsale")) {
    results.push(result({
      title: "Possibile cheratosi dorsale",
      explanation: "Un ispessimento cutaneo sul dorso dell'alluce puo derivare dallo sfregamento ripetuto contro la tomaia, spesso favorito da una prominenza articolare o da una deformita del dito.",
      specialist: "Podologo o tecnico ortopedico",
      score,
      confidence: 86,
      sourceTitle: "Wikipodia: problemi dermatologici del piede",
      sourcePath: "voci/005-il-nostro-piede.html",
      signals: ["Pelle ispessita o arrossata", "Dolore con scarpe chiuse", "Sfregamento localizzato sul dorso del dito"],
      actions: ["Usare calzature con maggiore volume in punta", "Non tagliare la callosita in autonomia", "Far valutare la causa meccanica se tende a riformarsi"]
    }));
  }

  if (categories.has("dita-griffe")) {
    results.push(result({
      title: "Possibili dita a griffe o a martello",
      explanation: "La flessione persistente delle dita puo creare pressione sulle articolazioni e sulle estremita, con dolore, arrossamento e callosita da conflitto con la calzatura.",
      specialist: "Podologo, tecnico ortopedico o ortopedico del piede",
      score,
      confidence: 88,
      sourceTitle: "Wikipodia: deformita delle dita",
      sourcePath: "voci/005-il-nostro-piede.html",
      signals: ["Dito flesso o rigido", "Callosita dorsale o sulla punta", "Dolore maggiore con scarpe strette"],
      actions: ["Scegliere una punta ampia e una tomaia morbida", "Evitare protezioni che aumentano la compressione", "Richiedere una valutazione se la deformita diventa rigida"]
    }));
  }

  if (categories.has("alluce-varo")) {
    results.push(result({
      title: "Possibile alluce varo",
      explanation: "La deviazione dell'alluce verso l'interno puo alterare l'appoggio e creare conflitto con la scarpa. La valutazione deve distinguere una deformita strutturale da un semplice sovraccarico locale.",
      specialist: "Podologo o ortopedico del piede",
      score,
      confidence: 78,
      sourceTitle: "Wikipodia: patologie biomeccaniche",
      sourcePath: "voci/211-2-patologie-biomeccaniche.html",
      signals: ["Deviazione visibile dell'alluce", "Pressione sul bordo del piede", "Dolore durante il passo o con la calzatura"],
      actions: ["Controllare forma e larghezza della scarpa", "Non applicare correttori rigidi senza valutazione", "Approfondire se la deviazione e progressiva o dolorosa"]
    }));
  }

  if (categories.has("neuroma-morton")) {
    results.push(result({
      title: "Possibile neuroma di Morton",
      explanation: "Un dolore bruciante tra le teste metatarsali, talvolta irradiato alle dita, puo essere compatibile con irritazione di un nervo interdigitale, spesso accentuata da scarpe strette e carico prolungato.",
      specialist: "Podologo, ortopedico o medico dello sport",
      score: score + 1,
      confidence: 89,
      sourceTitle: "Wikipodia: neuroma di Morton",
      sourcePath: "voci/211-2-patologie-biomeccaniche.html",
      signals: ["Bruciore o scossa verso le dita", "Sensazione di sassolino sotto il piede", "Peggioramento con scarpe strette o tacchi"],
      actions: ["Ridurre la compressione dell'avampiede", "Preferire calzature larghe e stabili", "Richiedere una valutazione clinica se formicolio o dolore persistono"]
    }));
  }

  if (categories.has("alluce-valgo")) {
    results.push(result({
      title: "Possibile alluce valgo",
      explanation: "Il dolore alla prima articolazione puo essere legato alla deviazione dell'alluce, alla prominenza mediale e alla pressione della calzatura, con possibile borsite o rigidita associata.",
      specialist: "Podologo, tecnico ortopedico o ortopedico del piede",
      score: score + 1,
      confidence: 90,
      sourceTitle: "Wikipodia: alluce valgo",
      sourcePath: "voci/023-3-alluce-valgo.html",
      signals: ["Prominenza o arrossamento alla base dell'alluce", "Alluce deviato verso le altre dita", "Dolore con scarpe strette"],
      actions: ["Scegliere una punta ampia", "Valutare ortesi o separatori solo dopo visita", "Approfondire se il dolore o la deviazione aumentano"]
    }));
  }

  if (categories.has("dorso-cavo")) {
    results.push(result({
      title: "Dolore sul dorso del piede nel piede cavo",
      explanation: "Nel piede cavo il dorso puo risultare piu prominente e soggetto alla pressione della calzatura. La maggiore rigidita e la ridotta capacita di distribuire i carichi possono sovraccaricare tendini estensori, articolazioni del mesopiede e metatarsi. Il dolore puo quindi dipendere da compressione, irritazione tendinea o sovraccarico articolare.",
      specialist: "Podologo, fisioterapista o ortopedico",
      score: score + 1,
      confidence: 87,
      sourceTitle: "Wikipodia: arco alto e piede cavo",
      sourcePath: "voci/008-arco-alto.html",
      signals: ["Pressione della calzatura sul collo del piede", "Dolore dopo cammino prolungato, corsa o salite", "Bruciore, formicolio o gonfiore richiedono attenzione"],
      actions: ["Allentare l'allacciatura e verificare il volume interno della scarpa", "Ridurre temporaneamente le attivita che aumentano il dolore", "Richiedere una valutazione clinica se il dolore persiste o limita l'appoggio"]
    }));
  }

  Object.entries(metatarsalNames).forEach(([category, name]) => {
    if (!categories.has(category)) return;
    results.push(result({
      title: `Possibile metatarsalgia del ${name}`,
      explanation: `Il dolore sotto la testa del ${name} puo essere collegato a un sovraccarico localizzato, alla distribuzione non uniforme delle pressioni, alla forma del piede o a calzature poco adatte.`,
      specialist: "Podologo, tecnico ortopedico o fisioterapista",
      score: score + 1,
      confidence: 88,
      sourceTitle: "Wikipodia: patologie biomeccaniche e metatarsalgia",
      sourcePath: "voci/211-2-patologie-biomeccaniche.html",
      signals: [`Dolore localizzato sotto il ${name}`, "Peggioramento camminando o restando in piedi", "Possibili callosita o sensazione di pressione"],
      actions: ["Ridurre temporaneamente i carichi che provocano dolore", "Controllare ammortizzazione e spazio della calzatura", "Valutare appoggio e scarico metatarsale con un professionista"]
    }));
  });

  if (categories.has("cheratosi-laterali")) {
    results.push(result({
      title: "Possibili cheratosi digitali laterali",
      explanation: "Le callosita sui lati delle dita sono spesso dovute a sfregamento e compressione tra dita o contro la scarpa. Possono essere favorite da dita deformate, sovrapposte o da una punta troppo stretta.",
      specialist: "Podologo o tecnico ortopedico",
      score,
      confidence: 86,
      sourceTitle: "Wikipodia: problemi dermatologici del piede",
      sourcePath: "voci/005-il-nostro-piede.html",
      signals: ["Ispessimento doloroso tra o sui lati delle dita", "Arrossamento da sfregamento", "Dolore con calzature chiuse"],
      actions: ["Usare scarpe con punta piu ampia", "Mantenere asciutti gli spazi interdigitali", "Far trattare la lesione e la causa meccanica da un podologo"]
    }));
  }

  if (categories.has("fascite-plantare")) {
    results.push(result({
      title: "Possibile fascite plantare",
      explanation: "Il dolore lungo la fascia plantare puo essere legato a tensione e sovraccarico dell'arco. Spesso e piu evidente ai primi passi o dopo un periodo di riposo.",
      specialist: "Podologo, fisioterapista o medico dello sport",
      score: score + 1,
      confidence: 91,
      sourceTitle: "Wikipodia: arco e fascia plantare",
      sourcePath: "voci/008-arco-alto.html",
      signals: ["Dolore lungo l'arco o verso il tallone", "Fastidio ai primi passi", "Peggioramento dopo carico prolungato"],
      actions: ["Ridurre temporaneamente corsa e salti", "Usare calzature stabili e ammortizzate", "Valutare stretching e trattamento con un professionista"]
    }));
  }

  if (categories.has("sperone-calcaneare")) {
    results.push(result({
      title: "Possibile spina o sperone calcaneare",
      explanation: "Il dolore sotto il calcagno puo essere associato a trazione della fascia plantare e, talvolta, a una formazione ossea calcaneare. La presenza dello sperone deve essere confermata clinicamente e con esami indicati dal medico.",
      specialist: "Podologo, ortopedico o fisioterapista",
      score: score + 1,
      confidence: 84,
      sourceTitle: "Wikipodia: tallone e sovraccarico",
      sourcePath: "voci/211-2-patologie-biomeccaniche.html",
      signals: ["Dolore puntiforme sotto il tallone", "Fastidio al primo appoggio", "Dolore crescente con stazione eretta prolungata"],
      actions: ["Evitare cammino scalzo su superfici dure", "Controllare ammortizzazione e sostegno della scarpa", "Richiedere valutazione se persiste o limita il passo"]
    }));
  }

  if (categories.has("tallonite-tendinite")) {
    results.push(result({
      title: "Possibile tallonite o tendinite achillea",
      explanation: "Il dolore posteriore del tallone puo dipendere da sovraccarico del tendine d'Achille, irritazione dell'inserzione o dei tessuti vicini. Attivita intensa e calzature rigide possono aumentarlo.",
      specialist: "Fisioterapista, ortopedico o medico dello sport",
      score: score + 1,
      confidence: 88,
      sourceTitle: "Wikipodia: tendinopatie e sovraccarico",
      sourcePath: "voci/216-piede-equino-posizione-in-flessione-plantare-permanente-del-piede-spesso-legata-a-problemi.html",
      signals: ["Dolore dietro il tallone", "Rigidita al mattino o dopo riposo", "Peggioramento correndo, saltando o in salita"],
      actions: ["Ridurre temporaneamente le attivita irritanti", "Evitare scarpe che comprimono il retro del tallone", "Richiedere valutazione se compaiono gonfiore o perdita di forza"]
    }));
  }

  if (!results.length) {
    results.push(result({
      title: "Valutazione generale",
      explanation: "Le informazioni inserite non indicano una singola causa. Osserva l'andamento e richiedi una valutazione professionale se il dolore persiste.",
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
