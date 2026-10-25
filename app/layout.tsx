import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahadev Manerikar | AI Engineer",
  description:
    "AI Engineer building production-grade multi-agent orchestration and RAG systems on Azure.",
  icons: {
    icon: "/mahadev-manerikar.png",
  },
  openGraph: {
    title: "Mahadev Manerikar | AI Engineer",
    description:
      "Production AI, agent orchestration, and backend systems built for real-world impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
