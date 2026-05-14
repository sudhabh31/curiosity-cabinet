import type { Item } from "@/content/types";

export const butter: Item = {
  slug: "butter",
  name: "Butter",
  hook: "Cream, shaken until it breaks into something new.",
  accent: "mustard",

  flow: [
    {
      id: "cream-rises",
      caption: "Cream rises to the top of milk",
      detail:
        "Whole milk left to settle separates: lighter, fattier cream floats up, leaving thinner milk underneath. Modern dairies do this with spinning centrifuges in minutes.",
    },
    {
      id: "cream-cooled",
      caption: "Cream is chilled overnight",
      detail:
        "Cold cream churns better. Some butter-makers also let it sour gently — that's what gives 'cultured' butter its tangy flavour.",
    },
    {
      id: "churned",
      caption: "Churned hard until it breaks",
      detail:
        "The cream is beaten or shaken. Tiny fat droplets bump into each other and clump together. Suddenly the whole thing splits into yellow lumps and a thin watery liquid.",
      duration: "10–30 minutes",
    },
    {
      id: "buttermilk-drained",
      caption: "The buttermilk is poured off",
      detail:
        "What's left from the split — a thin, slightly sour liquid — is buttermilk. It's a useful drink and baking ingredient on its own.",
    },
    {
      id: "washed-shaped",
      caption: "Butter is rinsed and shaped",
      detail:
        "Cold water rinses off any leftover buttermilk so the butter keeps longer. Then it's pressed into blocks or rolls.",
    },
    {
      id: "salted-packed",
      caption: "Salted (or not), then wrapped",
      detail:
        "A pinch of salt makes butter last longer and pop with flavour. Unsalted butter is preferred for baking, where the recipe controls the salt.",
    },
  ],

  stat: {
    headline: "20 cups of cream for one cup of butter",
    body: "Cream is mostly water and milk — only the fatty bits become butter, so it takes a lot to make a little.",
  },

  history: [
    "Butter is one of humanity's oldest dairy inventions — going back about 4,500 years to herders in what's now the Middle East and Central Asia. They figured out that shaking cream in a bag turned it into something solid that kept much longer than milk.",
    "For most of history, butter was a luxury. In medieval Europe, the church even forbade eating it on fasting days. In Norway and Ireland, people buried barrels of butter in bogs as a kind of long-term savings — some of these 'bog butter' lumps still survive today, thousands of years later.",
    "Modern industrial butter dates from the late 1800s, when centrifuges replaced hand-churns and creameries could turn out tonnes a day. The basic chemistry is unchanged — it's still cream, broken.",
  ],

  uses: [
    { label: "Toast" },
    { label: "Croissants" },
    { label: "Cookies & cake" },
    { label: "Pancakes" },
    { label: "Fried eggs" },
    { label: "Buttered popcorn" },
  ],

  didYouKnow: {
    fact: "There's such a thing as 'bog butter' — ancient Irish butter buried in peat bogs over a thousand years ago. Some of it is still edible, just very strong-tasting.",
  },

  sources: [
    { title: "Butter — Wikipedia", url: "https://en.wikipedia.org/wiki/Butter" },
    { title: "Cream — Wikipedia", url: "https://en.wikipedia.org/wiki/Cream" },
    {
      title: "Butter churn — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Butter_churn",
      note: "Old tools that did this by hand.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "butter-flow-scramble",
      itemSlug: "butter",
      correctOrder: ["cream-rises", "cream-cooled", "churned", "buttermilk-drained"],
    },
    {
      type: "mystery-item",
      id: "butter-mystery",
      distractors: [],
      answer: "butter",
      clues: [
        "I'm what happens when cream is shaken hard enough to break.",
        "It takes about 20 cups of my source to make one cup of me.",
        "People in medieval Ireland buried barrels of me in peat bogs.",
      ],
    },
  ],
};
