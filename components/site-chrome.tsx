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

const whatsapp = (number: string, clinic: string) =>
  `https://wa.me/55${number}?text=${encodeURIComponent(
    `Olá! Gostaria de informações para agendar uma consulta com o Dr. Raimundo Aldemar na ${clinic}.`
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

function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
  const pathname = usePathname();

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
            alt="Dr. Raimundo Aldemar — Otorrinolaringologia"
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
              scrollToHash("#contato");
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
              Otorrinolaringologia · Brasília, DF
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
              onClick={(e) => handleMobileHashClick(e, "#contato")}
            >
              Agendar consulta <ArrowUpRight size={18} />
            </a>
            <p className="menu-credentials">CRM-DF 20094 · RQE 13936</p>
          </SheetContent>
        </Sheet>
      </header>
    </>
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
            Atendimento na Asa Norte (Otorhynus) e no Gama (Otogama).
            <br className="desktop-break" />
            Escolha a unidade e entre em contato pelo WhatsApp para consultar
            horários, convênios e agendar.
          </p>
        </div>

        <div className="locations locations-two-cols">
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
                    <span>Convênios atendidos nesta unidade</span>
                    {openConvenio === "otorhynus" ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="convenios-content">
                    Aguardando envio da relação de convênios da Unidade
                    Otorhynus (Asa Norte). Consulte também diretamente pelo
                    WhatsApp (61) 98574-3764.
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
                    <span>Convênios atendidos nesta unidade</span>
                    {openConvenio === "otogama" ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="convenios-content">
                    Aguardando envio da relação de convênios da Clínica Otogama
                    (Gama). Consulte também diretamente pelo WhatsApp (61)
                    98346-6377.
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

  return (
    <footer className="site-footer">
      <div className="footer-top" data-reveal>
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="footer-brand"
        >
          <img
            src="/media/logo.png"
            width="640"
            height="213"
            loading="lazy"
            decoding="async"
            alt="Dr. Raimundo Aldemar — Otorrinolaringologia"
          />
        </Link>
        <p>
          Cuidado que começa
          <br />
          <span className="serif">com uma boa conversa.</span>
        </p>
        <a
          href="#principal"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="back-top"
          aria-label="Voltar ao início"
        >
          <ArrowRight size={23} />
        </a>
      </div>
      <div className="footer-bottom" data-reveal>
        <span>© {new Date().getFullYear()} Dr. Raimundo Aldemar</span>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          <InstagramIcon size={15} />
          <span>@raimundo.otorrino</span>
        </a>
        <span>CRM-DF 20094 · RQE 13936 · DF</span>
      </div>
    </footer>
  );
}

