import "./globals.css";

export const metadata = {
  title: "Foot Map",
  description: "La mappa interattiva del dolore del piede"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>;
}
