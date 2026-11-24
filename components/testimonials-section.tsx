"use client";

import { useState } from "react";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const GOOGLE_REVIEW_URL = "https://g.page/r/CVn2cGkTesJtEBM/review";

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
    name: "Ana Paula Nogueira Rodrigues",
    initials: "AP",
    avatar: "/media/depoimentos/ana-paula.png",
    tag: "Avaliação no Google · Infantil",
    body: "Para quem procura otorrino de excelência, indico o Dr. Raimundo. Levei meu filho e fiquei encantada com o atendimento. Ele é muito atencioso e paciente com as crianças, orienta todos os cuidados e ouve com atenção nossas preocupações. Gostei tanto que marquei consulta pra família toda.",
  },
  {
    name: "Ana Gomes",
    initials: "AG",
    avatar: "/media/depoimentos/ana-gomes.png",
    photo: "/media/depoimentos/ana-gomes-foto.png",
    tag: "Avaliação no Google · Cirurgia Infantil",
    body: "Dr. Raimundo, médico maravilhoso, educado, gentil, atende as crianças com muito carinho e adultos com muita atenção. Operou meu neto, a cirurgia foi um sucesso. Precisamos de mais médicos assim, com amor aos pacientes. Parabéns a toda equipe da clínica.",
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

const firstCol = [reviews[0], reviews[10], reviews[2], reviews[5]];
const secondCol = [reviews[3], reviews[4], reviews[6], reviews[13]];
const thirdCol = [reviews[7], reviews[1], reviews[8], reviews[9]];
const fourthCol = [reviews[11], reviews[12], reviews[14]];

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

function ReviewCard({ review, dark = false }: { review: Review; dark?: boolean }) {
  return (
    <figure
      className={cn(
        "testimonial-card relative cursor-pointer overflow-hidden rounded-2xl border p-3 sm:p-4 transition-colors w-full",
        dark && "testimonial-card-biolink"
      )}
    >
      <div className="flex flex-row items-center gap-2.5">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            width={34}
            height={34}
            loading="lazy"
            className={cn(
              "w-[34px] h-[34px] rounded-full object-cover shrink-0 border",
              dark ? "border-[#c1a586]/50" : "border-[#d5c2aa]"
            )}
          />
        ) : (
          <span className="testimonial-avatar" aria-hidden="true">
            {review.initials}
          </span>
        )}
        <div className="flex flex-col min-w-0">
          <figcaption className="testimonial-author truncate">
            {review.name}
          </figcaption>
          <p className="testimonial-tag truncate">{review.tag}</p>
        </div>
      </div>

      <div className="testimonial-stars" aria-label="Avaliação 5 de 5 estrelas">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} size={12} fill="#d49b27" color="#d49b27" />
        ))}
      </div>

      <blockquote className="testimonial-body">
        {renderHighlightedBody(review.body, dark)}
      </blockquote>

      {review.photo && (
        <div
          className={cn(
            "mt-3 overflow-hidden rounded-xl border",
            dark ? "border-[#c1a586]/30" : "border-[#dfd3c2]"
          )}
        >
          <img
            src={review.photo}
            alt={`Foto enviada por ${review.name} com Dr. Raimundo Aldemar`}
            loading="lazy"
            className="w-full h-44 sm:h-48 object-cover object-bottom block"
          />
        </div>
      )}
    </figure>
  );
}

export function TestimonialsSection({
  variant = "light",
}: {
  variant?: "light" | "biolink";
}) {
  const isBiolink = variant === "biolink";
  const [tapPaused, setTapPaused] = useState(false);
  const [touchHolding, setTouchHolding] = useState(false);
  const isPaused = tapPaused || touchHolding;

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

        {/* Marquee Vertical Reto Dark integrado ao cenário (pausa ao tocar/segurar ou passar o mouse) */}
        <div
          className="testimonials-3d-stage-biolink relative h-[400px] sm:h-[440px] w-full max-w-[1100px] mx-auto px-3 sm:px-4 overflow-hidden select-none"
          onTouchStart={() => setTouchHolding(true)}
          onTouchEnd={() => setTouchHolding(false)}
          onTouchCancel={() => setTouchHolding(false)}
          onClick={() => setTapPaused((prev) => !prev)}
          title={tapPaused ? "Toque para continuar" : "Toque para pausar e ler"}
        >
          <div className="grid grid-cols-2 md:hidden w-full h-full gap-2.5 sm:gap-3">
            <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:46s] p-0">
              {reviews.slice(0, 8).map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:48s] p-0">
              {reviews.slice(8, 15).map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:grid md:grid-cols-4 w-full h-full gap-4">
            <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:36s] p-0">
              {firstCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:38s] p-0">
              {secondCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:36s] p-0">
              {thirdCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:42s] p-0">
              {fourthCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
          </div>

          <div className="testimonials-biolink-fade-top pointer-events-none absolute inset-x-0 top-0 h-20" />
          <div className="testimonials-biolink-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-20" />

          {tapPaused && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setTapPaused(false);
              }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#241b14]/95 border border-[#dec9ad]/50 text-[#f8f5ef] text-[11.5px] font-medium shadow-lg backdrop-blur-md"
            >
              <Play size={11} fill="#dec9ad" color="#dec9ad" />
              Pausado · Toque para continuar
            </button>
          )}
        </div>

        <div className="w-full max-w-[560px] mx-auto px-4 mt-4 flex flex-col items-center gap-2.5 text-center">
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

      {/* DESKTOP: 4 COLUNAS VERTICAIS RETAS | MOBILE: 2 COLUNAS VERTICAIS RETAS (pausa ao tocar/segurar ou passar o mouse) */}
      <div
        className="testimonials-3d-stage relative h-[460px] md:h-[520px] w-full overflow-hidden select-none"
        onTouchStart={() => setTouchHolding(true)}
        onTouchEnd={() => setTouchHolding(false)}
        onTouchCancel={() => setTouchHolding(false)}
        onClick={() => setTapPaused((prev) => !prev)}
        title={tapPaused ? "Toque para continuar" : "Toque para pausar e ler"}
      >
        {/* Mobile: 2 colunas verticais retas com todos os 15 depoimentos */}
        <div className="grid grid-cols-2 md:hidden w-full h-full gap-2.5 sm:gap-3">
          <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:46s] p-0">
            {reviews.slice(0, 8).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:48s] p-0">
            {reviews.slice(8, 15).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
        </div>

        {/* Desktop: 4 colunas verticais retas */}
        <div className="hidden md:grid md:grid-cols-4 w-full h-full gap-4">
          <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:36s] p-0">
            {firstCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:38s] p-0">
            {secondCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover paused={isPaused} vertical className="[--duration:36s] p-0">
            {thirdCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover paused={isPaused} vertical className="[--duration:42s] p-0">
            {fourthCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
        </div>

        <div className="testimonials-fade-top pointer-events-none absolute inset-x-0 top-0 h-24" />
        <div className="testimonials-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-24" />

        {tapPaused && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setTapPaused(false);
            }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#35291f]/95 border border-[#c1a586]/50 text-[#f8f5ef] text-[12px] font-medium shadow-lg backdrop-blur-md"
          >
            <Play size={11} fill="#dec9ad" color="#dec9ad" />
            Pausado · Toque para continuar
          </button>
        )}
      </div>

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
