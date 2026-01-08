const coffeeRecipes = [
  // Boissons pré-entraînement (léger, énergisant)
  {
    name: "Espresso Pur",
    type: "pre-training",
    calories: 2,
    ingredients: ["1 espresso (30ml)"],
    benefits: "Caféine pure, zéro sucre, énergie immédiate.",
    image: "https://images.unsplash.com/photo-1517701550927-36593e4690cb"
  },
  {
    name: "Espresso Citron",
    type: "pre-training",
    calories: 10,
    ingredients: ["1 espresso", "jus de 1/2 citron", "100ml d’eau"],
    benefits: "Vitamine C + caféine pour un boost sans acidité.",
    image: "https://images.unsplash.com/photo-1512568400612-fd9f78f7b4f0"
  },
  {
    name: "Café Glacé aux Épices",
    type: "pre-training",
    calories: 80,
    ingredients: ["1 espresso", "100ml lait de coco light", "glace", "cannelle", "édulcorant"],
    benefits: "Rafraîchissant, léger, anti-inflammatoire (cannelle).",
    image: "https://images.unsplash.com/photo-1534778111833-7f0b73c2c108"
  },
  {
    name: "Matcha Latte Léger",
    type: "pre-training",
    calories: 120,
    ingredients: ["1 cuillère à café de matcha", "200ml lait d’amande non sucré", "1 cuillère de miel"],
    benefits: "Antioxydants, énergie durable sans crash.",
    image: "https://images.unsplash.com/photo-1579228262078-78dbfb89b5d3"
  },
  {
    name: "Café aux Noisettes",
    type: "pre-training",
    calories: 100,
    ingredients: ["1 espresso", "150ml lait écrémé", "1 cuillère à café de sirop de noisette sans sucre"],
    benefits: "Goût riche sans excès de calories.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
  },
  {
    name: "Thé Vert Matcha Caféiné",
    type: "pre-training",
    calories: 30,
    ingredients: ["1/2 cuillère à café de matcha", "1/2 cuillère à café de thé vert", "200ml eau chaude", "édulcorant"],
    benefits: "Combinaison caféine + L-théanine pour une énergie stable.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    name: "Café Glacé à la Vanille",
    type: "pre-training",
    calories: 60,
    ingredients: ["1 espresso", "100ml lait d’avoine", "extrait de vanille", "glace"],
    benefits: "Léger et parfumé, sans sucre ajouté.",
    image: "https://images.unsplash.com/photo-1534787356955-7a5345a5d2c0"
  },
  {
    name: "Café aux Agrumes",
    type: "pre-training",
    calories: 40,
    ingredients: ["1 espresso", "zeste d’orange", "100ml eau pétillante"],
    benefits: "Vitamine C + caféine pour un effet revigorant.",
    image: "https://images.unsplash.com/photo-1517686817309-62e3c8a77bf7"
  },
  {
    name: "Café au Gingembre",
    type: "pre-training",
    calories: 20,
    ingredients: ["1 espresso", "1 tranche de gingembre frais", "100ml eau chaude"],
    benefits: "Anti-inflammatoire + énergie.",
    image: "https://images.unsplash.com/photo-1517686817309-62e3c8a77bf7"
  },
  {
    name: "Café Glacé Menthe-Citron",
    type: "pre-training",
    calories: 50,
    ingredients: ["1 espresso", "100ml eau", "feuilles de menthe", "jus de citron", "édulcorant"],
    benefits: "Rafraîchissant et digestif.",
    image: "https://images.unsplash.com/photo-1516387768977-2a1f32a5533c"
  },

  // Boissons post-entraînement (récupération, protéines, glucides)
  {
    name: "Smoothie Café-Protéine",
    type: "post-training",
    calories: 350,
    ingredients: ["1 espresso", "1 banane", "200ml lait de coco", "1 scoop protéine vanille"],
    benefits: "Protéines pour les muscles + glucides pour l’énergie.",
    image: "https://images.unsplash.com/photo-1505253716362-128f8b338ded"
  },
  {
    name: "Latte Avoine Cacao",
    type: "post-training",
    calories: 280,
    ingredients: ["1 espresso", "200ml lait d’avoine", "1 cuillère à café de cacao", "1 datte"],
    benefits: "Glucides lents (avoine) + magnésium (cacao).",
    image: "https://images.unsplash.com/photo-1534778111833-7f0b73c2c108"
  },
  {
    name: "Moka Chocolat Chaud",
    type: "post-training",
    calories: 250,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Confortable et riche en magnésium.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    name: "Café aux Dattes",
    type: "post-training",
    calories: 300,
    ingredients: ["1 espresso", "200ml lait d’amande", "2 dattes mixées", "cannelle"],
    benefits: "Glucides naturels (dattes) + fibres.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    name: "Smoothie Vert Café",
    type: "post-training",
    calories: 220,
    ingredients: ["1 espresso", "1/2 banane", "1 poignée d’épinards", "200ml lait de soja"],
    benefits: "Récupération + vitamines (épinards).",
    image: "https://images.unsplash.com/photo-1512621424457-42c63f77f07f"
  },
  {
    name: "Latte Curcuma",
    type: "post-training",
    calories: 180,
    ingredients: ["1 espresso", "200ml lait de coco", "1/2 cuillère à café de curcuma", "poivre"],
    benefits: "Anti-inflammatoire (curcuma) + récupération.",
    image: "https://images.unsplash.com/photo-1516387768977-2a1f32a5533c"
  },
  {
    name: "Café aux Amandes",
    type: "post-training",
    calories: 270,
    ingredients: ["1 espresso", "200ml lait d’amande", "1 cuillère à café de purée d’amande", "cannelle"],
    benefits: "Bonnes graisses (amandes) + protéines.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
  },
  {
    name: "Chocolat Chaud Caféiné",
    type: "post-training",
    calories: 200,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Réconfortant et riche en antioxydants.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    name: "Smoothie Café-Framboise",
    type: "post-training",
    calories: 240,
    ingredients: ["1 espresso", "10 framboises", "200ml yaourt grec", "1 cuillère à café de miel"],
    benefits: "Protéines (yaourt) + antioxydants (framboises).",
    image: "https://images.unsplash.com/photo-1512621424457-42c63f77f07f"
  },
  {
    name: "Latte Protéiné Caramel",
    type: "post-training",
    calories: 320,
    ingredients: ["1 espresso", "200ml lait", "1 scoop protéine vanille", "1 cuillère à café de sirop caramel"],
    benefits: "Protéines + glucides pour récupération intense.",
    image: "https://images.unsplash.com/photo-1505253716362-128f8b338ded"
  }
];
