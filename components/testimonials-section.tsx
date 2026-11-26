"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_REVIEW_URL = "https://g.page/r/CVn2cGkTesJtEBM/review";
const AUTOPLAY_MS = 5500;

interface Review {
  name: string;
  initials: string;
  avatar?: string;
  photo?: string;
  tag: string;
  body: string;
}

const reviews: Review[] = [
  {
    name: "Ana Gomes",
    initials: "AG",
    avatar: "/media/depoimentos/ana-gomes.png",
    photo: "/media/depoimentos/ana-gomes-foto.png",
    tag: "Avaliação no Google · Cirurgia Infantil",
    body: "Dr. Raimundo, médico maravilhoso, educado, gentil, atende as crianças com muito carinho e adultos com muita atenção. Operou meu neto, a cirurgia foi um sucesso. Precisamos de mais médicos assim, com amor aos pacientes. Parabéns a toda equipe da clínica.",
  },
  {
    name: "Ana Paula Nogueira Rodrigues",
    initials: "AP",
    avatar: "/media/depoimentos/ana-paula.png",
    tag: "Avaliação no Google · Infantil",
    body: "Para quem procura otorrino de excelência, indico o Dr. Raimundo. Levei meu filho e fiquei encantada com o atendimento. Ele é muito atencioso e paciente com as crianças, orienta todos os cuidados e ouve com atenção nossas preocupações. Gostei tanto que marquei consulta pra família toda.",
  },
  {
    name: "Tatiane da Silva Oliveira",
    initials: "TO",
    avatar: "/media/depoimentos/tatiane-oliveira.png",
    tag: "Avaliação no Google · Infantil",
    body: "Sensacional o atendimento. O Dr. Raimundo foi muito profissional e bem descontraído. Minha filha ficou bem tranquila com o atendimento. Super indico.",
  },
  {
    name: "Cidelice Refosco",
    initials: "CR",
    avatar: "/media/depoimentos/cidelice-refosco.png",
    tag: "Avaliação no Google",
    body: "Depois de mais de 15 dias passando por vários profissionais, finalmente fui atendida pelo Dr. Raimundo Aldemar. Ele me ouviu com calma, teve um atendimento muito humanizado e conseguiu identificar que eu estava com VPPB. Explicou tudo com clareza e me passou muita segurança. Saí de lá sem tontura e sem dor!",
  },
  {
    name: "Jaqueline Borges",
    initials: "JB",
    avatar: "/media/depoimentos/jaqueline-borges.png",
    tag: "Avaliação no Google · Local Guide",
    body: "Estou em acompanhamento com o Dr. Raimundo há cerca de 1 ano. Ele é um excelente profissional. Muito atencioso, cuida de gente com muito carinho.",
  },
  {
    name: "Indri Nogueira Varise",
    initials: "IN",
    avatar: "/media/depoimentos/indri-nogueira.png",
    tag: "Avaliação no Google · Infantil",
    body: "Dr. Raimundo Otorrinolaringologista é um excelente médico! Super atencioso com nossas crianças e paciente! Fez todos os exames que minha filha precisava e nem chorou! Obrigada Dr. Raimundo pelos seus cuidados!",
  },
  {
    name: "Cíntia Lopes",
    initials: "CL",
    avatar: "/media/depoimentos/cintia-lopes.png",
    tag: "Avaliação no Google",
    body: "Excelente atendimento com o Dr. Raimundo Aldemar! Profissional extremamente atencioso, educado e competente. Explica tudo com muita clareza, tira todas as dúvidas com paciência e transmite muita segurança. Atendimento humanizado e de alta qualidade.",
  },
  {
    name: "Jhúlia Tamirys",
    initials: "JT",
    avatar: "/media/depoimentos/jhulia-tamirys.png",
    tag: "Avaliação no Google · Local Guide",
    body: "Dr. Raimundo me atendeu muito bem. Super direto ao ponto. Nesse clima seco meu nariz não parava de sangrar e ele me ajudou a resolver. Obrigado!",
  },
  {
    name: "Telma Alves Santana",
    initials: "TS",
    avatar: "/media/depoimentos/telma-alves.png",
    tag: "Avaliação no Google · Local Guide",
    body: "Clínica que recomendo, minha experiência foi ótima. Fui marcar uma consulta e logo fiz a consulta com exame e resultado com o mesmo doutor. Dr. Raimundo excelente, tudo num local só: consulta, exames e cirurgias. Amei.",
  },
  {
    name: "Marmoraria Andrade",
    initials: "MA",
    avatar: "/media/depoimentos/marmoraria-andrade.png",
    tag: "Avaliação no Google",
    body: "Estava procurando no Google um otorrinolaringologista, me interessei pelas avaliações dos pacientes e realmente fui muito bem atendido por toda a equipe. Gostei muito do atendimento do Dr. Raimundo, muito atencioso e excelente profissional, super recomendo.",
  },
  {
    name: "Alaor Machado",
    initials: "AM",
    avatar: "/media/depoimentos/alaor-machado.png",
    tag: "Avaliação no Google",
    body: "Dr. Raimundo Aldemar: um médico muito atencioso, simpático e competente. Minha experiência não poderia ter sido melhor. Parabéns a todos da Clínica.",
  },
  {
    name: "Eurides Xavier",
    initials: "EX",
    avatar: "/media/depoimentos/eurides-xavier.png",
    tag: "Avaliação no Google",
    body: "Primeira vez que fui e fui muito bem atendida pelo Dr. Raimundo Aldemar. Marquei a consulta errada e ele mesmo assim me atendeu, não me fez ter viagem perdida, avaliou meus ouvidos e me atendeu muito bem.",
  },
  {
    name: "Itaecio Ferreira de Sousa",
    initials: "IF",
    avatar: "/media/depoimentos/itaecio-sousa.png",
    tag: "Avaliação no Google",
    body: "Quero dar meus parabéns a toda equipe pelo atendimento e prestação de serviços, com o complemento do Dr. Raimundo, que ao meu ver tem uma humanidade e profissionalismo ímpar. Obrigado.",
  },
  {
    name: "Luiz Almeida",
    initials: "LA",
    avatar: "/media/depoimentos/luiz-almeida.png",
    tag: "Avaliação no Google · Desvio de Septo",
    body: "Gostaria de expressar publicamente minha gratidão ao Dr. Raimundo Aldemar e equipe médica que realizaram a minha cirurgia de desvio de septo. Ressalto o imenso profissionalismo, a excelente educação e respeito durante as consultas pré e pós-operatórias. Quando eu já estava em casa, Dr. Raimundo me contatou por WhatsApp para saber se estava tudo bem comigo. Sua conduta é admirável.",
  },
  {
    name: "Érica Ferreira Araújo",
    initials: "EA",
    avatar: "/media/depoimentos/erica-araujo.png",
    tag: "Avaliação no Google · Local Guide",
    body: "Desde a primeira consulta com o Dr. Raimundo me senti muito segura, ele é calmo e muito paciente. A localização é ótima e as atendentes são muito ágeis, humanas e profissionais.",
  },
];

