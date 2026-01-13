const coffeeRecipes = [
  // Boissons pré-entraînement (léger, énergisant)
  {
    name: "Espresso Pur",
    type: "pre-training",
    calories: 2,
    ingredients: ["1 espresso (30ml)"],
    benefits: "Caféine pure, zéro sucre, énergie immédiate.",
    instructions: [
      "1. Préchauffe ta machine à espresso.",
      "2. Moud 18–20g de grains de café (finesse adaptée à l’espresso).",
      "3. Tamponne le café dans le porte-filtre et insère-le dans la machine.",
      "4. Extrais 30ml d’espresso (temps d’extraction idéal : 25–30 secondes).",
      "5. Déguste immédiatement pour un effet énergisant maximal."
    ],
    image: "https://images.unsplash.com/photo-1593412323862-55bd8bb39099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVzcHJlc3NvfGVufDB8fDB8fHwy"
  },
  {
    name: "Espresso Citron",
    type: "pre-training",
    calories: 10,
    ingredients: ["1 espresso", "jus de 1/2 citron", "100ml d’eau"],
    benefits: "Vitamine C + caféine pour un boost sans acidité.",
    instructions: [
      "1. Prépare un espresso (voir recette 'Espresso Pur').",
      "2. Presse le jus d’un demi-citron dans une tasse.",
      "3. Ajoute 100ml d’eau tiède (pas bouillante pour préserver la vitamine C).",
      "4. Verse l’espresso dans la tasse et mélange doucement.",
      "5. À boire frais, idéalement 15–20 minutes avant l’effort."
    ],
    image: "https://images.unsplash.com/photo-1682530017002-34e2cb7b1653?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc28lMjBjaXRyb258ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Café Glacé aux Épices",
    type: "pre-training",
    calories: 80,
    ingredients: ["1 espresso", "100ml lait de coco light", "glace", "cannelle", "édulcorant"],
    benefits: "Rafraîchissant, léger, anti-inflammatoire (cannelle).",
    instructions: [
      "1. Prépare un espresso et laisse-le refroidir.",
      "2. Dans un verre, ajoute des glaçons jusqu’à mi-hauteur.",
      "3. Verse le lait de coco light sur les glaçons.",
      "4. Ajoute l’espresso refroidi et saupoudre de cannelle.",
      "5. Mélange rapidement avec une cuillère et déguste immédiatement."
    ],
    image: "https://images.unsplash.com/photo-1752917069627-0753ec7a7915?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhZiVDMyVBOSUyMEdsYWMlQzMlQTklMjBhdXglMjAlQzMlODlwaWNlc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    name: "Matcha Latte Léger",
    type: "pre-training",
    calories: 120,
    ingredients: ["1 cuillère à café de matcha", "200ml lait d’amande non sucré", "1 cuillère de miel"],
    benefits: "Antioxydants, énergie durable sans crash.",
    instructions: [
      "1. Chauffe le lait d’amande à 60–70°C (sans ébullition).",
      "2. Dans un bol, mélange le matcha avec un peu d’eau chaude pour former une pâte.",
      "3. Verse le lait chaud dans le bol et fouette énergiquement pour éviter les grumeaux.",
      "4. Ajoute le miel et mélange bien.",
      "5. Verse dans une tasse et déguste avant l’entraînement pour une énergie stable."
    ],
    image: "https://images.unsplash.com/photo-1749280447307-31a68eb38673?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Noisettes",
    type: "pre-training",
    calories: 100,
    ingredients: ["1 espresso", "150ml lait écrémé", "1 cuillère à café de sirop de noisette sans sucre"],
    benefits: "Goût riche sans excès de calories.",
    instructions: [
      "1. Prépare un espresso.",
      "2. Fais chauffer le lait écrémé (sans ébullition).",
      "3. Dans une tasse, verse le sirop de noisette.",
      "4. Ajoute l’espresso, puis le lait chaud.",
      "5. Mélange et déguste tiède pour un goût optimal."
    ],
    image: "https://images.unsplash.com/photo-1634235581210-57db377b7b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FmJUMzJUE5JTIwYXV4JTIwTm9pc2V0dGVzfGVufDB8fDB8fHwy"
  },
  {
    name: "Thé Vert Matcha Caféiné",
    type: "pre-training",
    calories: 30,
    ingredients: ["1/2 cuillère à café de matcha", "1/2 cuillère à café de thé vert", "200ml eau chaude", "édulcorant"],
    benefits: "Combinaison caféine + L-théanine pour une énergie stable.",
    instructions: [
      "1. Mélange le matcha et le thé vert dans une tasse.",
      "2. Ajoute un peu d’eau chaude pour former une pâte.",
      "3. Complète avec le reste d’eau (80°C max pour éviter l’amertume).",
      "4. Ajoute l’édulcorant et mélange bien.",
      "5. Laisse infuser 2–3 minutes avant de boire pour un effet énergisant progressif."
    ],
    image: "https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGglQzMlQTklMjBWZXJ0JTIwTWF0Y2hhJTIwQ2FmJUMzJUE5aW4lQzMlQTl8ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Café Glacé à la Vanille",
    type: "pre-training",
    calories: 60,
    ingredients: ["1 espresso", "100ml lait d’avoine", "extrait de vanille", "glace"],
    benefits: "Léger et parfumé, sans sucre ajouté.",
    instructions: [
      "1. Prépare un espresso et laisse-le refroidir.",
      "2. Dans un shaker, mélange le lait d’avoine avec 2 gouttes d’extrait de vanille.",
      "3. Ajoute des glaçons et secoue légèrement.",
      "4. Verse dans un verre, ajoute l’espresso refroidi et mélange.",
      "5. Déguste frais pour un effet revigorant."
    ],
    image: "https://images.unsplash.com/photo-1728978095941-ac7dea0cebdf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Agrumes",
    type: "pre-training",
    calories: 40,
    ingredients: ["1 espresso", "zeste d’orange", "100ml eau pétillante"],
    benefits: "Vitamine C + caféine pour un effet revigorant.",
    instructions: [
      "1. Prépare un espresso et laisse-le refroidir.",
      "2. Râpe un peu de zeste d’orange dans un verre.",
      "3. Ajoute l’eau pétillante froide.",
      "4. Verse l’espresso refroidi et mélange doucement.",
      "5. À boire frais, idéal pour un coup de boost avant le sport."
    ],
    image: "https://images.unsplash.com/photo-1749104953117-de9d9c9f1db1?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café au Gingembre",
    type: "pre-training",
    calories: 20,
    ingredients: ["1 espresso", "1 tranche de gingembre frais", "100ml eau chaude"],
    benefits: "Anti-inflammatoire + énergie.",
    instructions: [
      "1. Prépare un espresso.",
      "2. Émince finement une tranche de gingembre et ajoute-la dans une tasse.",
      "3. Verse l’eau chaude sur le gingembre et laisse infuser 2 minutes.",
      "4. Ajoute l’espresso et mélange.",
      "5. Déguste tiède pour profiter des bienfaits du gingembre."
    ],
    image: "https://images.unsplash.com/photo-1628702774354-f09e4a167a8e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café Glacé Menthe-Citron",
    type: "pre-training",
    calories: 50,
    ingredients: ["1 espresso", "100ml eau", "feuilles de menthe", "jus de citron", "édulcorant"],
    benefits: "Rafraîchissant et digestif.",
    instructions: [
      "1. Prépare un espresso et laisse-le refroidir.",
      "2. Dans un verre, écrase 2–3 feuilles de menthe avec le jus de citron.",
      "3. Ajoute les glaçons et l’eau.",
      "4. Verse l’espresso refroidi et mélange.",
      "5. Ajoute l’édulcorant si besoin et déguste frais."
    ],
    image: "https://images.unsplash.com/photo-1676159435366-ed3c8cdd3567?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },



  // Boissons post-entraînement (récupération, protéines, glucides)
  {
    name: "Smoothie Café-Protéine",
    type: "post-training",
    calories: 350,
    ingredients: ["1 espresso", "1 banane", "200ml lait de coco", "1 scoop protéine vanille"],
    benefits: "Protéines pour les muscles + glucides pour l’énergie.",
    instructions: [
      "1. Mixe la banane, le lait de coco et la protéine en poudre jusqu’à obtenir un mélange lisse.",
      "2. Prépare un espresso et laisse-le refroidir.",
      "3. Verse l’espresso dans le smoothie et mélange à nouveau.",
      "4. Ajoute des glaçons si tu préfères une boisson fraîche.",
      "5. Déguste dans les 30 minutes après l’entraînement pour une récupération optimale."
    ],
    image: "https://images.unsplash.com/photo-1622818425825-1dcdb3a39c30?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Avoine Cacao",
    type: "post-training",
    calories: 280,
    ingredients: ["1 espresso", "200ml lait d’avoine", "1 cuillère à café de cacao", "1 datte"],
    benefits: "Glucides lents (avoine) + magnésium (cacao).",
    instructions: [
      "1. Fais chauffer le lait d’avoine à feu doux (sans ébullition).",
      "2. Dans une tasse, mélange le cacao avec un peu de lait chaud pour former une pâte.",
      "3. Ajoute la datte dénoyautée et écrase-la pour la mélanger.",
      "4. Verse le reste du lait chaud et l’espresso.",
      "5. Fouette pour homogénéiser et déguste tiède pour une récupération douce."
    ],
    image: "https://images.unsplash.com/photo-1676300184414-04105aaf9318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGF0dGUlMjBBdm9pbmUlMjBDYWNhb3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    name: "Moka Chocolat Chaud",
    type: "post-training",
    calories: 250,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Confortable et riche en magnésium.",
    instructions: [
      "1. Dans une casserole, chauffe le lait avec le cacao et le miel à feu doux.",
      "2. Prépare un espresso séparément.",
      "3. Verse le lait chaud dans une tasse, puis ajoute l’espresso.",
      "4. Mélange bien pour homogénéiser.",
      "5. Déguste lentement pour profiter des bienfaits du cacao."
    ],
    image: "https://images.unsplash.com/photo-1584367585746-f1ac207ab20e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Dattes",
    type: "post-training",
    calories: 300,
    ingredients: ["1 espresso", "200ml lait d’amande", "2 dattes mixées", "cannelle"],
    benefits: "Glucides naturels (dattes) + fibres.",
    instructions: [
      "1. Mixe les dattes dénoyautées avec un peu de lait d’amande pour former une pâte.",
      "2. Fais chauffer le reste du lait d’amande (sans ébullition).",
      "3. Prépare un espresso et ajoute-le au lait chaud.",
      "4. Incorpore la pâte de dattes et saupoudre de cannelle.",
      "5. Mélange bien et déguste pour une récupération énergétique."
    ],
    image: "https://images.unsplash.com/photo-1704083043828-c6bf76d71028?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smoothie Vert Café",
    type: "post-training",
    calories: 220,
    ingredients: ["1 espresso", "1/2 banane", "1 poignée d’épinards", "200ml lait de soja"],
    benefits: "Récupération + vitamines (épinards).",
    instructions: [
      "1. Mixe la banane, les épinards et le lait de soja jusqu’à obtenir un mélange lisse.",
      "2. Prépare un espresso et laisse-le refroidir.",
      "3. Verse l’espresso dans le smoothie et mélange à nouveau.",
      "4. Ajoute des glaçons si tu préfères une boisson fraîche.",
      "5. Déguste pour une récupération riche en nutriments."
    ],
    image: "https://images.unsplash.com/photo-1575080376330-489dcfa11533?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Curcuma",
    type: "post-training",
    calories: 180,
    ingredients: ["1 espresso", "200ml lait de coco", "1/2 cuillère à café de curcuma", "poivre"],
    benefits: "Anti-inflammatoire (curcuma) + récupération.",
    instructions: [
      "1. Fais chauffer le lait de coco avec le curcuma et une pincée de poivre (pour activer le curcuma).",
      "2. Prépare un espresso séparément.",
      "3. Verse le lait chaud dans une tasse, puis ajoute l’espresso.",
      "4. Mélange bien pour homogénéiser la couleur.",
      "5. Déguste tiède pour profiter des bienfaits anti-inflammatoires."
    ],
    image: "https://images.unsplash.com/photo-1669219695489-9163d12a2611?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Amandes",
    type: "post-training",
    calories: 270,
    ingredients: ["1 espresso", "200ml lait d’amande", "1 cuillère à café de purée d’amande", "cannelle"],
    benefits: "Bonnes graisses (amandes) + protéines.",
    instructions: [
      "1. Fais chauffer le lait d’amande avec la purée d’amande à feu doux.",
      "2. Prépare un espresso séparément.",
      "3. Verse le lait chaud dans une tasse, ajoute l’espresso et mélange.",
      "4. Saupoudre de cannelle pour rehausser les saveurs.",
      "5. Déguste pour une récupération riche en bonnes graisses."
    ],
    image: "https://images.unsplash.com/photo-1588523779311-c88d79069048?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhZiVDMyVBOSUyMGF1eCUyMEFtYW5kZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Chocolat Chaud Caféiné",
    type: "post-training",
    calories: 200,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Réconfortant et riche en antioxydants.",
    instructions: [
      "1. Dans une casserole, chauffe le lait avec le cacao et le miel à feu doux.",
      "2. Prépare un espresso séparément.",
      "3. Verse le lait chaud dans une tasse, puis ajoute l’espresso.",
      "4. Mélange bien pour homogénéiser.",
      "5. Déguste lentement pour une récupération réconfortante."
    ],
    image: "https://images.unsplash.com/photo-1584825285640-ed85c96f3667?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smoothie Café-Framboise",
    type: "post-training",
    calories: 240,
    ingredients: ["1 espresso", "10 framboises", "200ml yaourt grec", "1 cuillère à café de miel"],
    benefits: "Protéines (yaourt) + antioxydants (framboises).",
    instructions: [
      "1. Mixe les framboises, le yaourt grec et le miel jusqu’à obtenir un mélange lisse.",
      "2. Prépare un espresso et laisse-le refroidir.",
      "3. Verse l’espresso dans le smoothie et mélange à nouveau.",
      "4. Ajoute des glaçons si tu préfères une boisson fraîche.",
      "5. Déguste pour une récupération fruité et protéinée."
    ],
    image: "https://images.unsplash.com/photo-1667328011998-b7556ca3a5af?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Protéiné Caramel",
    type: "post-training",
    calories: 320,
    ingredients: ["1 espresso", "200ml lait", "1 scoop protéine vanille", "1 cuillère à café de sirop caramel"],
    benefits: "Protéines + glucides pour récupération intense.",
    instructions: [
      "1. Fais chauffer le lait à feu doux (sans ébullition).",
      "2. Dans un shaker, mélange la protéine en poudre avec un peu de lait pour éviter les grumeaux.",
      "3. Ajoute le reste du lait et le sirop caramel, puis secoue bien.",
      "4. Prépare un espresso et verse-le dans le mélange.",
      "5. Déguste dans les 30 minutes après l’entraînement pour une récupération optimale."
    ],
    image: "https://images.unsplash.com/photo-1626595444746-59219e6838ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGF0dGUlMjBQcm90JUMzJUE5aW4lQzMlQTklMjBDYXJhbWVsfGVufDB8fDB8fHwy"
  }
];
