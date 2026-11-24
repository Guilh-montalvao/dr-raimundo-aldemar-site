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
  ? process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "https://www.drraimundoaldemar.com.br";

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Raimundo Aldemar Silva Filho",
  alternateName: "Dr. Raimundo Aldemar — Otorrinolaringologista",
  description:
    "Médico Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936). Atendimento clínico e cirúrgico infantil e adulto na Asa Norte (Otorhynus), Gama (Otogama) e Taguatinga (CDO Otorrino).",
  url: "https://www.drraimundoaldemar.com.br",
  image: "https://www.drraimundoaldemar.com.br/media/og-site.jpg",
  medicalSpecialty: "Otolaryngology",
  identifier: "CRM-DF 20094 · RQE 13936",
  sameAs: ["https://www.instagram.com/raimundo.otorrino/"],
  areaServed: {
    "@type": "City",
    name: "Brasília",
    containedInPlace: {
      "@type": "State",
      name: "Distrito Federal",
    },
  },
  workLocation: [
    {
      "@type": "MedicalClinic",
      name: "Unidade Otorhynus — Asa Norte",
      telephone: "+55-61-98574-3764",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "SHLN Bloco K, Edifício Centro Clínico Norte I, Salas 203/204, Asa Norte",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "Clínica Otogama — Gama",
      telephone: "+55-61-98346-6377",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Quadra 01, Conjunto A, Lote 4, Gama Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "CDO Otorrino — Taguatinga",
      telephone: "+55-61-98323-0103",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Área Especial 8/9/10, Centro Médico Hospital Anchieta, Salas 111/112 B, Taguatinga Norte",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
        url: "/media/og-site.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Raimundo Aldemar — Médico Otorrinolaringologista em Brasília",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Raimundo Aldemar | Otorrinolaringologista em Brasília",
    description:
      "Respirar bem, livre da obstrução nasal • Criança • Adulto. Médico Otorrinolaringologista em Brasília (CRM-DF 20094 · RQE 13936).",
    images: ["/media/og-site.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png" }],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
