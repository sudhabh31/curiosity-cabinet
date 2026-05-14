import type { Item } from "@/content/types";

export const orangeJuice: Item = {
  slug: "orange-juice",
  name: "Orange Juice",
  hook: "Squeezed from trees most likely thousands of kilometres away.",
  accent: "mustard",

  flow: [
    {
      id: "trees-grow",
      caption: "Orange trees grow in warm places",
      detail:
        "Most orange juice in the world comes from Brazil and the US state of Florida — both warm enough that oranges can grow year-round.",
    },
    {
      id: "fruit-ripens",
      caption: "Fruit ripens green to orange",
      detail:
        "Oranges start green and slowly turn orange as the cool nights of late autumn break down the green pigment. In some tropical places they stay green even when ripe!",
      duration: "8–12 months",
    },
    {
      id: "harvested",
      caption: "Picked by hand or machine",
      detail:
        "Juice oranges are usually picked by big mechanical 'shakers' that vibrate the tree. Fruit destined for the supermarket gets gentler hand-picking.",
    },
    {
      id: "washed-squeezed",
      caption: "Washed and squeezed in giant machines",
      detail:
        "Industrial juicers crack each orange in half and squeeze. The peel gets used too — for orange oil, marmalade, even cattle feed.",
    },
    {
      id: "pasteurised",
      caption: "Quickly heated to kill germs",
      detail:
        "Like milk, the juice is briefly heated to about 90°C. That's why supermarket juice doesn't spoil for weeks even before you open it.",
      duration: "20 seconds",
    },
    {
      id: "bottled-shipped",
      caption: "Bottled or frozen, then shipped",
      detail:
        "Juice is either chilled and bottled, or frozen into concentrate — a thick paste that's much cheaper to ship and gets water added back at the destination.",
    },
  ],

  stat: {
    headline: "About 5 oranges per glass",
    body: "Each glass of OJ is the squeezed inside of roughly five whole oranges. Now imagine the trees they came from.",
  },

  history: [
    "Oranges started life as a wild fruit in Southeast Asia. They spread west slowly: Arab traders brought them to the Mediterranean in the Middle Ages, and Spanish and Portuguese sailors carried them to the Americas in the 1500s.",
    "Florida turned into orange country by accident. Spanish settlers planted trees in the 1500s; the climate suited them; by the 1900s Florida was producing oranges by the million.",
    "Orange juice as a breakfast drink is mostly a 20th-century invention. Frozen concentrate, invented during World War II, let companies ship juice cheaply across the country. Marketing campaigns in the 1950s and 60s convinced households that 'A glass of OJ' was an essential part of breakfast — and the habit stuck.",
  ],

  uses: [
    { label: "Breakfast drink" },
    { label: "Smoothies" },
    { label: "Cocktails (mocktails)" },
    { label: "Marinades" },
    { label: "Ice pops" },
    { label: "Cake glaze" },
  ],

  didYouKnow: {
    fact: "Supermarket orange juice tastes 'right' because flavour packs are added back in. Storage makes the juice lose its taste, so makers boost it before bottling.",
  },

  sources: [
    {
      title: "Orange juice — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Orange_juice",
    },
    {
      title: "Orange (fruit) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Orange_(fruit)",
    },
    {
      title: "Citrus — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Citrus",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "orange-juice-flow-scramble",
      itemSlug: "orange-juice",
      correctOrder: ["trees-grow", "fruit-ripens", "harvested", "washed-squeezed"],
    },
    {
      type: "mystery-item",
      id: "orange-juice-mystery",
      distractors: [],
      answer: "orange-juice",
      clues: [
        "It takes about five whole fruits to make one glass of me.",
        "Most of me comes from Brazil or Florida.",
        "I taste 'right' partly because the makers add flavour back in after storage.",
      ],
    },
  ],
};
