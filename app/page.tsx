"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Plus,
  Minus,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  SiteHeader,
  FaqSection,
  ContactSection,
  SiteFooter,
  LinkButton,
  SmartVideo,
  surgeryWhatsapp,
} from "@/components/site-chrome";
import { TestimonialsSection } from "@/components/testimonials-section";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    id: "nariz",
    title: "Nariz e respiração",
    text: "Exame de videoendoscopia nasal com ótica flexível (que pode proporcionar maior conforto para crianças e adultos), cauterização septal para sangramento nasal e tratamento clínico e cirúrgico da obstrução nasal, desvio de septo, redução dos cornetos nasais, rinite e sinusite.",
    image: "/media/area-nariz.jpg",
  },
  {
    id: "ouvidos",
    title: "Ouvidos e audição",
    text: "Avaliação da saúde dos ouvidos e procedimentos em consultório como lavagem de ouvido, remoção de cerume (cera) e aspiração de ouvido para remoção de infecção e secreção.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "garganta",
    title: "Garganta, voz e sono",
    text: "Exame de laringoscopia em crianças e adultos, avaliação das amígdalas, adenoide, frênulo lingual e investigação e tratamento do ronco e da apneia obstrutiva do sono.",
    image: "/media/area-garganta.jpg",
  },
];

const superheroPhotos = [
  {
    src: "/media/super-herois-kids1.jpeg",
    alt: "Dr. Raimundo Aldemar ao lado de paciente infantil com lembrança de acolhimento",
  },
  {
    src: "/media/super-herois-kids2.jpeg",
    alt: "Dr. Raimundo Aldemar com pequeno paciente vestido de Super-Homem",
  },
  {
    src: "/media/super-herois-kids3.jpeg",
    alt: "Dr. Raimundo Aldemar com criança caracterizada de super-herói no centro cirúrgico",
  },
  {
    src: "/media/super-herois-kids4.jpeg",
    alt: "Dr. Raimundo Aldemar acolhendo pequena paciente com capa e máscara rosa de super-heroína",
  },
  {
    src: "/media/super-herois-kids5.jpeg",
    alt: "Dr. Raimundo Aldemar no consultório com pequeno paciente fantasiado de Homem-Aranha",
  },
  {
    src: "/media/super-herois-kids6.jpeg",
    alt: "Dr. Raimundo Aldemar com pequeno paciente caracterizado de Batman antes do procedimento",
  },
];

const heroKidsSlides = [
  {
    src: "/media/infantil.jpg",
    alt: "Dr. Raimundo Aldemar acolhendo pequeno paciente vestido de super-herói",
    pos: "56% 18%",
  },
  ...superheroPhotos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    pos: "50% 16%",
  })),
];

const heroAdultSlides = [
  {
    src: "/media/background-hero-section.jpg",
    alt: "Dr. Raimundo Aldemar em cirurgia otorrinolaringológica",
    pos: "76% 14%",
  },
  {
    src: "/media/exame-nasal.jpg",
    alt: "Dr. Raimundo Aldemar realizando exame nasal em consultório",
    pos: "68% 22%",
  },
  {
    src: "/media/cirurgia.jpg",
    alt: "Dr. Raimundo Aldemar com fotóforo cirúrgico",
    pos: "70% 18%",
  },
  {
    src: "/media/dr-raimundo-consultorio.jpg",
    alt: "Dr. Raimundo Aldemar em seu consultório em Brasília",
    pos: "58% 18%",
  },
  {
    src: "/media/consulta.jpg",
    alt: "Atendimento clínico otorrinolaringológico para adultos",
    pos: "54% 22%",
  },
  {
    src: "/media/exame-otoscopio.jpg",
    alt: "Avaliação otorrinolaringológica com otoscópio em consultório",
    pos: "58% 22%",
  },
];

