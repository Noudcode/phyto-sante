export interface SliderTestimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  category: string;
  treatment: string;
  quote: string;
  fullReview: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export interface WhatsAppScreenshotTestimonial {
  id: string;
  name: string;
  location: string;
  category: string;
  date: string;
  timestamp: string;
  imagePath: string;
  previewMessage: string;
  fullMessage: string;
  verified: boolean;
}

export interface AudioTestimonial {
  id: string;
  name: string;
  location: string;
  category: string;
  date: string;
  durationSeconds: number;
  durationFormatted: string;
  audioUrl?: string;
  quoteExtract: string;
  transcript: string;
  verified: boolean;
  frequencyPreset: number[];
}

export const sliderTestimonials: SliderTestimonial[] = [
  {
    id: "st-1",
    name: "Dame Marie L.",
    location: "Ouagadougou, Burkina Faso",
    role: "Patiente guérie de maux chroniques",
    rating: 5,
    category: "Santé Naturelle",
    treatment: "Tisanes Régénérantes Phyto Santé",
    quote: "Les tisanes Phyto Santé ont complètement guéri mes douleurs d'estomac chroniques. J'ai retrouvé une énergie incroyable au quotidien.",
    fullReview: "Après plus de deux ans d'inconfort abdominal et de traitements inefficaces, la cure personnalisée élaborée par Phyto Santé a restauré mon équilibre intestinal en moins de trois semaines. Un véritable miracle de la phytothérapie africaine !",
    date: "18 Juin 2025",
    verified: true,
    avatar: "/images/testimonials/dame_marie_l.jpg"
  },
  {
    id: "st-2",
    name: "M. Koffi A.",
    location: "Bobo-Dioulasso, Burkina Faso",
    role: "Chef de famille",
    rating: 5,
    category: "Protection Spirituelle",
    treatment: "Kit Harmonie & Sérénité Spirituelle",
    quote: "Le produit d'harmonie et de protection spirituelle a fait des merveilles dans notre maison. Paix et sérénité sont enfin revenues.",
    fullReview: "Notre foyer traversait des tensions inexpliquées et une lourdeur ambiante constante. Grâce au savon de purification et au rituel de bénédiction enseigné par Phyto Santé, l'atmosphère de notre maison s'est totalement transformée en un havre de paix.",
    date: "02 Juillet 2025",
    verified: true,
    avatar: "/images/testimonials/m_koffi_a.jpg"
  },
  {
    id: "st-3",
    name: "Dr. Sarah B.",
    location: "Koudougou, Burkina Faso",
    role: "Professionnelle de Santé",
    rating: 5,
    category: "Santé Féminine",
    treatment: "Pack Vitalité Intime & Équilibre Féminin",
    quote: "Le pack santé féminine et vitalité naturelle que j'ai commandé est extraordinaire. Résultats visibles après 2 semaines seulement !",
    fullReview: "En tant que praticienne, j'étais curieuse d'évaluer la médecine traditionnelle bien dosée. Je fus bluffée par la pureté des huiles et extraits de plantes de Phyto Santé. Je le recommande désormais vivement autour de moi.",
    date: "14 Février 2026",
    verified: true,
    avatar: "/images/testimonials/dr_sarah_b.jpg"
  },
  {
    id: "st-4",
    name: "M. Jean-Paul K.",
    location: "Ouahigouya, Burkina Faso",
    role: "Responsable d'Entreprise",
    rating: 5,
    category: "Rhumatisme & Articulations",
    treatment: "Baume Articulaire & Plante Médicinale N°4",
    quote: "Le remède contre les douleurs articulaires est incroyable. Mon père marche à nouveau sans canne ! Mille fois merci.",
    fullReview: "Mon père de 74 ans souffrait d'une arthrose sévère des genoux. Après la première semaine d'application du baume et des infusions spécifiques, il a pu remarcher normalement et réutiliser les escaliers sans aucune aide.",
    date: "29 Avril 2026",
    verified: true,
    avatar: "/images/testimonials/m_jean_paul_k.jpg"
  },
  {
    id: "st-5",
    name: "Mme Grace N.",
    location: "Banfora, Burkina Faso",
    role: "Commerçante",
    rating: 5,
    category: "Purification & Énergie",
    treatment: "Parfum Spirituel Divine Présence",
    quote: "Après des années de blocages et de fatigue intense, le savon de purification et le parfum spirituel m'ont apporté paix et ouverture d'opportunités.",
    fullReview: "Je sentais mes affaires bloquées et mon énergie au plus bas. Les conseils bienveillants du cabinet Phyto Santé m'ont redonné confiance. Une semaine après la purification, mes ventes ont doublé et je dors à nouveau paisiblement.",
    date: "11 Septembre 2026",
    verified: true,
    avatar: "/images/testimonials/mme_grace_n.jpg"
  }
];

