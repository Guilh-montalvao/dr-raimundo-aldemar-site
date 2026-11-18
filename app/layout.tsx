import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://drraimundoaldemar.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Raimundo Aldemar | Otorrinolaringologista em Brasília",
  description:
    "Respirar bem, livre da obstrução nasal • Criança • Adulto. Médico Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936). Atendimento na Asa Norte (Otorhynus), Gama (Otogama) e Taguatinga (CDO).",
  openGraph: {
    title: "Dr. Raimundo Aldemar | Otorrinolaringologista em Brasília",
    description:
      "Respirar bem, livre da obstrução nasal • Criança • Adulto. Médico Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936). Atendimento na Asa Norte, Gama e Taguatinga.",
    url: "/",
    siteName: "Dr. Raimundo Aldemar — Otorrinolaringologista",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Raimundo Aldemar — Médico Otorrinolaringologista",
        type: "image/jpeg",
      },
      {
        url: "/media/retrato.webp",
        width: 1672,
        height: 941,
        alt: "Dr. Raimundo Aldemar — Médico Otorrinolaringologista",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Raimundo Aldemar | Otorrinolaringologista em Brasília",
    description:
      "Respirar bem, livre da obstrução nasal • Criança • Adulto. Médico Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936).",
    images: ["/media/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
