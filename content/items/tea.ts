import type { Item } from "@/content/types";

export const tea: Item = {
  slug: "tea",
  name: "Tea",
  hook: "Six leaves dried, rolled, and poured into hot water.",
  accent: "warm-gray",

  flow: [
    {
      id: "bushes-grow",
      caption: "Tea bushes grow on hillsides",
      detail:
        "Tea is one plant — Camellia sinensis — grown as a waist-high bush. Higher altitudes and cooler air make better-tasting leaves.",
      duration: "year-round",
    },
    {
      id: "leaves-plucked",
      caption: "Workers pluck the youngest leaves",
      detail:
        "Only the top bud and two newest leaves go to make good tea. Skilled pickers grab the right ones by eye, leaving the older leaves alone.",
    },
    {
      id: "withered",
      caption: "Leaves wither in the air",
      detail:
        "Spread on big trays, the leaves lose about half their water. They go limp — that's what 'withering' means.",
      duration: "12–18 hours",
    },
    {
      id: "rolled",
      caption: "Leaves are rolled and bruised",
      detail:
        "Rolling cracks the leaves open and lets their natural juices mix with oxygen — the step that makes black tea different from green.",
    },
    {
      id: "oxidised",
      caption: "Black tea: oxidised; green tea: not",
      detail:
        "If the rolled leaves are left to oxidise, they turn dark and develop the bold black-tea flavour. Green tea skips this step.",
      duration: "0–4 hours",
    },
    {
      id: "fired",
      caption: "Fired and dried",
      detail:
        "Heat stops the leaves changing any further and dries them out so they keep for months in a tin.",
    },
  ],

  stat: {
    headline: "5,000 years of tea-drinking",
    body: "People in China have been making this same drink, from this same plant, for longer than written history.",
  },

  history: [
    "According to Chinese legend, tea was discovered around 2737 BCE when leaves blew into Emperor Shen Nong's pot of boiling water. The real story is fuzzier, but tea-drinking definitely started in China and spread alongside Buddhist monks, who used it to stay awake during long meditations.",
    "Tea reached Europe in the 1600s on Dutch and Portuguese ships, and became a craze in Britain. Demand was so huge that the British government taxed it heavily — leading directly to the Boston Tea Party and the American Revolution.",
    "Today tea is the most-drunk beverage in the world after water. Even though it comes from one plant, the way it's processed creates wildly different drinks: green, black, white, oolong, and pu-erh.",
  ],

  uses: [
    { label: "Morning cup" },
    { label: "Iced tea" },
    { label: "Chai" },
    { label: "Bubble tea" },
    { label: "Kombucha" },
    { label: "Matcha desserts" },
  ],

  didYouKnow: {
    fact: "Green tea, black tea, oolong, and white tea are all made from the same plant — the only difference is how the leaves are dried and oxidised.",
  },

  sources: [
    { title: "Tea — Wikipedia", url: "https://en.wikipedia.org/wiki/Tea" },
    {
      title: "History of tea — Wikipedia",
      url: "https://en.wikipedia.org/wiki/History_of_tea",
      note: "From legend to colonial trade.",
    },
    {
      title: "Camellia sinensis — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Camellia_sinensis",
      note: "The actual plant.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "tea-flow-scramble",
      itemSlug: "tea",
      correctOrder: ["bushes-grow", "leaves-plucked", "withered", "rolled"],
    },
    {
      type: "mystery-item",
      id: "tea-mystery",
      distractors: [],
      answer: "tea",
      clues: [
        "I'm made from the leaves of one specific bush.",
        "Whether you call me green or black depends on how long I'm left in the air.",
        "I helped start the American Revolution.",
      ],
    },
  ],
};
