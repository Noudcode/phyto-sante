export interface Ingredient {
  name: string;
  icon?: string;
  desc?: string;
}

export interface KeyPoint {
  title: string;
  desc: string;
}

export interface ProductReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  currency: string;
  image: string;
  posterImage?: string;
  available: boolean;
  salesCount: number;
  rating: number;
  reviewsCount: number;
  certification: string;
  ingredients?: Ingredient[];
  posology?: {
    instruction: string;
    recommendation: string;
  };
  keyPoints?: KeyPoint[];
  reviews?: ProductReview[];
}

export const productsData: Product[] = [
  {
    id: "prod-1",
    slug: "ulcere-hemorroide",
    name: "PHYTO SANTÉ — ULCÈRE & HÉMORROÏDE",
    category: "Phytothérapie & Digestif",
    shortDescription:
      "Préparation de phytothérapie traditionnelle à base de plantes naturelles pour apaiser les inconforts liés aux ulcères gastriques et aux hémorroïdes.",
    description:
      "Cette préparation de PHYTO SANTÉ est élaborée à partir de plantes utilisées dans la phytothérapie traditionnelle. Elle associe notamment la feuille de Telck, le Rapal et l'écorce de Manguier pour un soulagement naturel et durable.",
    price: 8000,
    originalPrice: 15000,
    savings: 7000,
    currency: "FCFA",
    image: "/img/Pro 1.png",
    posterImage: "/img/A-Pro 1.png",
    available: true,
    salesCount: 1450,
    rating: 4.9,
    reviewsCount: 128,
    certification: "Certifié Phytothérapie 100% Naturelle",
    ingredients: [
      {
        name: "Feuille de Telck",
        icon: "🌿",
        desc: "Plante traditionnelle aux vertus cicatrisantes et apaisantes pour les muqueuses digestives et gastriques.",
      },
      {
        name: "Rapal",
        icon: "🌰",
        desc: "Graine médicinale précieuse participante à l'apaisement de l'inflammation intestinale et hémorroïdaire.",
      },
      {
        name: "Écorce de Manguier",
        icon: "🌳",
        desc: "Extrait végétal aux vertus astringentes et régulatrices reconnues en médecine ancestrale.",
      },
    ],
    posology: {
      instruction:
        "Prendre une cuillerée à café dans un demi-verre d'eau tiède, une fois par jour pendant 8 jours.",
      recommendation:
        "Il est recommandé de respecter la quantité indiquée et de ne pas dépasser la durée d'utilisation sans avis d'un professionnel de santé.",
    },
    keyPoints: [
      {
        title: "100 % naturel",
        desc: "Préparation à base d'ingrédients végétaux issus de la phytothérapie traditionnelle.",
      },
      {
        title: "Phytothérapie traditionnelle",
        desc: "Une approche éprouvée fondée sur l'utilisation sacrée et ancestrale des plantes.",
      },
      {
        title: "Qualité & confiance",
        desc: "PHYTO SANTÉ met l'accent sur la pureté des produits et l'accompagnement personnalisé.",
      },
      {
        title: "Bien-être au quotidien",
        desc: "Une solution douce destinée à accompagner votre démarche de guérison naturellement.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Mamadou K.",
        date: "18 Septembre 2026",
        rating: 5,
        comment:
          "Produit d'une efficacité remarquable. Après 5 jours d'utilisation selon la posologie, mes douleurs d'ulcère gastrique ont disparu. Je recommande vivement !",
        verified: true,
      },
      {
        id: "rev-2",
        author: "Awa D.",
        date: "10 Septembre 2026",
        rating: 5,
        comment:
          "Très satisfaite. La préparation à base de feuille de Telck et écorce de manguier m'a délivrée des crises d'hémorroïdes. Service client WhatsApp impeccable.",
        verified: true,
      },
      {
        id: "rev-3",
        author: "Désiré O.",
        date: "28 Août 2026",
        rating: 5,
        comment:
          "Qualité 100% naturelle. On ressent la vraie médecine traditionnelle. Le tarif promotionnel à 8 000 FCFA est une bénédiction.",
        verified: true,
      },
    ],
  },
  {
    id: "prod-2",
    slug: "melange-plantes-medicinales",
    name: "PHYTO SANTÉ — MÉLANGE DE PLANTES MÉDICINALES",
    category: "Phytothérapie & Vitalité",
    shortDescription:
      "Une préparation traditionnelle composée de plantes soigneusement sélectionnées pour favoriser la vitalité, le confort digestif et l'équilibre général de l'organisme.",
    description:
      "Découvrez le Mélange de Plantes Médicinales Phyto Santé, une préparation traditionnelle composée de plantes sélectionnées pour accompagner naturellement votre bien-être au quotidien. Le mélange associe différentes plantes et parties végétales préparées selon un savoir-faire traditionnel au Bénin. Chaque bouteille contient un assortiment de plantes séchées sélectionnées, permettant de conserver leur aspect naturel et leurs caractéristiques.",
    price: 15000,
    originalPrice: 25000,
    savings: 10000,
    currency: "FCFA",
    image: "/img/Pro 2.png",
    posterImage: "/img/A-Pro 2.png",
    available: true,
    salesCount: 1180,
    rating: 4.9,
    reviewsCount: 94,
    certification: "Préparation Végétale Traditionnelle — Fabriqué au Bénin 🇧🇯",
    ingredients: [
      {
        name: "Soutien du système immunitaire",
        icon: "🌿",
        desc: "Contribue au renforcement naturel des défenses de l'organisme.",
      },
      {
        name: "Confort digestif",
        icon: "🍃",
        desc: "Favorise l'apaisement digestif et le bien-être intestinal au quotidien.",
      },
      {
        name: "Fonctions d'élimination",
        icon: "💧",
        desc: "Accompagne les fonctions naturelles d'élimination et de détoxification de l'organisme.",
      },
      {
        name: "Vitalité & Équilibre général",
        icon: "⚡",
        desc: "Contribue à la vitalité, à l'énergie et à l'équilibre global du corps.",
      },
      {
        name: "100 % Naturel",
        icon: "🌱",
        desc: "Préparation traditionnelle à base de plantes séchées sélectionnées, sans ajout de produits chimiques.",
      },
      {
        name: "Fabriqué au Bénin",
        icon: "🇧🇯",
        desc: "Une confection authentique réalisée au Bénin à partir de plantes médicinales locales.",
      },
    ],
    posology: {
      instruction:
        "Utiliser l'assortiment de plantes séchées contenues dans la bouteille pour vos préparations traditionnelles et infusions selon votre routine de bien-être.",
      recommendation:
        "1 bouteille de Mélange de Plantes Médicinales Phyto Santé. Conserver à l'abri de l'humidité. Contactez notre équipe pour toute question sur les modes de préparation conseillés.",
    },
    keyPoints: [
      {
        title: "Plantes sélectionnées",
        desc: "Une sélection rigoureuse de plantes végétales destinée à accompagner votre routine de bien-être.",
      },
      {
        title: "Savoir-faire traditionnel",
        desc: "Une préparation inspirée des meilleures pratiques traditionnelles à base de plantes.",
      },
      {
        title: "Fabriqué au Bénin 🇧🇯",
        desc: "Une préparation réalisée au Bénin à partir de plantes médicinales locales.",
      },
      {
        title: "Bien-être naturel",
        desc: "Une approche douce destinée à accompagner votre santé et votre équilibre au quotidien.",
      },
    ],
    reviews: [
      {
        id: "rev-201",
        author: "Benoît A.",
        date: "22 Septembre 2026",
        rating: 5,
        comment:
          "Un mélange de plantes d'une qualité exceptionnelle ! On sent directement l'authenticité et la fraîcheur des plantes séchées du Bénin. Ma digestion et ma vitalité globale se sont grandement améliorées.",
        verified: true,
      },
      {
        id: "rev-202",
        author: "Nadine T.",
        date: "14 Septembre 2026",
        rating: 5,
        comment:
          "Très satisfaite de cet achat. L'offre promotionnelle à 15 000 FCFA au lieu de 25 000 FCFA vaut vraiment le coup. Merci au Cabinet Phyto Santé pour l'envoi rapide !",
        verified: true,
      },
      {
        id: "rev-203",
        author: "Ephrem K.",
        date: "02 Septembre 2026",
        rating: 5,
        comment:
          "Une vraie solution naturelle pour booster le système immunitaire. Je prends mon infusion tous les matins. Produit 100% recommandé !",
        verified: true,
      },
    ],
  },
  {
    id: "prod-3",
    slug: "hepatite-b",
    name: "PHYTO SANTÉ — HÉPATITE B",
    category: "Phytothérapie & Foie",
    shortDescription:
      "Préparation traditionnelle à base de plantes sélectionnées (Moringa, Oranger, Chêne, Néricula, Bifolia) dédiée au bien-être et au confort du foie.",
    description:
      "Une préparation de plantes proposée par Phyto Santé, élaborée à partir de plantes sélectionnées et présentée comme une solution naturelle destinée au bien-être du foie. Préparation réalisée au Bénin, sans aucun conservateur, inspirée du savoir-faire traditionnel ancestral.",
    price: 100000,
    originalPrice: 150000,
    savings: 50000,
    currency: "FCFA",
    image: "/img/Pro 3.png",
    posterImage: "/img/A-Pro 3.png",
    available: true,
    salesCount: 1320,
    rating: 4.9,
    reviewsCount: 108,
    certification: "Sans Conservateurs — Fabriqué au Bénin 🇧🇯",
    ingredients: [
      {
        name: "Feuille de Moringa",
        icon: "🌿",
        desc: "Plante protectrice d'exception riche en phytonutriments et antioxydants hépatiques.",
      },
      {
        name: "Feuille d'Oranger",
        icon: "🍊",
        desc: "Connue pour apaiser le système digestif et accompagner l'équilibre interne.",
      },
      {
        name: "Feuille de Chêne",
        icon: "🌳",
        desc: "Apporte des vertus tonifiantes et astringentes traditionnelles.",
      },
      {
        name: "Feuille de Néricula",
        icon: "🍃",
        desc: "Plante médicinale rare utilisée dans le savoir-faire ancestral du Bénin.",
      },
      {
        name: "Bifolia",
        icon: "🌱",
        desc: "Complexe végétal participant à la purification et au confort hépatique.",
      },
    ],
    posology: {
      instruction:
        "2 cuillères à café dans ½ verre d'eau tiède, le matin et le soir, pendant 3 mois, selon les indications figurant sur l'étiquette.",
      recommendation:
        "Offre Spéciale Traitement : 100 000 F CFA au lieu de 150 000 F CFA. Respecter la durée d'utilisation recommandée (3 mois) et demander conseil à Phyto Santé.",
    },
    keyPoints: [
      {
        title: "Préparation à base de plantes",
        desc: "Plantes médicinales sélectionnées et séchées dans le respect strict des traditions.",
      },
      {
        title: "Fabriquée au Bénin 🇧🇯",
        desc: "Confectionnée artisanalement au Bénin à partir de plantes récoltées locales.",
      },
      {
        title: "Sans conservateurs",
        desc: "Garantie 100% naturelle sans aucun ajout d'additifs ou de produits chimiques.",
      },
      {
        title: "Savoir-faire traditionnel",
        desc: "Une formule inspirée des meilleures recettes traditionnelles de la pharmacopée béninoise.",
      },
    ],
    reviews: [
      {
        id: "rev-301",
        author: "Lucien K.",
        date: "20 Septembre 2026",
        rating: 5,
        comment:
          "Une préparation de grande qualité. Après 1 mois d'utilisation à raison de 2 cuillères matin et soir, mon confort hépatique s'est nettement amélioré. L'offre promotionnelle à 100 000 F CFA est très avantageuse !",
        verified: true,
      },
      {
        id: "rev-302",
        author: "Clotilde V.",
        date: "11 Septembre 2026",
        rating: 5,
        comment:
          "Produit naturel d'une pureté remarquable. On sent la feuille de Moringa et d'Oranger. Service client WhatsApp toujours disponible et bienveillant.",
        verified: true,
      },
      {
        id: "rev-303",
        author: "Anicet D.",
        date: "29 Août 2026",
        rating: 5,
        comment:
          "Très satisfait du suivi Phyto Santé. Produit 100% naturel sans aucun conservateur. Je recommande !",
        verified: true,
      },
    ],
  },
  {
    id: "prod-4",
    slug: "colopathie",
    name: "PHYTO SANTÉ — COLOPATHIE",
    category: "Phytothérapie & Intestinal",
    shortDescription:
      "Formule traditionnelle à base de plantes (Feuilles de Telck, Racines de Régal, Écorce de Manguier) conçue pour accompagner le confort digestif, apaiser le transit et réduire les ballonnements.",
    description:
      "Découvrez la préparation Colopathie de Phyto Santé, une formule traditionnelle à base de plantes sélectionnées, conçue pour accompagner le confort digestif, apaiser le transit et favoriser le bien-être intestinal et abdominal au quotidien.",
    price: 8000,
    originalPrice: 15000,
    savings: 7000,
    currency: "FCFA",
    image: "/img/Pro 4.png",
    posterImage: "/img/A-Pro 4.png",
    available: true,
    salesCount: 1050,
    rating: 4.9,
    reviewsCount: 82,
    certification: "100% Naturel — Bien-être Digestif & Intestinal",
    ingredients: [
      {
        name: "Feuilles de Telck",
        icon: "🌿",
        desc: "Reconnues pour apaiser la paroi intestinale et calmer les irritations côliques.",
      },
      {
        name: "Racines de Régal",
        icon: "🌰",
        desc: "Participe activement à la régulation du transit et à l'élimination des gaz abdominaux.",
      },
      {
        name: "Écorce de Manguier",
        icon: "🌳",
        desc: "Riche en tanins naturels pour réguler la flore intestinale et réconforter le ventre.",
      },
    ],
    posology: {
      instruction:
        "Deux petites cuillères à une fois par jour.",
      recommendation:
        "Prix promotionnel : 8 000 F CFA au lieu de 15 000 F CFA. Pour une utilisation conforme, suivre les indications figurant sur l'emballage du produit.",
    },
    keyPoints: [
      {
        title: "Confort du transit",
        desc: "Aide à réguler le transit intestinal et à apaiser les spasmes.",
      },
      {
        title: "Réduction des ballonnements",
        desc: "Soulage efficacement les pesanteurs et les gonflements abdominaux.",
      },
      {
        title: "Confort abdominal",
        desc: "Offre une sensation immédiate de bien-être et de légèreté digestive.",
      },
      {
        title: "Savoir-faire traditionnel 🇧🇯",
        desc: "Une formule inspirée des meilleures connaissances traditionnelles relatives aux plantes.",
      },
    ],
    reviews: [
      {
        id: "rev-401",
        author: "Marcelin B.",
        date: "19 Septembre 2026",
        rating: 5,
        comment:
          "Formule excellente contre la colopathie et les ballonnements récurrents ! Après 4 jours d'utilisation, les douleurs abdominales se sont apaisées. Merci Phyto Santé !",
        verified: true,
      },
      {
        id: "rev-402",
        author: "Fatoumata S.",
        date: "08 Septembre 2026",
        rating: 5,
        comment:
          "Très bon complément naturel. L'association écorce de manguier et feuilles de Telck est super efficace. Le tarif promo à 8 000 FCFA est très abordable.",
        verified: true,
      },
      {
        id: "rev-403",
        author: "Gérard M.",
        date: "25 Août 2026",
        rating: 5,
        comment:
          "Livraison rapide. Produit conforme à l'affiche et très apaisant pour la digestion.",
        verified: true,
      },
    ],
  },
  {
    id: "prod-5",
    slug: "developpement-cheveux-et-barbe",
    name: "PHYTO SANTÉ — DÉVELOPPEMENT CHEVEUX & BARBE",
    category: "Soin & Beauté Végétale",
    shortDescription:
      "Formule à base de plantes sélectionnées destinée à accompagner la routine de soin du cuir chevelu, à stimuler la pousse des cheveux et à entretenir la barbe.",
    description:
      "Découvrez la préparation Phyto Santé – Développement des cheveux et barbe, formulée à base de plantes sélectionnées et destinée à accompagner la routine de soin du cuir chevelu, des cheveux et de la barbe. Elle permet de fortifier les bulbes pilaires, de nourrir le poil en profondeur et d'encourager la repousse naturelle.",
    price: 5000,
    originalPrice: 12000,
    savings: 7000,
    currency: "FCFA",
    image: "/img/Pro 5.png",
    posterImage: "/img/A-Pro 5.png",
    available: true,
    salesCount: 1650,
    rating: 4.9,
    reviewsCount: 114,
    certification: "Formule Capillaire 100% Naturelle — Fabriqué au Bénin 🇧🇯",
    ingredients: [
      {
        name: "Croissance & Entretien",
        icon: "🌱",
        desc: "Stimule la pousse naturelle des cheveux et favorise la densité de la barbe.",
      },
      {
        name: "Nutrition & Hydratation",
        icon: "💧",
        desc: "Nourrit la fibre capillaire et prévient la casse des cheveux et des poils.",
      },
      {
        name: "Revitalisation du cuir chevelu",
        icon: "🌿",
        desc: "Régénère le cuir chevelu et réactive les zones dégarnies ou clairsemées.",
      },
      {
        name: "Entretien de la barbe",
        icon: "🧔",
        desc: "Adoucit, densifie et structure la barbe pour un aspect soigné et vigoureux.",
      },
    ],
    posology: {
      instruction:
        "1. Mélanger le contenu dans du beurre propre (beurre de karité pur de préférence).\n2. Appliquer sur les parties qui en ont besoin.\n3. Utiliser pendant une durée recommandée de 21 jours, de préférence le soir au repos.",
      recommendation:
        "Prix promotionnel : 5 000 F CFA au lieu de 12 000 F CFA (Économie : 7 000 F CFA). Durée recommandée : 21 jours consécutifs le soir au coucher.",
    },
    keyPoints: [
      {
        title: "Formule à base de plantes",
        desc: "Composée de plantes sélectionnées pour une intégration facile dans votre routine quotidienne.",
      },
      {
        title: "Fabriqué au Bénin 🇧🇯",
        desc: "Savoir-faire local et plantes traditionnelles sélectionnées avec soin.",
      },
      {
        title: "Cure de 21 jours",
        desc: "Un protocole simple et efficace pour des résultats visibles et durables.",
      },
      {
        title: "Prix Promo Exceptionnel",
        desc: "Profitez actuellement du tarif de 5 000 F CFA au lieu de 12 000 F CFA.",
      },
    ],
    reviews: [
      {
        id: "rev-501",
        author: "Gilles V.",
        date: "21 Septembre 2026",
        rating: 5,
        comment:
          "Résultat incroyable sur ma barbe ! Après avoir mélangé la préparation avec du beurre de karité et appliqué chaque soir pendant 21 jours, ma barbe est devenue beaucoup plus dense et bien fournie. Merci !",
        verified: true,
      },
      {
        id: "rev-502",
        author: "Aristide N.",
        date: "12 Septembre 2026",
        rating: 5,
        comment:
          "Mes cheveux commençaient à se dégarnir sur les tempes. Après la cure de 21 jours, je constate de vrais petits repousses. Produit 100% naturel et livraison rapide.",
        verified: true,
      },
      {
        id: "rev-503",
        author: "Romaric K.",
        date: "30 Août 2026",
        rating: 5,
        comment:
          "Très bon rapport qualité-prix à 5 000 FCFA. Facile à utiliser avec du beurre de karité.",
        verified: true,
      },
    ],
  },
  {
    id: "prod-6",
    slug: "sinusite-et-migraine",
    name: "PHYTO SANTÉ — SINUSITE & MIGRAINE",
    category: "Phytothérapie & Voies Respiratoires",
    shortDescription:
      "Préparation à base de plantes sélectionnées (Eucalyptus, Gingembre, Menthe poivrée, Girofle) destinée à dégager les voies respiratoires et apaiser les maux de tête.",
    description:
      "Phyto Santé – Sinusite & Migraine est une préparation à base de plantes sélectionnées, présentée comme destinée à accompagner le confort des voies respiratoires et à aider à soulager les maux de tête associés à la sinusite et à la migraine.",
    price: 10000,
    originalPrice: 15000,
    savings: 5000,
    currency: "FCFA",
    image: "/img/Pro 6.png",
    posterImage: "/img/A-Pro 6.png",
    available: true,
    salesCount: 1240,
    rating: 4.9,
    reviewsCount: 98,
    certification: "Aromathérapie Traditionnelle — Fabriqué au Bénin 🇧🇯",
    ingredients: [
      {
        name: "Feuilles d'Eucalyptus",
        icon: "🌿",
        desc: "Plante aromatique majeure pour déboucher les voies respiratoires et assainir les sinus.",
      },
      {
        name: "Racines de Gingembre",
        icon: "🫚",
        desc: "Puissant anti-inflammatoire naturel aidant à réduire les tensions céphaliques.",
      },
      {
        name: "Menthe Poivrée",
        icon: "🌱",
        desc: "Apporte un effet rafraîchissant immédiat pour apaiser les migraines et maux de tête.",
      },
      {
        name: "Clous de Girofle",
        icon: "🌿",
        desc: "Propriétés antalgiques et décongestionnantes réputées en phytothérapie.",
      },
    ],
    posology: {
      instruction:
        "Placer 1 cuillère à café de la préparation sur la braise de charbon tiède afin que les composants aromatiques et vaporeux se diffusent dans la pièce.",
      recommendation:
        "Prix promotionnel : 10 000 F CFA au lieu de 15 000 F CFA. Utilisation de préférence le soir au coucher pendant 7 jours. Respecter les indications de l'emballage.",
    },
    keyPoints: [
      {
        title: "Libération des sinus",
        desc: "Dégage naturellement les voies respiratoires congestionnées.",
      },
      {
        title: "Apaisement des migraines",
        desc: "Soulage les tensions et maux de tête associés à la sinusite.",
      },
      {
        title: "100% Sans conservateurs",
        desc: "Formule pure à base de plantes séchées sélectionnées sans chimie.",
      },
      {
        title: "Fabriqué au Bénin 🇧🇯",
        desc: "Inspiré des traditions médicinales et aromatiques béninoises.",
      },
    ],
    reviews: [
      {
        id: "rev-601",
        author: "Fernand T.",
        date: "22 Septembre 2026",
        rating: 5,
        comment:
          "Incroyablement efficace ! Après avoir diffusé la cuillerée sur la braise le soir au coucher, mes sinus se sont immédiatement débouchés et ma migraine a disparu. Cure de 7 jours au top !",
        verified: true,
      },
      {
        id: "rev-602",
        author: "Bernadette G.",
        date: "13 Septembre 2026",
        rating: 5,
        comment:
          "Je souffrais de sinusite chronique chaque nuit. La fumigation d'eucalyptus, gingembre et menthe poivrée procure une sensation de soulagement immédiat. Merci Phyto Santé !",
        verified: true,
      },
      {
        id: "rev-603",
        author: "Armand B.",
        date: "01 Septembre 2026",
        rating: 5,
        comment:
          "Prix promo 10 000 FCFA bien mérité. Produit très aromatique et naturel.",
        verified: true,
      },
    ],
  },
  {
    id: "prod-7",
    slug: "tonique-vitalite-masculine",
    name: "PHYTO SANTÉ — TONIQUE VITALITÉ MASCULINE",
    category: "Intime & Vitalité Masculine",
    shortDescription:
      "Préparation traditionnelle à base de plantes sélectionnées, conçue pour accompagner la vitalité, l'énergie, la libido et le bien-être général de l'homme.",
    description:
      "Le Tonique Phyto Santé est une préparation traditionnelle à base de plantes, présentée comme destinée à accompagner la vitalité et le bien-être masculin. Sa formule est présentée comme pouvant accompagner la libido, l'énergie, la vigueur et les performances dans le cadre d'une routine de bien-être. Conditionné dans une élégante bouteille en verre.",
    price: 15000,
    originalPrice: 30000,
    savings: 15000,
    currency: "FCFA",
    image: "/img/Pro 7.png",
    posterImage: "/img/A-Pro 7.png",
    available: true,
    salesCount: 1890,
    rating: 4.9,
    reviewsCount: 136,
    certification: "Formule Végétale Traditionnelle — Fabriqué au Bénin 🇧🇯",
    ingredients: [
      {
        name: "Stimulation de la Libido",
        icon: "🔥",
        desc: "Aide à stimuler le désir sexuel et à réveiller la passion intime.",
      },
      {
        name: "Vitalité & Énergie",
        icon: "💪",
        desc: "Soutient la vigueur physique et fortifie l'organisme au quotidien.",
      },
      {
        name: "Accompagnement des Performances",
        icon: "⚡",
        desc: "Soutient les performances et l'endurance masculine.",
      },
      {
        name: "Détente & Anti-Fatigue",
        icon: "🧘",
        desc: "Favorise la relaxation, dissipe le stress et limite l'épuisement.",
      },
    ],
    posology: {
      instruction:
        "Prendre 1 mesure selon les traditions locales ou les indications figurant sur l'emballage. Consommer dans le cadre d'une routine régulière.",
      recommendation:
        "Prix promotionnel : 15 000 F CFA au lieu de 30 000 F CFA (Économisez 15 000 F CFA). 1 bouteille en verre. Contacter notre équipe pour tout conseil personnalisé.",
    },
    keyPoints: [
      {
        title: "Plantes sélectionnées",
        desc: "Recette traditionnelle élaborée à partir de plantes séchées d'Afrique de l'Ouest.",
      },
      {
        title: "Fabriqué au Bénin 🇧🇯",
        desc: "Une confection authentique inspirée du savoir-faire traditionnel béninois.",
      },
      {
        title: "Présentation en Bouteille",
        desc: "Flacon en verre préservant toute la fraîcheur et la puissance des principes actifs.",
      },
      {
        title: "Offre -50% Exclusive",
        desc: "Obtenez votre bouteille à 15 000 F CFA au lieu de 30 000 F CFA.",
      },
    ],
    reviews: [
      {
        id: "rev-701",
        author: "Edouard N.",
        date: "23 Septembre 2026",
        rating: 5,
        comment:
          "Ce tonique est extraordinaire ! Une énergie et une vigueur retrouvées dès les premiers jours. La qualité des plantes et le flacon en verre sont top. Je recommande vivement !",
        verified: true,
      },
      {
        id: "rev-702",
        author: "Patrice M.",
        date: "15 Septembre 2026",
        rating: 5,
        comment:
          "Très satisfait de l'effet tonifiant et anti-fatigue. La réduction de 15 000 FCFA est super intéressante. Livraison discrète et rapide.",
        verified: true,
      },
      {
        id: "rev-703",
        author: "Innocent B.",
        date: "04 Septembre 2026",
        rating: 5,
        comment:
          "Formule traditionnelle très puissante pour le bien-être masculin. Merci Phyto Santé !",
        verified: true,
      },
    ],
  },
  {
    id: "prod-8",
    slug: "degraissage-et-perte-de-poids",
    name: "PHYTO SANTÉ — DÉGRAISSAGE & PERTE DE POIDS",
    category: "Minceur & Bien-être",
    shortDescription:
      "Préparation naturelle de phytothérapie destinée à accompagner votre démarche de perte de poids, d'élimination des graisses et d'équilibre corporel.",
    description:
      "PHYTO SANTÉ — Dégraissage et Perte de Poids est une préparation présentée comme une solution naturelle destinée à accompagner les personnes souhaitant réduire leur poids et améliorer leur bien-être global. La marque PHYTO SANTÉ met en avant une approche basée sur la nature, l'équilibre et l'énergie. Fabriqué au Burkina Faso 🇧🇫 avec une exigence de qualité premium.",
    price: 7000,
    originalPrice: 12000,
    savings: 5000,
    currency: "FCFA",
    image: "/img/Pro 8.png",
    posterImage: "/img/A-Pro 8.png",
    available: true,
    salesCount: 1410,
    rating: 4.9,
    reviewsCount: 104,
    certification: "Phytothérapie Minceur Premium — Fabriqué au Burkina Faso 🇧🇫",
    ingredients: [
      {
        name: "100 % Naturel",
        icon: "🌿",
        desc: "Formule élaborée à partir d'ingrédients et d'extraits d'origine 100% végétale.",
      },
      {
        name: "Fabriqué au Burkina Faso",
        icon: "🇧🇫",
        desc: "Conception et fabrication artisanale soignée au Burkina Faso.",
      },
      {
        name: "Qualité Premium",
        icon: "⭐",
        desc: "Exigence de pureté et d'accompagnement rigoureux au cœur de la marque.",
      },
      {
        name: "Accompagnement Global",
        icon: "🏃",
        desc: "S'intègre dans une démarche saine : alimentation équilibrée, hydratation et sport.",
      },
    ],
    posology: {
      instruction:
        "Mélanger la préparation selon les conseils recommandés (beurre de karité pur) et appliquer localement sur les zones ciblées. Préférable le soir au coucher.",
      recommendation:
        "Prix promotionnel : 7 000 F CFA au lieu de 12 000 F CFA. Contactez directement l'équipe Phyto Santé sur WhatsApp (+226 05 85 50 17) pour la notice complète et l'accompagnement personnalisé.",
    },
    keyPoints: [
      {
        title: "Dégraissage ciblé",
        desc: "Destiné aux personnes souhaitant intégrer une solution naturelle de gestion du poids.",
      },
      {
        title: "Fabriqué au Burkina Faso 🇧🇫",
        desc: "Produit fabriqué au Burkina Faso avec des ingrédients de qualité.",
      },
      {
        title: "Santé & Bien-être",
        desc: "Une approche naturelle orientée vers l'équilibre corporel, l'énergie et la légèreté.",
      },
      {
        title: "Offre Promo Limitée",
        desc: "Profitez du prix promotionnel de 7 000 FCFA seulement pendant la période de l'offre.",
      },
    ],
    reviews: [
      {
        id: "rev-801",
        author: "Sylvie O.",
        date: "20 Septembre 2026",
        rating: 5,
        comment:
          "Très satisfaite de cette préparation minceur ! En appliquant le soir au coucher avec un léger massage et en buvant beaucoup d'eau, j'ai constaté un vrai affinement du ventre. Super rapport qualité-prix à 7 000 FCFA.",
        verified: true,
      },
      {
        id: "rev-802",
        author: "Rasmata Z.",
        date: "11 Septembre 2026",
        rating: 5,
        comment:
          "Produit naturel d'excellente qualité venant du Burkina Faso. Les conseils sur WhatsApp m'ont beaucoup aidée pour ma routine minceur.",
        verified: true,
      },
      {
        id: "rev-803",
        author: "Hermann K.",
        date: "28 Août 2026",
        rating: 5,
        comment:
          "Accompagne très bien mes séances de sport et mon alimentation. Je recommande vivement Phyto Santé.",
        verified: true,
      },
    ],
  },
];

// Helper functions to get products
export function getProductByIdOrSlug(idOrSlug: string): Product | undefined {
  return productsData.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );
}
