import type { Item } from "@/content/types";

export const cereal: Item = {
  slug: "cereal",
  name: "Cereal",
  hook: "Invented in a hospital by a doctor who wanted to calm people down.",
  accent: "sage",

  flow: [
    {
      id: "grain-grows",
      caption: "Grain grows in big fields",
      detail:
        "Most breakfast cereal starts as corn, wheat, oats, or rice — the same grains that make bread, porridge, and a thousand other foods.",
      duration: "5–8 months",
    },
    {
      id: "harvested-cleaned",
      caption: "Harvested and cleaned",
      detail:
        "Combine harvesters cut the grain. It's then washed, sorted, and dried so it stores well in the factory.",
    },
    {
      id: "cooked",
      caption: "Cooked into a soft mash",
      detail:
        "Whole grain is cooked under pressure in huge steamers until it's soft and squishy — kind of like wet porridge before it dries out.",
      duration: "1–2 hours",
    },
    {
      id: "shaped",
      caption: "Flaked, puffed, or shaped",
      detail:
        "Soft cooked grain gets squashed between hot rollers (cornflakes), shot through a hot nozzle (puffed rice), or pressed into shapes (Os, stars, animals).",
    },
    {
      id: "toasted",
      caption: "Toasted to make it crunchy",
      detail:
        "A trip through a hot oven dries the cereal out and makes it crunchy. This is also when it gets its golden colour.",
    },
    {
      id: "coated-boxed",
      caption: "Coated with sugar or vitamins, then boxed",
      detail:
        "Many cereals get sprayed with a sugar coating, dried fruit, or extra vitamins, then poured into boxes and shipped to supermarkets.",
    },
  ],

  stat: {
    headline: "1894 — invented in a sanitarium",
    body: "Dr. John Harvey Kellogg created cornflakes at his hospital in Battle Creek, Michigan. He believed bland food kept people calm and healthy.",
  },

  history: [
    "Breakfast cereal was invented at a strange American institution: the Battle Creek Sanitarium, run by Dr. John Harvey Kellogg in the late 1800s. Kellogg believed many illnesses were caused by spicy food and meat, and prescribed a plain vegetarian diet for his patients.",
    "In 1894, Kellogg accidentally invented cornflakes while trying to make a more digestible breakfast. He left some cooked wheat too long; it dried out and flaked when rolled. He tried it with corn next, and a new kind of food was born.",
    "His brother W.K. Kellogg saw the business potential, added sugar (which the doctor disapproved of), and started the company that still bears their name. By the 1950s, sugar-coated cereal had become a billion-dollar industry — and a fixture on Saturday-morning TV.",
  ],

  uses: [
    { label: "Breakfast bowl" },
    { label: "Yogurt topping" },
    { label: "Granola bars" },
    { label: "Trail mix" },
    { label: "Crispy cake crust" },
    { label: "Snacking dry" },
  ],

  didYouKnow: {
    fact: "Rice Krispies 'snap, crackle, and pop' because hot puffed rice has tiny air pockets — when milk hits them, the walls break and you hear it.",
  },

  sources: [
    {
      title: "Breakfast cereal — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Breakfast_cereal",
    },
    {
      title: "Corn flakes — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Corn_flakes",
    },
    {
      title: "John Harvey Kellogg — Wikipedia",
      url: "https://en.wikipedia.org/wiki/John_Harvey_Kellogg",
      note: "The inventor; an eccentric figure.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "cereal-flow-scramble",
      itemSlug: "cereal",
      correctOrder: ["grain-grows", "harvested-cleaned", "cooked", "shaped"],
    },
    {
      type: "mystery-item",
      id: "cereal-mystery",
      distractors: [],
      answer: "cereal",
      clues: [
        "I was invented in 1894 in a hospital cafeteria.",
        "I'm made by cooking, flaking, and toasting grain.",
        "My inventor believed bland food kept his patients calm.",
      ],
    },
  ],
};
