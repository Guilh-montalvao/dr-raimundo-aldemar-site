"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiteHeader,
  ContactSection,
  SiteFooter,
  LinkButton,
  SmartVideo,
} from "@/components/site-chrome";

gsap.registerPlugin(ScrollTrigger);

export default function OMedicoPage() {
  const root = useRef<HTMLDivElement>(null);

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
        <section className="hero">
          <div
            className="hero-photo hero-photo-medico"
            role="img"
            aria-label="Dr. Raimundo Aldemar — Médico Otorrinolaringologista"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-reveal">
              DR. RAIMUNDO ALDEMAR · CRM-DF 20094 · RQE 13936
            </p>
            <h1 className="hero-reveal">
              Antes de cuidar,
              <br />
              <span>é preciso ouvir.</span>
            </h1>
            <p className="hero-description hero-reveal">
              Médico otorrinolaringologista dedicado ao cuidado clínico e
              cirúrgico de adultos e crianças em Brasília, unindo formação
              sólida, escuta atenta e proximidade humana.
            </p>
            <div className="hero-reveal">
              <LinkButton href="#contato">Agendar consulta</LinkButton>
            </div>
          </div>
          <div className="hero-bottom hero-reveal">
            <a href="#formacao" className="scroll-link">
              <span className="circle-icon">
                <ArrowDown size={16} />
              </span>
              Trajetória e formação
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
          <span>Graduação UFG.</span>
          <span>Residência HFA · Brasília.</span>
          <span>Membro Especialista ABORL-CCF.</span>
        </div>

        {/* FORMAÇÃO E CREDENCIAIS */}
        <section id="formacao" className="about section-pad">
          <div className="section-top" data-reveal>
            <span className="eyebrow">QUEM É O DR. RAIMUNDO ALDEMAR</span>
            <span className="small-note">Formação e trajetória médica.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                Ciência, escuta e
                <br />
                <span className="serif">cuidado em cada fase da vida.</span>
              </h2>
              <p data-reveal>
                Sou o Dr. Raimundo Aldemar de Morais Lima, médico
                otorrinolaringologista em Brasília. Minha prática é guiada pelo
                compromisso de oferecer um atendimento acolhedor e técnico tanto
                para crianças quanto para adultos.
              </p>
              <p data-reveal>
                Do diagnóstico em consultório com videoendoscopia flexível até
                procedimentos cirúrgicos, busco explicar cada detalhe com
                clareza para que o paciente e sua família se sintam seguros em
                todas as decisões.
              </p>

              <div className="credentials credentials-with-logos" data-reveal>
                <div className="credential-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="credential-logo-wrap" style={{ width: 72, height: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src="/media/logo-ufg.png"
                      alt="Logo UFG"
                      width={72}
                      height={38}
                      style={{ maxWidth: 72, maxHeight: 38, width: "auto", height: "auto", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>Universidade Federal de Goiás — UFG</strong>
                    <small>
                      Formado em Medicina pela Universidade Federal de Goiás
                    </small>
                  </p>
                </div>
                <div className="credential-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="credential-logo-wrap" style={{ width: 72, height: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src="/media/logo-hfa.png"
                      alt="Logo HFA"
                      width={72}
                      height={38}
                      style={{ maxWidth: 72, maxHeight: 38, width: "auto", height: "auto", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>Hospital das Forças Armadas — HFA</strong>
                    <small>
                      Residência médica em Otorrinolaringologia pelo HFA ·
                      Brasília - DF
                    </small>
                  </p>
                </div>
                <div className="credential-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="credential-logo-wrap" style={{ width: 72, height: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src="/media/logo-ABORL.png"
                      alt="Logo ABORL-CCF"
                      width={72}
                      height={38}
                      style={{ maxWidth: 72, maxHeight: 38, width: "auto", height: "auto", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>
                      Associação Brasileira de Otorrinolaringologia e Cirurgia
                      Cérvico-Facial — ABORL-CCF
                    </strong>
                    <small>
                      Membro Especialista da ABORL-CCF
                    </small>
                  </p>
                </div>
                <div className="credential-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="credential-logo-wrap" style={{ width: 72, height: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src="/media/logo.png"
                      alt="Logo Dr. Raimundo Aldemar"
                      width={72}
                      height={38}
                      style={{ maxWidth: 72, maxHeight: 38, width: "auto", height: "auto", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </span>
                  <p>
                    <strong>CRM-DF 20094 · RQE 13936</strong>
                    <small>
                      Médico Otorrinolaringologista com Título de Especialista
                      registrado no CRM-DF
                    </small>
                  </p>
                </div>
              </div>

              <a className="text-link" href="#contato" data-reveal>
                Agendar consulta com o Dr. Raimundo <ArrowUpRight size={19} />
              </a>
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
          </div>
        </section>

        {/* VÍDEO "SER MÉDICO" & VOCAÇÃO */}
        <section className="about section-pad" style={{ background: "#ede6db" }}>
          <div className="section-top" data-reveal>
            <span className="eyebrow">VOCAÇÃO E PROPÓSITO</span>
            <span className="small-note">Medicina com presença.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                O significado de
                <br />
                <span className="serif">ser médico todos os dias.</span>
              </h2>
              <p data-reveal>
                Cuidar da audição, da respiração e da voz é cuidar da forma como
                cada pessoa se conecta com o mundo, dorme, trabalha e convive
                com quem ama.
              </p>
              <p data-reveal>
                Por isso, cada consulta e cada cirurgia são conduzidas com
                respeito à individualidade do paciente — seja no acolhimento
                lúdico dos pequenos super-heróis ou na avaliação detalhada de
                adultos.
              </p>
              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>Exames e procedimentos em consultório</strong>
                    <small>
                      Videoendoscopia nasal flexível, laringoscopia, lavagem e
                      aspiração de ouvido e cauterização septal.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Cirurgias em crianças e adultos</strong>
                    <small>
                      Amigdalectomia, adenoide, tubo de ventilação, frenectomia,
                      desvio de septo, cornetos, cirurgia endoscópica nasal e
                      ronco/apneia.
                    </small>
                  </p>
                </div>
              </div>
              <Link
                href="/exames-e-procedimentos"
                className="text-link"
                data-reveal
              >
                Conhecer exames e procedimentos <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="about-visual" data-reveal>
              <div className="section-video-showcase">
                <SmartVideo
                  src="/videos/ser-medico.mp4"
                  ariaLabel="Vídeo Dr. Raimundo Aldemar — Ser médico"
                />
              </div>
              <div className="photo-caption video-caption">
                <span>Dr. Raimundo Aldemar</span>
                <span>Propósito na Medicina</span>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

