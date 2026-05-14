import type { Item } from "@/content/types";

export const eggs: Item = {
  slug: "eggs",
  name: "Eggs",
  hook: "A whole bird's beginning, packaged in a calcium shell.",
  accent: "dusty-blue",

  flow: [
    {
      id: "hen-eats",
      caption: "A hen eats grain, grit, and greens",
      detail:
        "To make one egg, a hen needs calcium for the shell, protein for the white, and fats for the yolk — all from her food.",
    },
    {
      id: "yolk-forms",
      caption: "The yolk grows inside her body",
      detail:
        "Every hen is born with thousands of tiny yolk seeds. One ripens at a time, growing into a full yolk inside her ovary.",
      duration: "10 days to mature",
    },
    {
      id: "white-wraps",
      caption: "The white wraps around the yolk",
      detail:
        "As the yolk travels down a long tube called the oviduct, layers of egg white (albumen) build up around it. This is also where the twisty 'rope' that holds the yolk in place forms.",
      duration: "about 3 hours",
    },
    {
      id: "shell-builds",
      caption: "A hard shell forms in the last few hours",
      detail:
        "The egg sits in the hen's shell gland and gets a coat of calcium carbonate added in layers. The colour (white, brown, blue) is added right at the end.",
      duration: "20 hours",
    },
    {
      id: "laid",
      caption: "Laid in a nest",
      detail:
        "From start to finish, making one egg takes about 25 hours — which is why a good layer hen lays just under one egg a day.",
    },
    {
      id: "collected",
      caption: "Collected, washed, graded, boxed",
      detail:
        "On farms, eggs are gathered, checked for cracks under a bright light (called 'candling'), sorted by size, and packed into cartons.",
    },
  ],

  stat: {
    headline: "25 hours, start to shell",
    body: "A laying hen turns yesterday's grain into today's egg in just over a day.",
  },

  history: [
    "Today's chickens come from a wild bird called the red junglefowl, native to Southeast Asian forests. People domesticated them around 8,000 years ago — possibly first for cockfighting, only later for eggs and meat.",
    "Chickens spread west along the same trade routes as silk and spices, reaching Europe by Roman times. Romans were the first to keep them in large flocks specifically for eggs.",
    "For most of history, hens laid eggs only in spring and summer (when there was enough daylight). Modern egg farming uses artificial lighting to keep hens laying all year round — which is why eggs are now a year-round breakfast instead of a seasonal treat.",
  ],

  uses: [
    { label: "Fried" },
    { label: "Scrambled" },
    { label: "Boiled" },
    { label: "Cakes & bakes" },
    { label: "Omelettes" },
    { label: "Pasta" },
  ],

  didYouKnow: {
    fact: "A hen with white feathers usually lays white eggs; a hen with brown feathers usually lays brown ones. Inside they're identical.",
  },

  sources: [
    {
      title: "Egg as food — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Egg_as_food",
    },
    {
      title: "Chicken — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Chicken",
      note: "Descendant of the red junglefowl.",
    },
    {
      title: "Eggshell — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Eggshell",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "eggs-flow-scramble",
      itemSlug: "eggs",
      correctOrder: ["hen-eats", "yolk-forms", "white-wraps", "shell-builds"],
    },
    {
      type: "mystery-item",
      id: "eggs-mystery",
      distractors: [],
      answer: "eggs",
      clues: [
        "I take about 25 hours to make, from start to finish.",
        "I come in white, brown, and even blue \u2014 depending on my mother's feathers.",
        "My ancestors came from a wild bird called the red junglefowl.",
      ],
    },
  ],
};
