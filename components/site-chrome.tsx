"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const whatsapp = (number: string, clinic: string) =>
  `https://wa.me/55${number}?text=${encodeURIComponent(
    `Olá! Gostaria de informações para agendar uma consulta com o Dr. Raimundo Aldemar na ${clinic}.`
  )}`;

export const surgeryWhatsapp = (procedure?: string) =>
  `https://wa.me/556182994767?text=${encodeURIComponent(
    procedure
      ? `Olá! Gostaria de consultar valores e informações sobre agendamento da cirurgia de ${procedure} com o Dr. Raimundo Aldemar.`
      : `Olá! Gostaria de consultar valores e informações para agendar cirurgia (criança / adulto) com o Dr. Raimundo Aldemar.`
  )}`;

const instagramUrl =
  "https://www.instagram.com/raimundo.otorrino?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "O médico", href: "/o-medico" },
  { label: "Exames e procedimentos", href: "/exames-e-procedimentos" },
  { label: "Atendimento infantil", href: "/atendimento-infantil" },
  { label: "Cirurgia adulto", href: "/cirurgia-adulto" },
  { label: "Onde encontrar", href: "#contato" },
];

export const otorhynusConvenios = [
  { name: "AFEB Brasal", logo: "/media/convenios/afeb-brasal.png" },
  { name: "Affego", logo: "/media/convenios/affego.svg" },
  { name: "Assefaz", logo: "/media/convenios/assefaz.png" },
  { name: "Bacen", logo: "/media/convenios/bacen.png" },
  { name: "Care Plus", logo: "/media/convenios/care-plus.png" },
  { name: "Casembrapa", logo: "/media/convenios/casembrapa.png" },
  { name: "Cassi", logo: "/media/convenios/cassi.png" },
  { name: "CNTI", logo: "/media/convenios/cnti.svg" },
  { name: "Comed Saúde", logo: "/media/convenios/comed-saude.svg" },
  { name: "Conab", logo: "/media/convenios/conab.png" },
  { name: "E-Saúde", logo: "/media/convenios/e-saude.svg" },
  { name: "E-Vida", logo: "/media/convenios/e-vida.png" },
  { name: "Embratel", logo: "/media/convenios/embratel.png" },
  { name: "Faceb", logo: "/media/convenios/faceb.svg" },
  { name: "FAPES BNDES", logo: "/media/convenios/fapes-bndes.png" },
  { name: "Fascal", logo: "/media/convenios/fascal.svg" },
  { name: "Fusex", logo: "/media/convenios/fusex.png" },
  { name: "Gama Saúde", logo: "/media/convenios/gama-saude.png" },
  { name: "Gravia", logo: "/media/convenios/gravia.png" },
  { name: "Infraero", logo: "/media/convenios/infraero.png" },
  { name: "Interlife", logo: "/media/convenios/interlife.png" },
  { name: "Life Empresarial Premium", logo: "/media/convenios/life-empresarial.png" },
  { name: "Medi Service", logo: "/media/convenios/medi-service.png" },
  { name: "Medsenior", logo: "/media/convenios/medsenior.png" },
  { name: "Notre Dame", logo: "/media/convenios/notre-dame.png" },
  { name: "OMINT", logo: "/media/convenios/omint.png" },
  { name: "Petrobras", logo: "/media/convenios/petrobras.png" },
  { name: "Plan-Assiste", logo: "/media/convenios/plan-assiste.png" },
  { name: "PLAS / JMU", logo: "/media/convenios/plas-jmu.svg" },
  { name: "Polícia Militar", logo: "/media/convenios/policia-militar.png" },
  { name: "Postal Saúde", logo: "/media/convenios/postal-saude.png" },
  { name: "PRÓ Saúde TJDFT", logo: "/media/convenios/pro-saude-tjdft.png" },
  { name: "Proasa", logo: "/media/convenios/proasa.png" },
  { name: "Real Grandeza", logo: "/media/convenios/real-grandeza.png" },
  { name: "Saúde BRB", logo: "/media/convenios/saude-brb.png" },
  { name: "Saúde Caixa", logo: "/media/convenios/saude-caixa.png" },
  { name: "SERPRO", logo: "/media/convenios/serpro.png" },
  { name: "Sindifisco Nacional", logo: "/media/convenios/sindifisco.png" },
  { name: "SIS", logo: "/media/convenios/sis.png" },
  { name: "STF Med", logo: "/media/convenios/stf-med.png" },
  { name: "Sul América", logo: "/media/convenios/sul-america.png" },
  { name: "TRT 5 Saúde", logo: "/media/convenios/trt5-saude.png" },
  { name: "TST Saúde", logo: "/media/convenios/tst-saude.png" },
];

