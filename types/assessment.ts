export type FootView = "plantar" | "dorsal";
export type PainDuration = "lt1w" | "1to4w" | "1to3m" | "gt3m";

export type PainArea = {
  id: string;
  label: string;
  footView: FootView;
  x: number;
  y: number;
  category: string;
};

export type AssessmentResult = {
  title: string;
  explanation: string;
  attention: "basso" | "medio" | "alto";
  specialist: string;
  confidence: number;
  sourceTitle: string;
  sourceUrl: string;
  signals: string[];
  actions: string[];
  warning?: string;
};
