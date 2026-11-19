"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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
    tag: "Avaliação no Google",
    body: "Quero dar meus parabéns a toda equipe pelo atendimento e prestação de serviços, com o complemento do Dr. Raimundo, que ao meu ver tem uma humanidade e profissionalismo ímpar. Obrigado.",
  },
  {
    name: "Érica Ferreira Araújo",
    initials: "EA",
    tag: "Avaliação no Google · Local Guide",
    body: "Desde a primeira consulta com o Dr. Raimundo me senti muito segura, ele é calmo e muito paciente. A localização é ótima e as atendentes são muito ágeis, humanas e profissionais.",
  },
];

const firstCol = [reviews[0], reviews[1], reviews[2], reviews[5]];
const secondCol = [reviews[3], reviews[4], reviews[6]];
const thirdCol = [reviews[7], reviews[8], reviews[9]];
const fourthCol = [reviews[10], reviews[11], reviews[12], reviews[13]];

function ReviewCard({
  review,
  compact = false,
}: {
  review: Review;
  compact?: boolean;
}) {
  return (
    <figure
      className={cn(
        "testimonial-card relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-colors",
        compact ? "w-[270px] sm:w-[295px] shrink-0" : "w-64"
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
            className="w-[34px] h-[34px] rounded-full object-cover shrink-0 border border-[#d5c2aa]"
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

      <blockquote className="testimonial-body">{review.body}</blockquote>

      {review.photo && (
        <div className="mt-3 overflow-hidden rounded-xl border border-[#dfd3c2]">
          <img
            src={review.photo}
            alt={`Foto enviada por ${review.name} com Dr. Raimundo Aldemar`}
            loading="lazy"
            className="w-full h-36 object-cover object-center block"
          />
        </div>
      )}
    </figure>
  );
}

export function TestimonialsSection() {
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

      {/* DESKTOP: MARQUEE 3D PERSPECTIVA */}
      <div className="testimonials-3d-stage hidden md:flex relative h-[490px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:420px]">
        <div
          className="flex flex-row items-center gap-4"
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

      {/* MOBILE: MARQUEE HORIZONTAL LIMPO E LEGÍVEL */}
      <div className="md:hidden relative flex w-full flex-col gap-3 overflow-hidden py-2">
        <Marquee pauseOnHover className="[--duration:48s]">
          {reviews.slice(0, 7).map((review) => (
            <ReviewCard key={review.name} review={review} compact />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:52s]">
          {reviews.slice(7, 14).map((review) => (
            <ReviewCard key={review.name} review={review} compact />
          ))}
        </Marquee>
        <div className="testimonials-fade-left pointer-events-none absolute inset-y-0 left-0 w-10" />
        <div className="testimonials-fade-right pointer-events-none absolute inset-y-0 right-0 w-10" />
      </div>
    </section>
  );
}
