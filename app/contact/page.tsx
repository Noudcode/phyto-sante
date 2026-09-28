import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCard from "@/components/contact/ContactCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/site-config";
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#0A1F16] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.jpg"
            alt="Contact Cabinet Phyto Santé"
            fill
            className="object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-[#0A1F16]/80 to-transparent" />
        </div>
        <Container className="relative z-10 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#D4A843] block mb-3">
            À votre écoute
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Contactez Phyto Santé
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto font-light">
            Notre équipe est à votre écoute pour répondre à vos questions concernant nos produits naturels, nos services et notre accompagnement.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <SectionTitle
          subtitle="Coordonnées Officielle"
          title="Prendre rendez-vous ou échanger"
          description="Retrouvez toutes les façons de nous joindre facilement et en toute confidentialité."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ContactCard
            icon={Phone}
            title="Téléphone"
            value={siteConfig.contact.phone}
            subtext="Disponible aux heures d'ouverture du cabinet."
            actionButton={
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block w-full py-2.5 px-4 bg-[#1B4332] text-white text-xs font-semibold rounded-full hover:bg-[#2D6A4F] transition-colors"
              >
                Appeler
              </a>
            }
          />

          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value={siteConfig.contact.whatsappDisplay}
            subtext="Échange direct et réponses rapides en toute confidentialité."
            actionButton={
              <WhatsAppButton
                variant="primary"
                size="sm"
                label="Direct WhatsApp"
                className="w-full text-xs"
              />
            }
          />

          <ContactCard
            icon={MapPin}
            title="Adresse"
            value={siteConfig.contact.address}
            subtext="Cabinet physique & consultations sur rendez-vous."
          />

          <ContactCard
            icon={Clock}
            title="Horaires"
            value={siteConfig.contact.hours}
            subtext="Du lundi au samedi sur prise de rendez-vous."
          />
        </div>

        {/* WhatsApp Direct Banner */}
        <div className="bg-[#1B4332] text-white p-8 sm:p-12 rounded-3xl border border-[#B8860B]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A843]">
              Besoin d'une réponse rapide ?
            </h3>
            <p className="text-sm sm:text-base text-gray-200 max-w-xl">
              Le moyen le plus simple et le plus rapide pour nous joindre est via WhatsApp. Cliquez ci-contre pour démarrer la discussion.
            </p>
          </div>
          <WhatsAppButton
            variant="primary"
            size="lg"
            label="Envoyer un message WhatsApp"
            className="shrink-0"
          />
        </div>
      </Container>
    </div>
  );
}
