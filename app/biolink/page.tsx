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
  ArrowUpRight,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  otorhynusConvenios,
  otogamaConvenios,
  cdoConvenios,
  surgeryWhatsapp,
} from "@/components/site-chrome";

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

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
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
  const [selectedClinicConvenios, setSelectedClinicConvenios] =
    useState<Clinic | null>(null);

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

  const handleShare = async () => {
    const shareData = {
      title: "Dr. Raimundo Aldemar — Otorrinolaringologista em Brasília",
      text: "Respirar bem, livre da obstrução nasal • Criança • Adulto. Agende sua consulta com o Dr. Raimundo Aldemar (Asa Norte, Gama e Taguatinga).",
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

      {/* 1. CINEMATIC BACKGROUND (Mesma imagem do background da intro) */}
      <div className="cinematic-bg-container" aria-hidden="true">
        <div
          className="cinematic-bg-layer active"
          style={{ backgroundImage: "url('/media/intro-bg.png')" }}
        />
        <div className="cinematic-shade" />
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

        {/* Botão Compartilhar */}
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

      {/* 3. CONTEÚDO ENXUTO E RÁPIDO DO BIOLINK */}
      <main className="w-full max-w-[1120px] mx-auto px-3.5 sm:px-6 pb-6 z-10 flex-1 flex flex-col gap-3.5 sm:gap-4">
        {/* IDENTIDADE DO MÉDICO */}
        <section className="w-full flex flex-col items-center text-center">
          <div className="profile-avatar-wrap -mt-12 sm:-mt-14 mb-1.5 z-20">
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
                width="900"
                height="300"
              />
            </a>
          </div>

          <div className="profile-meta-item flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[11px] sm:text-[12px] text-[#dec9ad] mb-1">
            <span className="font-semibold text-[#f8f5ef] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
              Médico Otorrinolaringologista · CRM-DF 20094 · RQE 13936
            </span>
          </div>

          <p className="profile-meta-item text-[13px] sm:text-[14px] font-medium text-[#f8f5ef] max-w-[540px]">
            Respirar bem,{" "}
            <span className="serif text-[#dec9ad]">
              livre da obstrução nasal
            </span>{" "}
            <span className="text-[#c1a586]">• Criança • Adulto</span>
          </p>
        </section>

        {/* AS 3 UNIDADES DE ATENDIMENTO (1. ASA NORTE · 2. GAMA · 3. TAGUATINGA) */}
        <section id="unidades" className="flex flex-col gap-2.5">
          <div
            id="unidades-header"
            className="flex items-center justify-between gap-2 pb-1 border-b border-[#c1a586]/20"
          >
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#c1a586]">
              Escolha a Unidade para Agendar no WhatsApp
            </span>
            <span className="text-[10.5px] text-[#dec9ad]">
              Particular e Convênios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {clinics.map((clinic) => (
              <article
                key={clinic.id}
                className={`cinematic-clinic-card clinic-card-bg ${
                  clinic.featured ? "featured" : ""
                }`}
              >
                <div
                  className="clinic-card-bg-photo"
                  style={{ backgroundImage: `url('${clinic.image}')` }}
                />
                <div className="clinic-card-bg-shade" />

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#d5c1a8] bg-black/60 px-2 py-0.5 rounded-full border border-[#c1a586]/40">
                    {clinic.region}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-[#f8f5ef] border border-white/20 font-medium">
                    {clinic.badge}
                  </span>
                </div>

                <div className="my-auto py-1">
                  <h2 className="text-[17px] sm:text-[18px] font-bold text-[#f8f5ef] leading-tight mb-1">
                    {clinic.name}
                  </h2>
                  <p className="text-[11.5px] text-[#ece3d9] leading-snug">
                    {clinic.address}
                  </p>
                  <p className="text-[10.5px] text-[#dec9ad] mt-0.5">
                    {clinic.neighborhood}
                  </p>
                </div>

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

                  <div className="flex items-center justify-between text-[11px] text-[#dec9ad] px-0.5 pt-0.5 gap-2">
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <MapPin size={11} className="text-[#c1a586]" />
                      <span className="underline underline-offset-4 decoration-[#c1a586]/60 hover:decoration-white">
                        Mapa
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedClinicConvenios(clinic)}
                      className="inline-flex items-center gap-1 text-[#f8f5ef] hover:text-[#dec9ad] transition-colors cursor-pointer"
                    >
                      <ShieldCheck size={12} className="text-[#c1a586]" />
                      <span className="underline underline-offset-4 decoration-[#c1a586]/60">
                        Convênios ({clinic.convenios.length})
                      </span>
                    </button>

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

        {/* CANAL DIRETO DE CIRURGIAS E CONSULTA DE VALORES */}
        <a
          href={surgeryWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="official-link-card official-card p-3.5 sm:p-4 flex items-center justify-between group transition-all border-[#c1a586]/50 bg-[#2a2018]/90"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/45 flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle size={17} />
            </div>
            <div>
              <h3 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#f8f5ef] group-hover:text-[#dec9ad] transition-colors">
                Agendar Cirurgia · Consultar Valores (Criança e Adulto)
              </h3>
              <p className="text-[11px] sm:text-[11.5px] text-[#dec9ad]">
                Canal direto no WhatsApp para orçamentos e orientações cirúrgicas · (61) 8299-4767
              </p>
            </div>
          </div>
          <ArrowUpRight
            size={16}
            className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5"
          />
        </a>

        {/* LINKS RÁPIDOS DE 1 LINHA */}
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
                  Site Oficial
                </h3>
                <p className="text-[11px] text-[#ece3d9]">
                  Atendimento infantil, adulto, exames e trajetória médica.
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
                  Acompanhe conteúdos e orientações no Instagram.
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-[#c1a586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5"
            />
          </a>
        </div>
      </main>

      {/* MODAL LEVE DE CONVÊNIOS (SÓ ABRE SE O PACIENTE CLICAR) */}
      {selectedClinicConvenios && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedClinicConvenios(null)}
        >
          <div
            className="w-full max-w-[520px] bg-[#241b14] border border-[#c1a586]/40 rounded-2xl p-5 text-[#f8f5ef] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-[#c1a586]/20">
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#c1a586] block">
                  {selectedClinicConvenios.region}
                </span>
                <h3 className="text-[17px] font-bold text-[#f8f5ef]">
                  Convênios — {selectedClinicConvenios.name}
                </h3>
                <p className="text-[12px] text-[#dec9ad]">
                  {selectedClinicConvenios.convenios.length} planos atendidos
                  nesta unidade
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedClinicConvenios(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#f8f5ef] cursor-pointer"
                aria-label="Fechar lista de convênios"
              >
                <X size={17} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto pr-1">
              {selectedClinicConvenios.convenios.map((conv) => (
                <div
                  key={conv.name}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 border border-[#c1a586]/20"
                >
                  <span className="w-6 h-6 rounded bg-white p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={conv.logo}
                      alt={conv.name}
                      width={20}
                      height={20}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <span className="text-[11.5px] text-[#ece3d9] truncate">
                    {conv.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#c1a586]/20">
              <a
                href={whatsappUrl(
                  selectedClinicConvenios.whatsapp,
                  selectedClinicConvenios.name
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp w-full !justify-between !min-h-[40px] !text-[12.5px] !py-2 !px-4"
              >
                <span className="flex items-center gap-1.5">
                  <MessageCircle size={15} />
                  <span>
                    Agendar em {selectedClinicConvenios.name} no WhatsApp
                  </span>
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. RODAPÉ COMPACTO */}
      <footer className="cinematic-footer w-full border-t border-[rgba(193,165,134,0.18)] bg-[#18120e] py-3.5 px-4 sm:px-6 text-center flex flex-col items-center z-10">
        <p className="text-[11.5px] text-[#ece3d9] font-medium">
          Dr. Raimundo Aldemar de Morais Lima · Médico Otorrinolaringologista
        </p>
        <p className="text-[10.5px] text-[#dec9ad]">
          CRM-DF 20094 · RQE 13936 · Brasília — DF
        </p>
      </footer>
    </div>
  );
}
