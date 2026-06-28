import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Facilymp | Chamou? Limpou!",
  description:
    "O padrao de limpeza que transforma seu espaco. Limpeza residencial, comercial e para igrejas no Rio de Janeiro, com profissionais qualificados.",
  openGraph: {
    title: "Facilymp | Chamou? Limpou!",
    description:
      "O padrao de limpeza que transforma seu espaco. Atendimento no Rio de Janeiro e regiao.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
