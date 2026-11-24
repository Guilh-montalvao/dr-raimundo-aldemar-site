"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import {
  MapPin,
  MessageCircle,
  Globe,
  Share2,
  Check,
  ArrowUpRight,
  ShieldCheck,
  X,
  Copy,
} from "lucide-react";
import {
  otorhynusConvenios,
  otogamaConvenios,
  cdoConvenios,
  surgeryWhatsapp,
  InstagramIcon,
  UnifiedConveniosModal,
  unifiedConvenios,
} from "@/components/site-chrome";
import { TestimonialsSection } from "@/components/testimonials-section";

const siteUrl = "https://drraimundoaldemar.com.br";
const instagramUrl =
  "https://www.instagram.com/raimundo.otorrino?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

function whatsappUrl(phone: string, clinic: string) {
  const text = `Olá! Gostaria de agendar uma consulta com o Dr. Raimundo Aldemar, otorrinolaringologista, na ${clinic}.`;
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
  convenios: { name: string; logo: string }[];
  featured?: boolean;
}

const clinics: Clinic[] = [
  {
    id: "asanorte",
    region: "ASA NORTE",
    name: "Unidade Otorhynus",
    badge: "Ed. Multiclínicas",
    address: "SHLN, Bloco J, Edifício Multiclínicas, Salas 102 a 104",
    neighborhood: "Asa Norte · Brasília, DF",
    whatsapp: "61985743764",
    phone: "(61) 3340-8859",
    phoneRaw: "+556133408859",
    mapUrl: "https://maps.app.goo.gl/aCMiRG8jYqY3nrcW8",
    image: "/media/otorhynus.jpg",
    convenios: otorhynusConvenios,
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
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Clinica+Otogama+Quadra+1+Gama+Sul",
    image: "/media/otogama.jpg",
    convenios: otogamaConvenios,
  },
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
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=CDO+Otorrino+Hospital+Anchieta+Taguatinga",
    image: "/media/cdootorrino.jpg",
    convenios: cdoConvenios,
  },
];