function renderHighlightedBody(text: string, dark = false) {
  const parts = text.split(/(Dr\.?\s*Raimundo(?:\s+Aldemar)?)/gi);
  return parts.map((part, idx) =>
    /^Dr\.?\s*Raimundo(?:\s+Aldemar)?$/i.test(part) ? (
      <mark
        key={idx}
        className={dark ? "editorial-mark editorial-mark-dark" : "editorial-mark"}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function ReviewSlideCard({
  review,
  dark = false,
}: {
  review: Review;
  dark?: boolean;
}) {
  return (
    <figure
      className={cn(
        "testimonial-card testimonial-slide-card relative overflow-hidden rounded-2xl border transition-colors w-full",
        dark ? "testimonial-card-biolink p-5 sm:p-6" : "p-6 sm:p-8"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          review.photo && !dark && "md:flex-row md:items-center md:gap-7"
        )}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              {review.avatar ? (
                <img
                  src={review.avatar}
                  alt={review.name}
                  width={42}
                  height={42}
                  loading="lazy"
                  className={cn(
                    "w-[42px] h-[42px] rounded-full object-cover shrink-0 border",
                    dark ? "border-[#c1a586]/50" : "border-[#d5c2aa]"
                  )}
                />
              ) : (
                <span className="testimonial-avatar !w-[42px] !h-[42px]" aria-hidden="true">
                  {review.initials}
                </span>
              )}
              <div className="flex flex-col min-w-0">
                <figcaption className="testimonial-author !text-[15px] truncate">
                  {review.name}
                </figcaption>
                <p className="testimonial-tag !text-[12px] truncate">
                  {review.tag}
                </p>
              </div>
            </div>

            <div
              className="testimonial-stars !m-0 shrink-0"
              aria-label="Avaliação 5 de 5 estrelas"
            >
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={13} fill="#d49b27" color="#d49b27" />
              ))}
            </div>
          </div>

          <blockquote
            className={cn(
              "testimonial-body",
              dark
                ? "!text-[14px] sm:!text-[15px] !leading-[1.7]"
                : "!text-[15.5px] sm:!text-[17px] !leading-[1.75]"
            )}
          >
            &ldquo;{renderHighlightedBody(review.body, dark)}&rdquo;
          </blockquote>
        </div>

        {review.photo && (
          <div
            className={cn(
              "overflow-hidden rounded-xl border shrink-0",
              dark
                ? "border-[#c1a586]/30 w-full h-48"
                : "border-[#dfd3c2] w-full h-52 md:w-[215px] md:h-[215px]"
            )}
          >
            <img
              src={review.photo}
              alt={`Foto enviada por ${review.name} com Dr. Raimundo Aldemar`}
              loading="eager"
              className="w-full h-full object-cover object-bottom block"
            />
          </div>
        )}
      </div>
    </figure>
  );
}

