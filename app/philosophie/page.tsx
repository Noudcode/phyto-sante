import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site-config";
import {
  Sparkles,
  Eye,
  Compass,
  Quote,
  BookOpen,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "Notre Philosophie — Le Monde Invisible & Visible | Phyto Santé",
  description:
    "Découvrez la philosophie du Cabinet Phyto Santé : comprendre le lien entre le monde invisible et le monde visible, la spiritualité et la sagesse traditionnelle africaine.",
};

export default function PhilosophiePage() {
  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] text-[#2C2C2C] selection:bg-[#B8860B]/20">
      {/* Hero Header Section */}
      <section className="relative py-24 lg:py-32 bg-[#0A1F16] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/philosophy_img.jpg"
            alt="Philosophie Phyto Santé - Le Monde Invisible et Visible"
            fill
            priority
            className="object-cover opacity-65 sm:opacity-25 filter brightness-90 sm:brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-[#0A1F16]/50 sm:via-[#0A1F16]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16]/80 via-[#0A1F16]/40 sm:via-[#0A1F16]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimateOnScroll animation="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/80 border border-[#B8860B]/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#D4A843]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#D4A843]">
                  Philosophie & Enseignement Phyto Santé
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                Le monde invisible & le monde visible
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                « Ce qui n'a pas d'abord été conçu dans le monde invisible ne peut pas facilement prendre forme dans le monde visible. »
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Main Reading Experience Container */}
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1: Introduction - La frontière entre deux réalités */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/20 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#B8860B]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
                  Partie I — Les Lois de la Nature
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] leading-snug">
                La rencontre de deux mondes
              </h2>

              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                La nature qui nous entoure est régie par des lois que nous appelons les lois de la nature. Ces lois établissent, dans notre compréhension, une frontière entre deux réalités : <strong>le monde visible</strong> et <strong>le monde invisible</strong>, autrement dit, ce que nous pouvons voir et ce qui échappe à nos yeux.
              </p>

              <div className="p-6 rounded-2xl bg-[#F3EDE4] border-l-4 border-[#B8860B] space-y-2 my-4">
                <p className="font-serif italic text-lg text-[#1B4332]">
                  Pourtant, ces deux mondes sont étroitement liés. Ce qui se construit dans l’invisible finit par trouver son expression dans le visible.
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                Avant de construire une maison, de partir en voyage ou de bâtir une fortune, vous en avez d’abord l’idée. Vous l’imaginez, vous la concevez dans votre esprit, vous la visualisez avant même qu’elle ne devienne une réalité concrète.
              </p>

              <div className="p-4 rounded-xl bg-[#1B4332] text-white flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-[#D4A843] shrink-0" />
                <p className="text-sm sm:text-base font-serif font-semibold text-[#F3EDE4]">
                  La pensée est invisible, mais sa réalisation devient visible.
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                C’est pourquoi ce qui n’a pas d’abord été conçu, pensé ou préparé dans le monde invisible ne peut pas facilement prendre forme dans le monde visible.
              </p>

              <p className="text-base sm:text-lg font-medium text-[#1B4332]">
                Si vous souhaitez réussir dans la vie, commencez donc par construire cette réussite dans votre monde intérieur. Ce que vous aurez préparé dans l’invisible pourra ensuite se manifester et se concrétiser dans le visible.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Section 2: Maîtriser son monde invisible & Loi de cause à effet */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-[#1B4332] text-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/40 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#D4A843]">
                  Partie II — Spiritualité & Causes Profondes
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Comment maîtriser son monde invisible ?
              </h2>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                Le monde invisible repose sur la spiritualité. Lorsque vous apprenez à maîtriser votre spiritualité, vous pouvez également apprendre à mieux comprendre, orienter et maîtriser votre monde invisible.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                Notre existence tout entière est entourée de lois naturelles. Pourtant, il nous arrive parfois de les ignorer ou de les transgresser sans même en avoir conscience. Et lorsque nous agissons à l’encontre de certains de ces principes, certaines portes peuvent sembler se fermer devant nous.
              </p>

              <div className="p-6 rounded-2xl bg-[#0A1F16] border border-[#B8860B]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#D4A843]">
                  <Quote className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest font-bold">Principe Fondamental</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#D4A843] leading-snug">
                  « Il n’y a pas d’effet sans cause, tout comme il n’y a pas de cause sans effet. »
                </p>
                <p className="text-xs text-gray-400">
                  Lorsqu’une situation ne fonctionne pas comme vous le souhaitez, il est important de chercher à comprendre ce qui se trouve derrière cette situation.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 3: Vos blocages quotidiens - Chercher la cause */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/20 shadow-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#B8860B]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
                  Partie III — Comprendre les Blocages
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                Vous reconnaissez-vous dans ces situations ?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] inline-block mb-1" />
                  <h4 className="font-serif font-bold text-[#1B4332]">Difficultés Professionnelles</h4>
                  <p className="text-sm text-[#6B6B6B]">Vous rencontrez des blocages constants ou des blocages dans votre travail ?</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] inline-block mb-1" />
                  <h4 className="font-serif font-bold text-[#1B4332]">Instabilité Relationnelle</h4>
                  <p className="text-sm text-[#6B6B6B]">Vous recherchez l’amour sans parvenir à construire une relation stable ?</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] inline-block mb-1" />
                  <h4 className="font-serif font-bold text-[#1B4332]">Complications Répétitives</h4>
                  <p className="text-sm text-[#6B6B6B]">Vous êtes confronté à des schémas conflictuels qui se répètent sans cesse ?</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] inline-block mb-1" />
                  <h4 className="font-serif font-bold text-[#1B4332]">Projets Freinés</h4>
                  <p className="text-sm text-[#6B6B6B]">Entreprendre, voyager ou évoluer mais ressentir qu'un fil invisible vous retient ?</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F3EDE4] border border-[#B8860B]/30 space-y-3">
                <p className="font-serif font-bold text-lg text-[#1B4332]">
                  Alors, il faut chercher la cause. Car derrière chaque situation, il existe quelque chose à comprendre.
                </p>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  Parfois, de simples solutions spirituelles peuvent contribuer à ouvrir des portes que vous attendez depuis des années. Mais la véritable difficulté n’est pas toujours de trouver une solution. <strong>La véritable difficulté est souvent de découvrir la cause profonde du problème.</strong>
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 4: L'Héritage Africain & La Connaissance Ancestrale */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/20 shadow-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#B8860B]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
                  Partie IV — La Connaissance & L'Héritage
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                Sagesse ancestrale et héritage africain
              </h2>

              <div className="p-6 rounded-2xl bg-[#1B4332]/5 border-l-4 border-[#B8860B]">
                <p className="font-serif italic text-xl font-bold text-[#1B4332]">
                  « Mon peuple meurt faute de connaissance. »
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                Nous disposons en Afrique d’une immense richesse culturelle, spirituelle et traditionnelle. Nous avons hérité de nos ancêtres de nombreux savoirs, pratiques et traditions qui restent encore méconnus de beaucoup d’entre nous.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/20 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#B8860B] shrink-0 mt-1" />
                  <p className="text-base text-[#2C2C2C] leading-relaxed font-medium">
                    Connaître et pratiquer les traditions de nos grands-parents ne fait pas de nous des diables.
                  </p>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed pl-9">
                  Notre héritage culturel africain fait partie de notre histoire. Le connaître, l’étudier et le respecter ne nous empêche pas de conserver nos croyances et nos convictions personnelles.
                </p>
                <p className="text-sm text-[#1B4332] font-semibold pl-9">
                  Nous pouvons connaître nos racines, comprendre les traditions qui nous ont été transmises et respecter l’héritage de nos ancêtres, tout en restant libres dans nos choix spirituels et personnels.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 5: Conclusion & Message Final */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-br from-[#1B4332] via-[#0A1F16] to-[#1B4332] text-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/40 shadow-2xl text-center space-y-8 relative overflow-hidden">
              <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4A843] block">
                  Engagement & Sagesse
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  Prenez soin de votre monde invisible
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left my-6">
                  <div className="p-3 rounded-xl bg-[#0A1F16]/60 border border-[#B8860B]/30 flex items-center gap-3 text-sm text-gray-200">
                    <Sparkles className="w-4 h-4 text-[#D4A843] shrink-0" />
                    <span>Travaillez sur votre esprit</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A1F16]/60 border border-[#B8860B]/30 flex items-center gap-3 text-sm text-gray-200">
                    <BookOpen className="w-4 h-4 text-[#D4A843] shrink-0" />
                    <span>Cherchez la connaissance</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A1F16]/60 border border-[#B8860B]/30 flex items-center gap-3 text-sm text-gray-200">
                    <Compass className="w-4 h-4 text-[#D4A843] shrink-0" />
                    <span>Comprenez les lois qui vous entourent</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A1F16]/60 border border-[#B8860B]/30 flex items-center gap-3 text-sm text-gray-200">
                    <Heart className="w-4 h-4 text-[#D4A843] shrink-0" />
                    <span>Apprenez à connaître votre spiritualité</span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                  Cherchez les causes avant de chercher uniquement les solutions. Car lorsque votre monde intérieur change, votre manière de voir, de décider et d'agir dans le monde visible peut également changer.
                </p>

                <div className="p-6 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/40 my-6">
                  <p className="font-serif font-bold text-2xl text-[#D4A843]">
                    « Personne n’est né pour souffrir. »
                  </p>
                </div>

                <p className="text-sm text-gray-300">
                  Prenez soin de votre monde invisible, et donnez-vous les moyens d'améliorer votre monde visible.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <WhatsAppButton
                    variant="gold"
                    label="Échanger avec Son Altesse Prince Adaye"
                  />
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all"
                  >
                    <span>Nous contacter</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  );
}
