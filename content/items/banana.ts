import type { Item } from "@/content/types";

export const banana: Item = {
  slug: "banana",
  name: "Banana",
  hook: "Probably travelled further than you have in your whole life.",
  accent: "sage",

  flow: [
    {
      id: "plant",
      caption: "Banana plants grow in the tropics",
      detail:
        "Despite looking like a tree, a banana plant is actually a giant herb. It can grow to its full 5-metre height in less than a year.",
      duration: "9–12 months",
    },
    {
      id: "flower",
      caption: "A huge purple flower appears",
      detail:
        "Each plant produces one enormous flower stem. The bananas grow upward from it in clusters called 'hands'.",
    },
    {
      id: "harvested-green",
      caption: "Harvested while still green",
      detail:
        "Workers cut the whole bunch down. Bananas are picked unripe so they can survive the long journey without going mushy.",
    },
    {
      id: "shipped",
      caption: "Shipped halfway around the world",
      detail:
        "Bananas are packed into chilled containers and travel on huge ships from Latin America, the Caribbean, and Asia — sometimes 8,000 km or more.",
      duration: "1–3 weeks",
    },
    {
      id: "ripened",
      caption: "Ripened in special warehouses",
      detail:
        "Once they arrive, bananas are put in rooms with a tiny bit of ethylene gas — a natural ripening signal — to turn them from green to yellow.",
      duration: "3–8 days",
    },
    {
      id: "yours",
      caption: "Onto the shelf, into your fruit bowl",
      detail:
        "By the time you peel one, it's travelled further than most people travel in a year.",
    },
  ],

  stat: {
    headline: "Up to 8,000 km from plant to plate",
    body: "Almost every banana sold in cold countries was grown in the tropics. Yours probably crossed an ocean.",
  },

  history: [
    "Bananas have been cultivated for around 7,000 years — first in New Guinea, then spreading slowly across Asia and Africa. Most early bananas were small, full of seeds, and not very sweet.",
    "The kind you eat is called the Cavendish, and almost every Cavendish banana on Earth is a clone of one plant grown in an English greenhouse in the 1830s. They have no seeds, which makes them easy to eat but also impossible to grow from a pip.",
    "Bananas became a global breakfast food in the early 1900s, when refrigerated ships made it possible to send fragile fruit across the world without it spoiling. Before that, most people in Europe and North America had never tasted one.",
  ],

  uses: [
    { label: "Cereal topping" },
    { label: "Smoothies" },
    { label: "Banana bread" },
    { label: "Pancakes" },
    { label: "Snack on the go" },
    { label: "Ice cream" },
  ],

  didYouKnow: {
    fact: "Almost every banana you eat is a clone — genetically identical to one plant from the 1830s. That's why every Cavendish tastes the same.",
  },

  quizContributions: [
    {
      type: "flow-scramble",
      id: "banana-flow-scramble",
      itemSlug: "banana",
      correctOrder: ["plant", "flower", "harvested-green", "shipped"],
    },
    {
      type: "mystery-item",
      id: "banana-mystery",
      distractors: [],
      answer: "banana",
      clues: [
        "I grow on a giant herb, not a tree.",
        "I'm picked while green and ripened in a special warehouse.",
        "Almost all of me on Earth is a clone of one plant.",
      ],
    },
  ],
};
