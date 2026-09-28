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
  quoteExtract: string;
  transcript: string;
  verified: boolean;
  frequencyPreset: number[];
}

export const sliderTestimonials: SliderTestimonial[] = [
  {
    id: "st-1",
    name: "Dame Marie L.",
    location: "Cotonou, Bénin",
    role: "Patiente guérie de maux chroniques",
    rating: 5,
    category: "Santé Naturelle",
    treatment: "Tisanes Régénérantes Phyto Santé",
    quote: "Les tisanes Phyto Santé ont complètement guéri mes douleurs d'estomac chroniques. J'ai retrouvé une énergie incroyable au quotidien.",
    fullReview: "Après plus de deux ans d'inconfort abdominal et de traitements inefficaces, la cure personnalisée élaborée par Prince Adayé a restauré mon équilibre intestinal en moins de trois semaines. Un véritable miracle de la phytothérapie africaine !",
    date: "18 Juin 2025",
    verified: true,
    avatar: "/images/testimonials/dame_marie_l.jpg"
  },
  {
    id: "st-2",
    name: "M. Koffi A.",
    location: "Lomé, Togo",
    role: "Chef de famille",
    rating: 5,
    category: "Protection Spirituelle",
    treatment: "Kit Harmonie & Sérénité Spirituelle",
    quote: "Le produit d'harmonie et de protection spirituelle a fait des merveilles dans notre maison. Paix et sérénité sont enfin revenues.",
    fullReview: "Notre foyer traversait des tensions inexpliquées et une lourdeur ambiante constante. Grâce au savon de purification et au rituel de bénédiction enseigné par Prince Adayé, l'atmosphère de notre maison s'est totalement transformée en un havre de paix.",
    date: "02 Juillet 2025",
    verified: true,
    avatar: "/images/testimonials/m_koffi_a.jpg"
  },
  {
    id: "st-3",
    name: "Dr. Sarah B.",
    location: "Abidjan, Côte d'Ivoire",
    role: "Professionnelle de Santé",
    rating: 5,
    category: "Santé Féminine",
    treatment: "Pack Vitalité Intime & Équilibre Féminin",
    quote: "Le pack santé féminine et vitalité naturelle que j'ai commandé est extraordinaire. Résultats visibles après 2 semaines seulement !",
    fullReview: "En tant que praticienne, j'étais curieuse d'évaluer la médecine traditionnelle bien dosée. Je fus bluffée par la pureté des huiles et extraits de plantes d'Adayé Phyto Santé. Je le recommande désormais vivement autour de moi.",
    date: "14 Février 2026",
    verified: true,
    avatar: "/images/testimonials/dr_sarah_b.jpg"
  },
  {
    id: "st-4",
    name: "M. Jean-Paul K.",
    location: "Paris, France / Porto-Novo",
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
    location: "Douala, Cameroun",
    role: "Commerçante",
    rating: 5,
    category: "Purification & Énergie",
    treatment: "Parfum Spirituel Divine Présence",
    quote: "Après des années de blocages et de fatigue intense, le savon de purification et le parfum spirituel m'ont apporté paix et ouverture d'opportunités.",
    fullReview: "Je sentais mes affaires bloquées et mon énergie au plus bas. Les conseils bienveillants du cabinet Adayé Phyto Santé m'ont redonné confiance. Une semaine après la purification, mes ventes ont doublé et je dors à nouveau paisiblement.",
    date: "11 Septembre 2026",
    verified: true,
    avatar: "/images/testimonials/mme_grace_n.jpg"
  }
];

export const whatsappScreenshots: WhatsAppScreenshotTestimonial[] = [
  {
    id: "wa-1",
    name: "Dame Marie - Phyto Santé",
    location: "Cotonou, Bénin",
    category: "Santé Naturelle",
    date: "18 Juin 2025",
    timestamp: "10:45 AM",
    imagePath: "/images/whatsapp_1.jpg",
    previewMessage: "Bonjour Prince Adayé, je voulais vous remercier du fond du coeur! Les tisanes Phyto Santé ont complètement...",
    fullMessage: "Bonjour Prince Adayé, je voulais vous remercier du fond du coeur! Les tisanes Phyto Santé ont complètement guéri mes douleurs d'estomac et j'ai retrouvé une énergie incroyable. Merci infiniment! 🙏🌿",
    verified: true
  },
  {
    id: "wa-2",
    name: "Koffi A. - Client Phyto Santé",
    location: "Lomé, Togo",
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
    name: "Dr. Sarah B. - Cotonou",
    location: "Abidjan, Côte d'Ivoire",
    category: "Santé Féminine",
    date: "14 Février 2026",
    timestamp: "09:41 AM",
    imagePath: "/images/whatsapp_3.jpg",
    previewMessage: "Bonjour Prince! Le pack santé féminine et vitalité naturelle que j ai commandé est extraordinaire...",
    fullMessage: "Bonjour Prince! Le pack santé féminine et vitalité naturelle que j ai commandé est extraordinaire. Les résultats sont là après seulement 2 semaines. Je vous recommande à tout mon entourage! 👏🌸",
    verified: true
  },
  {
    id: "wa-4",
    name: "M. Jean-Paul K.",
    location: "Paris, France / Porto-Novo",
    category: "Rhumatisme & Articulations",
    date: "29 Avril 2026",
    timestamp: "21:32 PM",
    imagePath: "/images/whatsapp_4.jpg",
    previewMessage: "Salut Maître Adayé, le remède contre les douleurs articulaires et le rhumatisme est incroyable...",
    fullMessage: "Salut Maître Adayé, le remède contre les douleurs articulaires et le rhumatisme est incroyable. Mon père marche à nouveau sans canne! Mille fois merci pour ces plantes médicinales puissantes. 🙌🌿",
    verified: true
  },
  {
    id: "wa-5",
    name: "Madame Grace N.",
    location: "Douala, Cameroun",
    category: "Purification & Énergie",
    date: "11 Septembre 2026",
    timestamp: "10:12 AM",
    imagePath: "/images/whatsapp_5.jpg",
    previewMessage: "Bonjour Prince Adaye, je vous confirme la reception de mes produits de purification et baume apaisant...",
    fullMessage: "Bonjour Prince Adaye, je vous confirme la reception de mes produits de purification et baume apaisant. Apres 1 semaine les effets se font ressentir, grand merci a l equipe Phyto Sante! 🙏✨",
    verified: true
  }
];

