"use client";

import { useEffect, useRef, useState } from "react";
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
} from "@/components/site-chrome";

gsap.registerPlugin(ScrollTrigger);

const officeProcedures = [
  {
    id: "lavagem",
    title: "Lavagem de ouvido",
    text: "Procedimento realizado em consultório para higienização segura do conduto auditivo, devolvendo a sensação de ouvido livre com cuidado e conforto.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "cerume",
    title: "Remoção de cerume (cera do ouvido)",
    text: "Retirada cuidadosa do excesso de cerume acumulado que provoca sensação de ouvido tampado, desconforto, zumbido ou redução temporária da audição.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "aspiracao",
    title: "Aspiração de ouvido",
    text: "Remoção precisa de infecção e secreção do ouvido em consultório, fundamental para o tratamento eficaz das otites e recuperação da saúde auditiva.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "cauterizacao",
    title: "Cauterização septal",
    text: "Procedimento ambulatorial indicado para o controle seguro e duradouro de quadros de sangramento de nariz (epistaxe) recorrentes.",
    image: "/media/area-nariz.jpg",
  },
];

export default function ExamesEProcedimentosPage() {
  const root = useRef<HTMLDivElement>(null);
  const [activeProcedure, setActiveProcedure] = useState("lavagem");

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-reveal",
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.11,
            ease: "power3.out",
          }
        );

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
                toggleActions: "play reverse play reverse",
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
      <SiteHeader />

      <main id="principal">
        <section className="hero">
          <div
            className="hero-photo hero-photo-exames"
            role="img"
            aria-label="Dr. Raimundo Aldemar realizando exame em consultório"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-reveal">
              EXAMES E PROCEDIMENTOS · CRIANÇAS E ADULTOS
            </p>
            <h1 className="hero-reveal">
              Diagnóstico preciso.
              <br />
              <span>Mais conforto no exame.</span>
            </h1>
            <p className="hero-description hero-reveal">
              Exames por vídeo com ótica flexível e procedimentos realizados
              diretamente em consultório para crianças e adultos em Brasília.
            </p>
            <div className="hero-reveal">
              <LinkButton href="#contato">Agendar exame ou consulta</LinkButton>
            </div>
          </div>
          <div className="hero-bottom hero-reveal">
            <a href="#exames" className="scroll-link">
              <span className="circle-icon">
                <ArrowDown size={16} />
              </span>
              Ver exames realizados
            </a>
            <span className="hero-credentials">
              Dr. Raimundo Aldemar
              <br />
              <small>CRM-DF 20094 · RQE 13936</small>
            </span>
          </div>
          <span className="hero-caption">PRECISÃO E CONFORTO.</span>
        </section>

        <div className="intro-strip" data-reveal>
          <span>Videoendoscopia nasal flexível.</span>
          <span>Laringoscopia.</span>
          <span>Procedimentos em consultório.</span>
        </div>

        {/* EXAMES EM CRIANÇAS E ADULTOS */}
        <section id="exames" className="about section-pad">
          <div className="section-top" data-reveal>
            <span className="eyebrow">EXAMES QUE REALIZA</span>
            <span className="small-note">Em crianças e adultos.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                Exames por vídeo com
                <br />
                <span className="serif">ótica flexível e delicadeza.</span>
              </h2>
              <p data-reveal>
                Os exames endoscópicos permitem visualizar com alta definição as
                estruturas do nariz, da faringe e da laringe no próprio
                consultório, auxiliando no diagnóstico imediato em crianças e
                adultos.
              </p>

              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>
                      1. Videoendoscopia nasal — com ótica flexível
                    </strong>
                    <small>
                      Realizada em crianças e adultos. O uso da fibra óptica
                      flexível garante muito mais conforto e tranquilidade
                      durante todo o exame.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>2. Laringoscopia</strong>
                    <small>
                      Realizada em crianças e adultos para avaliação detalhada
                      da garganta, faringe, laringe e pregas vocais (voz,
                      rouquidão, tosse e engasgos).
                    </small>
                  </p>
                </div>
              </div>

              <a className="text-link" href="#contato" data-reveal>
                Agendar exame nas unidades Asa Norte ou Gama{" "}
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="about-visual" data-reveal>
              <div className="section-video-showcase">
                <video
                  src="/videos/endoscopia-nasal.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="children-video-player"
                  aria-label="Vídeo de exame de videoendoscopia nasal com ótica flexível"
                />
              </div>
              <div className="photo-caption video-caption">
                <span>Videoendoscopia nasal</span>
                <span>Ótica flexível</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCEDIMENTOS EM CONSULTÓRIO */}
        <section
          id="procedimentos"
          className="specialties specialties-immersive section-pad"
        >
          <div className="specialty-backgrounds">
            {officeProcedures.map((proc) => (
              <div
                key={proc.id}
                className={`area-image ${
                  activeProcedure === proc.id ? "is-active" : ""
                }`}
                role="img"
                aria-hidden={activeProcedure !== proc.id}
                aria-label={`Procedimento em consultório — ${proc.title}`}
                style={{ backgroundImage: `url('${proc.image}')` }}
              />
            ))}
          </div>
          <div className="specialty-shade" aria-hidden="true" />
          <div className="section-top" data-reveal>
            <span className="eyebrow">PROCEDIMENTOS EM CONSULTÓRIO</span>
            <span className="small-note">Cuidado seguro e resolutivo.</span>
          </div>
          <div className="specialties-heading" data-reveal>
            <h2>
              Procedimentos realizados
              <br />
              <span className="serif">diretamente em consultório.</span>
            </h2>
            <p>
              Alívio seguro e acompanhamento próximo para queixas de ouvido e
              sangramento nasal.
            </p>
          </div>
          <div className="specialties-grid">
            <div className="area-context area-video-context" data-reveal>
              <div className="section-video-showcase">
                <video
                  src="/videos/lavagem-de-ouvido.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="children-video-player"
                  aria-label="Vídeo de procedimento de lavagem de ouvido em consultório"
                />
              </div>
            </div>
            <Accordion
              type="single"
              value={activeProcedure}
              onValueChange={(value) => {
                if (value) setActiveProcedure(value);
              }}
              className="areas-accordion"
              data-reveal
            >
              {officeProcedures.map((proc) => (
                <AccordionItem
                  value={proc.id}
                  key={proc.id}
                  className="area-item"
                >
                  <AccordionTrigger className="area-trigger">
                    <span>{proc.title}</span>
                    <span className="area-toggle">
                      {activeProcedure === proc.id ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="area-content">
                    <p>{proc.text}</p>
                    <a href="#contato" className="text-link">
                      Agendar procedimento <ArrowUpRight size={18} />
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