export const otogamaConvenios = [
  { name: "AFEB Brasal", logo: "/media/convenios/afeb-brasal.png" },
  { name: "Affego", logo: "/media/convenios/affego.svg" },
  { name: "Amil", logo: "/media/convenios/amil.png" },
  { name: "Asete (ASTE)", logo: "/media/convenios/asete.svg" },
  { name: "Bacen", logo: "/media/convenios/bacen.png" },
  { name: "Bombeiros (CBMDF)", logo: "/media/convenios/cbmdf.png" },
  { name: "BRB Saúde", logo: "/media/convenios/saude-brb.png" },
  { name: "Caeme-GO", logo: "/media/convenios/caeme-go.svg" },
  { name: "Caesan", logo: "/media/convenios/caesan.png" },
  { name: "Camed", logo: "/media/convenios/camed.png" },
  { name: "Care Plus", logo: "/media/convenios/care-plus.png" },
  { name: "Casec (Codevasf)", logo: "/media/convenios/casec.png" },
  { name: "Casembrapa (Embrapa)", logo: "/media/convenios/casembrapa.png" },
  { name: "CNTI", logo: "/media/convenios/cnti.svg" },
  { name: "Central Nacional Unimed (CNU)", logo: "/media/convenios/unimed.png" },
  { name: "Conab", logo: "/media/convenios/conab.png" },
  { name: "E-Saúde", logo: "/media/convenios/e-saude.svg" },
  { name: "E-Vida (Eletronorte)", logo: "/media/convenios/e-vida.png" },
  { name: "Embratel — Demais Planos", logo: "/media/convenios/embratel.png" },
  { name: "Faceb", logo: "/media/convenios/faceb.svg" },
  { name: "FAPES (BNDES)", logo: "/media/convenios/fapes-bndes.png" },
  { name: "Fascal", logo: "/media/convenios/fascal.svg" },
  { name: "Gama Saúde", logo: "/media/convenios/gama-saude.png" },
  { name: "GEAP", logo: "/media/convenios/geap.png" },
  { name: "GDF Saúde", logo: "/media/convenios/gdf-saude.png" },
  { name: "Gravia", logo: "/media/convenios/gravia.png" },
  { name: "Life Empresarial Saúde", logo: "/media/convenios/life-empresarial.png" },
  { name: "Mediservice", logo: "/media/convenios/medi-service.png" },
  { name: "Medsenior", logo: "/media/convenios/medsenior.png" },
  { name: "Notre Dame", logo: "/media/convenios/notre-dame.png" },
  { name: "OMINT", logo: "/media/convenios/omint.png" },
  { name: "PAME (Embratel)", logo: "/media/convenios/embratel.png" },
  { name: "Petrobras Distribuidora", logo: "/media/convenios/petrobras.png" },
  { name: "Petrobras Petróleo", logo: "/media/convenios/petrobras.png" },
  { name: "Plan-Assiste (MPDFT)", logo: "/media/convenios/plan-assiste.png" },
  { name: "Plan-Assiste (MPF)", logo: "/media/convenios/plan-assiste.png" },
  { name: "Plan-Assiste (MPM)", logo: "/media/convenios/plan-assiste.png" },
  { name: "Plan-Assiste (MPT)", logo: "/media/convenios/plan-assiste.png" },
  { name: "Postal Saúde", logo: "/media/convenios/postal-saude.png" },
  { name: "Proasa", logo: "/media/convenios/proasa.png" },
  { name: "Saúde Caixa", logo: "/media/convenios/saude-caixa.png" },
  { name: "Seguros Unimed", logo: "/media/convenios/seguros-unimed.png" },
  { name: "SERPRO", logo: "/media/convenios/serpro.png" },
  { name: "SIS (Senado)", logo: "/media/convenios/sis.png" },
  { name: "STF-Med", logo: "/media/convenios/stf-med.png" },
  { name: "STJ", logo: "/media/convenios/stj.png" },
  { name: "STM (PLAS / JMU)", logo: "/media/convenios/plas-jmu.svg" },
  { name: "TJDFT", logo: "/media/convenios/pro-saude-tjdft.png" },
  { name: "TRE", logo: "/media/convenios/tre.png" },
  { name: "TRF", logo: "/media/convenios/trf.png" },
  { name: "TRT", logo: "/media/convenios/trt5-saude.png" },
  { name: "TST-Saúde", logo: "/media/convenios/tst-saude.png" },
  { name: "Unafisco (Sindifisco)", logo: "/media/convenios/sindifisco.png" },
];