export const audioTestimonials: AudioTestimonial[] = [
  {
    id: "aud-1",
    name: "Pasteur Emmanuel T.",
    location: "Porto-Novo, Bénin",
    category: "Protection & Sérénité",
    date: "05 Septembre 2024",
    durationSeconds: 48,
    durationFormatted: "0:48",
    quoteExtract: "« Après la prière et l'utilisation de vos écorces d'apaisement, la paix est revenue dans notre église et ma famille... »",
    transcript: "Bonjour Prince Adayé. C'est le Pasteur Emmanuel. Je vous laisse ce message vocal pour vous rendre grâce et vous féliciter. Vos remèdes traditionnels à base d'écorces sacrées m'ont apporté une délivrance remarquable. Que le Très-Haut continue d'éclairer votre savoir ancestral.",
    verified: true,
    frequencyPreset: [15, 30, 65, 80, 45, 90, 70, 40, 60, 85, 95, 50, 30, 60, 40, 20]
  },
  {
    id: "aud-2",
    name: "Mme Clarisse K.",
    location: "Paris, France",
    category: "Santé Féminine & Maternité",
    date: "28 Août 2024",
    durationSeconds: 72,
    durationFormatted: "1:12",
    quoteExtract: "« Le traitement pour la fertilité et la régularisation du cycle a marché en 2 mois. Je suis enceinte ! »",
    transcript: "Allô Prince Adayé ! C'est Clarisse depuis Paris. Je n'arrive toujours pas à y croire... Après 4 ans d'essais infructueux et d'examens médicaux stressants, le traitement phytothérapeutique que vous m'avez envoyé par colis international a débloqué ma situation. La prise de sang d'hier confirme ma grossesse ! Merci mille fois !",
    verified: true,
    frequencyPreset: [20, 50, 85, 40, 95, 60, 30, 75, 90, 65, 40, 80, 55, 35, 70, 25]
  },
  {
    id: "aud-3",
    name: "M. Ibrahim S.",
    location: "Niamey, Niger",
    category: "Insomnie & Vitalité",
    date: "14 Août 2024",
    durationSeconds: 55,
    durationFormatted: "0:55",
    quoteExtract: "« Je ne dormais plus que 2 heures par nuit. Dès la première prise de la tisane relaxante, nuit complète et paisible. »",
    transcript: "Salam Prince Adayé, c'est Ibrahim de Niamey. Je tenais à vous remercier de viva voce. L'insomnie chronique détruisait ma santé et mon travail depuis près d'un an. Vos poudres de plantes apaisantes font un bien fou. Je dors désormais comme un bébé de 8 heures par nuit.",
    verified: true,
    frequencyPreset: [30, 40, 60, 75, 50, 80, 90, 70, 45, 85, 60, 40, 30, 50, 65, 20]
  },
  {
    id: "aud-4",
    name: "Mme Antoinette D.",
    location: "Abidjan, Côte d'Ivoire",
    category: "Peau & Purification",
    date: "03 Août 2024",
    durationSeconds: 63,
    durationFormatted: "1:03",
    quoteExtract: "« Le savon noir enrichi et le baume végétal ont effacé mes problèmes de dermatose de longue date... »",
    transcript: "Bonjour l'équipe Adayé Phyto Santé ! Antoinette à l'appareil. Je vous envoie ce vocal pour vous partager ma joie. Ma peau s'est complètement régénérée grâce à votre savon traditionnel et le baume régénérant. Ma confiance en moi est totalement restaurée !",
    verified: true,
    frequencyPreset: [10, 35, 70, 85, 60, 40, 90, 75, 55, 30, 80, 65, 45, 60, 30, 15]
  },
  {
    id: "aud-5",
    name: "M. Sylvain B.",
    location: "Libreville, Gabon",
    category: "Prostata & Confort Masculin",
    date: "19 Juillet 2024",
    durationSeconds: 84,
    durationFormatted: "1:24",
    quoteExtract: "« Plus d'envies fréquentes la nuit ni de mictions douloureuses. La formule masculine Phyto Santé est exceptionnelle. »",
    transcript: "Cher Prince Adayé, Sylvain depuis Libreville. À mon âge, les problèmes de prostate deviennent très éprouvants. Votre tisane spéciale confort masculin a agi au-delà de mes espérances. Les mictions nocturnes ont cessé dès le 5ème jour. Merci pour votre intégrité et la qualité de vos produits.",
    verified: true,
    frequencyPreset: [25, 60, 40, 90, 75, 50, 85, 95, 70, 40, 65, 80, 50, 30, 45, 20]
  }
];
