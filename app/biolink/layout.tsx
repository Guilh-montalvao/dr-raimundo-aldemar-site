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
  description: "Agende sua consulta de Otorrinolaringologia com o Dr. Raimundo Aldemar. Atendimento no CDO Otorrino (Taguatinga), Otogama (Gama) e Otorhynus (Asa Norte).",
  alternates: {
    canonical: "/biolink",
  },
  openGraph: {
    title: "Dr. Raimundo Aldemar | Agendamento & Links Oficiais",
    description: "Otorrinolaringologia para adultos e crianças em Brasília. CRM-DF 20094 · RQE 13936. Agende pelo WhatsApp.",
    url: "/biolink",
    siteName: "Dr. Raimundo Aldemar — Biolink",
    locale: "pt_BR",
    type: "profile",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Raimundo Aldemar — Médico Otorrinolaringologista",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Raimundo Aldemar | Agendamento & Links Oficiais",
    description: "Otorrinolaringologia para adultos e crianças em Brasília. CRM-DF 20094 · RQE 13936.",
    images: ["/media/og-image.jpg"],
  },
};

export default function BiolinkLayout({ children }: { children: React.ReactNode }) {
  return <div className="biolink-theme">{children}</div>;
}
