"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site-config";
import { 
  ShieldCheck, 
  Sun, 
  KeyRound, 
  HeartHandshake, 
  Sparkles, 
  Phone, 
  Lock, 
  Shield, 
  Heart, 
  HelpCircle,
  Briefcase,
  Coins,
  Home as HomeIcon,
  Compass,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Eye,
  Check
} from "lucide-react";

export default function SpirituelPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const pillars = [
    {
      id: "protection",
      number: "01",
      title: "Protection spirituelle",
      badge: "Securité & Défense Spirituelle",
      icon: ShieldCheck,
      color: "from-[#0A1F16] via-[#1B4332] to-[#0A1F16]",
      border: "border-emerald-700/40",
      accent: "text-emerald-400",
      iconBg: "bg-emerald-900/50 text-emerald-400 border border-emerald-600/40",
      description: "Certaines personnes se sentent exposées à des influences spirituelles négatives ou être victimes d'attaques spirituelles. Nous proposons un accompagnement pour :",
      items: [
        "Protection contre la sorcellerie",
        "Protection contre les attaques spirituelles",
        "Protection contre les mauvais esprits",
        "Contre les empoisonnements",
        "Protection contre les accidents",
        "Renforcement de la protection personnelle et familiale",
      ],
      goal: "L'objectif est de vous aider à retrouver la ligne spirituelle de protection et de sécurité dans votre vie.",
    },
    {
      id: "elevation",
      number: "02",
      title: "Élévation spirituelle et personnelle",
      badge: "Aura & Harmonie Intérieure",
      icon: Sun,
      color: "from-[#112219] via-[#1B4332] to-[#0A1F16]",
      border: "border-amber-700/40",
      accent: "text-amber-300",
      iconBg: "bg-[#D4A843]/20 text-[#D4A843] border border-[#D4A843]/40",
      description: "Lorsque votre énergie est affaiblie, que vous traversez une période difficile ou que vous avez l'impression de ne plus avancer, un travail spirituel peut être entrepris pour retrouver votre équilibre. Nous intervenons notamment pour :",
      items: [
        "Purification et rééquilibrage spirituel",
        "Renforcement de l'harmonie avec son Aura",
        "Ouverture aux nouvelles possibilités et aux opportunités",
        "Renforcement de la force intérieure",
      ],
      goal: "Le but est de vous permettre de retrouver une meilleure harmonie avec votre monde invisible et de repartir sur de nouvelles bases.",
    },
    {
      id: "deblocage",
      number: "03",
      title: "Déblocage et désenvoûtement",
      badge: "Libération & Voies Ouvertes",
      icon: KeyRound,
      color: "from-[#0A1F16] via-[#1B4332] to-[#112219]",
      border: "border-teal-700/40",
      accent: "text-teal-300",
      iconBg: "bg-teal-900/50 text-teal-300 border border-teal-600/40",
      questions: [
        "Vous avez l'impression que votre vie est bloquée ?",
        "Vos projets n'avancent pas ?",
        "Les mêmes problèmes reviennent constamment ?",
        "Vous avez le sentiment que quelque chose vous empêche d'avancer ?",
      ],
      description: "Nous proposons des travaux spirituels de déblocage et de libération, notamment :",
      items: [
        "Désenvoûtement",
        "Déblocage spirituel",
        "Libération des blocages",
        "Destruction des liens spirituels malveillants",
        "Rupture des mauvaises influences",
        "Nettoyage des énergies négatives",
        "Ouverture des chemins",
      ],
      goal: "Chaque situation est différente. Le travail spirituel est donc déterminé en fonction de la situation de la personne.",
    },
    {
      id: "amour",
      number: "04",
      title: "Amour, couple et harmonie du foyer",e: "AMOUR, COUPLE ET HARMONIE DU FOYER",
      badge: "Paix & Relations Affectives",
      icon: HeartHandshake,
      color: "from-[#112219] via-[#1B4332] to-[#0A1F16]",
      border: "border-rose-700/40",
      accent: "text-rose-300",
      iconBg: "bg-rose-900/50 text-rose-300 border border-rose-600/40",
      description: "Les problèmes sentimentaux et familiaux peuvent profondément affecter une personne. Lorsque l'amour est perturbé, lorsque les disputes deviennent fréquentes ou lorsque la distance s'installe dans un couple, nous pouvons vous accompagner dans un travail spirituel visant à retrouver l'harmonie. Nous intervenons notamment pour :",
      items: [
        "Rapprochement amoureux",
        "Rapprochement du couple",
        "Réconciliation",
        "Restauration des liens affectifs",
        "Renforcement de l'amour dans le couple",
        "Harmonie du foyer",
        "Protection du couple et de la famille",
      ],
      goal: "L'objectif est de travailler sur les difficultés qui perturbent votre vie affective et de favoriser le retour à la paix et à l'harmonie.",
    },
  ];

  const filteredPillars = activeTab === "all" 
    ? pillars 
    : pillars.filter(p => p.id === activeTab);

  const domains = [
    { label: "Travail & Carrière", icon: Briefcase },
    { label: "Finances & Prospérité", icon: Coins },
    { label: "Amour & Mariage", icon: Heart },
    { label: "Famille & Foyer", icon: HomeIcon },
    { label: "Projets & Ambitions", icon: Compass },
    { label: "Tranquillité & Sérénité", icon: Sparkles },
  ];

  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] text-[#2C2C2C] selection:bg-[#B8860B]/20">
      {/* Hero Header Section (Identique aux autres pages) */}
      <section className="relative py-24 lg:py-32 bg-[#0A1F16] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/philosophy_img.jpg"
            alt="Accompagnement Spirituel Phyto Santé"
            fill
            priority
            className="object-cover opacity-25 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-[#0A1F16]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16] via-[#0A1F16]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimateOnScroll animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/80 border border-[#B8860B]/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#D4A843]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#D4A843]">
                  Sagesse & Accompagnement Personnalisé
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                Accompagnement spirituel <span className="gold-gradient-text font-serif italic">personnalisé</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-lg sm:text-xl text-[#D4A843] font-serif italic max-w-3xl mx-auto leading-relaxed">
                « Votre problème mérite d&apos;être compris avant d&apos;être traité. »
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={400}>
              <p className="text-base sm:text-lg text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                Dans la vie, certaines situations peuvent sembler se répéter sans que vous compreniez réellement pourquoi. Nous vous aidons à identifier l&apos;origine de vos blocages dans un cadre discret, respectueux et confidentiel.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton
                  variant="gold"
                  size="lg"
                  label="Échanger sur WhatsApp"
                  message="Bonjour Phyto Santé, je souhaite avoir des informations sur l'accompagnement spirituel personnalisé."
                />
                <a
                  href="tel:+22605855017"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/30 backdrop-blur-md transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-[#D4A843]" />
                  <span>+226 05 85 50 17</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Main Content Container */}
      <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1: Context & Domains */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/20 shadow-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#B8860B]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
                  Introduction & Philosophie d&apos;Accompagnement
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] leading-snug">
                Comprendre la cause de vos blocages
              </h2>

              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                Dans la vie, certaines situations peuvent sembler se répéter sans que vous compreniez réellement pourquoi. Les difficultés peuvent toucher la plupart des aspects importants de l&apos;existence :
              </p>

              {/* Grid des domaines d'impact */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-6">
                {domains.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 flex items-center gap-3 shadow-xs hover:border-[#B8860B]/50 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center text-[#D4A843] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#1B4332]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-[#F3EDE4] border-l-4 border-[#B8860B] space-y-3">
                <p className="font-serif italic text-lg text-[#1B4332]">
                  Lorsque vous avez le sentiment que tout est bloqué malgré vos efforts, il est important de chercher la cause du problème.
                </p>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  À travers l&apos;accompagnement spirituel, nous vous aidons à identifier les difficultés spirituelles qui peuvent, selon votre situation et vos croyances, être à l&apos;origine de vos blocages, puis nous vous accompagnons dans le travail spirituel approprié.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#1B4332] font-medium leading-relaxed">
                Chez <strong className="font-bold uppercase">PHYTO SANTÉ</strong>, chaque accompagnement est réalisé dans un cadre discret, respectueux et confidentiel, en tenant compte de l&apos;histoire, des convictions et des préoccupations de chaque personne.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Section 2: Interactive Filter Tabs + 4 Pillars Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
                Nos Piliers d&apos;Intervention
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332]">
                Les 4 Volets du Travail Spirituel
              </h2>
              <p className="text-sm text-[#6B6B6B]">
                Sélectionnez un domaine spécifique ou découvrez l&apos;ensemble de nos accompagnements spirituels.
              </p>

              {/* Dynamic Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === "all"
                      ? "bg-[#1B4332] text-white shadow-md"
                      : "bg-white text-[#1B4332] border border-[#B8860B]/30 hover:bg-[#F3EDE4]"
                  }`}
                >
                  Tous les volets (4)
                </button>
                {pillars.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeTab === p.id
                        ? "bg-[#1B4332] text-white shadow-md"
                        : "bg-white text-[#1B4332] border border-[#B8860B]/30 hover:bg-[#F3EDE4]"
                    }`}
                  >
                    Axe {p.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <AnimateOnScroll key={pillar.id} animation="fade-up" delay={idx * 100}>
                    <div className={`h-full flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br ${pillar.color} text-white border ${pillar.border} shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-300`}>
                      <div className="space-y-6 relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                              <PillarIcon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-xs font-mono font-bold text-[#D4A843] uppercase tracking-wider block">
                                AXE {pillar.number}
                              </span>
                              <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                                {pillar.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Interactive questions for Déblocage */}
                        {pillar.questions && (
                          <div className="p-4 rounded-2xl bg-[#0A1F16]/90 border border-teal-500/30 space-y-2">
                            <p className="text-xs font-semibold text-teal-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <HelpCircle className="w-4 h-4 text-teal-400 shrink-0" />
                              <span>Vos ressentis personnels :</span>
                            </p>
                            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200 italic font-serif">
                              {pillar.questions.map((q, qIdx) => (
                                <li key={qIdx} className="flex items-start gap-2">
                                  <span className="text-[#D4A843] font-bold">•</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <p className="text-sm text-gray-200 leading-relaxed font-light">
                          {pillar.description}
                        </p>

                        {/* Items Checklist */}
                        <div className="space-y-2.5 pt-2 border-t border-white/10">
                          {pillar.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#D4A843]/20 border border-[#D4A843]/40 flex items-center justify-center text-[#D4A843] shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <span className="text-sm text-gray-100 font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Goal Conclusion */}
                      <div className="mt-8 pt-4 border-t border-white/10 relative z-10">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#D4A843]/30 text-xs sm:text-sm text-[#D4A843] italic font-serif leading-relaxed">
                          <strong className="text-white font-sans not-italic block mb-1 text-xs uppercase tracking-wider font-semibold">
                            Objectif :
                          </strong>
                          {pillar.goal}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Section 3: Problem not in list */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#1B4332] text-white p-8 sm:p-12 rounded-3xl border border-[#D4A843]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A843]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A843]/20 text-gold-light text-xs font-semibold font-mono uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Cas Particuliers & Accompagnement Sur-Mesure
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Vous avez un problème qui n&apos;est pas dans cette liste ?
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                    Ne cherchez pas à savoir seul ce qui vous arrive. Chaque personne possède une histoire différente et chaque problème nécessite une compréhension particulière.
                  </p>
                  <p className="text-gray-200 text-sm leading-relaxed font-light">
                    Si vous rencontrez une difficulté dans votre vie et que vous ne savez pas quel type de travail spirituel correspond à votre situation, contactez-nous directement. Expliquez-nous simplement votre problème. Nous prendrons le temps de vous écouter et de vous orienter vers le travail spirituel correspondant à votre situation.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4">
                  <WhatsAppButton
                    variant="gold"
                    size="md"
                    label="Expliquer mon problème"
                    message="Bonjour Phyto Santé, je rencontre un problème particulier et souhaite être orienté."
                    className="w-full text-center shadow-lg"
                  />
                  <a
                    href="tel:+22605855017"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 text-[#D4A843]" />
                    <span>+226 05 85 50 17</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 4: Confidentialité, Discrétion, Respect */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/20 shadow-xl space-y-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase font-semibold">
                Nos 3 Piliers Éthiques
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1B4332]">
                Confidentialité • Discrétion • Respect
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-2">
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-[#D4A843]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1B4332]">Confidentialité Absolue</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Votre problème reste votre problème. Votre histoire reste strictement confidentielle.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-[#D4A843]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1B4332]">Cadre Discret</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Un espace bienveillant et protégé pour aborder toutes vos préoccupations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-[#D4A843]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1B4332]">Respect & Écoute Libres</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Nous accueillons chaque personne sans jugement et dans le respect de ses croyances et convictions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F3EDE4] border border-[#B8860B]/30">
                <p className="font-serif italic text-lg sm:text-xl text-[#1B4332] font-semibold">
                  « Vous pouvez nous parler librement. »
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 5: Final CTA */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-br from-[#1B4332] via-[#0A1F16] to-[#1B4332] text-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/40 shadow-2xl text-center space-y-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8860B] text-[#112219] flex items-center justify-center mx-auto shadow-xl">
                <Phone className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  📞 Besoin d&apos;un accompagnement ?
                </h3>
                <p className="text-[#D4A843] font-serif text-2xl sm:text-3xl font-bold">
                  +226 05 85 50 17
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+22605855017"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A843] to-[#B8860B] hover:from-[#E6C875] hover:to-[#D4A843] text-[#112219] font-bold text-lg transition-all duration-300 shadow-xl hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Appeler maintenant</span>
                </a>

                <WhatsAppButton
                  variant="primary"
                  size="lg"
                  label="Échanger sur WhatsApp"
                  message="Bonjour Phyto Santé, je souhaite réserver une consultation d'accompagnement spirituel."
                  className="w-full sm:w-auto shadow-xl"
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gold-light/90 font-serif italic text-base sm:text-lg font-medium">
                  PHYTO SANTÉ — Votre problème mérite d&apos;être compris avant d&apos;être traité.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  );
}
