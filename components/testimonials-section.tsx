"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Dr.+Raimundo+Aldemar+Otorrinolaringologista#lrd=0x935a3369d10c8b8f:0x6dc27a136970f659,3,,,";

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
        "testimonial-card relative cursor-pointer overflow-hidden rounded-2xl border p-3.5 md:p-4 transition-colors w-52 sm:w-56 md:w-64",
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

  if (isBiolink) {
    return (
      <section
        id="depoimentos"
        className="testimonials-section-biolink mt-3 sm:mt-4"
        aria-label="Avaliações reais no Google"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 px-1">
          <div>
            <span className="eyebrow block mb-1">AVALIAÇÕES REAIS NO GOOGLE</span>
            <h2 className="text-[19px] sm:text-[22px] leading-tight text-[#f8f5ef]">
              O que dizem os pacientes{" "}
              <span className="serif">e as famílias atendidas.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={13} fill="#d49b27" color="#d49b27" />
              ))}
            </div>
            <span className="text-[11px] text-[#dec9ad] font-medium">
              5,0 no Google
            </span>
          </div>
        </div>

        {/* 3D Marquee Dark Compacto (2 colunas Mobile | 3 colunas Desktop) */}
        <div className="testimonials-3d-stage-biolink flex relative h-[350px] sm:h-[395px] w-full flex-row items-center justify-center gap-3 overflow-hidden rounded-2xl [perspective:360px] md:[perspective:420px]">
          <div
            className="flex md:hidden flex-row items-center gap-3"
            style={{
              transform:
                "translateX(-12px) translateY(0px) translateZ(-45px) rotateX(16deg) rotateY(-8deg) rotateZ(12deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:46s]">
              {reviews.slice(0, 8).map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:48s]">
              {reviews.slice(8, 15).map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
          </div>

          <div
            className="hidden md:flex flex-row items-center gap-3.5"
            style={{
              transform:
                "translateX(-28px) translateY(0px) translateZ(-65px) rotateX(18deg) rotateY(-9deg) rotateZ(13deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:36s]">
              {firstCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:38s]">
              {secondCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:36s]">
              {thirdCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:42s]">
              {fourthCol.map((review) => (
                <ReviewCard key={review.name} review={review} dark />
              ))}
            </Marquee>
          </div>

          <div className="testimonials-biolink-fade-top pointer-events-none absolute inset-x-0 top-0 h-1/4" />
          <div className="testimonials-biolink-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-1/4" />
          <div className="testimonials-biolink-fade-left pointer-events-none absolute inset-y-0 left-0 w-1/6" />
          <div className="testimonials-biolink-fade-right pointer-events-none absolute inset-y-0 right-0 w-1/6" />
        </div>

        <div className="mt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 px-1">
          <p className="text-[12px] text-[#ccbeb0] text-center sm:text-left">
            Já foi atendido pelo Dr. Raimundo? Compartilhe sua experiência.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold !min-h-[38px] !py-2 !px-4 !text-[12px] w-full sm:w-auto shrink-0"
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

      {/* DESKTOP: 4 COLUNAS 3D | MOBILE: 2 COLUNAS 3D */}
      <div className="testimonials-3d-stage flex relative h-[430px] md:h-[490px] w-full flex-row items-center justify-center gap-3 md:gap-4 overflow-hidden [perspective:360px] md:[perspective:420px]">
        {/* Mobile: 2 colunas 3D responsivas com todos os 15 depoimentos */}
        <div
          className="flex md:hidden flex-row items-center gap-3"
          style={{
            transform:
              "translateX(-12px) translateY(0px) translateZ(-45px) rotateX(16deg) rotateY(-8deg) rotateZ(12deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:46s]">
            {reviews.slice(0, 8).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:48s]">
            {reviews.slice(8, 15).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
        </div>

        {/* Desktop: 4 colunas 3D */}
        <div
          className="hidden md:flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-40px) translateY(0px) translateZ(-70px) rotateX(18deg) rotateY(-9deg) rotateZ(14deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:36s]">
            {firstCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:38s]">
            {secondCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:36s]">
            {thirdCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:42s]">
            {fourthCol.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
        </div>

        <div className="testimonials-fade-top pointer-events-none absolute inset-x-0 top-0 h-1/4" />
        <div className="testimonials-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-1/4" />
        <div className="testimonials-fade-left pointer-events-none absolute inset-y-0 left-0 w-1/6" />
        <div className="testimonials-fade-right pointer-events-none absolute inset-y-0 right-0 w-1/6" />
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