export const whatsappScreenshots: WhatsAppScreenshotTestimonial[] = [
  {
    id: "wa-1",
    name: "Dame Marie - Phyto Santé",
    location: "Ouagadougou, Burkina Faso",
    category: "Santé Naturelle",
    date: "18 Juin 2025",
    timestamp: "10:45 AM",
    imagePath: "/images/whatsapp_1.jpg",
    previewMessage: "Bonjour Phyto Santé, je voulais vous remercier du fond du coeur! Les tisanes Phyto Santé ont complètement...",
    fullMessage: "Bonjour Phyto Santé, je voulais vous remercier du fond du coeur! Les tisanes Phyto Santé ont complètement guéri mes douleurs d'estomac et j'ai retrouvé une énergie incroyable. Merci infiniment! 🙏🌿",
    verified: true
  },
  {
    id: "wa-2",
    name: "Koffi A. - Client Phyto Santé",
    location: "Bobo-Dioulasso, Burkina Faso",
    category: "Protection Spirituelle",
    date: "02 Juillet 2025",
    timestamp: "20:14 PM",
    imagePath: "/images/whatsapp_2.jpg",
    previewMessage: "Bonsoir mon Frère, le produit d harmonie et de protection spirituelle a fait des merveilles dans ma maison...",
    fullMessage: "Bonsoir mon Frère, le produit d harmonie et de protection spirituelle a fait des merveilles dans ma maison. Paix et sérénité sont revenues! Que Dieu bénisse vos connaissances traditionnelles. 🙏✨",
    verified: true
  },
  {
    id: "wa-3",
    name: "Dr. Sarah B. - Koudougou",
    location: "Koudougou, Burkina Faso",
    category: "Santé Féminine",
    date: "14 Février 2026",
    timestamp: "09:41 AM",
    imagePath: "/images/whatsapp_3.jpg",
    previewMessage: "Bonjour Phyto Santé! Le pack santé féminine et vitalité naturelle que j ai commandé est extraordinaire...",
    fullMessage: "Bonjour Phyto Santé! Le pack santé féminine et vitalité naturelle que j ai commandé est extraordinaire. Les résultats sont là après seulement 2 semaines. Je vous recommande à tout mon entourage! 👏🌸",
    verified: true
  },
  {
    id: "wa-4",
    name: "M. Jean-Paul K.",
    location: "Kaya, Burkina Faso",
    category: "Rhumatisme & Articulations",
    date: "29 Avril 2026",
    timestamp: "21:32 PM",
    imagePath: "/images/whatsapp_4.jpg",
    previewMessage: "Salut Phyto Santé, le remède contre les douleurs articulaires et le rhumatisme est incroyable...",
    fullMessage: "Salut Phyto Santé, le remède contre les douleurs articulaires et le rhumatisme est incroyable. Mon père marche à nouveau sans canne! Mille fois merci pour ces plantes médicinales puissantes. 🙌🌿",
    verified: true
  },
  {
    id: "wa-5",
    name: "Madame Grace N.",
    location: "Tenkodogo, Burkina Faso",
    category: "Purification & Énergie",
    date: "11 Septembre 2026",
    timestamp: "10:12 AM",
    imagePath: "/images/whatsapp_5.jpg",
    previewMessage: "Bonjour Phyto Sante, je vous confirme la reception de mes produits de purification et baume apaisant...",
    fullMessage: "Bonjour Phyto Sante, je vous confirme la reception de mes produits de purification et baume apaisant. Apres 1 semaine les effets se font ressentir, grand merci a l equipe Phyto Sante! 🙏✨",
    verified: true
  }
];

export const audioTestimonials: AudioTestimonial[] = [
  {
    id: "aud-1",
    name: "Témoignage Vocal WhatsApp N°1",
    location: "Ouagadougou, Burkina Faso",
    category: "Santé Naturelle",
    date: "15 Septembre 2026",
    durationSeconds: 25,
    durationFormatted: "0:25",
    audioUrl: "/img/WhatsApp Audio 1.ogg",
    quoteExtract: "« Message vocal authentique de satisfaction d'un patient suite à son traitement Phyto Santé. »",
    transcript: "Enregistrement vocal original transmis directement par le patient via WhatsApp à Phyto Santé.",
    verified: true,
    frequencyPreset: [20, 45, 75, 90, 60, 85, 95, 70, 50, 80, 65, 40, 30, 55, 70, 25]
  },
  {
    id: "aud-2",
    name: "Témoignage Vocal WhatsApp N°2",
    location: "Bobo-Dioulasso, Burkina Faso",
    category: "Santé Naturelle",
    date: "18 Septembre 2026",
    durationSeconds: 42,
    durationFormatted: "0:42",
    audioUrl: "/img/WhatsApp Audio 2.ogg",
    quoteExtract: "« Témoignage vocal de gratitude décrivant les bienfaits et le soulagement apportés par la médication traditionnelle. »",
    transcript: "Enregistrement vocal original transmis directement par le patient via WhatsApp à Phyto Santé.",
    verified: true,
    frequencyPreset: [30, 60, 85, 40, 95, 70, 45, 80, 90, 65, 50, 75, 60, 35, 65, 20]
  },
  {
    id: "aud-3",
    name: "Témoignage Vocal WhatsApp N°3",
    location: "Banfora, Burkina Faso",
    category: "Protection Spirituelle",
    date: "22 Septembre 2026",
    durationSeconds: 38,
    durationFormatted: "0:38",
    audioUrl: "/img/WhatsApp Audio 3.ogg",
    quoteExtract: "« Retour d'expérience vocal confirmant l'efficacité remarquable des préparations végétales Phyto Santé. »",
    transcript: "Enregistrement vocal original transmis directement par le patient via WhatsApp à Phyto Santé.",
    verified: true,
    frequencyPreset: [15, 35, 70, 80, 55, 90, 75, 50, 85, 60, 40, 70, 50, 30, 45, 15]
  }
];
