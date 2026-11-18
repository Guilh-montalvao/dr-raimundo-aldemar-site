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
    `Olá! Gostaria de informações para agendar uma consulta com o Dr. Raimundo Aldemar, otorrinolaringologista, na ${clinic}.`
  )}`;

export const surgeryWhatsapp = (procedure?: string) =>
  `https://wa.me/556182994767?text=${encodeURIComponent(
    procedure
      ? `Olá! Gostaria de consultar valores e informações sobre agendamento da cirurgia de ${procedure} com o Dr. Raimundo Aldemar, otorrinolaringologista.`
      : `Olá! Gostaria de consultar valores e informações para agendar cirurgia (criança / adulto) com o Dr. Raimundo Aldemar, otorrinolaringologista.`
  )}`;

const instagramUrl =
  "https://www.instagram.com/raimundo.otorrino?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

export interface NavItem {
  label: string;
  shortLabel: string;
  href: string;
  action?: "booking-modal" | "surgery-whatsapp";
}

export const navLinks: NavItem[] = [
  { label: "Início", shortLabel: "Início", href: "/" },
  {
    label: "Conheça o Dr. Raimundo Aldemar",
    shortLabel: "Dr. Raimundo",
    href: "/o-medico",
  },
  {
    label: "Consultas e cirurgias - Infantil",
    shortLabel: "Infantil",
    href: "/atendimento-infantil",
  },
  {
    label: "Consultas e cirurgias - Adulto",
    shortLabel: "Adulto",
    href: "/cirurgia-adulto",
  },
  {
    label: "Exames e procedimentos",
    shortLabel: "Exames",
    href: "/exames-e-procedimentos",
  },
  {
    label: "Locais de atendimento",
    shortLabel: "Locais de atendimento",
    href: "#contato",
  },
  {
    label: "Agendamento consultas",
    shortLabel: "Agendar Consulta",
    href: "#agendar-consulta",
    action: "booking-modal",
  },
  {
    label: "Agendamento cirurgia",
    shortLabel: "Agendar Cirurgia",
    href: surgeryWhatsapp(),
    action: "surgery-whatsapp",
  },
];

const sortAlphabetically = (items: { name: string; logo: string }[]) =>
  [...items].sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
  );

export const otorhynusConvenios = sortAlphabetically([
  { name: "Bacen", logo: "/media/convenios/bacen.png" },
  { name: "BRB (Saúde BRB)", logo: "/media/convenios/saude-brb.png" },
  { name: "Camed", logo: "/media/convenios/camed.png" },
  { name: "Casec (Codevasf)", logo: "/media/convenios/casec.png" },
  { name: "Casembrapa (Embrapa)", logo: "/media/convenios/casembrapa.png" },
  { name: "Fascal", logo: "/media/convenios/fascal.svg" },
  { name: "Luminar Saúde (E-Vida)", logo: "/media/convenios/e-vida.png" },
  { name: "Plan Assiste (MPU)", logo: "/media/convenios/plan-assiste.png" },
  { name: "PLAS/JMU (STM)", logo: "/media/convenios/plas-jmu.svg" },
  {
    name: "Pró-Saúde (Câmara dos Deputados)",
    logo: "/media/convenios/camara.png",
  },
  { name: "Pró-Saúde (TJDFT)", logo: "/media/convenios/pro-saude-tjdft.png" },
  { name: "Pró-Ser (STJ)", logo: "/media/convenios/stj.png" },
  { name: "Pró-Social (TRF)", logo: "/media/convenios/trf.png" },
  { name: "Saúde Caixa", logo: "/media/convenios/saude-caixa.png" },
  { name: "SERPRO", logo: "/media/convenios/serpro.png" },
  { name: "SIS Senado", logo: "/media/convenios/sis.png" },
  { name: "STF-Med (STF)", logo: "/media/convenios/stf-med.png" },
  { name: "TRE Saúde", logo: "/media/convenios/tre.png" },
  { name: "TRT Saúde", logo: "/media/convenios/trt5-saude.png" },
  { name: "TST Saúde", logo: "/media/convenios/tst-saude.png" },
]);

const otogamaAndCdoList = sortAlphabetically([
  { name: "AFEB Brasal", logo: "/media/convenios/afeb-brasal.png" },
  { name: "Affego", logo: "/media/convenios/affego.svg" },
  { name: "Amil", logo: "/media/convenios/amil.png" },
  { name: "Anafe Saúde", logo: "/media/convenios/anafe.svg" },
  { name: "Bacen", logo: "/media/convenios/bacen.png" },
  { name: "BRB (Saúde BRB)", logo: "/media/convenios/saude-brb.png" },
  { name: "Caeme - GO", logo: "/media/convenios/caeme-go.svg" },
  { name: "Caesan", logo: "/media/convenios/caesan.png" },
  { name: "Camed", logo: "/media/convenios/camed.png" },
  { name: "Care Plus", logo: "/media/convenios/care-plus.png" },
  { name: "Casec (Codevasf)", logo: "/media/convenios/casec.png" },
  { name: "Casembrapa (Embrapa)", logo: "/media/convenios/casembrapa.png" },
  { name: "CBMDF", logo: "/media/convenios/cbmdf.png" },
  { name: "Clique Médicos", logo: "/media/convenios/clique-medicos.png" },
  { name: "CNTI", logo: "/media/convenios/cnti.svg" },
  { name: "Conab", logo: "/media/convenios/conab.png" },
  { name: "Embratel (Telos)", logo: "/media/convenios/embratel.png" },
  { name: "FAPES (BNDES)", logo: "/media/convenios/fapes-bndes.png" },
  { name: "Fascal", logo: "/media/convenios/fascal.svg" },
  { name: "Gravia", logo: "/media/convenios/gravia.png" },
  { name: "Life Empresarial", logo: "/media/convenios/life-empresarial.png" },
  { name: "Luminar Saúde (E-Vida)", logo: "/media/convenios/e-vida.png" },
  { name: "Notre Dame", logo: "/media/convenios/notre-dame.png" },
  { name: "OMINT Saúde", logo: "/media/convenios/omint.png" },
  {
    name: "PF Saúde (Polícia Federal)",
    logo: "/media/convenios/pf-saude.png",
  },
  { name: "Plan Assiste (MPU)", logo: "/media/convenios/plan-assiste.png" },
  { name: "PLAS/JMU (STM)", logo: "/media/convenios/plas-jmu.svg" },
  { name: "PM (Desconto)", logo: "/media/convenios/policia-militar.png" },
  { name: "Proasa", logo: "/media/convenios/proasa.png" },
  {
    name: "Pró-Saúde (Câmara dos Deputados)",
    logo: "/media/convenios/camara.png",
  },
  { name: "Pró-Saúde (TJDFT)", logo: "/media/convenios/pro-saude-tjdft.png" },
  { name: "Pró-Ser (STJ)", logo: "/media/convenios/stj.png" },
  { name: "Pró-Social (TRF)", logo: "/media/convenios/trf.png" },
  {
    name: "Real Grandeza (Demais Planos)",
    logo: "/media/convenios/real-grandeza.png",
  },
  {
    name: "Real Grandeza (Salvus e Salutem)",
    logo: "/media/convenios/real-grandeza.png",
  },
  { name: "Saúde Caixa", logo: "/media/convenios/saude-caixa.png" },
  { name: "Saúde Petrobras", logo: "/media/convenios/petrobras.png" },
  { name: "SERPRO", logo: "/media/convenios/serpro.png" },
  { name: "SIS Senado", logo: "/media/convenios/sis.png" },
  { name: "STF-Med (STF)", logo: "/media/convenios/stf-med.png" },
  { name: "TRE Saúde", logo: "/media/convenios/tre.png" },
  { name: "TRT Saúde", logo: "/media/convenios/trt5-saude.png" },
  { name: "TST Saúde", logo: "/media/convenios/tst-saude.png" },
  {
    name: "Unafisco Saúde (Demais Planos)",
    logo: "/media/convenios/sindifisco.png",
  },
  { name: "Unafisco Saúde (Premium)", logo: "/media/convenios/sindifisco.png" },
  {
    name: "Unimed Abrangência Nacional",
    logo: "/media/convenios/unimed.png",
  },
]);

export const otogamaConvenios = otogamaAndCdoList;

export const cdoConvenios = otogamaAndCdoList;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const pediatricFaqItems: FaqItem[] = [
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
      "A amigdalectomia pode ser indicada quando ocorrem amigdalites bacterianas de repetição que prejudicam a rotina e o bem-estar da criança, ou aumento acentuado das amígdalas causando obstrução respiratória e distúrbios do sono (ronco e apneia). A decisão é sempre individualizada após avaliação clínica criteriosa.",
  },
  {
    id: "videoendoscopia-nasal-criancas",
    question: "Como funciona a videoendoscopia nasal em crianças?",
    answer:
      "A videoendoscopia nasal é realizada no próprio consultório com uma fibra óptica flexível e delicada, o que pode proporcionar maior conforto e tranquilidade para a criança e para os pais. O exame dura poucos minutos, permite visualizar em vídeo toda a cavidade nasal e a região da adenoide em tempo real e oferece um diagnóstico detalhado sem exposição à radiação.",
  },
  {
    id: "tubo-ventilacao-otite-infantil",
    question: "Quando a miringotomia e o tubo de ventilação são indicados?",
    answer:
      "São indicados principalmente em crianças que apresentam otites médias de repetição ou acúmulo persistente de líquido atrás do tímpano (otite média secretora), que pode afetar a audição e o desenvolvimento da fala. O procedimento permite ventilar o ouvido médio e drenar a secreção com segurança.",
  },
];

export const adultFaqItems: FaqItem[] = [
  {
    id: "desvio-septo-quando-operar",
    question: "Quando a cirurgia de desvio de septo (septoplastia) é indicada?",
    answer:
      "A septoplastia é indicada para pacientes adultos quando o desvio do septo nasal causa obstrução respiratória persistente, dificuldade para dormir, respiração oral de suplência, cefaleia rinogênica ou sinusites de repetição que não melhoram apenas com tratamento clínico.",
  },
  {
    id: "reducao-cornetos-nasais",
    question: "Como funciona a redução dos cornetos nasais (turbinoplastia / turbinectomia)?",
    answer:
      "Os cornetos nasais aquecem e filtram o ar, mas quando aumentados cronicamente (hipertrofia, muito comum na rinite) bloqueiam a passagem do ar. A redução cirúrgica diminui o volume dos cornetos preservando sua função fisiológica, frequentemente associada à septoplastia para restaurar a respiração livre.",
  },
  {
    id: "obstrucao-nasal-descongestionantes",
    question: "Obstrução nasal e uso prolongado de descongestionantes: qual o risco?",
    answer:
      "O uso contínuo de gotas descongestionantes nasais promove apenas alívio momentâneo e pode desencadear rinite medicamentosa (efeito rebote), fazendo com que o nariz fique cada vez mais obstruído, além de oferecer riscos cardiovasculares. Investigar a causa da obstrução — como desvio de septo, aumento dos cornetos nasais, rinite ou sinusite — é o caminho seguro para voltar a respirar bem.",
  },
  {
    id: "cirurgia-endoscopica-sinusite",
    question: "Quando a cirurgia endoscópica nasal para sinusite é recomendada?",
    answer:
      "A cirurgia endoscópica nasal é realizada por vídeo, por dentro das narinas e sem cortes externos, sendo indicada para quadros de rinossinusite crônica, pólipos nasais ou bloqueios na drenagem dos seios da face que persistem mesmo após o tratamento medicamentoso adequado.",
  },
  {
    id: "ronco-apneia-adulto",
    question: "Como é feita a avaliação cirúrgica para ronco e apneia do sono em adultos?",
    answer:
      "A investigação avalia toda a via aérea superior (cavidade nasal, septo, cornetos, palato, amígdalas e faringe) por meio de exame clínico, videoendoscopia e exames do sono. O tratamento é individualizado para desobstruir a passagem do ar e melhorar a qualidade do sono e a oxigenação noturna.",
  },
];

export const faqItems: FaqItem[] = [
  pediatricFaqItems[0],
  pediatricFaqItems[1],
  pediatricFaqItems[2],
  pediatricFaqItems[3],
  adultFaqItems[2],
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
            if (link.action === "booking-modal") {
              return (
                <a
                  key={link.label}
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    setBookingOpen(true);
                  }}
                >
                  {link.shortLabel}
                </a>
              );
            }
            if (link.action === "surgery-whatsapp") {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.shortLabel}
                </a>
              );
            }
            const isActive =
              link.href.startsWith("/") &&
              !link.href.includes("#") &&
              pathname === link.href;
            return link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(link.href);
                }}
              >
                {link.shortLabel}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleRouteClick(e, link.href)}
                className={isActive ? "nav-link-active" : ""}
              >
                {link.shortLabel}
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
                if (link.action === "booking-modal") {
                  return (
                    <a
                      key={link.label}
                      href="#contato"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        setTimeout(() => setBookingOpen(true), 200);
                      }}
                    >
                      {link.label}
                      <ArrowUpRight size={20} />
                    </a>
                  );
                }
                if (link.action === "surgery-whatsapp") {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      <ArrowUpRight size={20} />
                    </a>
                  );
                }
                const isActive =
                  link.href.startsWith("/") &&
                  !link.href.includes("#") &&
                  pathname === link.href;
                return link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleMobileHashClick(e, link.href)}
                  >
                    {link.label}
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <Link
                    key={link.label}
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
                <div
                  className="quick-unit-bg"
                  style={{ backgroundImage: "url('/media/otorhynus.jpg')" }}
                  aria-hidden="true"
                />
                <div className="quick-unit-shade" aria-hidden="true" />
                <img
                  src="/media/otorhynus.jpg"
                  alt="Unidade Otorhynus — Asa Norte"
                  className="quick-unit-thumb"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <div className="quick-unit-info">
                  <strong>Otorhynus — Asa Norte</strong>
                  <span>
                    SHLN, Bloco J, Ed. Multiclínicas · WhatsApp (61) 98574-3764
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={17} />
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link"
                onClick={() => setBookingOpen(false)}
              >
                <div
                  className="quick-unit-bg"
                  style={{ backgroundImage: "url('/media/otogama.jpg')" }}
                  aria-hidden="true"
                />
                <div className="quick-unit-shade" aria-hidden="true" />
                <img
                  src="/media/otogama.jpg"
                  alt="Clínica Otogama — Gama"
                  className="quick-unit-thumb"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <div className="quick-unit-info">
                  <strong>Clínica Otogama — Gama</strong>
                  <span>
                    Quadra 01, Conjunto A, Lote 4, Gama Sul · WhatsApp (61)
                    98346-6377
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={17} />
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link"
                onClick={() => setBookingOpen(false)}
              >
                <div
                  className="quick-unit-bg"
                  style={{ backgroundImage: "url('/media/cdootorrino.jpg')" }}
                  aria-hidden="true"
                />
                <div className="quick-unit-shade" aria-hidden="true" />
                <img
                  src="/media/cdootorrino.jpg"
                  alt="CDO Otorrino — Taguatinga"
                  className="quick-unit-thumb"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <div className="quick-unit-info">
                  <strong>CDO Otorrino — Taguatinga</strong>
                  <span>
                    Centro Médico Hospital Anchieta, Salas 111/112 B · WhatsApp
                    (61) 98323-0103
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={17} />
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href={surgeryWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-unit-link quick-unit-surgery"
                onClick={() => setBookingOpen(false)}
              >
                <div
                  className="quick-unit-bg"
                  style={{ backgroundImage: "url('/media/cirurgia.jpg')" }}
                  aria-hidden="true"
                />
                <div className="quick-unit-shade" aria-hidden="true" />
                <img
                  src="/media/cirurgia.jpg"
                  alt="Agendar Cirurgia e Consultar Valores"
                  className="quick-unit-thumb"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <div className="quick-unit-info">
                  <strong>
                    Agendar Cirurgia · Consultar Valores (Criança e Adulto)
                  </strong>
                  <span>
                    Canal exclusivo da equipe cirúrgica · WhatsApp +55 61
                    8299-4767
                  </span>
                </div>
                <span className="quick-unit-action">
                  <MessageCircle size={17} />
                  <ArrowUpRight size={15} />
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
                Ver endereços completos, telefones e mapa na página ↓
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
  items = faqItems,
  introText = "Respostas educativas para as principais dúvidas sobre respiração nasal, sono, amígdalas, adenoide e exames em consultório.",
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  items?: FaqItem[];
  introText?: string;
}) {
  const [activeFaq, setActiveFaq] = useState<string>("");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
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
          <p>{introText}</p>
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
          {items.map((item) => (
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
                (61) 3340-8859
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
                    <div
                      className="convenios-logos-grid"
                      style={{
                        gridTemplateRows: `repeat(${Math.ceil(
                          otorhynusConvenios.length / 2
                        )}, minmax(0, auto))`,
                      }}
                    >
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
                (61) 3254-0111
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
                    <div
                      className="convenios-logos-grid"
                      style={{
                        gridTemplateRows: `repeat(${Math.ceil(
                          otogamaConvenios.length / 2
                        )}, minmax(0, auto))`,
                      }}
                    >
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
                (61) 3352-6994
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
                    <div
                      className="convenios-logos-grid"
                      style={{
                        gridTemplateRows: `repeat(${Math.ceil(
                          cdoConvenios.length / 2
                        )}, minmax(0, auto))`,
                      }}
                    >
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
            <span className="eyebrow">
              CANAL DIRETO DE CIRURGIAS · CRIANÇA E ADULTO
            </span>
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

        {/* COLUNA 2: NAVEGAÇÃO PELO SITE (8 LINKS OFICIAIS) */}
        <div className="footer-col">
          <span className="eyebrow footer-col-title">NAVEGAÇÃO</span>
          <ul className="footer-links-list">
            {navLinks.map((link) => {
              if (link.action === "booking-modal") {
                return (
                  <li key={link.label}>
                    <a
                      href="#contato"
                      onClick={(e) => {
                        e.preventDefault();
                        openQuickBookingModal();
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
              if (link.action === "surgery-whatsapp") {
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
              if (link.href.startsWith("#")) {
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToHash(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleFooterNav(e, link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* COLUNA 3: UNIDADES NA ORDEM DE PRIORIDADE COM IMAGENS E EFEITO */}
        <div className="footer-col">
          <span className="eyebrow footer-col-title">
            AGENDAMENTO DIRETO NO WHATSAPP
          </span>
          <div className="quick-booking-units footer-booking-units">
            <a
              href={whatsapp("61985743764", "Unidade Otorhynus (Asa Norte)")}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-unit-link"
            >
              <div
                className="quick-unit-bg"
                style={{ backgroundImage: "url('/media/otorhynus.jpg')" }}
                aria-hidden="true"
              />
              <div className="quick-unit-shade" aria-hidden="true" />
              <img
                src="/media/otorhynus.jpg"
                alt="Unidade Otorhynus — Asa Norte"
                className="quick-unit-thumb"
                width={52}
                height={52}
                loading="lazy"
              />
              <div className="quick-unit-info">
                <strong>Otorhynus — Asa Norte</strong>
                <span>
                  SHLN, Bloco J, Ed. Multiclínicas · WhatsApp (61) 98574-3764
                </span>
              </div>
              <span className="quick-unit-action">
                <MessageCircle size={16} />
                <ArrowUpRight size={14} />
              </span>
            </a>

            <a
              href={whatsapp("61983466377", "Clínica Otogama (Gama)")}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-unit-link"
            >
              <div
                className="quick-unit-bg"
                style={{ backgroundImage: "url('/media/otogama.jpg')" }}
                aria-hidden="true"
              />
              <div className="quick-unit-shade" aria-hidden="true" />
              <img
                src="/media/otogama.jpg"
                alt="Clínica Otogama — Gama"
                className="quick-unit-thumb"
                width={52}
                height={52}
                loading="lazy"
              />
              <div className="quick-unit-info">
                <strong>Clínica Otogama — Gama</strong>
                <span>
                  Quadra 01, Conjunto A, Lote 4, Gama Sul · WhatsApp (61)
                  98346-6377
                </span>
              </div>
              <span className="quick-unit-action">
                <MessageCircle size={16} />
                <ArrowUpRight size={14} />
              </span>
            </a>

            <a
              href={whatsapp("61983230103", "CDO Otorrino (Taguatinga)")}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-unit-link"
            >
              <div
                className="quick-unit-bg"
                style={{ backgroundImage: "url('/media/cdootorrino.jpg')" }}
                aria-hidden="true"
              />
              <div className="quick-unit-shade" aria-hidden="true" />
              <img
                src="/media/cdootorrino.jpg"
                alt="CDO Otorrino — Taguatinga"
                className="quick-unit-thumb"
                width={52}
                height={52}
                loading="lazy"
              />
              <div className="quick-unit-info">
                <strong>CDO Otorrino — Taguatinga</strong>
                <span>
                  Centro Médico Hospital Anchieta, Salas 111/112 B · WhatsApp
                  (61) 98323-0103
                </span>
              </div>
              <span className="quick-unit-action">
                <MessageCircle size={16} />
                <ArrowUpRight size={14} />
              </span>
            </a>

            <a
              href={surgeryWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-unit-link quick-unit-surgery"
            >
              <div
                className="quick-unit-bg"
                style={{ backgroundImage: "url('/media/cirurgia.jpg')" }}
                aria-hidden="true"
              />
              <div className="quick-unit-shade" aria-hidden="true" />
              <img
                src="/media/cirurgia.jpg"
                alt="Agendar Cirurgia e Consultar Valores"
                className="quick-unit-thumb"
                width={52}
                height={52}
                loading="lazy"
              />
              <div className="quick-unit-info">
                <strong>
                  Agendar Cirurgia · Consultar Valores (Criança e Adulto)
                </strong>
                <span>
                  Canal exclusivo da equipe cirúrgica · WhatsApp +55 61
                  8299-4767
                </span>
              </div>
              <span className="quick-unit-action">
                <MessageCircle size={16} />
                <ArrowUpRight size={14} />
              </span>
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
