import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deisy Ribeiro - Psicóloga | Sua Jornada para a Paz Interior",
  description: "Apoio psicológico que te ajuda a se reconectar consigo mesma, navegar pelos desafios da vida e encontrar clareza, força e equilíbrio. Agende sua consulta com a psicóloga Deisy Ribeiro.",
  keywords: "psicóloga, terapia, saúde mental, bem-estar, paz interior, Deisy Ribeiro",
  authors: [{ name: "Deisy Ribeiro" }],
  openGraph: {
    title: "Deisy Ribeiro - Psicóloga",
    description: "Sua Jornada para a Paz Interior Começa Aqui",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
