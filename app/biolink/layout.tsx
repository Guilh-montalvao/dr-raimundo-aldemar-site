import type { Metadata, Viewport } from "next";
import "./biolink.css";

export const viewport: Viewport = {
  themeColor: "#201813",
  width: "device-width",
  initialScale: 1,
};

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
  title: "Dr. Raimundo Aldemar | Agendamento & Links Oficiais",
  description:
    "Agende sua consulta ou cirurgia com o Dr. Raimundo Aldemar, Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936). Asa Norte (Otorhynus), Gama (Otogama) e Taguatinga (CDO Otorrino).",
  alternates: {
    canonical: "/links",
  },
  openGraph: {
    title: "Dr. Raimundo Aldemar | Agendamento & Links Oficiais",
    description:
      "Otorrinolaringologista para crianças e adultos em Brasília · Asa Norte, Gama e Taguatinga · Agende pelo WhatsApp.",
    url: "/links",
    siteName: "Dr. Raimundo Aldemar — Links Oficiais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/media/og-links.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Raimundo Aldemar — Agendamento de Consultas e Cirurgias em Brasília",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Raimundo Aldemar | Agendamento & Links Oficiais",
    description:
      "Otorrinolaringologista para crianças e adultos em Brasília (CRM-DF 20094 · RQE 13936). Agende pelo WhatsApp.",
    images: ["/media/og-links.jpg"],
  },
};

export default function BiolinkLayout({ children }: { children: React.ReactNode }) {
  return <div className="biolink-theme">{children}</div>;
}
