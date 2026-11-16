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

const pediatricSurgeries = [
  {
    id: "amigdalectomia",
    title: "Amigdalectomia",
    text: "Cirurgia das amígdalas indicada em quadros de amigdalites de repetição ou aumento acentuado que prejudica a respiração, o sono e a alimentação da criança.",
    image: "/media/area-garganta.jpg",
  },
  {
    id: "adenoide",
    title: "Remoção da adenoide (Adenoidectomia)",
    text: "Desobstrução da passagem de ar nasal na infância, contribuindo para o sono tranquilo, respiração pelo nariz e prevenção de otites e sinusites.",
    image: "/media/adenoide-infantil.jpg",
    className: "area-image-adenoide",
  },
  {
    id: "tubo",
    title: "Colocação de tubo de ventilação (Miringotomia)",
    text: "Procedimento delicado para drenagem de secreção e ventilação do ouvido médio em crianças com otites de repetição ou líquido acumulado no ouvido.",
    image: "/media/area-ouvido.jpg",
  },
  {
    id: "frenectomia",
    title: "Frenectomia — retirada do frênulo lingual",
    text: "Correção cirúrgica da 'língua presa' para favorecer a amamentação em bebês, a deglutição e o desenvolvimento livre da fala na infância.",
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

export default function AtendimentoInfantilPage() {
  const root = useRef<HTMLDivElement>(null);
  const [activeSurgery, setActiveSurgery] = useState("amigdalectomia");

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
              ATENDIMENTO E CIRURGIA INFANTIL
            </span>
            <h1 className="hero-reveal">
              Para os pequenos,
              <br />
              <span className="serif">atenção em cada descoberta.</span>
            </h1>
            <p className="hero-reveal">
              Atendimento e cirurgias infantis com acolhimento lúdico para a
              criança e orientação próxima para a família em todas as etapas.
            </p>
            <div className="hero-reveal">
              <LinkButton href="#contato" light>
                Agendar consulta infantil
              </LinkButton>
            </div>
          </div>
          <div className="children-video-float hero-reveal">
            <video
              src="/videos/super-heroi.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
              className="children-video-player"
              aria-label="Vídeo de atendimento infantil — pequeno super-herói"
            />
          </div>
          <div className="children-footnote hero-reveal">
            <a href="#cirurgias-infantis" className="scroll-link">
              <span className="circle-icon circle-icon-light">
                <ArrowDown size={16} />
              </span>
              Ver cirurgias infantis
            </a>
            <span className="footnote-right">ATENÇÃO QUE ACOLHE.</span>
          </div>
        </section>

        <div className="intro-strip" data-reveal>
          <span>Amigdalectomia e adenoide.</span>
          <span>Tubo de ventilação e frenectomia.</span>
          <span>Pequenos super-heróis.</span>
        </div>

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
              Cirurgias realizadas
              <br />
              <span className="serif">na infância.</span>
            </h2>
            <p>
              Avaliação cuidadosa e explicação clara de cada etapa para os pais
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
                    <a href="#contato" className="text-link">
                      Agendar avaliação infantil <ArrowUpRight size={18} />
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
            <span className="small-note">Acolhimento lúdico e coragem.</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 data-reveal>
                No dia da cirurgia,
                <br />
                <span className="serif">cada criança é um super-herói.</span>
              </h2>
              <p data-reveal>
                Para tornar a experiência hospitalar leve e acolhedora, as
                crianças são recebidas como verdadeiros super-heróis — com capa,
                carinho e atenção em cada detalhe.
              </p>
              <p data-reveal>
                Esse cuidado reduz a ansiedade infantil e transforma o momento
                do procedimento em uma lembrança tranquila para a criança e
                para toda a família.
              </p>
              <div className="credentials" data-reveal>
                <div>
                  <p>
                    <strong>Acolhimento lúdico no centro cirúrgico</strong>
                    <small>
                      Capas e máscaras de super-heróis que tornam a chegada ao
                      centro cirúrgico mais leve, acolhedora e cheia de coragem.
                    </small>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>O cuidado que acompanha a família</strong>
                    <small>
                      Orientação próxima aos pais antes, durante e após o
                      procedimento, respeitando o tempo de cada criança.
                    </small>
                  </p>
                </div>
              </div>
              <a className="text-link" href="#contato" data-reveal>
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
                <span>Acolhimento infantil</span>
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

