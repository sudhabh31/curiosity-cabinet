/**
 * Chocolate — reference implementation.
 *
 * This item is the template every other item is cloned from. If you
 * change the shape here (e.g. add a section), update content/types.ts
 * and the section components, not just this file.
 */

import type { Item } from "@/content/types";

export const chocolate: Item = {
  slug: "chocolate",
  name: "Chocolate",
  hook: "Once so precious, the Aztecs used it as money.",
  accent: "terracotta",

  // No real illustration yet — PlaceholderIllustration will stand in.
  // When the SVG arrives, drop it at /public/illustrations/chocolate/hero.svg
  // and set: heroIllustration: "/illustrations/chocolate/hero.svg".

  flow: [
    {
      id: "tree-flowers",
      caption: "The cocoa tree flowers",
      detail:
        "Tiny white flowers grow straight out of the trunk and big branches — a botanical quirk called cauliflory.",
      duration: "year-round",
    },
    {
      id: "pods-ripen",
      caption: "Colourful pods grow and ripen",
      detail:
        "Each flower that gets pollinated turns into a football-shaped pod. They start green and ripen to red, orange or yellow.",
      duration: "5–6 months",
    },
    {
      id: "beans-scooped",
      caption: "Beans are scooped from the pods",
      detail:
        "Inside each pod are 30–50 cocoa beans wrapped in sweet white pulp. Right now, they don't taste anything like chocolate.",
    },
    {
      id: "fermented",
      caption: "Beans ferment in banana leaves",
      detail:
        "Piled up and covered, the beans heat up and ferment. This is the step that turns them into something that will taste like chocolate.",
      duration: "5–7 days",
    },
    {
      id: "sun-dried",
      caption: "Dried in the sun",
      detail:
        "Spread out on big wooden tables and turned by hand until they go from soggy to crackly-dry.",
      duration: "1–2 weeks",
    },
    {
      id: "roasted-ground",
      caption: "Roasted and ground into chocolate liquor",
      detail:
        "Roasting brings out the chocolate flavour. The roasted beans get crushed into a thick, dark paste — confusingly called chocolate liquor (no alcohol).",
    },
    {
      id: "mixed-molded",
      caption: "Mixed with sugar and milk, then moulded into bars",
      detail:
        "Sugar makes it sweet, milk makes it creamy, and the whole thing gets warmed, cooled, warmed again (a trick called tempering), then poured into bar moulds.",
    },
  ],

  stat: {
    headline: "About 9 months, flower to bar",
    body: "And one cocoa tree's whole year of work makes only enough beans for around 4 chocolate bars.",
  },

  history: [
    "People in Central America were drinking chocolate around 4,000 years ago — but not the kind you'd recognise. It was bitter, frothy, and often mixed with chilli. Cocoa beans were so valuable that the Maya and Aztecs used them as money: a turkey cost about 100 beans, a tomato cost one.",
    "When Spanish explorers brought cocoa back to Europe in the 1500s, somebody had the idea of adding sugar. Suddenly the bitter drink became a sweet drink, and chocolate became the most fashionable thing in royal courts across Europe.",
    "For a long time, chocolate was still only a drink. The solid chocolate bar wasn't invented until 1847, by a British company called Fry's. Milk chocolate came along about thirty years later — and that's roughly the bar you'd find in a shop today.",
  ],

  uses: [
    { label: "Hot chocolate" },
    { label: "Birthday cakes" },
    { label: "Ice cream" },
    { label: "Easter eggs" },
    { label: "Cookies & brownies" },
    { label: "Valentine's gifts" },
  ],

  didYouKnow: {
    fact: "Cocoa trees grow their flowers and pods right out of the trunk and main branches — most fruit trees keep their fruit on the twigs.",
  },

  sources: [
    {
      title: "Chocolate — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Chocolate",
      note: "Overview, processing, and types.",
    },
    {
      title: "History of chocolate — Wikipedia",
      url: "https://en.wikipedia.org/wiki/History_of_chocolate",
      note: "From the Olmec to the modern bar.",
    },
    {
      title: "Theobroma cacao — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Theobroma_cacao",
      note: "The cocoa tree itself.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "chocolate-flow-scramble",
      itemSlug: "chocolate",
      // Use the first four step ids so the puzzle stays approachable.
      correctOrder: ["tree-flowers", "pods-ripen", "beans-scooped", "fermented"],
    },
    {
      type: "mystery-item",
      id: "chocolate-mystery",
      // Distractors are filled in by the per-scene quiz assembler from
      // the scene's other items — see lib/quiz.ts (built in story 8).
      distractors: [],
      answer: "chocolate",
      clues: [
        "I start as a tiny flower growing straight out of a tree trunk.",
        "Before I taste like anything, I spend a week fermenting in banana leaves.",
        "The Aztecs liked me so much they used me as money.",
      ],
    },
  ],
};
