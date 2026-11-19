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
  FaqSection,
  ContactSection,
  SiteFooter,
  LinkButton,
  SmartVideo,
  surgeryWhatsapp,
  pediatricFaqItems,
} from "@/components/site-chrome";

gsap.registerPlugin(ScrollTrigger);

const pediatricSurgeries = [
  {
    id: "amigdalectomia",
    title: "Amigdalectomia",
    text: "Cirurgia das amígdalas indicada em quadros de amigdalites de repetição ou aumento acentuado que prejudica a respiração, o sono e a alimentação da criança.",
    image: "/media/super-herois-kids3.jpeg",
    className: "area-image-adenoide",
  },
  {
    id: "adenoide",
    title: "Remoção da adenoide (Adenoidectomia)",
    text: "Desobstrução da passagem de ar nasal na infância, contribuindo para a respiração livre pelo nariz, a melhora da qualidade do sono e a prevenção de otites e sinusites de repetição.",
    image: "/media/adenoide-infantil.jpg",
    className: "area-image-adenoide",
  },
  {
    id: "tubo",
    title: "Miringotomia e colocação de tubo de ventilação",
    text: "Procedimento delicado em que é realizada a miringotomia (pequena abertura na membrana timpânica) seguida da inserção do tubo de ventilação, indicado para drenagem de secreção e aeração do ouvido médio em crianças com otites de repetição ou líquido acumulado.",
    image: "/media/super-herois-kids2.jpeg",
    className: "area-image-adenoide",
  },
  {
    id: "frenectomia",
    title: "Frenectomia — correção do frênulo lingual",
    text: "Correção cirúrgica da 'língua presa' quando indicada para favorecer a amamentação em bebês, a deglutição e o desenvolvimento livre da fala na infância.",
    image: "/media/super-herois-kids4.jpeg",
    className: "area-image-adenoide",
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

export default function AtendimentoInfantilPage() {
  const root = useRef<HTMLDivElement>(null);
  const [activeSurgery, setActiveSurgery] = useState("amigdalectomia");

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
      <SiteHeader />

      <main id="principal">
        <section id="infantil-hero" className="children-section">
          <div
            className="children-photo photo-background"
            data-parallax
            role="img"
            aria-label="Dr. Raimundo acolhe uma criança vestida de super-herói no ambiente hospitalar"
          />
          <div className="children-shade" />
          <div className="children-content">
            <span className="eyebrow hero-reveal">
              OTORRINOLARINGOLOGISTA · ATENDIMENTO E CIRURGIA INFANTIL
            </span>
            <h1 className="hero-reveal">
              Para os pequenos,
              <br />
              <span className="serif">atenção em cada descoberta.</span>
            </h1>
            <p className="hero-reveal">
              Avaliação clínica e cirurgias infantis com acolhimento lúdico para
              a criança e orientação próxima para a família antes, durante e
              após cada etapa.
            </p>
            <div className="surgery-cta-group hero-reveal">
              <LinkButton href="#contato" light>
                Agendar consulta infantil
              </LinkButton>
              <a
                href={surgeryWhatsapp("Cirurgia Infantil")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-link-light"
              >
                Consultar valores e agendar cirurgia <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="children-video-float hero-reveal">
            <SmartVideo
              src="/videos/super-heroi.mp4"
              ariaLabel="Vídeo de atendimento infantil — pequeno super-herói"
            />
          </div>
          <div className="children-footnote hero-reveal">
            <a href="#sinais-infantis" className="scroll-link">
              <span className="circle-icon circle-icon-light">
                <ArrowDown size={16} />
              </span>
              Quando avaliar a respiração da criança
            </a>
            <span className="footnote-right">ATENÇÃO QUE ACOLHE.</span>
          </div>
        </section>

        <div className="intro-strip" data-reveal>
          <span>Respiração nasal e sono na infância.</span>
          <span>Amigdalectomia, adenoide e tubo de ventilação.</span>
          <span>Pequenos super-heróis.</span>
        </div>

        {/* SEÇÃO DE EMPATIA E ORIENTAÇÃO AOS PAIS (PRINT 3) */}
        <section id="sinais-infantis" className="about section-pad">
          <div className="section-top" data-reveal>
            <span className="eyebrow">QUANDO PROCURAR AVALIAÇÃO</span>
            <span className="small-note">Escuta tranquila para os pais.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                Seu filho ronca, dorme de boca aberta
                <br />
                <span className="serif">
                  ou tem dificuldade para respirar pelo nariz?
                </span>
              </h2>
              <p data-reveal>
                Respiração oral constante, ronco noturno, sono agitado, nariz
                frequentemente obstruído ou infecções repetidas de ouvido e
                garganta são sinais que merecem uma avaliação
                otorrinolaringológica detalhada.
              </p>
              <p data-reveal>
                Investigar esses sinais{" "}
                <mark className="editorial-mark" data-mark-reveal>
                  não significa que toda criança precisa de cirurgia
                </mark>
                . Muitos quadros respondem muito bem ao tratamento clínico e ao
                controle da rinite; e, quando a cirurgia é realmente indicada, a
                decisão é construída junto à família com clareza e segurança.
              </p>
              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>Avaliação cuidadosa e sem pressa</strong>
                    <small>
                      Escuta da rotina do sono, da alimentação e do
                      desenvolvimento da criança, com exame físico delicado em
                      consultório.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Indicação ética: tratamento clínico ou cirúrgico</strong>
                    <small>
                      Explicação transparente sobre o diagnóstico para que os
                      pais compreendam se o caso é de acompanhamento clínico ou
                      cirúrgico.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Acompanhamento da família antes e depois</strong>
                    <small>
                      Suporte próximo desde o preparo pré-operatório até a
                      recuperação completa em casa.
                    </small>
                  </p>
                </div>
              </div>
              <LinkButton href="#contato">
                Agendar avaliação infantil
              </LinkButton>
            </div>

            <div className="about-visual" data-reveal>
              <div
                className="about-photo"
                role="img"
                aria-label="Dr. Raimundo Aldemar acolhendo paciente infantil"
              >
                <div
                  className="photo-background"
                  data-parallax
                  style={{
                    backgroundImage: "url('/media/adenoide-infantil.jpg')",
                    backgroundPosition: "center top",
                  }}
                />
              </div>
              <div className="photo-caption">
                <span>Avaliação respiratória na infância</span>
                <span>Dr. Raimundo Aldemar · RQE 13936</span>
              </div>
            </div>
          </div>
        </section>

        {/* CIRURGIAS INFANTIS */}
        <section
          id="cirurgias-infantis"
          className="specialties specialties-immersive section-pad"
        >
          <div className="specialty-backgrounds">
            {pediatricSurgeries.map((surg) => (
              <div
                key={surg.id}
                className={`area-image ${
                  "className" in surg && surg.className ? surg.className : ""
                } ${activeSurgery === surg.id ? "is-active" : ""}`}
                role="img"
                aria-hidden={activeSurgery !== surg.id}
                aria-label={`Cirurgia infantil — ${surg.title}`}
                style={{ backgroundImage: `url('${surg.image}')` }}
              />
            ))}
          </div>
          <div className="specialty-shade" aria-hidden="true" />
          <div className="section-top" data-reveal>
            <span className="eyebrow">CIRURGIA INFANTIL</span>
            <span className="small-note">Segurança para os pais.</span>
          </div>
          <div className="specialties-heading" data-reveal>
            <h2>
              Procedimentos cirúrgicos
              <br />
              <span className="serif">na infância.</span>
            </h2>
            <p>
              Avaliação criteriosa e explicação clara de cada etapa para os pais
              e responsáveis.
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
              {pediatricSurgeries.map((surg) => (
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
                    <a
                      href={surgeryWhatsapp(surg.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Consultar valores e agendar cirurgia no WhatsApp{" "}
                      <ArrowUpRight size={18} />
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* PEQUENOS SUPER-HERÓIS (FOTOS E VÍDEOS) */}
        <section id="super-herois" className="about section-pad">
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
                Para ajudar a tornar a experiência hospitalar mais leve e
                acolhedora, as crianças são recebidas como pequenos
                super-heróis — com capa, carinho e atenção em cada detalhe.
              </p>
              <p data-reveal>
                Essa estratégia lúdica foi pensada para ajudar a tornar o
                ambiente cirúrgico menos assustador para a criança, com
                acompanhamento próximo dos pais antes e depois do procedimento.
              </p>
              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>Acolhimento lúdico no centro cirúrgico</strong>
                    <small>
                      Capas e máscaras de super-heróis como forma carinhosa de
                      receber a criança e tornar o momento mais acolhedor.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Acompanhamento da família antes e após a cirurgia</strong>
                    <small>
                      Orientação direta aos pais no preparo pré-operatório, no
                      centro cirúrgico e em todo o pós-operatório, respeitando o
                      tempo de cada criança.
                    </small>
                  </p>
                </div>
              </div>
              <a
                className="text-link"
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-quick-booking"));
                }}
                data-reveal
              >
                Agendar consulta infantil <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="about-visual" data-reveal>
              <div className="superhero-mosaic">
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
          </div>
        </section>

        <FaqSection
          eyebrow="DÚVIDAS DOS PAIS"
          title="Perguntas frequentes sobre"
          subtitle="respiração e sono infantil."
          items={pediatricFaqItems}
          introText="Respostas educativas para as principais dúvidas dos pais sobre adenoide, respiração pela boca, ronco na infância, amígdalas, tubo de ventilação e videoendoscopia nasal infantil."
        />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
