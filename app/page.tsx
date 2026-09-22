"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, X, Phone, MapPin, Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const links = [{label: "O médico",href:"#sobre"},{label:"Áreas de atuação",href:"#especialidade"},{label:"Atendimento infantil",href:"#infantil"},{label:"Onde encontrar",href:"#contato"}];
const whatsapp = (number: string, clinic: string) => `https://wa.me/55${number}?text=${encodeURIComponent(`Olá! Gostaria de informações para agendar uma consulta com o Dr. Raimundo Aldemar na ${clinic}.`)}`;
const instagramUrl = "https://www.instagram.com/raimundo.otorrino?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const areas = [
  {id:"ouvidos",title:"Ouvidos e audição",text:"Avaliação individual das queixas auditivas e da saúde dos ouvidos, com diagnóstico clínico, esclarecimento de dúvidas e orientação dos próximos passos.",image:"/media/ouvido-audicao.png"},
  {id:"nariz",title:"Nariz e respiração",text:"Avaliação de queixas nasais e respiratórias, compreendendo como os sintomas afetam sua rotina e orientando o tratamento adequado.",image:"/media/nariz-respiracao.png"},
  {id:"garganta",title:"Garganta e voz",text:"Avaliação das queixas relacionadas à garganta e à voz, com explicações sobre os achados e orientação sobre os próximos passos.",image:"/media/garganta-voz.png"},
];

function LinkButton({children,href="#contato",light=false,external=false}:{children:React.ReactNode;href?:string;light?:boolean;external?:boolean}) {
  return <a href={href} className={`button ${light?"button-light":""}`} {...(external?{target:"_blank",rel:"noopener noreferrer"}:{})}><span>{children}</span><ArrowUpRight size={18} aria-hidden="true"/></a>;
}

