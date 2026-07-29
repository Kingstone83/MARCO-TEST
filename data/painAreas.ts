import { PainArea } from "@/types/assessment";

export const painAreas: PainArea[] = [
  { id: "plantar-big-toe-tip", label: "Alluce - punta", footView: "plantar", x: 45.7, y: 7.4, category: "dita" },
  { id: "plantar-big-toe-joint", label: "Alluce - articolazione", footView: "plantar", x: 46.7, y: 16.4, category: "dita" },
  { id: "plantar-second-toe", label: "Secondo dito", footView: "plantar", x: 39.3, y: 14.6, category: "dita" },
  { id: "plantar-third-toe", label: "Terzo dito", footView: "plantar", x: 35.5, y: 17.0, category: "dita" },
  { id: "plantar-fourth-toe", label: "Quarto dito", footView: "plantar", x: 31.7, y: 19.3, category: "dita" },
  { id: "plantar-fifth-toe", label: "Quinto dito", footView: "plantar", x: 27.7, y: 21.1, category: "dita" },
  { id: "plantar-outer-forefoot", label: "Bordo esterno dell'avampiede", footView: "plantar", x: 25.0, y: 30.6, category: "bordo" },
  { id: "plantar-forefoot", label: "Avampiede", footView: "plantar", x: 38.2, y: 27.4, category: "avampiede" },
  { id: "plantar-inner-forefoot", label: "Bordo interno dell'avampiede", footView: "plantar", x: 48.5, y: 29.3, category: "bordo" },
  { id: "plantar-heel", label: "Tallone e retro piede", footView: "plantar", x: 35.2, y: 81.2, category: "tallone" },
  { id: "dorsal-forefoot-inner", label: "Dorso dell'avampiede interno", footView: "dorsal", x: 76.3, y: 22.6, category: "dorso" },
  { id: "dorsal-forefoot-central", label: "Dorso dell'avampiede centrale", footView: "dorsal", x: 82.3, y: 24.9, category: "dorso" },
  { id: "dorsal-forefoot-outer", label: "Dorso dell'avampiede esterno", footView: "dorsal", x: 87.4, y: 29.8, category: "dorso" },
  { id: "dorsal-arch", label: "Arco plantare", footView: "dorsal", x: 74.3, y: 52.5, category: "arco" },
  { id: "dorsal-heel", label: "Tallone", footView: "dorsal", x: 73.8, y: 70.9, category: "tallone" },
  { id: "dorsal-ankle", label: "Caviglia", footView: "dorsal", x: 74.7, y: 84.4, category: "caviglia" }
];
