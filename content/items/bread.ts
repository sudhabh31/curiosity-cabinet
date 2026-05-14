import type { Item } from "@/content/types";

export const bread: Item = {
  slug: "bread",
  name: "Bread",
  hook: "Living dough — every loaf is half-baked by tiny creatures.",
  accent: "mustard",

  flow: [
    {
      id: "wheat",
      caption: "Wheat grows in big golden fields",
      detail:
        "Wheat is planted in autumn or spring and grows for about 7–8 months until the grain turns dry and golden.",
      duration: "7–8 months",
    },
    {
      id: "harvested",
      caption: "Combines harvest the grain",
      detail:
        "A combine harvester cuts the stalks and separates the grain from the rest of the plant — all in one rumble down the field.",
    },
    {
      id: "milled",
      caption: "Grain is milled into flour",
      detail:
        "The hard wheat grains are crushed between huge rollers until they're a soft white powder. The bran (the outer shell) gets sifted out, or kept in for brown bread.",
    },
    {
      id: "mixed",
      caption: "Flour + water + yeast + salt",
      detail:
        "Yeast is a tiny fungus. Mixed into dough, it eats sugars and breathes out bubbles of carbon dioxide — which is what makes bread rise.",
    },
    {
      id: "risen",
      caption: "The dough rises (twice)",
      detail:
        "Left in a warm place, the yeast goes to work. The dough doubles in size. It's punched down and rises again, which makes the bread softer.",
      duration: "1–3 hours",
    },
    {
      id: "baked",
      caption: "Baked in a hot oven",
      detail:
        "The high heat kills the yeast (their job is done!), sets the structure of the loaf, and turns the outside crust golden brown.",
      duration: "25–35 minutes",
    },
  ],

  stat: {
    headline: "Trillions of tiny fungi inside every loaf",
    body: "A single teaspoon of fresh yeast contains around 20 billion cells. They're all working at once to puff up your bread.",
  },

  history: [
    "Bread is one of the oldest foods we know about. People in Jordan were baking flat, cracker-like loaves around 14,000 years ago — even before farming existed. Once we started growing wheat on purpose, bread became the centre of meals across most of the world.",
    "Risen bread (the soft, fluffy kind) was an Egyptian invention. Egyptians figured out that wild yeast floating in the air would make dough puff up if you waited long enough. They built the first ovens to bake it in.",
    "For most of history, bread was the main thing people ate — sometimes two or three loaves a day per person. The Industrial Revolution brought factories and sliced supermarket loaves; in the last century, bread became just one part of a meal instead of the meal itself.",
  ],

  uses: [
    { label: "Toast" },
    { label: "Sandwiches" },
    { label: "Garlic bread" },
    { label: "French toast" },
    { label: "Croutons" },
    { label: "Bread pudding" },
  ],

  didYouKnow: {
    fact: "The hole-y look inside bread is made by trapped carbon dioxide — gas that yeast breathed out while the dough was rising.",
  },

  sources: [
    {
      title: "Bread — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Bread",
    },
    {
      title: "History of bread — Wikipedia",
      url: "https://en.wikipedia.org/wiki/History_of_bread",
      note: "14,000 years of loaves.",
    },
    {
      title: "Yeast — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Yeast",
      note: "The microscopic creature doing the work.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "bread-flow-scramble",
      itemSlug: "bread",
      correctOrder: ["wheat", "harvested", "milled", "mixed"],
    },
    {
      type: "mystery-item",
      id: "bread-mystery",
      distractors: [],
      answer: "bread",
      clues: [
        "I start in a golden field.",
        "Tiny living fungi puff me up before I'm cooked.",
        "I've been a meal for humans for around 14,000 years.",
      ],
    },
  ],
};
