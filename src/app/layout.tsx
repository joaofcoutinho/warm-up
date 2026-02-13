import type { Metadata } from "next";
import { Montserrat, Lato, Exo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Warm-Up Day Enjoy | 04 de Março - Vitória/ES",
  description:
    "O aquecimento oficial que prepara os grandes para o ápice do mercado em 2026. Visão estratégica, conexões qualificadas e desenvolvimento empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${lato.variable} ${exo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