export const cdoConvenios = [
  { name: "Affego", logo: "/media/convenios/affego.svg" },
  { name: "AFEB Brasal", logo: "/media/convenios/afeb-brasal.png" },
  { name: "Asete - ASTE", logo: "/media/convenios/asete.svg" },
  { name: "Bacen", logo: "/media/convenios/bacen.png" },
  { name: "Bradesco — Todos", logo: "/media/convenios/bradesco.png" },
  { name: "BRB Saúde", logo: "/media/convenios/saude-brb.png" },
  { name: "Caeme - GO", logo: "/media/convenios/caeme-go.svg" },
  { name: "Caesan", logo: "/media/convenios/caesan.png" },
  { name: "Camed", logo: "/media/convenios/camed.png" },
  { name: "Care Plus", logo: "/media/convenios/care-plus.png" },
  { name: "Casembrapa - Embrapa", logo: "/media/convenios/casembrapa.png" },
  { name: "Cassi", logo: "/media/convenios/cassi.png" },
  { name: "CNTI", logo: "/media/convenios/cnti.svg" },
  { name: "Codevasf - Casec", logo: "/media/convenios/casec.png" },
  { name: "Conab", logo: "/media/convenios/conab.png" },
  { name: "Embratel", logo: "/media/convenios/embratel.png" },
  { name: "E-Saúde", logo: "/media/convenios/e-saude.svg" },
  { name: "E-Vida Eletronorte", logo: "/media/convenios/e-vida.png" },
  { name: "Faceb", logo: "/media/convenios/faceb.svg" },
  { name: "FAPES - BNDES", logo: "/media/convenios/fapes-bndes.png" },
  { name: "Fascal", logo: "/media/convenios/fascal.svg" },
  { name: "Gama Saúde", logo: "/media/convenios/gama-saude.png" },
  { name: "Gravia", logo: "/media/convenios/gravia.png" },
  { name: "Infraero", logo: "/media/convenios/infraero.png" },
  { name: "Life Empresarial", logo: "/media/convenios/life-empresarial.png" },
  { name: "Notre Dame", logo: "/media/convenios/notre-dame.png" },
  { name: "OMINT Saúde", logo: "/media/convenios/omint.png" },
  { name: "One Health - Amil", logo: "/media/convenios/one-health.svg" },
  { name: "Petrobras - Distribuidora", logo: "/media/convenios/petrobras.png" },
  { name: "Petrobras - Petróleo", logo: "/media/convenios/petrobras.png" },
  { name: "Plan-Assiste (MPDFT/MPF/MPM/MPT)", logo: "/media/convenios/plan-assiste.png" },
  { name: "PLAS/JMU (STM)", logo: "/media/convenios/plas-jmu.svg" },
  { name: "Postal Saúde", logo: "/media/convenios/postal-saude.png" },
  { name: "Proasa", logo: "/media/convenios/proasa.png" },
  { name: "Pró-Saúde TJDFT", logo: "/media/convenios/pro-saude-tjdft.png" },
  { name: "Pró-Ser STJ", logo: "/media/convenios/stj.png" },
  { name: "Pró-Social TRF", logo: "/media/convenios/trf.png" },
  { name: "Real Grandeza", logo: "/media/convenios/real-grandeza.png" },
  { name: "Saúde Caixa", logo: "/media/convenios/saude-caixa.png" },
  { name: "SERPRO", logo: "/media/convenios/serpro.png" },
  { name: "SIS - Senado", logo: "/media/convenios/sis.png" },
  { name: "STF - Med", logo: "/media/convenios/stf-med.png" },
  { name: "TRE", logo: "/media/convenios/tre.png" },
  { name: "TRF", logo: "/media/convenios/trf.png" },
  { name: "TRT", logo: "/media/convenios/trt5-saude.png" },
  { name: "TST Saúde", logo: "/media/convenios/tst-saude.png" },
  { name: "Unafisco (Sindifisco)", logo: "/media/convenios/sindifisco.png" },
];

