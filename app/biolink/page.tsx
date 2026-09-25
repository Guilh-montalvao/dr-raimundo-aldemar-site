"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  Share2,
  Check,
  Sparkles,
  ArrowUpRight,
  Activity,
  HeartHandshake,
} from "lucide-react";

const siteUrl = "https://drraimundoaldemar.com.br";
const instagramUrl =
  "https://www.instagram.com/raimundo.otorrino?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

function whatsappUrl(phone: string, clinic: string) {
  const text = `Olá! Gostaria de agendar uma consulta com o Dr. Raimundo Aldemar na unidade ${clinic}.`;
  return `https://wa.me/55${phone}?text=${encodeURIComponent(text)}`;
}

interface Clinic {
  id: string;
  region: string;
  name: string;
  badge: string;
  address: string;
  neighborhood: string;
  whatsapp: string;
  phone: string;
  phoneRaw: string;
  mapUrl: string;
  image: string;
  featured?: boolean;
}

const clinics: Clinic[] = [
  {
    id: "taguatinga",
    region: "TAGUATINGA",
    name: "CDO Otorrino",
    badge: "Hospital Anchieta",
    address: "Centro Médico Hospital Anchieta, Salas 111/112 B",
    neighborhood: "Área Especial 08/09/10, Setor C Norte",
    whatsapp: "61983230103",
    phone: "(61) 3352-6994",
    phoneRaw: "+556133526994",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=CDO+Otorrino+Hospital+Anchieta+Taguatinga",
    image: "/media/cdootorrino.png",
    featured: true,
  },
  {
    id: "gama",
    region: "GAMA",
    name: "Clínica Otogama",
    badge: "Gama Sul",
    address: "Quadra 01, Conjunto A, Lote 4, 1º andar",
    neighborhood: "Gama Sul · Brasília, DF",
    whatsapp: "61983466377",
    phone: "(61) 3254-0111",
    phoneRaw: "+556132540111",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Clinica+Otogama+Quadra+1+Gama+Sul",
    image: "/media/otogama.png",
  },
  {
    id: "asanorte",
    region: "ASA NORTE",
    name: "Otorhynus Clínica",
    badge: "Ed. Multiclínicas",
    address: "SHLN, Bloco J, Edifício Multiclínicas, Salas 102 a 104",
    neighborhood: "Asa Norte · Brasília, DF",
    whatsapp: "61985743764",
    phone: "(61) 3340-8859",
    phoneRaw: "+556133408859",
    mapUrl: "https://maps.app.goo.gl/aCMiRG8jYqY3nrcW8",
    image: "/media/otorhynus.png",
  },
];

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function BiolinkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const introStartedRef = useRef(false);
  const introTlRef = useRef<gsap.core.Timeline | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!introStartedRef.current) {
      introStartedRef.current = true;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        if (introRef.current) introRef.current.style.display = "none";
      } else {
        const introTl = gsap.timeline({
          onComplete: () => {
            if (introRef.current) introRef.current.style.display = "none";
          },
        });
        introTlRef.current = introTl;

        introTl
          .to(".intro-logo", { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power2.out" })
          .to(".intro-divider", { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.35")
          .to(".intro-subtitle", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35")
          .to(".intro-skip-hint", { opacity: 0.75, duration: 0.4 }, "-=0.2")
          .to(".intro-content", { opacity: 0, y: -16, duration: 0.45, ease: "power2.in", delay: 0.45 })
          .to(".site-intro", { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "-=0.12")
          .fromTo(
            ".cinematic-cover-img",
            { scale: 1.06, opacity: 0.85 },
            { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
            "-=0.6"
          )
          .fromTo(
            ".profile-avatar-wrap",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
            "-=0.65"
          )
          .fromTo(
            ".profile-meta-item",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power2.out" },
            "-=0.45"
          )
          .fromTo(
            "#unidades-header",
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            ".cinematic-clinic-card",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            ".surgical-spotlight-card",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          )
          .fromTo(
            ".official-link-card",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power2.out" },
            "-=0.2"
          )
          .fromTo(
            ".cinematic-footer",
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
            "-=0.15"
          );
      }
    }
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: "Dr. Raimundo Aldemar — Otorrinolaringologia em Brasília",
      text: "Agende sua consulta de Otorrino com Dr. Raimundo Aldemar (Taguatinga, Gama e Asa Norte).",
      url: typeof window !== "undefined" ? window.location.href : siteUrl,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-between">
      {/* 0. SITE INTRO OVERLAY (Matches Home Page) */}
      <div
        ref={introRef}
        className="site-intro"
        id="site-intro"
        onClick={() => {
          if (introTlRef.current) {
            introTlRef.current.progress(1);
          }
          if (introRef.current) {
            introRef.current.style.display = "none";
          }
        }}
        role="banner"
        aria-label="Apresentação inicial Dr. Raimundo Aldemar"
      >
        <div className="intro-content">
          <img
            src="/media/logo.png"
            alt="Dr. Raimundo Aldemar — Otorrinolaringologia"
            className="intro-logo"
            width="2048"
            height="682"
          />
          <div className="intro-divider" />
          <span className="intro-subtitle">OTORRINOLARINGOLOGIA · BRASÍLIA, DF</span>
        </div>
        <span className="intro-skip-hint">Clique em qualquer lugar para avançar</span>
      </div>

      {/* 1. CINEMATIC BACKGROUND */}
      <div className="cinematic-bg-container" aria-hidden="true">
        <div
          className="cinematic-bg-layer active"
          style={{ backgroundImage: "url('/media/retrato.webp')" }}
        />
        <div className="cinematic-shade" />
      </div>

      {/* 2. STREAMLINED COMPACT COVER BANNER */}
      <div className="cinematic-hero-cover relative w-full h-28 sm:h-36 md:h-40 overflow-hidden">
        <img
          src="/media/cirurgia.webp"
          alt="Dr. Raimundo Aldemar — Cirurgia Otorrinolaringológica"
          className="cinematic-cover-img w-full h-full object-cover object-[center_28%] filter contrast-105 brightness-95"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(32, 24, 19, 0) 0%, rgba(32, 24, 19, 0.25) 40%, rgba(32, 24, 19, 0.8) 80%, #201813 100%)",
          }}
        />

        {/* Floating Quick Action: Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-black/85 text-[#f8f5ef] border border-[#c1a586]/40 text-[11px] sm:text-xs backdrop-blur-md transition-all cursor-pointer shadow-md"
          title="Compartilhar ou copiar link"
          aria-label="Compartilhar link do Dr. Raimundo Aldemar"
        >
          {copied ? (
            <>
              <Check size={13} className="text-[#25D366]" />
              <span className="text-[#25D366] font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 size={13} className="text-[#c1a586]" />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* 3. MAIN CONTENT STAGE - STREAMLINED VERTICAL RHYTHM */}
      <main className="w-full max-w-[1180px] mx-auto px-3.5 sm:px-6 pb-6 z-10 flex-1 flex flex-col gap-3.5 sm:gap-4.5">
        {/* DOCTOR PROFILE HEADER */}
        <section className="w-full flex flex-col items-center text-center">
          {/* Avatar popping with spring */}
          <div className="profile-avatar-wrap -mt-11 sm:-mt-13 mb-1.5 z-20">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Instagram @raimundo.otorrino"
            >
              <img
                src="/media/perfil-instagram-corrigido.png"
                alt="Dr. Raimundo Aldemar — @raimundo.otorrino"
                className="w-[195px] sm:w-[235px] h-auto object-contain block filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]"
                width="2172"
                height="724"
              />
            </a>
          </div>

          {/* Clean 1-Line Identity & Badges */}
          <div className="profile-meta-item flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[11px] sm:text-[12px] text-[#dec9ad] mb-1">
            <span className="font-semibold text-[#f8f5ef] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
              CRM-DF 20094 · RQE 13936
            </span>
            <span className="opacity-30">·</span>
            <span>Otorrinolaringologia & Cirurgia Facial</span>
            <span className="opacity-30 hidden xs:inline">·</span>
            <span className="text-[#c1a586] font-medium">Adultos e Crianças</span>
          </div>

          <p className="profile-meta-item text-[11.5px] sm:text-[12.5px] text-[#ece3d9] max-w-[560px]">
            Escolha uma das unidades abaixo para agendamento direto no WhatsApp:
          </p>
        </section>

        {/* SECTION: CLINIC CONSULTATIONS (COMPACT & HIGH IMPACT) */}
        <section id="unidades" className="flex flex-col gap-2.5">
          {/* Header */}
          <div id="unidades-header" className="flex items-center justify-between gap-2 pb-1 border-b border-[#c1a586]/20">
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#c1a586] flex items-center gap-1.5">
              <Sparkles size={12} />
              Unidades de Atendimento em Brasília
            </span>
            <span className="text-[10.5px] text-[#dec9ad]">Particular e Convênios</span>
          </div>

          {/* 3 Compact Clinic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {clinics.map((clinic) => (
              <article
                key={clinic.id}
                className={`cinematic-clinic-card clinic-card-bg ${
                  clinic.featured ? "featured" : ""
                }`}
              >
                {/* Full Photographic Background Layer */}
                <div
                  className="clinic-card-bg-photo"
                  style={{ backgroundImage: `url('${clinic.image}')` }}
                />
                <div className="clinic-card-bg-shade" />

                {/* Card Top: Region Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#d5c1a8] bg-black/60 px-2 py-0.5 rounded-full border border-[#c1a586]/40">
                    {clinic.region}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-[#f8f5ef] border border-white/20 font-medium">
                    {clinic.badge}
                  </span>
                </div>

                {/* Card Middle: Clinic Info */}
                <div className="my-auto py-1">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#f8f5ef] leading-tight mb-1">
                    {clinic.name}
                  </h3>
                  <p className="text-[11.5px] text-[#ece3d9] leading-snug">
                    {clinic.address}
                  </p>
                  <p className="text-[10.5px] text-[#dec9ad] mt-0.5">
                    {clinic.neighborhood}
                  </p>
                </div>

                {/* Card Bottom: Primary WhatsApp CTA & Secondary Links */}
                <div className="flex flex-col gap-1.5 pt-2.5 border-t border-[#c1a586]/30 mt-1.5">
                  <a
                    href={whatsappUrl(clinic.whatsapp, clinic.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp w-full !justify-between !min-h-[40px] !text-[12.5px] !py-2 !px-3.5 shadow-sm"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={15} className="fill-white/20" />
                      <span>Agendar no WhatsApp</span>
                    </span>
                    <ArrowUpRight size={15} />
                  </a>

                  <div className="flex items-center justify-between text-[11px] text-[#dec9ad] px-1 pt-0.5">
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <MapPin size={11} className="text-[#c1a586]" />
                      <span className="underline underline-offset-4 decoration-[#c1a586]/60 hover:decoration-white">
                        Ver no mapa
                      </span>
                    </a>

                    <a
                      href={`tel:${clinic.phoneRaw}`}
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Phone size={11} className="text-[#c1a586]" />
                      <span>{clinic.phone}</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION: SURGICAL SPOTLIGHT (STREAMLINED) */}
        <section className="surgical-spotlight-card surgical-card-bg group">
          <div
            className="surgical-card-bg-photo filter contrast-105 brightness-95"
            style={{ backgroundImage: "url('/media/cirurgia.webp')" }}
          />
          <div className="surgical-card-bg-shade" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 relative z-10">
            <div className="max-w-[620px]">
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#f8f5ef] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#c1a586]/40 flex items-center gap-1.5 shadow-xs">
                  <Activity size={12} className="text-[#c1a586]" />
                  Procedimentos e Avaliação Cirúrgica
                </span>

                <span className="text-[10.5px] font-medium text-[#dec9ad] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1">
                  <Sparkles size={11} className="text-[#c1a586]" />
                  Adultos e Crianças
                </span>
              </div>

              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#f8f5ef] leading-snug mb-1">
                Avaliação Cirúrgica Especializada{" "}
                <span className="serif text-[#dec9ad]">com Clareza e Segurança</span>
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-[#ece3d9] leading-relaxed mb-2">
                Rinoplastia estética e funcional, desvio de septo, amígdalas, adenoide e sinusite. Esclareça dúvidas e agende diretamente com a equipe cirúrgica.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Rinoplastia", "Desvio de Septo", "Amígdalas & Adenoide", "Sinusite"].map((proc) => (
                  <span
                    key={proc}
                    className="text-[10.5px] px-2 py-0.5 rounded-md bg-black/45 text-[#dec9ad] border border-[#c1a586]/25 font-medium"
                  >
                    {proc}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl("61983230103", "CDO Otorrino — Avaliação Cirúrgica")}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold shrink-0 w-full sm:w-auto !justify-between !min-h-[42px] !text-[12.5px] !py-2.5 !px-4 shadow-md mt-1 lg:mt-0"
            >
              <span className="flex items-center gap-2">
                <HeartHandshake size={15} />
                <span>Solicitar Avaliação no WhatsApp</span>
              </span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* SECTION: OFFICIAL LINKS (COMPACT 2-COLUMN GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          <a
            href="/"
            className="official-link-card official-card p-3 sm:p-3.5 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-[#c1a586]/35 flex items-center justify-center text-[#c1a586] group-hover:bg-[#c1a586] group-hover:text-[#18120e] transition-all shrink-0">
                <Globe size={16} />
              </div>
              <div>
                <h3 className="text-[13.5px] font-semibold text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors">
                  Site Oficial Completo
                </h3>
                <p className="text-[11px] text-[#ece3d9]">
                  Formação médica, artigos e detalhes dos tratamentos.
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5"
            />
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="official-link-card official-card p-3 sm:p-3.5 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <InstagramIcon size={16} />
              </div>
              <div>
                <h3 className="text-[13.5px] font-semibold text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors">
                  @raimundo.otorrino
                </h3>
                <p className="text-[11px] text-[#ece3d9]">
                  Orientações de saúde e rotina médica em Brasília.
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5"
            />
          </a>
        </div>

        <p className="text-center text-[11px] text-[#d5c1a8] border-t border-[rgba(193,165,134,0.18)] pt-2.5">
          Horários, convênios atendidos e valores informados diretamente pela recepção de cada unidade.
        </p>
      </main>

      {/* 4. FOOTER */}
      <footer className="cinematic-footer w-full border-t border-[rgba(193,165,134,0.18)] bg-[#18120e] py-4 px-4 sm:px-6 mt-4 text-center flex flex-col items-center z-10">
        <a
          href="/"
          className="mb-1.5 block opacity-90 hover:opacity-100 transition-opacity"
          aria-label="Voltar para a página inicial"
        >
          <img
            src="/media/logo.png"
            alt="Dr. Raimundo Aldemar — Otorrinolaringologia"
            className="h-7 w-auto object-contain"
          />
        </a>
        <p className="text-[11.5px] text-[#ece3d9] font-medium mb-0.5">
          Dr. Raimundo Aldemar de Morais Lima · CRM-DF 20094 · RQE 13936
        </p>
        <p className="text-[10.5px] text-[#dec9ad] font-serif">
          Medicina com ciência, escuta e proximidade. Brasília — DF.
        </p>
      </footer>
    </div>
  );
}
