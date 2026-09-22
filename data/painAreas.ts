import { PainArea } from "@/types/assessment";

export const painAreas: PainArea[] = [
  { id: "plantar-big-toe-tip", label: "Alluce - punta", footView: "plantar", x: 44.5, y: 8.7, category: "dita" },
  { id: "plantar-big-toe-joint", label: "Alluce - articolazione", footView: "plantar", x: 45.8, y: 17.2, category: "dita" },
  { id: "plantar-second-toe", label: "Secondo dito", footView: "plantar", x: 38.7, y: 15.6, category: "dita" },
  { id: "plantar-third-toe", label: "Terzo dito", footView: "plantar", x: 34.6, y: 17.7, category: "dita" },
  { id: "plantar-fourth-toe", label: "Quarto dito", footView: "plantar", x: 30.9, y: 20.7, category: "dita" },
  { id: "plantar-fifth-toe", label: "Quinto dito", footView: "plantar", x: 26.9, y: 24.0, category: "dita" },
  { id: "plantar-outer-forefoot", label: "Bordo esterno dell'avampiede", footView: "plantar", x: 24.9, y: 31.3, category: "bordo" },
  { id: "plantar-forefoot", label: "Avampiede", footView: "plantar", x: 38.1, y: 28.9, category: "avampiede" },
  { id: "plantar-inner-forefoot", label: "Bordo interno dell'avampiede", footView: "plantar", x: 48.1, y: 29.6, category: "bordo" },
  { id: "plantar-heel", label: "Tallone e retro piede", footView: "plantar", x: 35.5, y: 83.2, category: "tallone" },
  { id: "dorsal-forefoot-inner", label: "Dorso dell'avampiede interno", footView: "dorsal", x: 76.1, y: 22.4, category: "dorso" },
  { id: "dorsal-forefoot-central", label: "Dorso dell'avampiede centrale", footView: "dorsal", x: 81.8, y: 25.2, category: "dorso" },
  { id: "dorsal-forefoot-outer", label: "Dorso dell'avampiede esterno", footView: "dorsal", x: 87.0, y: 29.8, category: "dorso" },
  { id: "dorsal-arch", label: "Arco plantare", footView: "dorsal", x: 74.5, y: 52.4, category: "arco" },
  { id: "dorsal-heel", label: "Tallone", footView: "dorsal", x: 74.2, y: 68.8, category: "tallone" },
  { id: "dorsal-ankle", label: "Caviglia", footView: "dorsal", x: 74.9, y: 82.2, category: "caviglia" }
];