export const faqItems = [
  {
    id: "adenoide-respiracao-boca",
    question: "Adenoide aumentada e respiração pela boca: quando avaliar?",
    answer:
      "A adenoide fica localizada na parte posterior do nariz e atua na defesa imunológica durante a infância. Quando apresenta aumento acentuado (hipertrofia), pode estreitar a passagem do ar pelo nariz e levar a criança a respirar predominantemente pela boca, apresentar sono agitado, voz anasalada ou infecções de repetição. A avaliação com o otorrinolaringologista identifica o grau de obstrução e orienta se a condução deve ser clínica ou cirúrgica.",
  },
  {
    id: "crianca-que-ronca",
    question: "Criança que ronca durante o sono precisa de avaliação médica?",
    answer:
      "O ronco frequente na infância não deve ser visto como algo habitual, sobretudo quando vem acompanhado de respiração bucal, esforço para respirar, pausas no sono ou cansaço e irritabilidade durante o dia. Em grande parte dos casos está associado à rinite alérgica ou ao aumento das amígdalas e da adenoide. A consulta permite diagnosticar a causa com precisão — sem significar que toda criança precisará de cirurgia.",
  },
  {
    id: "quando-cirurgia-amigdalas-indicada",
    question: "Quando a cirurgia de amígdalas (amigdalectomia) é indicada?",
    answer:
      "A amigdalectomia pode ser indicada em crianças e adultos quando ocorrem amigdalites bacterianas de repetição que prejudicam a rotina escolar ou profissional, aumento acentuado das amígdalas causando obstrução respiratória e distúrbios do sono (ronco e apneia), ou quadros persistentes de caseum amigdaliano. A decisão é sempre individualizada após avaliação clínica criteriosa.",
  },
  {
    id: "videoendoscopia-nasal-criancas",
    question: "Como funciona a videoendoscopia nasal em crianças?",
    answer:
      "A videoendoscopia nasal é realizada no próprio consultório com uma fibra óptica flexível e delicada, o que pode proporcionar maior conforto e tranquilidade para a criança e para os pais. O exame dura poucos minutos, permite visualizar em vídeo toda a cavidade nasal e a região da adenoide em tempo real e oferece um diagnóstico detalhado sem exposição à radiação.",
  },
  {
    id: "obstrucao-nasal-descongestionantes",
    question: "Obstrução nasal e uso prolongado de descongestionantes: qual o risco?",
    answer:
      "O uso contínuo de gotas descongestionantes nasais promove apenas alívio momentâneo e pode desencadear rinite medicamentosa (efeito rebote), fazendo com que o nariz fique cada vez mais obstruído, além de oferecer riscos cardiovasculares. Investigar a causa da obstrução — como desvio de septo, aumento dos cornetos nasais, rinite ou sinusite — é o caminho seguro para voltar a respirar bem.",
  },
];

function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openQuickBookingModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quick-booking"));
  }
}

