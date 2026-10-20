import { PainArea } from "@/types/assessment";

export const painAreas: PainArea[] = [
  { id: "point-1-dorsal-keratosis", label: "1. Cheratosi dorsale dell'alluce", footView: "dorsal", x: 44.94, y: 15.59, category: "cheratosi-dorsale" },
  { id: "point-2-second-toe", label: "2. Secondo dito a griffe o martello", footView: "dorsal", x: 39.41, y: 22.52, category: "dita-griffe" },
  { id: "point-3-third-toe", label: "3. Terzo dito a griffe o martello", footView: "dorsal", x: 35.70, y: 24.65, category: "dita-griffe" },
  { id: "point-4-fourth-toe", label: "4. Quarto dito a griffe o martello", footView: "dorsal", x: 32.14, y: 27.61, category: "dita-griffe" },
  { id: "point-5-fifth-toe", label: "5. Quinto dito a griffe o martello", footView: "dorsal", x: 28.34, y: 30.89, category: "dita-griffe" },
  { id: "point-6-varus", label: "6. Alluce varo", footView: "dorsal", x: 26.44, y: 38.66, category: "alluce-varo" },
  { id: "point-7-morton", label: "7. Neuroma di Morton", footView: "dorsal", x: 38.86, y: 36.05, category: "neuroma-morton" },
  { id: "point-8-hallux-valgus", label: "8. Alluce valgo", footView: "dorsal", x: 48.26, y: 37.05, category: "alluce-valgo" },
  { id: "point-9-dorsalgia", label: "9. Dolore sul dorso del piede", footView: "dorsal", x: 36.88, y: 67.89, category: "dorso-cavo" },
  { id: "point-17-first-metatarsal", label: "17. Metatarsalgia del 1° metatarso", footView: "plantar", x: 67.53, y: 30.80, category: "metatarsalgia-1" },
  { id: "point-10-second-metatarsal", label: "10. Metatarsalgia del 2° metatarso", footView: "plantar", x: 73.08, y: 29.21, category: "metatarsalgia-2" },
  { id: "point-11-third-metatarsal", label: "11. Metatarsalgia del 3° metatarso", footView: "plantar", x: 77.62, y: 30.80, category: "metatarsalgia-3" },
  { id: "point-16-fourth-metatarsal", label: "16. Metatarsalgia del 4° metatarso", footView: "plantar", x: 81.75, y: 33.46, category: "metatarsalgia-4" },
  { id: "point-12-fifth-metatarsal", label: "12. Metatarsalgia del 5° metatarso", footView: "plantar", x: 85.89, y: 37.09, category: "metatarsalgia-5" },
  { id: "point-18-lateral-digital-keratosis", label: "18. Cheratosi digitali laterali", footView: "plantar", x: 85.79, y: 26.33, category: "cheratosi-laterali" },
  { id: "point-13-plantar-fascia", label: "13. Fascite plantare", footView: "plantar", x: 73.38, y: 60.39, category: "fascite-plantare" },
  { id: "point-14-heel-spur", label: "14. Spina o sperone calcaneare", footView: "plantar", x: 72.99, y: 77.24, category: "sperone-calcaneare" },
  { id: "point-15-heel-tendon", label: "15. Tallonite o tendinite", footView: "plantar", x: 73.71, y: 90.68, category: "tallonite-tendinite" }
];
