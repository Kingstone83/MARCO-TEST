import { PainArea } from "@/types/assessment";

export const painAreas: PainArea[] = [
  { id: "plantar-big-toe-tip", label: "Alluce - punta", footView: "plantar", x: 44.95, y: 15.59, category: "dita" },
  { id: "plantar-big-toe-joint", label: "Alluce - articolazione", footView: "plantar", x: 46.15, y: 24.30, category: "dita" },
  { id: "plantar-second-toe", label: "Secondo dito", footView: "plantar", x: 39.41, y: 22.52, category: "dita" },
  { id: "plantar-third-toe", label: "Terzo dito", footView: "plantar", x: 35.70, y: 24.65, category: "dita" },
  { id: "plantar-fourth-toe", label: "Quarto dito", footView: "plantar", x: 32.13, y: 27.61, category: "dita" },
  { id: "plantar-fifth-toe", label: "Quinto dito", footView: "plantar", x: 28.35, y: 30.92, category: "dita" },
  { id: "plantar-outer-forefoot", label: "Bordo esterno dell'avampiede", footView: "plantar", x: 26.45, y: 38.68, category: "bordo" },
  { id: "plantar-forefoot", label: "Avampiede", footView: "plantar", x: 38.84, y: 36.02, category: "avampiede" },
  { id: "plantar-inner-forefoot", label: "Bordo interno dell'avampiede", footView: "plantar", x: 48.27, y: 37.06, category: "bordo" },
  { id: "dorsal-instep-cavus", label: "Dorso e collo del piede", footView: "dorsal", x: 36.86, y: 67.86, category: "dorso-cavo" },
  { id: "dorsal-forefoot-inner", label: "Dorso dell'avampiede interno", footView: "dorsal", x: 74.65, y: 29.75, category: "dorso" },
  { id: "dorsal-forefoot-central", label: "Dorso dell'avampiede centrale", footView: "dorsal", x: 80.08, y: 32.62, category: "dorso" },
  { id: "dorsal-forefoot-outer", label: "Dorso dell'avampiede esterno", footView: "dorsal", x: 85.13, y: 37.02, category: "dorso" },
  { id: "dorsal-arch", label: "Arco plantare", footView: "dorsal", x: 73.38, y: 60.37, category: "arco" },
  { id: "dorsal-heel", label: "Tallone", footView: "dorsal", x: 72.95, y: 77.26, category: "tallone" },
  { id: "dorsal-ankle", label: "Caviglia", footView: "dorsal", x: 73.73, y: 90.77, category: "caviglia" }
];