export function InstagramIcon({
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

export function LinkButton({
  children,
  href = "#contato",
  light = false,
  external = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
  external?: boolean;
}) {
  if (href === "#contato") {
    return (
      <a
        href="#contato"
        onClick={(e) => {
          e.preventDefault();
          openQuickBookingModal();
        }}
        className={`button ${light ? "button-light" : ""}`}
      >
        <span>{children}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          scrollToHash(href);
        }}
        className={`button ${light ? "button-light" : ""}`}
      >
        <span>{children}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    );
  }

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={`button ${light ? "button-light" : ""}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span>{children}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={`button ${light ? "button-light" : ""}`}>
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function SmartVideo({
  src,
  ariaLabel,
  className = "children-video-player",
}: {
  src: string;
  ariaLabel: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { rootMargin: "180px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      controls
      preload="metadata"
      className={className}
      aria-label={ariaLabel}
    />
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setBookingOpen(true);
    window.addEventListener("open-quick-booking", handler);
    return () => window.removeEventListener("open-quick-booking", handler);
  }, []);

  const handleMobileHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      scrollToHash(hash);
    }, 220);
  };

  const handleRouteClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobile = false
  ) => {
    if (closeMobile) setMenuOpen(false);
    if (href === pathname) {
      e.preventDefault();
      if (closeMobile) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 220);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <a href="#principal" className="skip-link">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <Link
          href="/"
          onClick={(e) => handleRouteClick(e, "/")}
          className="brand"
          aria-label="Dr. Raimundo Aldemar — início"
        >
          <img
            src="/media/logo.png"
            alt="Dr. Raimundo Aldemar — Otorrinolaringologista"
            width="640"
            height="213"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive =
              link.href.startsWith("/") &&
              !link.href.includes("#") &&
              pathname === link.href;
            return link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(link.href);
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleRouteClick(e, link.href)}
                className={isActive ? "nav-link-active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a
            className="header-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Dr. Raimundo Aldemar"
          >
            <InstagramIcon size={15} />
            <span>@raimundo.otorrino</span>
          </a>
          <a
            className="header-cta"
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              setBookingOpen(true);
            }}
          >
            Agendar consulta <ArrowUpRight size={16} />
          </a>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button className="menu-button" aria-label="Abrir menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-menu" showCloseButton={false}>
            <div className="mobile-menu-top">
              <SheetTitle>Dr. Raimundo Aldemar</SheetTitle>
              <SheetClose asChild>
                <button aria-label="Fechar menu" className="close-menu">
                  <X />
                </button>
              </SheetClose>
            </div>
            <SheetDescription>
              Médico Otorrinolaringologista · Brasília, DF
            </SheetDescription>
            <nav aria-label="Navegação móvel">
              {navLinks.map((link) => {
                const isActive =
                  link.href.startsWith("/") &&
                  !link.href.includes("#") &&
                  pathname === link.href;
                return link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleMobileHashClick(e, link.href)}
                  >
                    {link.label}
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={isActive ? "mobile-nav-active" : ""}
                    onClick={(e) => handleRouteClick(e, link.href, true)}
                  >
                    {link.label}
                    <ArrowUpRight size={20} />
                  </Link>
                );
              })}
            </nav>
            <a
              className="menu-instagram"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={19} />
              <span>@raimundo.otorrino</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              className="button"
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setTimeout(() => setBookingOpen(true), 200);
              }}
            >
              Agendar consulta <ArrowUpRight size={18} />
            </a>
            <p className="menu-credentials">
              Otorrinolaringologista · CRM-DF 20094 · RQE 13936
            </p>
          </SheetContent>
        </Sheet>
      </header>

      {/* BOTÃO FIXO DISCRETO DE AGENDAMENTO NO CELULAR */}
      <button
        type="button"
        onClick={() => setBookingOpen(true)}
        className="mobile-floating-schedule"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <MessageCircle size={17} />
        <span>Agendar consulta</span>
      </button>

      {/* MODAL / SHEET DE AGENDAMENTO RÁPIDO EM 1 CLIQUE */}
      {bookingOpen && (
        <div
          className="quick-booking-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-booking-title"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="quick-booking-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="quick-booking-header">
              <div>
                <span className="eyebrow">AGENDAMENTO DIRETO</span>
                <h3 id="quick-booking-title">
                  Agende sua consulta com o Dr. Raimundo
                </h3>
                <p>
                  Atendimento para crianças e adultos · Escolha a unidade mais
                  conveniente:
                </p>
              </div>
              <button
                type="button"
                className="quick-booking-close"
                aria-label="Fechar janela de agendamento"
                onClick={() => setBookingOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="quick-booking-units">
              <a
                href={whatsapp("61985743764", "Unidade Otorhynus (Asa Norte)")}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link"
                onClick={() => setBookingOpen(false)}
              >
                <div>
                  <strong>Otorhynus — Asa Norte</strong>
                  <span>
                    SHLN, Bloco J, Ed. Multiclínicas · WhatsApp (61) 98574-3764
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={18} />
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a
                href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link"
                onClick={() => setBookingOpen(false)}
              >
                <div>
                  <strong>Clínica Otogama — Gama</strong>
                  <span>
                    Quadra 01, Conjunto A, Lote 4, Gama Sul · WhatsApp (61)
                    98346-6377
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={18} />
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a
                href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link"
                onClick={() => setBookingOpen(false)}
              >
                <div>
                  <strong>CDO Otorrino — Taguatinga</strong>
                  <span>
                    Centro Médico Hospital Anchieta, Salas 111/112 B · WhatsApp
                    (61) 98323-0103
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={18} />
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a
                href={surgeryWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link quick-unit-surgery"
                onClick={() => setBookingOpen(false)}
              >
                <div>
                  <strong>
                    Agendar Cirurgia · Consultar Valores (Criança e Adulto)
                  </strong>
                  <span>
                    Canal exclusivo da equipe cirúrgica · WhatsApp +55 61
                    8299-4767
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={18} />
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>

            <div className="quick-booking-footer">
              <button
                type="button"
                className="quick-booking-scroll-link"
                onClick={() => {
                  setBookingOpen(false);
                  setTimeout(() => scrollToHash("#contato"), 120);
                }}
              >
                Ver endereços completos, telefones fixos e mapa na página ↓
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function FaqSection({
  title = "Dúvidas frequentes",
  subtitle = "no consultório.",
  eyebrow = "ORIENTAÇÕES MÉDICAS",
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  const [activeFaq, setActiveFaq] = useState<string>("");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="duvidas-frequentes" className="faq-section section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-top" data-reveal>
        <span className="eyebrow">{eyebrow}</span>
        <span className="small-note">Informação clara e ética.</span>
      </div>

      <div className="faq-layout">
        <div className="faq-intro" data-reveal>
          <h2>
            {title}
            <br />
            <span className="serif">{subtitle}</span>
          </h2>
          <p>
            Respostas educativas para as principais dúvidas de pais e pacientes
            adultos sobre respiração nasal, sono, amígdalas, adenoide e exames
            em consultório.
          </p>
          <p className="faq-authorship">
            <strong>Autoria médica identificada:</strong>
            <br />
            Dr. Raimundo Aldemar de Morais Lima
            <br />
            Médico Otorrinolaringologista · CRM-DF 20094 · RQE 13936
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              openQuickBookingModal();
            }}
            className="text-link"
          >
            Agendar avaliação individualizada <ArrowUpRight size={18} />
          </a>
        </div>

        <Accordion
          type="single"
          collapsible
          value={activeFaq}
          onValueChange={(value) => setActiveFaq(value)}
          className="areas-accordion faq-accordion"
          data-reveal
        >
          {faqItems.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="area-item faq-item"
            >
              <AccordionTrigger className="area-trigger faq-trigger">
                <span>{item.question}</span>
                <span className="area-toggle">
                  {activeFaq === item.id ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent className="area-content faq-content">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [openConvenio, setOpenConvenio] = useState<string>("");

  return (
    <section id="contato" className="contact-section">
      <div
        className="contact-photo photo-background"
        data-parallax
        role="img"
        aria-label="Consulta com o Dr. Raimundo Aldemar"
      />
      <div className="contact-shade" />
      <div className="contact-inner">
        <div className="contact-heading" data-reveal>
          <span className="eyebrow">LOCAIS DE ATENDIMENTO</span>
          <h2>
            Encontre o melhor local
            <br />
            <span className="serif">para sua consulta.</span>
          </h2>
          <p>
            Atendimento na Asa Norte (Otorhynus), no Gama (Otogama) e em
            Taguatinga (CDO Otorrino).
            <br className="desktop-break" />
            Escolha a unidade e entre em contato pelo WhatsApp para consultar
            horários, convênios e agendar.
          </p>
        </div>

        <div className="locations">
          <article className="location" data-reveal>
            <div className="location-image">
              <img
                src="/media/otorhynus.jpg"
                alt="Unidade Otorhynus na Asa Norte"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="location-top">
              <span>ASA NORTE</span>
              <MapPin size={18} />
            </div>
            <h3>Unidade Otorhynus</h3>
            <div className="location-info">
              <p>
                SHLN, Bloco J, Edifício Multiclínicas
                <br />
                Salas 102 a 104 · Asa Norte
                <br />
                Brasília, DF · CEP 70770-560
              </p>
              <a
                href={whatsapp("61985743764", "Unidade Otorhynus (Asa Norte)")}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-link"
              >
                <MessageCircle size={15} />
                WhatsApp: (61) 98574-3764
              </a>
              <a href="tel:+556133408859" className="phone-link">
                <Phone size={15} />
                Fixo: (61) 3340-8859
              </a>

              <Accordion
                type="single"
                collapsible
                value={openConvenio === "otorhynus" ? "otorhynus" : ""}
                onValueChange={(v) =>
                  setOpenConvenio(v === "otorhynus" ? "otorhynus" : "")
                }
                className="convenios-accordion"
              >
                <AccordionItem value="otorhynus" className="convenios-item">
                  <AccordionTrigger className="convenios-trigger">
                    <span>
                      Convênios atendidos ({otorhynusConvenios.length} planos)
                    </span>
                    {openConvenio === "otorhynus" ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="convenios-content">
                    <div className="convenios-logos-grid">
                      {otorhynusConvenios.map((conv) => (
                        <div key={conv.name} className="convenio-chip">
                          <span className="convenio-logo-box">
                            <img
                              src={conv.logo}
                              alt={`Logo ${conv.name}`}
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          </span>
                          <span className="convenio-chip-name">{conv.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="location-actions">
              <LinkButton
                href={whatsapp("61985743764", "Unidade Otorhynus (Asa Norte)")}
                external
                light
              >
                Agendar pelo WhatsApp
              </LinkButton>
              <a
                href="https://maps.app.goo.gl/aCMiRG8jYqY3nrcW8"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map"
              >
                Ver no mapa <ArrowUpRight size={15} />
              </a>
            </div>
          </article>

          <article className="location" data-reveal>
            <div className="location-image">
              <img
                src="/media/otogama.jpg"
                alt="Unidade Clínica Otogama no Gama Sul"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="location-top">
              <span>GAMA</span>
              <MapPin size={18} />
            </div>
            <h3>Clínica Otogama</h3>
            <div className="location-info">
              <p>
                Quadra 01, Conjunto A, Lote 4
                <br />
                1º andar · Gama Sul
                <br />
                Brasília, DF
              </p>
              <a
                href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-link"
              >
                <MessageCircle size={15} />
                WhatsApp: (61) 98346-6377
              </a>
              <a href="tel:+556132540111" className="phone-link">
                <Phone size={15} />
                Fixo: (61) 3254-0111
              </a>

              <Accordion
                type="single"
                collapsible
                value={openConvenio === "otogama" ? "otogama" : ""}
                onValueChange={(v) =>
                  setOpenConvenio(v === "otogama" ? "otogama" : "")
                }
                className="convenios-accordion"
              >
                <AccordionItem value="otogama" className="convenios-item">
                  <AccordionTrigger className="convenios-trigger">
                    <span>
                      Convênios atendidos ({otogamaConvenios.length} planos)
                    </span>
                    {openConvenio === "otogama" ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="convenios-content">
                    <div className="convenios-logos-grid">
                      {otogamaConvenios.map((conv) => (
                        <div key={conv.name} className="convenio-chip">
                          <span className="convenio-logo-box">
                            <img
                              src={conv.logo}
                              alt={`Logo ${conv.name}`}
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          </span>
                          <span className="convenio-chip-name">{conv.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="location-actions">
              <LinkButton
                href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
                external
                light
              >
                Agendar pelo WhatsApp
              </LinkButton>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Clinica+Otogama+Quadra+1+Gama+Sul"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map"
              >
                Ver no mapa <ArrowUpRight size={15} />
              </a>
            </div>
          </article>

          <article className="location" data-reveal>
            <div className="location-image">
              <img
                src="/media/cdootorrino.jpg"
                alt="CDO Otorrino no Hospital Anchieta em Taguatinga"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="location-top">
              <span>TAGUATINGA</span>
              <MapPin size={18} />
            </div>
            <h3>CDO Otorrino</h3>
            <div className="location-info">
              <p>
                Centro Médico do Hospital Anchieta
                <br />
                Área Especial 08/09/10, Setor C Norte
                <br />
                Salas 111/112 B · Taguatinga Norte, DF
              </p>
              <a
                href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-link"
              >
                <MessageCircle size={15} />
                WhatsApp: (61) 98323-0103
              </a>
              <a href="tel:+556133526994" className="phone-link">
                <Phone size={15} />
                Fixo: (61) 3352-6994
              </a>

              <Accordion
                type="single"
                collapsible
                value={openConvenio === "cdo" ? "cdo" : ""}
                onValueChange={(v) => setOpenConvenio(v === "cdo" ? "cdo" : "")}
                className="convenios-accordion"
              >
                <AccordionItem value="cdo" className="convenios-item">
                  <AccordionTrigger className="convenios-trigger">
                    <span>
                      Convênios atendidos ({cdoConvenios.length} planos)
                    </span>
                    {openConvenio === "cdo" ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="convenios-content">
                    <div className="convenios-logos-grid">
                      {cdoConvenios.map((conv) => (
                        <div key={conv.name} className="convenio-chip">
                          <span className="convenio-logo-box">
                            <img
                              src={conv.logo}
                              alt={`Logo ${conv.name}`}
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          </span>
                          <span className="convenio-chip-name">{conv.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="location-actions">
              <LinkButton
                href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
                external
                light
              >
                Agendar pelo WhatsApp
              </LinkButton>
              <a
                href="https://www.google.com/maps/search/?api=1&query=CDO+Otorrino+Hospital+Anchieta+Taguatinga"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map"
              >
                Ver no mapa <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>

        <div className="surgery-direct-banner" data-reveal>
          <div className="surgery-direct-text">
            <span className="eyebrow">CANAL DIRETO DE CIRURGIAS · CRIANÇA E ADULTO</span>
            <h3>Precisa agendar uma cirurgia ou consultar valores?</h3>
            <p>
              Atendimento exclusivo pelo WhatsApp para orçamento cirúrgico,
              orientações pré-operatórias e agendamento de cirurgias infantis e
              em adultos (particular e reembolso/convênios).
            </p>
          </div>
          <div className="surgery-direct-cta">
            <LinkButton href={surgeryWhatsapp()} external light>
              Consultar valores de cirurgia no WhatsApp
            </LinkButton>
            <span className="surgery-direct-phone">
              Contato direto cirurgias: +55 61 8299-4767
            </span>
          </div>
        </div>

        <p className="booking-note" data-reveal>
          Consulte disponibilidade de horários e convênios diretamente com a
          unidade escolhida.
        </p>
        <div className="contact-social" data-reveal>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-profile-card"
            aria-label="Acompanhe o Dr. Raimundo Aldemar no Instagram"
          >
            <img
              src="/media/perfil-instagram-corrigido.png"
              alt="Dr. Raimundo Aldemar no Instagram"
              width="900"
              height="300"
              loading="lazy"
              decoding="async"
              className="instagram-profile-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const pathname = usePathname();

  const handleFooterNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* COLUNA 1: IDENTIDADE & RESPONSÁVEL TÉCNICO (CFM) */}
        <div className="footer-col footer-col-brand">
          <Link
            href="/"
            onClick={(e) => handleFooterNav(e, "/")}
            className="footer-brand"
          >
            <img
              src="/media/logo.png"
              width="640"
              height="213"
              loading="lazy"
              decoding="async"
              alt="Dr. Raimundo Aldemar — Médico Otorrinolaringologista"
            />
          </Link>
          <p className="footer-tagline">
            Respirar bem,{" "}
            <span className="serif">livre da obstrução nasal</span>
            <span className="footer-tagline-sub">Criança e Adulto</span>
          </p>
          <p className="footer-technical-resp">
            <strong>Responsável Técnico:</strong>
            <br />
            Dr. Raimundo Aldemar de Morais Lima
            <br />
            Médico Otorrinolaringologista · CRM-DF 20094 · RQE 13936
          </p>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO PELO SITE */}
        <div className="footer-col">
          <span className="eyebrow footer-col-title">NAVEGAÇÃO</span>
          <ul className="footer-links-list">
            <li>
              <Link href="/" onClick={(e) => handleFooterNav(e, "/")}>
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/atendimento-infantil"
                onClick={(e) => handleFooterNav(e, "/atendimento-infantil")}
              >
                Atendimento e Cirurgia Infantil
              </Link>
            </li>
            <li>
              <Link
                href="/cirurgia-adulto"
                onClick={(e) => handleFooterNav(e, "/cirurgia-adulto")}
              >
                Cirurgia em Adultos
              </Link>
            </li>
            <li>
              <Link
                href="/exames-e-procedimentos"
                onClick={(e) => handleFooterNav(e, "/exames-e-procedimentos")}
              >
                Exames e Procedimentos
              </Link>
            </li>
            <li>
              <Link
                href="/o-medico"
                onClick={(e) => handleFooterNav(e, "/o-medico")}
              >
                O Médico e Trajetória
              </Link>
            </li>
            <li>
              <Link href="/biolink">Links Rápidos (Biolink)</Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: UNIDADES NA ORDEM DE PRIORIDADE */}
        <div className="footer-col">
          <span className="eyebrow footer-col-title">
            AGENDAMENTO DIRETO NO WHATSAPP
          </span>
          <div className="footer-units-list">
            <a
              href={whatsapp("61985743764", "Unidade Otorhynus (Asa Norte)")}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-unit-item"
            >
              <div>
                <strong>1. Asa Norte — Unidade Otorhynus</strong>
                <span>WhatsApp (61) 98574-3764 · Fixo (61) 3340-8859</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-unit-item"
            >
              <div>
                <strong>2. Gama — Clínica Otogama</strong>
                <span>WhatsApp (61) 98346-6377 · Fixo (61) 3254-0111</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-unit-item"
            >
              <div>
                <strong>3. Taguatinga — CDO Otorrino</strong>
                <span>WhatsApp (61) 98323-0103 · Fixo (61) 3352-6994</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={surgeryWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-unit-item footer-unit-surgery"
            >
              <div>
                <strong>Cirurgias e Consulta de Valores (Criança e Adulto)</strong>
                <span>Canal direto de cirurgias · WhatsApp +55 61 8299-4767</span>
              </div>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Dr. Raimundo Aldemar ·
          Otorrinolaringologista em Brasília — DF
        </span>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          <InstagramIcon size={15} />
          <span>@raimundo.otorrino</span>
        </a>
        <a
          href="#principal"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="footer-back-top-link"
          aria-label="Voltar ao início da página"
        >
          <span>Voltar ao topo</span>
          <span className="back-top">
            <ArrowRight size={18} />
          </span>
        </a>
      </div>
    </footer>
  );
}
