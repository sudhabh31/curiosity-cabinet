import type { Item } from "@/content/types";

export const honey: Item = {
  slug: "honey",
  name: "Honey",
  hook: "One bee makes about a twelfth of a teaspoon in its whole life.",
  accent: "mustard",

  flow: [
    {
      id: "flowers",
      caption: "Flowers bloom and make nectar",
      detail:
        "Nectar is a sweet liquid that flowers produce on purpose — it's bait, to get insects to visit and accidentally carry pollen to other flowers.",
    },
    {
      id: "bees-visit",
      caption: "Bees fly out and collect nectar",
      detail:
        "A worker bee visits 50–100 flowers on a single trip, sipping nectar into a special pouch in her body called a honey stomach.",
      duration: "thousands of trips",
    },
    {
      id: "hive",
      caption: "Back at the hive, the nectar is shared",
      detail:
        "Bees pass the nectar from mouth to mouth, adding enzymes that start turning it into honey.",
    },
    {
      id: "honeycomb",
      caption: "Stored in honeycomb cells",
      detail:
        "The nectar is dropped into hexagonal wax cells. Bees fan it with their wings to dry it out — too much water and it would spoil.",
      duration: "a few days",
    },
    {
      id: "capped",
      caption: "Sealed under a wax cap",
      detail:
        "Once it's the right thickness, bees seal each cell with a thin wax lid. Sealed honey can keep for thousands of years.",
    },
    {
      id: "harvested",
      caption: "Beekeepers harvest the honey",
      detail:
        "Beekeepers carefully take out the honey-filled frames, slice off the wax caps, and spin the honey out so they can jar it.",
    },
  ],

  stat: {
    headline: "1/12th of a teaspoon",
    body: "One worker bee makes about that much honey in her entire 6-week life. A jar holds the lifetime work of around 800 bees.",
  },

  history: [
    "People have been hunting honey for at least 8,000 years — there's a famous cave painting in Spain of a person climbing a cliff to reach a wild beehive. For most of human history it was the main way to make food sweet.",
    "Ancient Egyptians figured out how to keep bees in clay pots, so they didn't have to climb cliffs anymore. They left jars of honey in pyramids; some of it has been found, thousands of years later, still edible.",
    "Sugar from sugar cane spread across the world in the 1500s, and honey slowly lost its place as the main sweetener. But bees haven't lost their job — they still pollinate roughly a third of the food we eat.",
  ],

  uses: [
    { label: "Toast" },
    { label: "Tea" },
    { label: "Pancakes" },
    { label: "Baking" },
    { label: "Sore-throat remedy" },
    { label: "Yogurt drizzle" },
  ],

  didYouKnow: {
    fact: "Honey is the only food that genuinely never spoils. Archaeologists have found edible honey in 3,000-year-old Egyptian tombs.",
  },

  sources: [
    {
      title: "Honey — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Honey",
    },
    {
      title: "Honey bee — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Honey_bee",
    },
    {
      title: "Beekeeping — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Beekeeping",
      note: "How humans have kept bees for thousands of years.",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "honey-flow-scramble",
      itemSlug: "honey",
      correctOrder: ["flowers", "bees-visit", "hive", "honeycomb"],
    },
    {
      type: "mystery-item",
      id: "honey-mystery",
      distractors: [],
      answer: "honey",
      clues: [
        "I start as sweet flower bait.",
        "I'm stored in hexagonal wax rooms before I'm sealed.",
        "Egyptians put me in tombs and I'm still edible 3,000 years later.",
      ],
    },
  ],
};
