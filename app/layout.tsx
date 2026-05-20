import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MXB Hausmeisterservice & Dienstleistung | Objektbetreuung in Schleswig-Holstein",
  description:
    "Zuverlässiger Hausmeisterservice für Objektbetreuung, Reinigung, Gartenpflege, Winterdienst und Werterhaltung von Liegenschaften in Schleswig-Holstein.",
  keywords: [
    "Hausmeisterservice",
    "Objektbetreuung",
    "Gebäudepflege",
    "Gartenpflege",
    "Winterdienst",
    "Treppenhausreinigung",
    "Glasreinigung",
    "Schleswig-Holstein",
    "Preetz",
    "Kiel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}