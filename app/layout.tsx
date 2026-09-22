import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Raimundo Aldemar | Otorrinolaringologista em Brasília",
  description: "Otorrinolaringologia para adultos e crianças, com ênfase em cirurgia cérvico-facial. Dr. Raimundo Aldemar, CRM-DF 20094 | RQE 13936. Taguatinga, Gama e Asa Norte, DF.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
