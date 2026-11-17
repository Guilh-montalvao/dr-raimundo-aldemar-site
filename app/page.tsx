"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Plus, Minus } from "lucide-react";
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
  ContactSection,
  SiteFooter,
  LinkButton,
  SmartVideo,
} from "@/components/site-chrome";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    id: "ouvidos",
    title: "Ouvidos e audição",
    text: "Avaliação da saúde dos ouvidos e procedimentos em consultório como lavagem de ouvido, remoção de cerume (cera) e aspiração de ouvido para remoção de infecção e secreção.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "nariz",
    title: "Nariz e respiração",
    text: "Exame de videoendoscopia nasal com ótica flexível (muito mais conforto para crianças e adultos), cauterização septal para sangramento nasal e tratamento de desvio de septo, cornetos e sinusite.",
    image: "/media/area-nariz.jpg",
  },
  {
    id: "garganta",
    title: "Garganta, voz e sono",
    text: "Exame de laringoscopia em crianças e adultos, avaliação das amígdalas, adenoide, frênulo lingual e tratamento cirúrgico do ronco e apneia do sono.",
    image: "/media/area-garganta.jpg",
  },
];

let introCompletedInSpa = false;

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const introStartedRef = useRef(false);
  const introTlRef = useRef<gsap.core.Timeline | null>(null);
  const [activeArea, setActiveArea] = useState("ouvidos");

  useEffect(() => {
    window.scrollTo(0, 0);
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
            ".hero-photo",
            { scale: 1.015 },
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

        gsap.to(".hero-content, .hero-bottom, .hero-caption", {
          opacity: 0,
          y: -25,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "55% 45%",
            end: "bottom 15%",
            scrub: 0.5,
          },
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
            src="/media/logo.webp"
            alt="Dr. Raimundo Aldemar — Otorrinolaringologia"
            className="intro-logo"
            width="2048"
            height="682"
          />
          <div className="intro-divider" />
          <span className="intro-subtitle">
            OTORRINOLARINGOLOGIA · BRASÍLIA, DF
          </span>
        </div>
        <span className="intro-skip-hint">
          Clique em qualquer lugar para avançar
        </span>
      </div>

      <SiteHeader />

      <main id="principal">
        <section id="inicio" className="hero">
          <div
            className="hero-photo"
            role="img"
            aria-label="Dr. Raimundo Aldemar, médico otorrinolaringologista"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-reveal">
              OTORRINOLARINGOLOGIA EM BRASÍLIA
            </p>
            <h1 className="hero-reveal">
              Respirar bem.
              <br />
              Ouvir a vida.
              <br />
              <span>Viver melhor.</span>
            </h1>
            <p className="hero-description hero-reveal">
              Otorrinolaringologia para adultos e crianças em Brasília.
              <br className="desktop-break" /> Atenção à saúde dos ouvidos, do
              nariz e da garganta, com escuta e orientação em cada consulta.
            </p>
            <div className="hero-reveal">
              <LinkButton href="#contato">Agendar consulta</LinkButton>
            </div>
          </div>
          <div className="hero-bottom hero-reveal">
            <a href="#sobre" className="scroll-link">
              <span className="circle-icon">
                <ArrowDown size={16} />
              </span>
              Conheça o Dr. Raimundo
            </a>
            <span className="hero-credentials">
              Dr. Raimundo Aldemar
              <br />
              <small>CRM-DF 20094 · RQE 13936</small>
            </span>
          </div>
          <span className="hero-caption">MEDICINA COM PRESENÇA.</span>
        </section>

        <div className="intro-strip" data-reveal>
          <span>Ouvidos, nariz e garganta.</span>
          <span>Adultos e crianças.</span>
          <span>Um cuidado que acompanha você.</span>
        </div>

        <section id="sobre" className="about section-pad">
          <div className="section-top" data-reveal>
            <span className="eyebrow">QUEM CUIDA DE VOCÊ</span>
            <span className="small-note">Ciência. Escuta. Proximidade.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                Antes de cuidar,
                <br />
                <span className="serif">é preciso ouvir.</span>
              </h2>
              <p data-reveal>
                Sou o Dr. Raimundo Aldemar, médico otorrinolaringologista.
                Atendo adultos e crianças, com atenção às queixas e às
                necessidades de cada fase da vida.
              </p>
              <p data-reveal>
                Na consulta, meu compromisso é ouvir o que você sente, explicar
                a avaliação e orientar os próximos passos com clareza.
              </p>
              <div className="credentials credentials-with-logos" data-reveal>
                <div className="credential-row">
                  <span className="credential-logo-wrap">
                    <img
                      src="/media/logo-ufg.png"
                      alt="Logo UFG"
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>Universidade Federal de Goiás — UFG</strong>
                    <small>Formado pela Universidade Federal de Goiás</small>
                  </p>
                </div>
                <div className="credential-row">
                  <span className="credential-logo-wrap">
                    <img
                      src="/media/logo-hfa.webp"
                      alt="Logo HFA"
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>Hospital das Forças Armadas — HFA</strong>
                    <small>
                      Residência médica em Otorrinolaringologia · Brasília - DF
                    </small>
                  </p>
                </div>
                <div className="credential-row">
                  <span className="credential-logo-wrap">
                    <img
                      src="/media/logo-ABORL.png"
                      alt="Logo ABORL-CCF"
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>Sociedade Brasília de Otorrinolaringologia</strong>
                    <small>
                      Membro da Sociedade Brasília de Otorrinolaringologia
                    </small>
                  </p>
                </div>
                <div className="credential-row">
                  <span className="credential-logo-wrap">
                    <img
                      src="/media/logo.webp"
                      alt="Logo Dr. Raimundo Aldemar"
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>CRM-DF 20094 · RQE 13936</strong>
                    <small>
                      Título de Especialista em Otorrinolaringologia
                    </small>
                  </p>
                </div>
              </div>
              <Link className="text-link" href="/o-medico" data-reveal>
                Conhecer a trajetória do Dr. Raimundo <ArrowUpRight size={19} />
              </Link>
            </div>
            <div className="about-visual" data-reveal>
              <div
                className="about-photo"
                role="img"
                aria-label="Dr. Raimundo Aldemar em seu consultório"
              >
                <div
                  className="photo-background"
                  data-parallax
                  style={{
                    backgroundImage: "url('/media/dr-raimundo-consultorio.webp')",
                  }}
                />
              </div>
              <div className="photo-caption">
                <span>Dr. Raimundo Aldemar</span>
                <span>CRM-DF 20094 · RQE 13936</span>
              </div>
              <div className="about-video-below" data-reveal>
                <div className="section-video-showcase">
                  <SmartVideo
                    src="/videos/ser-medico.mp4"
                    ariaLabel="Vídeo Dr. Raimundo Aldemar — Ser médico"
                  />
                </div>
                <div className="photo-caption video-caption">
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
                aria-label={`Atendimento de otorrinolaringologia — ${area.title}`}
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
              Ouvir, respirar e falar.
              <br />
              <span className="serif">Saúde que faz parte da sua vida.</span>
            </h2>
            <p>
              Atenção à saúde dos ouvidos, do nariz e da garganta para adultos e
              crianças.
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

        <section id="infantil" className="children-section">
          <div
            className="children-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo acolhe uma criança no ambiente hospitalar"
          />
          <div className="children-shade" />
          <div className="children-content">
            <span className="eyebrow" data-reveal>
              ATENDIMENTO INFANTIL
            </span>
            <h2 data-reveal>
              Para os pequenos,
              <br />
              <span className="serif">atenção em cada descoberta.</span>
            </h2>
            <p data-reveal>
              Exames e cirurgias infantis — amigdalectomia, remoção da adenoide,
              colocação de tubo de ventilação (miringotomia) e frenectomia — com
              acolhimento lúdico de super-herói para a criança e segurança para
              toda a família.
            </p>
            <div data-reveal>
              <LinkButton href="/atendimento-infantil" light>
                Conhecer atendimento e cirurgia infantil
              </LinkButton>
            </div>
          </div>
          <div className="children-video-float" data-reveal>
            <SmartVideo
              src="/videos/super-heroi.mp4"
              ariaLabel="Vídeo de atendimento infantil — pequeno super-herói"
            />
          </div>
          <div className="children-footnote" data-reveal>
            <span aria-hidden="true" />
            <span style={{ marginLeft: "auto" }}>ATENÇÃO QUE ACOLHE.</span>
          </div>
        </section>

        <section className="surgery surgery-immersive section-pad">
          <div
            className="surgery-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo Aldemar em procedimento médico"
          />
          <div className="surgery-shade" aria-hidden="true" />
          <div className="surgery-text">
            <span className="eyebrow" data-reveal>
              AVALIAÇÃO CIRÚRGICA
            </span>
            <h2 data-reveal>
              Quando a cirurgia é indicada,
              <br />
              <span className="serif">entender faz parte do cuidado.</span>
            </h2>
            <p data-reveal>
              Avaliação e cirurgias em adultos para desvio de septo, remoção dos
              cornetos nasais (turbinectomia), amigdalectomia, cirurgia
              endoscópica nasal e melhora do ronco e apneia do sono.
            </p>
            <Link
              href="/cirurgia-adulto"
              className="text-link"
              data-reveal
            >
              Conhecer cirurgias em adultos <ArrowUpRight size={19} />
            </Link>
          </div>
          <span className="surgery-signature" data-reveal>
            CUIDADO EM CADA ETAPA.
          </span>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