let introCompletedInSpa = false;

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const introStartedRef = useRef(false);
  const introTlRef = useRef<gsap.core.Timeline | null>(null);
  const [activeArea, setActiveArea] = useState("nariz");
  const [heroFocus, setHeroFocus] = useState<"none" | "crianca" | "adulto">(
    "none"
  );
  const [heroKidsIdx, setHeroKidsIdx] = useState(0);
  const [heroAdultIdx, setHeroAdultIdx] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const kidsTimer = window.setInterval(() => {
      setHeroKidsIdx((prev) => (prev + 1) % heroKidsSlides.length);
    }, 2500);
    let adultTimer: number | undefined;
    const adultDelay = window.setTimeout(() => {
      setHeroAdultIdx((prev) => (prev + 1) % heroAdultSlides.length);
      adultTimer = window.setInterval(() => {
        setHeroAdultIdx((prev) => (prev + 1) % heroAdultSlides.length);
      }, 2500);
    }, 1250);
    return () => {
      window.clearInterval(kidsTimer);
      window.clearTimeout(adultDelay);
      if (adultTimer !== undefined) window.clearInterval(adultTimer);
    };
  }, []);

  useEffect(() => {
    const initialHash = window.location.hash;
    if (!initialHash) {
      window.scrollTo(0, 0);
    } else {
      introCompletedInSpa = true;
      if (introRef.current) introRef.current.style.display = "none";
      const scrollTarget = () => {
        const el = document.getElementById(initialHash.replace(/^#/, ""));
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      };
      setTimeout(scrollTarget, 120);
      setTimeout(scrollTarget, 450);
    }
    if (introCompletedInSpa) {
      if (introRef.current) introRef.current.style.display = "none";
    } else if (!introStartedRef.current) {
      introStartedRef.current = true;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        introCompletedInSpa = true;
        if (introRef.current) introRef.current.style.display = "none";
      } else {
        const introTl = gsap.timeline({
          onComplete: () => {
            introCompletedInSpa = true;
            if (introRef.current) introRef.current.style.display = "none";
          },
        });
        introTlRef.current = introTl;

        introTl
          .fromTo(
            ".intro-bg-photo",
            { opacity: 0, scale: 1.08, x: 22 },
            { opacity: 1, scale: 1.02, x: 0, duration: 1.35, ease: "power2.out" },
            0
          )
          .to(
            ".intro-logo",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power2.out",
            },
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
            ".site-header",
            { y: -25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.35"
          )
          .fromTo(
            ".hero-photo-layer",
            { scale: 1.02 },
            { scale: 1, duration: 1.4, ease: "power2.out" },
            "-=0.55"
          )
          .fromTo(
            ".hero-reveal",
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.95,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=1.3"
          );
      }
    }

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "bottom 8%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-mark-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { backgroundSize: "0% 88%" },
            {
              backgroundSize: "100% 88%",
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });
      }, root);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={root}>
      <div
        ref={introRef}
        className="site-intro"
        id="site-intro"
        onClick={() => {
          introCompletedInSpa = true;
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

      <SiteHeader />

      <main id="principal">
        {/* HERO SECTION UNIFICADO & CLARO — CRIANÇAS E ADULTOS */}
        <section
          id="inicio"
          className={`hero hero-unified${
            heroFocus !== "none" ? ` is-focus-${heroFocus}` : ""
          }`}
        >
          {/* Fundo Fotográfico Duplo Unificado (Super-Heróis passando a cada 2,5s + Adulto) */}
          <div className="hero-unified-media" aria-hidden="true">
            <div className="hero-unified-panel hero-panel-crianca">
              {heroKidsSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  loading={index <= 1 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ objectPosition: slide.pos }}
                  className={`hero-slide-img${
                    index === heroKidsIdx ? " is-active" : ""
                  }`}
                />
              ))}
            </div>
            <div className="hero-unified-panel hero-panel-adulto">
              {heroAdultSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  loading={index <= 1 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ objectPosition: slide.pos }}
                  className={`hero-slide-img${
                    index === heroAdultIdx ? " is-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="hero-unified-shade" aria-hidden="true" />

          <div className="hero-content hero-unified-content">
            <p className="eyebrow hero-reveal">
              <span className="short-line" />
              OTORRINOLARINGOLOGISTA · CRM-DF 20094 · RQE 13936
            </p>
            <h1 className="hero-reveal hero-title-specialist">
              Respirar bem,
              <br />
              <span>livre da obstrução nasal</span>
            </h1>

            <p className="hero-description hero-reveal">
              Atendimento clínico e cirúrgico para{" "}
              <strong>crianças e adultos</strong> em Brasília — unindo
              acolhimento lúdico infantil e precisão em consultório.
            </p>

            {/* DUAS PORTAS DE ENTRADA CLARAS PARA GUIAR O PACIENTE */}
            <nav
              className="hero-guide-doors hero-reveal"
              aria-label="Escolha o atendimento para criança ou para adulto"
            >
              <Link
                href="/atendimento-infantil"
                className="hero-door-card"
                onMouseEnter={() => setHeroFocus("crianca")}
                onMouseLeave={() => setHeroFocus("none")}
                onFocus={() => setHeroFocus("crianca")}
                onBlur={() => setHeroFocus("none")}
              >
                <span className="hero-door-avatars" aria-hidden="true">
                  <img
                    src="/media/super-herois-kids2.jpeg"
                    alt=""
                    loading="eager"
                  />
                  <img
                    src="/media/super-herois-kids4.jpeg"
                    alt=""
                    loading="eager"
                  />
                </span>
                <span className="hero-door-text">
                  <strong>Para Criança</strong>
                  <small>Adenoide, amígdalas, ronco e cirurgia lúdica</small>
                </span>
                <ArrowUpRight size={16} className="hero-door-arrow" />
              </Link>

              <Link
                href="/cirurgia-adulto"
                className="hero-door-card"
                onMouseEnter={() => setHeroFocus("adulto")}
                onMouseLeave={() => setHeroFocus("none")}
                onFocus={() => setHeroFocus("adulto")}
                onBlur={() => setHeroFocus("none")}
              >
                <span className="hero-door-avatars" aria-hidden="true">
                  <img
                    src="/media/background-hero-section.jpg"
                    alt=""
                    style={{ objectPosition: "78% 15%" }}
                    loading="eager"
                  />
                  <img
                    src="/media/exame-nasal.jpg"
                    alt=""
                    style={{ objectPosition: "70% 20%" }}
                    loading="eager"
                  />
                </span>
                <span className="hero-door-text">
                  <strong>Para Adulto</strong>
                  <small>Desvio de septo, cornetos, sinusite e ronco</small>
                </span>
                <ArrowUpRight size={16} className="hero-door-arrow" />
              </Link>
            </nav>

            <div className="hero-cta-row hero-reveal">
              <LinkButton href="#contato">Agendar consulta</LinkButton>

              <button
                type="button"
                className="hero-convenios-pill"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-unified-convenios"))
                }
              >
                <ShieldCheck size={16} aria-hidden="true" />
                <span>Consultar convênios</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>

          <span className="hero-caption">ATENÇÃO QUE ACOLHE.</span>
        </section>

        {/* FAIXA DE AUTORIDADE (+11 ANOS, +3 MIL CIRURGIAS, 5,0 GOOGLE) + ATALHOS RÁPIDOS */}
        <section
          className="hero-authority-bar"
          aria-label="Experiência e atalhos rápidos"
          data-reveal
        >
          <div className="hero-authority-metrics">
            <div className="hero-metric">
              <strong>+11 anos</strong>
              <span>de experiência</span>
            </div>
            <div className="hero-metric">
              <strong>+3 mil</strong>
              <span>cirurgias realizadas</span>
            </div>
            <div className="hero-metric">
              <strong className="hero-metric-stars">
                5,0 <Star size={14} fill="#c4943a" stroke="#c4943a" />
              </strong>
              <span>no Google</span>
            </div>
          </div>

          <nav
            className="hero-authority-links"
            aria-label="Atalhos das principais seções"
          >
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contato");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
                }
              }}
            >
              <MapPin size={14} aria-hidden="true" />
              <span>Locais no DF</span>
            </a>
            <Link href="/o-medico">
              <GraduationCap size={14} aria-hidden="true" />
              <span>Formação médica</span>
            </Link>
            <a
              href="#super-herois-home"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("super-herois-home");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
                }
              }}
            >
              <Sparkles size={14} aria-hidden="true" />
              <span>Pequenos Super-Heróis</span>
            </a>
          </nav>
        </section>

        {/* SEÇÃO INFANTIL DE ALTO DESTAQUE NA HOME (CONSULTÓRIO + FOTOS E VÍDEOS REAIS) */}
        <section id="infantil" className="children-section children-consultorio-bg">
          <div
            className="children-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo realizando videoendoscopia nasal delicada em criança no consultório"
            style={{ backgroundImage: "url('/media/adenoide-infantil.jpg')" }}
          />
          <div className="children-shade" />
          <div className="children-content">
            <span className="eyebrow" data-reveal>
              OTORRINOLARINGOLOGISTA · ATENDIMENTO INFANTIL
            </span>
            <h2 data-reveal>
              Seu filho ronca, dorme de boca aberta
              <br />
              <span className="serif">
                ou tem dificuldade para respirar pelo nariz?
              </span>
            </h2>
            <p data-reveal>
              Esses sinais merecem avaliação otorrinolaringológica cuidadosa,{" "}
              <mark
                className="editorial-mark editorial-mark-dark"
                data-mark-reveal
              >
                sem significar que toda criança precisa de cirurgia
              </mark>
              . Quando o procedimento cirúrgico é indicado — como
              amigdalectomia, adenoide, miringotomia com colocação de tubo de
              ventilação ou frenectomia — a família recebe orientação próxima
              antes, durante e depois.
            </p>
            <div className="surgery-cta-group" data-reveal>
              <LinkButton href="/atendimento-infantil" light>
                Conhecer atendimento e cirurgia infantil
              </LinkButton>
              <a
                href={surgeryWhatsapp("Cirurgia Infantil")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-link-light"
              >
                Consultar valores e agendar cirurgia infantil{" "}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="children-footnote" data-reveal>
            <span aria-hidden="true" />
            <span style={{ marginLeft: "auto" }}>CUIDADO INFANTIL E FAMILIAR.</span>
          </div>
        </section>

        {/* GALERIA VIVA DOS PEQUENOS SUPER-HERÓIS DIRETO NA HOME */}
        <section id="super-herois-home" className="about section-pad">
          <div className="section-top" data-reveal>
            <span className="eyebrow">PEQUENOS SUPER-HERÓIS</span>
            <span className="small-note">Acolhimento lúdico e família presente.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                No dia da cirurgia,
                <br />
                <span className="serif">cada criança é um super-herói.</span>
              </h2>
              <p data-reveal>
                Para ajudar a{" "}
                <mark className="editorial-mark" data-mark-reveal>
                  tornar a experiência hospitalar mais leve
                </mark>{" "}
                e menos assustadora, as crianças são acolhidas com capas e
                máscaras de super-heróis, carinho e escuta em cada etapa.
              </p>
              <p data-reveal>
                O acompanhamento começa na explicação detalhada em consultório e
                segue ao lado dos pais antes e após o procedimento, respeitando
                o tempo e a individualidade de cada criança.
              </p>
              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>Exames infantis com ótica flexível em consultório</strong>
                    <small>
                      Videoendoscopia nasal com fibra óptica flexível, que pode
                      proporcionar maior conforto e tranquilidade na avaliação
                      da adenoide e da respiração.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Acompanhamento completo da família</strong>
                    <small>
                      Orientação clara sobre tratamento clínico ou cirúrgico
                      (amígdalas, adenoide, tubo de ventilação e frenectomia).
                    </small>
                  </p>
                </div>
              </div>
              <Link className="text-link" href="/atendimento-infantil" data-reveal>
                Ver página completa de Atendimento Infantil{" "}
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="about-visual" data-reveal>
              <div className="superhero-videos-grid">
                <div className="superhero-video-card">
                  <div className="superhero-video-frame">
                    <SmartVideo
                      src="/videos/levando-crianca-cirurgia.mp4"
                      ariaLabel="Dr. Raimundo levando pequeno super-herói no colo para a cirurgia"
                    />
                  </div>
                  <div className="photo-caption">
                    <span>Indo para a cirurgia</span>
                    <span>Acolhimento no colo</span>
                  </div>
                </div>
                <div className="superhero-video-card">
                  <div className="superhero-video-frame">
                    <SmartVideo
                      src="/videos/depois-cirurgia-presentes.mp4"
                      ariaLabel="Pequeno paciente recebendo presentes e carinho após a cirurgia"
                    />
                  </div>
                  <div className="photo-caption">
                    <span>Depois da cirurgia</span>
                    <span>Presentes e carinho</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="superhero-strip-wrap" data-reveal>
            <div className="superhero-mosaic superhero-mosaic-strip">
              {superheroPhotos.map((photo) => (
                <div key={photo.src} className="superhero-mosaic-item">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="photo-caption">
              <span>Pequenos Super-Heróis</span>
              <span>Fotografias reais com autorização dos responsáveis</span>
            </div>
          </div>
        </section>

        {/* QUEM CUIDA DE VOCÊ — DR. RAIMUNDO ALDEMAR */}
        <section
          id="sobre"
          className="about section-pad"
          style={{ background: "#ede6db" }}
        >
          <div className="section-top" data-reveal>
            <span className="eyebrow">QUEM CUIDA DE VOCÊ</span>
            <span className="small-note">Ciência. Escuta. Proximidade.</span>
          </div>
          <div className="about-grid about-grid-with-video">
            <div className="about-text">
              <h2 data-reveal>
                Antes de cuidar,
                <br />
                <span className="serif">é preciso ouvir.</span>
              </h2>
              <p data-reveal>
                Sou o Dr. Raimundo Aldemar,{" "}
                <mark className="editorial-mark" data-mark-reveal>
                  médico otorrinolaringologista com título de especialista
                </mark>
                . Atendo crianças e adultos, com atenção às queixas
                respiratórias, do sono, dos ouvidos e da garganta em cada fase
                da vida.
              </p>
              <p data-reveal>
                Na consulta, meu compromisso é ouvir o que você sente, explicar
                a avaliação e orientar os próximos passos com clareza.
              </p>
              <div style={{ marginTop: 28 }} data-reveal>
                <LinkButton href="/o-medico">
                  Ver formação e história do Dr. Raimundo
                </LinkButton>
              </div>
            </div>
            <div className="about-visual about-visual-dual" data-reveal>
              <div className="about-dual-item">
                <div
                  className="about-photo"
                  role="img"
                  aria-label="Dr. Raimundo Aldemar em seu consultório"
                >
                  <div
                    className="photo-background"
                    data-parallax
                    style={{
                      backgroundImage:
                        "url('/media/dr-raimundo-consultorio.jpg')",
                    }}
                  />
                </div>
                <div className="photo-caption">
                  <span>Dr. Raimundo Aldemar</span>
                  <span>CRM-DF 20094 · RQE 13936</span>
                </div>
              </div>

              <div className="about-dual-item about-dual-video">
                <div className="about-video-frame">
                  <SmartVideo
                    src="/videos/ser-medico.mp4"
                    ariaLabel="Vídeo Dr. Raimundo Aldemar — Ser médico"
                  />
                </div>
                <div className="photo-caption">
                  <span>O significado de ser médico</span>
                  <span>Vocação e propósito</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="especialidade"
          className="specialties specialties-immersive section-pad"
        >
          <div className="specialty-backgrounds">
            {areas.map((area) => (
              <div
                key={area.id}
                className={`area-image ${
                  activeArea === area.id ? "is-active" : ""
                }`}
                role="img"
                aria-hidden={activeArea !== area.id}
                aria-label={`Atendimento de otorrinolaringologista — ${area.title}`}
                style={{ backgroundImage: `url('${area.image}')` }}
              />
            ))}
          </div>
          <div className="specialty-shade" aria-hidden="true" />
          <div className="section-top" data-reveal>
            <span className="eyebrow">ÁREAS DE ATUAÇÃO</span>
            <span className="small-note">O essencial para viver bem.</span>
          </div>
          <div className="specialties-heading" data-reveal>
            <h2>
              Respirar, ouvir e dormir bem.
              <br />
              <span className="serif">Saúde que faz parte da sua vida.</span>
            </h2>
            <p>
              Atenção especializada à saúde do nariz, dos ouvidos e da garganta
              para crianças e adultos.
            </p>
          </div>
          <div className="specialties-grid">
            <div className="area-context" aria-hidden="true" />
            <Accordion
              type="single"
              value={activeArea}
              onValueChange={(value) => {
                if (value) setActiveArea(value);
              }}
              className="areas-accordion"
              data-reveal
            >
              {areas.map((area) => (
                <AccordionItem
                  value={area.id}
                  key={area.id}
                  className="area-item"
                >
                  <AccordionTrigger className="area-trigger">
                    <span>{area.title}</span>
                    <span className="area-toggle">
                      {activeArea === area.id ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="area-content">
                    <p>{area.text}</p>
                    <Link href="/exames-e-procedimentos" className="text-link">
                      Ver exames e procedimentos em consultório{" "}
                      <ArrowUpRight size={18} />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="cirurgia" className="surgery surgery-immersive section-pad">
          <div
            className="surgery-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo Aldemar em procedimento médico"
          />
          <div className="surgery-shade" aria-hidden="true" />
          <div className="surgery-text">
            <span className="eyebrow" data-reveal>
              AVALIAÇÃO CIRÚRGICA · ADULTO
            </span>
            <h2 data-reveal>
              Quando a cirurgia é indicada,
              <br />
              <span className="serif">entender faz parte do cuidado.</span>
            </h2>
            <p data-reveal>
              Avaliação e cirurgias em adultos para desvio de septo, redução dos
              cornetos nasais (turbinoplastia / turbinectomia), amigdalectomia,
              cirurgia endoscópica nasal e tratamento do ronco e apneia do sono.
            </p>
            <div className="surgery-cta-group" data-reveal>
              <LinkButton href={surgeryWhatsapp("Cirurgia em Adulto")} external>
                Consultar valores e agendar cirurgia
              </LinkButton>
              <Link href="/cirurgia-adulto" className="text-link">
                Conhecer cirurgias em adultos <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
          <span className="surgery-signature" data-reveal>
            CUIDADO EM CADA ETAPA.
          </span>
        </section>

        <TestimonialsSection />

        <FaqSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
