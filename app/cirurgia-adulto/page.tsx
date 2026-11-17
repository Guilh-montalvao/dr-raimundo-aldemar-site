"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
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

const adultSurgeries = [
  {
    id: "septo",
    title: "Desvio de septo",
    text: "Cirurgia funcional (septoplastia) para corrigir o alinhamento do septo nasal, restaurando a livre passagem do ar e melhorando a respiração no dia a dia e durante o sono.",
    image: "/media/area-nariz.jpg",
  },
  {
    id: "turbinectomia",
    title: "Remoção dos cornetos nasais (Turbinectomia)",
    text: "Redução cirúrgica dos cornetos nasais hipertrofiados para aliviar a obstrução nasal crônica e potencializar o controle da rinite.",
    image: "/media/exame-nasal.webp",
  },
  {
    id: "amigdalectomia",
    title: "Amigdalectomia",
    text: "Indicada em adultos com amigdalites de repetição, desconforto frequente na garganta, caseum amigdaliano persistente ou obstrução da via aérea.",
    image: "/media/area-garganta.jpg",
  },
  {
    id: "endoscopica",
    title: "Cirurgia endoscópica nasal",
    text: "Procedimento minimamente invasivo realizado por vídeo, sem cortes externos, para tratamento de sinusites crônicas, pólipos nasais e alterações dos seios da face.",
    image: "/media/area-nariz.jpg",
  },
  {
    id: "ronco",
    title: "Cirurgia para melhorar o ronco e apneia do sono",
    text: "Avaliação e tratamento cirúrgico individualizado das vias aéreas superiores para reduzir o ronco e auxiliar no controle da apneia obstrutiva do sono.",
    image: "/media/cirurgia.webp",
  },
];

export default function CirurgiaAdultoPage() {
  const root = useRef<HTMLDivElement>(null);
  const [activeSurgery, setActiveSurgery] = useState("septo");

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <SiteHeader />

      <main id="principal">
        <section className="surgery surgery-immersive section-pad">
          <div
            className="surgery-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo Aldemar em procedimento cirúrgico"
          />
          <div className="surgery-shade" aria-hidden="true" />
          <div className="surgery-text">
            <span className="eyebrow hero-reveal">
              ATENDIMENTO ADULTO · CIRURGIAS
            </span>
            <h1 className="hero-reveal">
              Quando a cirurgia é indicada,
              <br />
              <span>entender faz parte do cuidado.</span>
            </h1>
            <p className="hero-reveal">
              Avaliação cirúrgica individualizada para adultos, com esclarecimento
              sobre as opções de tratamento, benefícios esperados e acompanhamento
              completo no pós-operatório.
            </p>
            <div className="hero-reveal surgery-hero-cta">
              <LinkButton href="#contato">Agendar avaliação cirúrgica</LinkButton>
            </div>
          </div>
          <span className="surgery-signature hero-reveal">
            CUIDADO EM CADA ETAPA.
          </span>
        </section>

        <div className="intro-strip" data-reveal>
          <span>Desvio de septo e cornetos.</span>
          <span>Cirurgia endoscópica nasal.</span>
          <span>Ronco e apneia do sono.</span>
        </div>

        {/* LISTA INTERATIVA DE CIRURGIAS EM ADULTO */}
        <section
          id="procedimentos-adulto"
          className="specialties specialties-immersive section-pad"
        >
          <div className="specialty-backgrounds">
            {adultSurgeries.map((surg) => (
              <div
                key={surg.id}
                className={`area-image ${
                  activeSurgery === surg.id ? "is-active" : ""
                }`}
                role="img"
                aria-hidden={activeSurgery !== surg.id}
                aria-label={`Cirurgia em adulto — ${surg.title}`}
                style={{ backgroundImage: `url('${surg.image}')` }}
              />
            ))}
          </div>
          <div className="specialty-shade" aria-hidden="true" />
          <div className="section-top" data-reveal>
            <span className="eyebrow">CIRURGIAS EM ADULTO</span>
            <span className="small-note">Respiração, garganta e sono.</span>
          </div>
          <div className="specialties-heading" data-reveal>
            <h2>
              Procedimentos cirúrgicos
              <br />
              <span className="serif">em adultos.</span>
            </h2>
            <p>
              Técnicas voltadas à função respiratória, saúde nasal e qualidade do
              sono.
            </p>
          </div>
          <div className="specialties-grid">
            <div className="area-context" aria-hidden="true" />
            <Accordion
              type="single"
              value={activeSurgery}
              onValueChange={(value) => {
                if (value) setActiveSurgery(value);
              }}
              className="areas-accordion"
              data-reveal
            >
              {adultSurgeries.map((surg) => (
                <AccordionItem
                  value={surg.id}
                  key={surg.id}
                  className="area-item"
                >
                  <AccordionTrigger className="area-trigger">
                    <span>{surg.title}</span>
                    <span className="area-toggle">
                      {activeSurgery === surg.id ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="area-content">
                    <p>{surg.text}</p>
                    <a href="#contato" className="text-link">
                      Agendar avaliação cirúrgica <ArrowUpRight size={18} />
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