export default function Home(){
  const root=useRef<HTMLDivElement>(null);
  const introRef=useRef<HTMLDivElement>(null);
  const introStartedRef=useRef(false);
  const introTlRef=useRef<gsap.core.Timeline|null>(null);
  const [activeArea,setActiveArea]=useState("ouvidos");
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{
    // Executa a intro apenas 1 vez, prevenindo o re-disparo do StrictMode em desenvolvimento
    if(!introStartedRef.current){
      introStartedRef.current=true;
      const prefersReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if(prefersReduced){
        if(introRef.current) introRef.current.style.display="none";
      } else {
        const introTl = gsap.timeline({
          onComplete: () => {
            if (introRef.current) introRef.current.style.display = "none";
          }
        });
        introTlRef.current = introTl;

        introTl
          .to(".intro-logo", { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power2.out" })
          .to(".intro-divider", { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.35")
          .to(".intro-subtitle", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35")
          .to(".intro-skip-hint", { opacity: 0.75, duration: 0.4 }, "-=0.2")
          .to(".intro-content", { opacity: 0, y: -16, duration: 0.45, ease: "power2.in", delay: 0.45 })
          .to(".site-intro", { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "-=0.12")
          .fromTo(".site-header", { y: -25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.35")
          .fromTo(".hero-photo", { scale: 1.055 }, { scale: 1, duration: 1.6, ease: "power2.out" }, "-=0.55")
          .fromTo(".hero-reveal", { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95, stagger: 0.12, ease: "power3.out" }, "-=1.3");
      }
    }

    const mm=gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)",()=>{
      const ctx=gsap.context(()=>{
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el=>{
          gsap.from(el,{y:35,opacity:0,duration:.95,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 91%",once:true}});
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el=>{
          gsap.fromTo(el,{yPercent:-3},{yPercent:3,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:1}});
        });
      },root);
      return ()=>ctx.revert();
    });

    return ()=>mm.revert();
  },[]);
  return <div ref={root}>
    <div
      ref={introRef}
      className="site-intro"
      id="site-intro"
      onClick={() => {
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
      <div className="intro-content">
        <img src="/media/logo.png" alt="Dr. Raimundo Aldemar — Otorrinolaringologia" className="intro-logo" width="2048" height="682" />
        <div className="intro-divider" />
        <span className="intro-subtitle">OTORRINOLARINGOLOGIA · BRASÍLIA, DF</span>
      </div>
      <span className="intro-skip-hint">Clique em qualquer lugar para avançar</span>
    </div>
    <a href="#principal" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Dr. Raimundo Aldemar — início"><img src="/media/logo.png" alt="Dr. Raimundo Aldemar — Otorrinolaringologia" width="2048" height="682"/></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <div className="header-actions">
        <a className="header-instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Dr. Raimundo Aldemar"><InstagramIcon size={15}/><span>@raimundo.otorrino</span></a>
        <a className="header-cta" href="#contato">Agendar consulta <ArrowUpRight size={16}/></a>
      </div>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild><button className="menu-button" aria-label="Abrir menu"><Menu size={24}/></button></SheetTrigger>
        <SheetContent className="mobile-menu" showCloseButton={false}>
          <div className="mobile-menu-top"><SheetTitle>Dr. Raimundo Aldemar</SheetTitle><SheetClose asChild><button aria-label="Fechar menu" className="close-menu"><X/></button></SheetClose></div>
          <SheetDescription>Otorrinolaringologia · Brasília, DF</SheetDescription>
          <nav aria-label="Navegação móvel">{links.map((link)=><a key={link.href} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}<ArrowUpRight size={20}/></a>)}</nav>
          <a className="menu-instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon size={19}/><span>@raimundo.otorrino</span><ArrowUpRight size={16}/></a>
          <a className="button" href="#contato" onClick={()=>setMenuOpen(false)}>Agendar consulta <ArrowUpRight size={18}/></a>
          <p className="menu-credentials">CRM-DF 20094 · RQE 13936</p>
        </SheetContent>
      </Sheet>
    </header>
    <main id="principal">
      <section id="inicio" className="hero">
        <div className="hero-photo" role="img" aria-label="Dr. Raimundo Aldemar, médico otorrinolaringologista"/>
        <div className="hero-shade"/>
        <div className="hero-content">
          <p className="eyebrow hero-reveal">OTORRINOLARINGOLOGIA EM BRASÍLIA</p>
          <h1 className="hero-reveal">Respirar bem.<br/>Ouvir a vida.<br/><span>Viver melhor.</span></h1>
          <p className="hero-description hero-reveal">Otorrinolaringologia para adultos e crianças em Brasília.<br className="desktop-break"/> Atenção à saúde dos ouvidos, do nariz e da garganta, com escuta e orientação em cada consulta.</p>
          <div className="hero-reveal"><LinkButton>Agendar consulta</LinkButton></div>
        </div>
        <div className="hero-bottom hero-reveal"><a href="#sobre" className="scroll-link"><span className="circle-icon"><ArrowDown size={16}/></span>Conheça o Dr. Raimundo</a><span className="hero-credentials">Dr. Raimundo Aldemar<br/><small>CRM-DF 20094 · RQE 13936</small></span></div>
        <span className="hero-caption">MEDICINA COM PRESENÇA.</span>
      </section>

      <div className="intro-strip"><span>Ouvidos, nariz e garganta.</span><span>Adultos e crianças.</span><span>Um cuidado que acompanha você.</span></div>

      <section id="sobre" className="about section-pad">
        <div className="section-top" data-reveal><span className="eyebrow">QUEM CUIDA DE VOCÊ</span><span className="small-note">Ciência. Escuta. Proximidade.</span></div>
        <div className="about-grid">
          <div className="about-text">
            <h2 data-reveal>Antes de cuidar,<br/><span className="serif">é preciso ouvir.</span></h2>
            <p data-reveal>Sou o Dr. Raimundo Aldemar, médico otorrinolaringologista. Atendo adultos e crianças, com atenção às queixas e às necessidades de cada fase da vida.</p>
            <p data-reveal>Na consulta, meu compromisso é ouvir o que você sente, explicar a avaliação e orientar os próximos passos com clareza.</p>
            <div className="credentials" data-reveal>
              <div><p><strong>Universidade Federal de Goiás</strong><small>Graduação em Medicina · UFG</small></p></div>
              <div><p><strong>Hospital das Forças Armadas</strong><small>Residência em Otorrinolaringologia · HFA</small></p></div>
              <div><p><strong>ABORL-CCF</strong><small>Título de especialista em Otorrinolaringologia</small></p></div>
            </div>
            <a className="text-link" href="#contato" data-reveal>Conheça os locais de atendimento <ArrowUpRight size={19}/></a>
          </div>
          <div className="about-visual" data-reveal>
            <div className="about-photo" role="img" aria-label="Dr. Raimundo Aldemar em seu consultório"><div className="photo-background" data-parallax style={{backgroundImage:"url('/media/consultorio.webp')"}}/></div>
            <div className="photo-caption"><span>Dr. Raimundo Aldemar</span><span>Otorrinolaringologista</span></div>
          </div>
        </div>
      </section>

      <section id="especialidade" className="specialties specialties-immersive section-pad">
        <div className="specialty-backgrounds">
          {areas.map(area=><div key={area.id} className={`area-image ${activeArea===area.id?"is-active":""}`} role="img" aria-hidden={activeArea!==area.id} aria-label={`Atendimento de otorrinolaringologia — ${area.title}`} style={{backgroundImage:`url('${area.image}')`}}/>)}
        </div>
        <div className="specialty-shade" aria-hidden="true"/>
        <div className="section-top" data-reveal><span className="eyebrow">ÁREAS DE ATUAÇÃO</span><span className="small-note">O essencial para viver bem.</span></div>
        <div className="specialties-heading" data-reveal><h2>Ouvir, respirar e falar.<br/><span className="serif">Saúde que faz parte da sua vida.</span></h2><p>Atenção à saúde dos ouvidos, do nariz e da garganta para adultos e crianças.</p></div>
        <div className="specialties-grid">
          <div className="area-context" aria-hidden="true" />
          <Accordion type="single" value={activeArea} onValueChange={value=>{if(value)setActiveArea(value)}} className="areas-accordion" data-reveal>
            {areas.map((area)=><AccordionItem value={area.id} key={area.id} className="area-item"><AccordionTrigger className="area-trigger"><span>{area.title}</span><span className="area-toggle">{activeArea===area.id?<Minus size={19}/>:<Plus size={19}/>}</span></AccordionTrigger><AccordionContent className="area-content"><p>{area.text}</p><a href="#contato" className="text-link">Agendar consulta <ArrowUpRight size={18}/></a></AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section id="infantil" className="children-section">
        <div className="children-photo photo-background" data-parallax role="img" aria-label="Dr. Raimundo acolhe uma criança no ambiente hospitalar"/>
        <div className="children-shade"/>
        <div className="children-content">
          <span className="eyebrow" data-reveal>ATENDIMENTO INFANTIL</span>
          <h2 data-reveal>Para os pequenos,<br/><span className="serif">atenção em cada descoberta.</span></h2>
          <p data-reveal>Atendimento infantil com acolhimento para a criança e orientação para a família. Espaço para conversar sobre os sintomas, esclarecer dúvidas e entender os próximos passos.</p>
          <div data-reveal><LinkButton light>Agendar consulta infantil</LinkButton></div>
        </div>
        <div className="children-footnote"><span aria-hidden="true" /><span style={{ marginLeft: "auto" }}>ATENÇÃO QUE ACOLHE.</span></div>
      </section>

      <section className="surgery surgery-immersive section-pad">
        <div className="surgery-photo photo-background" data-parallax role="img" aria-label="Dr. Raimundo Aldemar em procedimento médico"/>
        <div className="surgery-shade" aria-hidden="true"/>
        <div className="surgery-text">
          <span className="eyebrow" data-reveal>AVALIAÇÃO CIRÚRGICA</span>
          <h2 data-reveal>Quando a cirurgia é indicada,<br/><span className="serif">entender faz parte do cuidado.</span></h2>
          <p data-reveal>A indicação cirúrgica depende de uma avaliação individual. Durante a consulta, são discutidas as opções de tratamento, os benefícios esperados, os riscos e os cuidados de recuperação.</p>
          <a href="#contato" className="text-link" data-reveal>Agendar uma avaliação <ArrowUpRight size={19}/></a>
        </div>
        <span className="surgery-signature">CUIDADO EM CADA ETAPA.</span>
      </section>

      <section id="contato" className="contact-section">
        <div className="contact-photo photo-background" data-parallax role="img" aria-label="Consulta com o Dr. Raimundo Aldemar"/>
        <div className="contact-shade"/>
        <div className="contact-inner">
          <div className="contact-heading" data-reveal><span className="eyebrow">LOCAIS DE ATENDIMENTO</span><h2>Encontre o melhor local<br/><span className="serif">para sua consulta.</span></h2><p>Atendimento em Taguatinga, Gama e Asa Norte.<br className="desktop-break"/>Escolha a unidade e entre em contato com a recepção para consultar horários e agendar.</p></div>
          <div className="locations" data-reveal>
            <article className="location">
              <div className="location-image">
                <img src="/media/cdootorrino.png" alt="CDO Otorrino no Hospital Anchieta em Taguatinga" loading="lazy" />
              </div>
              <div className="location-top"><span>TAGUATINGA</span><MapPin size={18}/></div>
              <h3>CDO Otorrino</h3>
              <div className="location-info">
                <p>Centro Médico do Hospital Anchieta<br/>Área Especial 08/09/10, Setor C Norte<br/>Salas 111/112 B · Taguatinga Norte, DF</p>
                <a href="tel:+556133526994" className="phone-link"><Phone size={15}/>(61) 3352-6994</a>
              </div>
              <div className="location-actions">
                <LinkButton href={whatsapp("61983230103","CDO Otorrino")} external light>Agendar pelo WhatsApp</LinkButton>
                <a href="https://www.google.com/maps/search/?api=1&query=CDO+Otorrino+Hospital+Anchieta+Taguatinga" target="_blank" rel="noopener noreferrer" className="location-map">Ver no mapa <ArrowUpRight size={15}/></a>
              </div>
            </article>

            <article className="location">
              <div className="location-image">
                <img src="/media/otogama.png" alt="Clínica Otogama no Gama Sul" loading="lazy" />
              </div>
              <div className="location-top"><span>GAMA</span><MapPin size={18}/></div>
              <h3>Clínica Otogama</h3>
              <div className="location-info">
                <p>Quadra 01, Conjunto A, Lote 4<br/>1º andar · Gama Sul<br/>Brasília, DF</p>
                <a href="tel:+556132540111" className="phone-link"><Phone size={15}/>(61) 3254-0111</a>
              </div>
              <div className="location-actions">
                <LinkButton href={whatsapp("61983466377","Clínica Otogama")} external light>Agendar pelo WhatsApp</LinkButton>
                <a href="https://www.google.com/maps/search/?api=1&query=Clinica+Otogama+Quadra+1+Gama+Sul" target="_blank" rel="noopener noreferrer" className="location-map">Ver no mapa <ArrowUpRight size={15}/></a>
              </div>
            </article>

            <article className="location">
              <div className="location-image">
                <img src="/media/otorhynus.png" alt="Otorhynus Clínica na Asa Norte" loading="lazy" />
              </div>
              <div className="location-top"><span>ASA NORTE</span><MapPin size={18}/></div>
              <h3>Otorhynus Clínica</h3>
              <div className="location-info">
                <p>SHLN, Bloco J, Edifício Multiclínicas<br/>Salas 102 a 104 · Asa Norte<br/>Brasília, DF · CEP 70770-560</p>
                <a href="tel:+556133408859" className="phone-link"><Phone size={15}/>(61) 3340-8859</a>
              </div>
              <div className="location-actions">
                <LinkButton href={whatsapp("61985743764","Otorhynus Clínica")} external light>Agendar pelo WhatsApp</LinkButton>
                <a href="https://maps.app.goo.gl/aCMiRG8jYqY3nrcW8" target="_blank" rel="noopener noreferrer" className="location-map">Ver no mapa <ArrowUpRight size={15}/></a>
              </div>
            </article>
          </div>
          <p className="booking-note">Consulte disponibilidade de horários e convênios diretamente com a unidade escolhida.</p>
          <div className="contact-social" data-reveal>
            <span>Acompanhe o Dr. Raimundo no Instagram:</span>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-badge">
              <InstagramIcon size={16}/>
              <span>@raimundo.otorrino</span>
              <ArrowUpRight size={14}/>
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="footer-top">
        <a href="#inicio" className="footer-brand"><img src="/media/logo.png" width="2048" height="682" alt="Dr. Raimundo Aldemar — Otorrinolaringologia"/></a>
        <p>Cuidado que começa<br/><span className="serif">com uma boa conversa.</span></p>
        <a href="#inicio" className="back-top" aria-label="Voltar ao início"><ArrowRight size={23}/></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dr. Raimundo Aldemar</span>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-instagram"><InstagramIcon size={15}/><span>@raimundo.otorrino</span></a>
        <span>CRM-DF 20094 · RQE 13936 · DF</span>
      </div>
    </footer>
  </div>;
}