function HorizontalReviewCarousel({ dark = false }: { dark?: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number | undefined>(
    undefined
  );
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const total = reviews.length;

  useEffect(() => {
    const el = slideRefs.current[activeIdx];
    if (!el) return;
    const updateHeight = () => {
      const h = el.offsetHeight;
      if (h > 0) setViewportHeight(h);
    };
    updateHeight();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, [activeIdx]);

  const goNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (touchDeltaX.current < -45) goNext();
      else if (touchDeltaX.current > 45) goPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsPaused(false);
  };

  return (
    <div
      className={cn(
        "testimonial-carousel-shell w-full mx-auto",
        dark ? "max-w-[560px] px-4" : "max-w-[820px]"
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Depoimentos de pacientes um por um"
    >
      <div
        className="testimonial-carousel-viewport overflow-hidden rounded-2xl transition-[height] duration-300 ease-out"
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <div
          className="testimonial-carousel-track flex items-start transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(-${activeIdx * 100}%, 0, 0)` }}
        >
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              className="w-full shrink-0 px-0.5"
              aria-hidden={idx !== activeIdx}
            >
              <ReviewSlideCard review={review} dark={dark} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles limpos: setas anterior/próximo + contador + indicadores */}
      <div
        className={cn(
          "testimonial-carousel-controls flex items-center justify-between gap-3 mt-4",
          dark && "is-dark"
        )}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="testimonial-nav-btn"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="testimonial-nav-btn"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={18} />
          </button>
          <span className="testimonial-counter">
            {String(activeIdx + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div
          className="testimonial-dots flex items-center gap-1.5"
          role="tablist"
          aria-label="Escolher depoimento"
        >
          {reviews.map((review, idx) => (
            <button
              key={review.name}
              type="button"
              role="tab"
              aria-selected={idx === activeIdx}
              aria-label={`Ver depoimento ${idx + 1}: ${review.name}`}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "testimonial-dot",
                idx === activeIdx && "is-active"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection({
  variant = "light",
}: {
  variant?: "light" | "biolink";
}) {
  const isBiolink = variant === "biolink";

  if (isBiolink) {
    return (
      <section
        id="depoimentos"
        className="testimonials-section-biolink w-full z-10"
        aria-label="Avaliações reais no Google"
      >
        <div className="w-full max-w-[560px] mx-auto px-4 flex items-end justify-between gap-3 mb-4">
          <div>
            <span className="eyebrow block mb-1">AVALIAÇÕES NO GOOGLE</span>
            <h2 className="testimonials-biolink-title">
              O que dizem os pacientes{" "}
              <span className="serif">e as famílias.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 pb-0.5">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={12} fill="#d49b27" color="#d49b27" />
              ))}
            </div>
            <span className="text-[11px] text-[#dec9ad] font-medium">5,0</span>
          </div>
        </div>

        <HorizontalReviewCarousel dark />

        <div className="w-full max-w-[560px] mx-auto px-4 mt-5 flex flex-col items-center gap-2.5 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold !min-h-[40px] !py-2 !px-5 !text-[12.5px] w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={11} fill="#fffefa" color="#fffefa" />
                ))}
              </span>
              Avaliar no Google
            </span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="testimonials-section section-pad">
      <div className="section-top" data-reveal>
        <span className="eyebrow">AVALIAÇÕES REAIS NO GOOGLE</span>
        <span className="small-note">Escuta, confiança e cuidado.</span>
      </div>

      <div className="testimonials-heading" data-reveal>
        <div>
          <h2>
            O que dizem os pacientes
            <br />
            <span className="serif">e as famílias atendidas.</span>
          </h2>
        </div>
        <div className="testimonials-summary">
          <div className="testimonials-summary-stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={15} fill="#d49b27" color="#d49b27" />
            ))}
          </div>
          <p>
            Depoimentos reais publicados espontaneamente por pacientes e pais no
            Google sobre o atendimento clínico e cirúrgico do Dr. Raimundo
            Aldemar.
          </p>
        </div>
      </div>

      <HorizontalReviewCarousel />

      <div className="testimonials-cta" data-reveal>
        <p>Já foi atendido pelo Dr. Raimundo? Compartilhe sua experiência.</p>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-dark testimonials-review-btn"
        >
          <span className="inline-flex items-center gap-2.5">
            <span className="inline-flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={13} fill="#d49b27" color="#d49b27" />
              ))}
            </span>
            Avaliar Dr. Raimundo no Google
          </span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
