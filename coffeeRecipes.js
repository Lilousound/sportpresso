const coffeeRecipes = [
  // Boissons pré-entraînement (léger, énergisant)
  {
    name: "Espresso Pur",
    type: "pre-training",
    calories: 2,
    ingredients: ["1 espresso (30ml)"],
    benefits: "Caféine pure, zéro sucre, énergie immédiate.",
    image: "https://images.unsplash.com/photo-1593412323862-55bd8bb39099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVzcHJlc3NvfGVufDB8fDB8fHwy"
  },
  {
    name: "Espresso Citron",
    type: "pre-training",
    calories: 10,
    ingredients: ["1 espresso", "jus de 1/2 citron", "100ml d’eau"],
    benefits: "Vitamine C + caféine pour un boost sans acidité.",
    image: "https://images.unsplash.com/photo-1682530017002-34e2cb7b1653?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc28lMjBjaXRyb258ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Café Glacé aux Épices",
    type: "pre-training",
    calories: 80,
    ingredients: ["1 espresso", "100ml lait de coco light", "glace", "cannelle", "édulcorant"],
    benefits: "Rafraîchissant, léger, anti-inflammatoire (cannelle).",
    image: "https://images.unsplash.com/photo-1752917069627-0753ec7a7915?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhZiVDMyVBOSUyMEdsYWMlQzMlQTklMjBhdXglMjAlQzMlODlwaWNlc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    name: "Matcha Latte Léger",
    type: "pre-training",
    calories: 120,
    ingredients: ["1 cuillère à café de matcha", "200ml lait d’amande non sucré", "1 cuillère de miel"],
    benefits: "Antioxydants, énergie durable sans crash.",
    image: "https://images.unsplash.com/photo-1749280447307-31a68eb38673?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Noisettes",
    type: "pre-training",
    calories: 100,
    ingredients: ["1 espresso", "150ml lait écrémé", "1 cuillère à café de sirop de noisette sans sucre"],
    benefits: "Goût riche sans excès de calories.",
    image: "https://images.unsplash.com/photo-1634235581210-57db377b7b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FmJUMzJUE5JTIwYXV4JTIwTm9pc2V0dGVzfGVufDB8fDB8fHwy"
  },
  {
    name: "Thé Vert Matcha Caféiné",
    type: "pre-training",
    calories: 30,
    ingredients: ["1/2 cuillère à café de matcha", "1/2 cuillère à café de thé vert", "200ml eau chaude", "édulcorant"],
    benefits: "Combinaison caféine + L-théanine pour une énergie stable.",
    image: "https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGglQzMlQTklMjBWZXJ0JTIwTWF0Y2hhJTIwQ2FmJUMzJUE5aW4lQzMlQTl8ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Café Glacé à la Vanille",
    type: "pre-training",
    calories: 60,
    ingredients: ["1 espresso", "100ml lait d’avoine", "extrait de vanille", "glace"],
    benefits: "Léger et parfumé, sans sucre ajouté.",
    image: "https://images.unsplash.com/photo-1728978095941-ac7dea0cebdf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Agrumes",
    type: "pre-training",
    calories: 40,
    ingredients: ["1 espresso", "zeste d’orange", "100ml eau pétillante"],
    benefits: "Vitamine C + caféine pour un effet revigorant.",
    image: "https://images.unsplash.com/photo-1749104953117-de9d9c9f1db1?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café au Gingembre",
    type: "pre-training",
    calories: 20,
    ingredients: ["1 espresso", "1 tranche de gingembre frais", "100ml eau chaude"],
    benefits: "Anti-inflammatoire + énergie.",
    image: "https://images.unsplash.com/photo-1628702774354-f09e4a167a8e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café Glacé Menthe-Citron",
    type: "pre-training",
    calories: 50,
    ingredients: ["1 espresso", "100ml eau", "feuilles de menthe", "jus de citron", "édulcorant"],
    benefits: "Rafraîchissant et digestif.",
    image: "https://images.unsplash.com/photo-1676159435366-ed3c8cdd3567?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },



  // Boissons post-entraînement (récupération, protéines, glucides)
  {
    name: "Smoothie Café-Protéine",
    type: "post-training",
    calories: 350,
    ingredients: ["1 espresso", "1 banane", "200ml lait de coco", "1 scoop protéine vanille"],
    benefits: "Protéines pour les muscles + glucides pour l’énergie.",
    image: "https://images.unsplash.com/photo-1622818425825-1dcdb3a39c30?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Avoine Cacao",
    type: "post-training",
    calories: 280,
    ingredients: ["1 espresso", "200ml lait d’avoine", "1 cuillère à café de cacao", "1 datte"],
    benefits: "Glucides lents (avoine) + magnésium (cacao).",
    image: "https://images.unsplash.com/photo-1676300184414-04105aaf9318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGF0dGUlMjBBdm9pbmUlMjBDYWNhb3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    name: "Moka Chocolat Chaud",
    type: "post-training",
    calories: 250,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Confortable et riche en magnésium.",
    image: "https://images.unsplash.com/photo-1584367585746-f1ac207ab20e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Dattes",
    type: "post-training",
    calories: 300,
    ingredients: ["1 espresso", "200ml lait d’amande", "2 dattes mixées", "cannelle"],
    benefits: "Glucides naturels (dattes) + fibres.",
    image: "https://images.unsplash.com/photo-1704083043828-c6bf76d71028?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smoothie Vert Café",
    type: "post-training",
    calories: 220,
    ingredients: ["1 espresso", "1/2 banane", "1 poignée d’épinards", "200ml lait de soja"],
    benefits: "Récupération + vitamines (épinards).",
    image: "https://images.unsplash.com/photo-1575080376330-489dcfa11533?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Curcuma",
    type: "post-training",
    calories: 180,
    ingredients: ["1 espresso", "200ml lait de coco", "1/2 cuillère à café de curcuma", "poivre"],
    benefits: "Anti-inflammatoire (curcuma) + récupération.",
    image: "https://images.unsplash.com/photo-1669219695489-9163d12a2611?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Café aux Amandes",
    type: "post-training",
    calories: 270,
    ingredients: ["1 espresso", "200ml lait d’amande", "1 cuillère à café de purée d’amande", "cannelle"],
    benefits: "Bonnes graisses (amandes) + protéines.",
    image: "https://images.unsplash.com/photo-1588523779311-c88d79069048?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhZiVDMyVBOSUyMGF1eCUyMEFtYW5kZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    name: "Chocolat Chaud Caféiné",
    type: "post-training",
    calories: 200,
    ingredients: ["1 espresso", "200ml lait", "1 cuillère à café de cacao", "1 cuillère à café de miel"],
    benefits: "Réconfortant et riche en antioxydants.",
    image: "https://images.unsplash.com/photo-1584825285640-ed85c96f3667?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smoothie Café-Framboise",
    type: "post-training",
    calories: 240,
    ingredients: ["1 espresso", "10 framboises", "200ml yaourt grec", "1 cuillère à café de miel"],
    benefits: "Protéines (yaourt) + antioxydants (framboises).",
    image: "https://images.unsplash.com/photo-1667328011998-b7556ca3a5af?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Latte Protéiné Caramel",
    type: "post-training",
    calories: 320,
    ingredients: ["1 espresso", "200ml lait", "1 scoop protéine vanille", "1 cuillère à café de sirop caramel"],
    benefits: "Protéines + glucides pour récupération intense.",
    image: "https://images.unsplash.com/photo-1626595444746-59219e6838ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGF0dGUlMjBQcm90JUMzJUE5aW4lQzMlQTklMjBDYXJhbWVsfGVufDB8fDB8fHwy"
  }
];
