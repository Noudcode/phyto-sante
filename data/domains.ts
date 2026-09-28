export interface Domain {
  id: string;
  title: string;
  image: string;
  items: string[];
}

export const domainsData: Domain[] = [
  {
    id: "bien-etre-intime",
    title: "Bien-être général, intime et fertilité",
    image: "/images/domain_intimate.jpg",
    items: [
      "Produits naturels",
      "Solutions naturelles pour la vitalité intime",
      "Soutien en cas d'éjaculation précoce",
      "Vitalité masculine",
      "Santé reproductive",
    ],
  },
  {
    id: "accompagnement-spirituel",
    title: "Accompagnement spirituel personnalisé",
    image: "/images/domain_spiritual.jpg",
    items: [
      "Protection spirituel et élevation",
      "Ouverture aux opportunités",
      "Déblocage et libération des obstacles",
      "Purification et rééquilibrage spirituel",
      "Transmission des savoirs traditionnels",
    ],
  },
  {
    id: "harmonie-conjugale",
    title: "Harmonie conjugale et familiale",
    image: "/images/domain_family.jpg",
    items: [
      "Stabilité et harmonie du foyer",
      "Rapprochement et réconciliation",
      "Renforcement des liens affectifs",
      "Équilibre conjugal",
      "Accompagnement conception & grossesse",
    ],
  },
];

export const commitmentStatement = {
  quote: "La qualité, la discrétion et le respect de chaque personne sont au cœur de notre engagement.",
  description:
    "Phyto Santé s'engage à offrir des produits de qualité associés à un suivi sérieux, des solutions discrètes et professionnelles, dans le respect des valeurs et des convictions de chaque personne.",
};
