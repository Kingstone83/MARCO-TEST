import "./globals.css";

export const metadata = {
  title: "Foot Pain Identifier",
  description: "Orientamento informativo sul dolore al piede"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>;
}