export default function BiolinkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const introStartedRef = useRef(false);
  const introTlRef = useRef<gsap.core.Timeline | null>(null);
  const [copied, setCopied] = useState(false);
  const [conveniosModalOpen, setConveniosModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    if (!introStartedRef.current) {
      introStartedRef.current = true;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
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
          .fromTo(
            ".intro-bg-photo",
            { opacity: 0, scale: 1.08, x: 22 },
            {
              opacity: 1,
              scale: 1.02,
              x: 0,
              duration: 1.35,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".intro-logo",
            { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power2.out" },
            0.15
          )
          .to(
            ".intro-divider",
            { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.35"
          )
          .to(
            ".intro-subtitle",
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.35"
          )
          .to(".intro-skip-hint", { opacity: 0.75, duration: 0.4 }, "-=0.2")
          .to(".intro-content", {
            opacity: 0,
            y: -16,
            duration: 0.45,
            ease: "power2.in",
            delay: 0.45,
          })
          .to(
            ".intro-bg-photo",
            { scale: 1, yPercent: 18, duration: 0.85, ease: "power4.inOut" },
            "-=0.12"
          )
          .to(
            ".site-intro",
            { yPercent: -100, duration: 0.85, ease: "power4.inOut" },
            "<"
          )
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
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.07,
              ease: "power2.out",
            },
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
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .fromTo(
            ".official-link-card",
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.06,
              ease: "power2.out",
            },
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

  const officialLinksUrl = "https://www.drraimundoaldemar.com.br/links";
  const shareText =
    "Dr. Raimundo Aldemar — Otorrinolaringologista em Brasília (Criança e Adulto). Agende sua consulta ou cirurgia:";

  const copyLinksUrl = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(officialLinksUrl);
      } else {
        const ta = document.createElement("textarea");
        ta.value = officialLinksUrl;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "Dr. Raimundo Aldemar — Otorrinolaringologista em Brasília",
      text: shareText,
      url: officialLinksUrl,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as { name?: string })?.name === "AbortError") {
          return;
        }
      }
    }
    setShareModalOpen(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between"
    >
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
        <div className="intro-bg-photo" aria-hidden="true" />
        <div className="intro-bg-shade" aria-hidden="true" />
        <div className="intro-content">
          <img
            src="/media/logo.png"
            alt="Dr. Raimundo Aldemar — Médico Otorrinolaringologista"
            className="intro-logo"
            width="640"
            height="213"
          />
          <div className="intro-divider" />
          <span className="intro-subtitle">
            OTORRINOLARINGOLOGISTA · BRASÍLIA, DF
          </span>
        </div>
        <span className="intro-skip-hint">
          Clique em qualquer lugar para avançar
        </span>
      </div>

      {/* 1. FUNDO EDITORIAL LUXO EM CSS PURO (SEM IMAGEM DE FUNDO) */}
      <div className="cinematic-bg-container" aria-hidden="true">
        <div className="biolink-ambient-glow" />
        <div className="biolink-micro-grid" />
      </div>

      {/* 2. CAPA COM DR. RAIMUNDO E A CRIANÇA */}
      <div className="cinematic-hero-cover relative w-full h-32 sm:h-40 md:h-44 overflow-hidden">
        <img
          src="/media/infantil.jpg"
          alt="Dr. Raimundo Aldemar acolhendo pequeno paciente"
          className="cinematic-cover-img w-full h-full object-cover object-[center_24%] filter contrast-105 brightness-95"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(32, 24, 19, 0.05) 0%, rgba(32, 24, 19, 0.28) 45%, rgba(32, 24, 19, 0.85) 82%, #201813 100%)",
          }}
        />

        {/* Botão Compartilhar (ícone discreto) */}
        <button
          type="button"
          onClick={handleShare}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/55 hover:bg-black/80 text-[#f8f5ef] border border-[#c1a586]/35 text-[11px] backdrop-blur-md transition-all cursor-pointer shadow-md"
          title="Compartilhar ou copiar link"
          aria-label="Compartilhar link do Dr. Raimundo Aldemar"
        >
          {copied ? (
            <>
              <Check size={13} className="text-[#25D366]" />
              <span className="text-[#25D366] font-medium">Copiado</span>
            </>
          ) : (
            <Share2 size={14} className="text-[#dec9ad]" />
          )}
        </button>
      </div>

      {/* 3. CONTEÚDO MINIMALISTA DO BIOLINK */}
      <main className="w-full max-w-[560px] mx-auto px-4 pb-8 z-10 flex-1 flex flex-col gap-3">
        {/* IDENTIDADE CLEAN */}
        <section className="w-full flex flex-col items-center text-center mb-1">
          <div className="profile-avatar-wrap -mt-12 sm:-mt-14 mb-2 z-20">
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
                className="w-[185px] sm:w-[215px] h-auto object-contain block filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]"
                width="900"
                height="300"
              />
            </a>
          </div>

          <p className="profile-meta-item text-[11px] sm:text-[12px] tracking-[0.04em] text-[#dec9ad]">
            Otorrinolaringologista · CRM-DF 20094 · RQE 13936
          </p>
        </section>

        {/* AS 3 UNIDADES DE ATENDIMENTO (CLEAN E DIRETO) */}
        <section id="unidades" className="flex flex-col gap-2.5">
          {clinics.map((clinic) => (
            <article
              key={clinic.id}
              className={`cinematic-clinic-card clinic-card-bg clinic-card-minimal ${
                clinic.featured ? "featured" : ""
              }`}
            >
              <div
                className="clinic-card-bg-photo"
                style={{ backgroundImage: `url('${clinic.image}')` }}
              />
              <div className="clinic-card-bg-shade" />

              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#dec9ad] block leading-none mb-1">
                    {clinic.region}
                  </span>
                  <h2 className="clinic-card-title truncate">
                    {clinic.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#dec9ad] shrink-0">
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 border border-[#c1a586]/35 text-[#dec9ad] hover:text-white transition-colors"
                    title={`Abrir mapa — ${clinic.name}`}
                    aria-label={`Abrir mapa — ${clinic.name}`}
                  >
                    <MapPin size={14} />
                  </a>
                </div>
              </div>

              <a
                href={whatsappUrl(clinic.whatsapp, clinic.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp w-full !justify-between !min-h-[38px] !text-[12.5px] !py-1.5 !px-4 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={15} className="fill-white/20" />
                  <span>Agendar no WhatsApp</span>
                </span>
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </section>

        {/* BOTÃO UNIFICADO DE CONVÊNIOS (BUSCA RÁPIDA + FILTRO DAS 3 UNIDADES) */}
        <button
          type="button"
          onClick={() => setConveniosModalOpen(true)}
          className="official-link-card official-card px-4 py-3 flex items-center justify-between group transition-all w-full text-left cursor-pointer border-[#c1a586]/45"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#c1a586]/15 border border-[#c1a586]/45 flex items-center justify-center text-[#dec9ad] shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div className="min-w-0">
              <span className="biolink-action-title text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors block truncate">
                Consultar Convênios Atendidos
              </span>
              <span className="text-[11px] text-[#dec9ad] block truncate">
                {unifiedConvenios.length} planos · Busque seu plano nas 3 unidades
              </span>
            </div>
          </div>
          <ArrowUpRight
            size={15}
            className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2"
          />
        </button>

        {/* CANAL DIRETO DE CIRURGIAS (MESMO EFEITO EDITORIAL COM FOTO AMBIENT + THUMBNAIL) */}
        <a
          href={surgeryWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="official-link-card biolink-surgery-card group"
        >
          <div
            className="biolink-surgery-bg"
            style={{ backgroundImage: "url('/media/cirurgia.jpg')" }}
            aria-hidden="true"
          />
          <div className="biolink-surgery-shade" aria-hidden="true" />
          <img
            src="/media/cirurgia.jpg"
            alt="Agendar Cirurgia · Consultar Valores"
            className="biolink-surgery-thumb"
            width={48}
            height={48}
            loading="lazy"
          />
          <div className="biolink-surgery-info">
            <strong className="biolink-action-title text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors">
              Agendar Cirurgia · Valores
            </strong>
            <span>Criança e Adulto · WhatsApp</span>
          </div>
          <span className="biolink-surgery-action" aria-hidden="true">
            <MessageCircle size={15} />
            <ArrowUpRight size={14} />
          </span>
        </a>

        {/* SITE OFICIAL & INSTAGRAM (1 LINHA CADA) */}
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="/"
            className="official-link-card official-card px-3.5 py-2.5 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-[#c1a586]/35 flex items-center justify-center text-[#c1a586] group-hover:bg-[#c1a586] group-hover:text-[#18120e] transition-all shrink-0">
                <Globe size={14} />
              </div>
              <span className="biolink-action-title text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors truncate">
                Site Oficial
              </span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1"
            />
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="official-link-card official-card px-3.5 py-2.5 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-7 h-7 rounded-[8px] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #FFD600 0%, #FF7A00 28%, #FF0069 58%, #D300C5 80%, #7638FA 100%)",
                }}
              >
                <InstagramIcon size={16} />
              </div>
              <span className="biolink-action-title text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors truncate">
                Instagram
              </span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1"
            />
          </a>
        </div>
      </main>

      {/* 3. DEPOIMENTOS 3D DO GOOGLE INTEGRADOS AO CENÁRIO (SEM CARD EXTERNO) */}
      <TestimonialsSection variant="biolink" />

      {/* MODAL UNIFICADO DE CONVÊNIOS (BUSCA + ABAS DAS 3 UNIDADES) */}
      <UnifiedConveniosModal
        open={conveniosModalOpen}
        onClose={() => setConveniosModalOpen(false)}
      />

      {/* MINI MODAL DE COMPARTILHAMENTO (FALLBACK QUANDO NAVEGADOR NÃO SUPORTA WEB SHARE NATIVO) */}
      {shareModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="unified-convenios-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="biolink-share-title"
            onClick={() => setShareModalOpen(false)}
          >
            <div
              className="w-full max-w-[400px] bg-[#241b14] border border-[#dec9ad]/40 rounded-2xl p-5 text-[#f8f5ef] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c1a586] block mb-1">
                    COMPARTILHAR
                  </span>
                  <h3
                    id="biolink-share-title"
                    className="text-[17px] font-semibold text-[#f8f5ef] m-0"
                  >
                    Enviar links do Dr. Raimundo
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShareModalOpen(false)}
                  className="quick-booking-close"
                  aria-label="Fechar janela de compartilhamento"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${shareText} ${officialLinksUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShareModalOpen(false)}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1fb556] text-white font-semibold text-[13.5px] transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <MessageCircle size={17} />
                    Compartilhar pelo WhatsApp
                  </span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={copyLinksUrl}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-[#dec9ad]/30 text-[#f8f5ef] font-medium text-[13.5px] transition-colors cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2.5">
                    {copied ? (
                      <Check size={17} className="text-[#25D366]" />
                    ) : (
                      <Copy size={16} className="text-[#dec9ad]" />
                    )}
                    {copied ? "Link copiado!" : "Copiar link"}
                  </span>
                  <span className="text-[11px] text-[#dec9ad] truncate max-w-[165px]">
                    drraimundoaldemar.com.br/links
                  </span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* 4. RODAPÉ COMPACTO */}
      <footer className="cinematic-footer w-full border-t border-[rgba(193,165,134,0.18)] bg-[#18120e] py-3.5 px-4 sm:px-6 text-center flex flex-col items-center z-10">
        <p className="text-[11.5px] text-[#ece3d9] font-medium">
          Dr. Raimundo Aldemar Silva Filho · Médico Otorrinolaringologista
        </p>
        <p className="text-[10.5px] text-[#dec9ad]">
          CRM-DF 20094 · RQE 13936 · Brasília — DF
        </p>
      </footer>
    </div>
  );
}
