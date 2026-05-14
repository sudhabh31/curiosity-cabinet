import type { Item } from "@/content/types";

export const milk: Item = {
  slug: "milk",
  name: "Milk",
  hook: "Travels from a cow to your cereal in less than 48 hours.",
  accent: "dusty-blue",

  flow: [
    {
      id: "grass",
      caption: "Cows eat grass all day",
      detail:
        "A dairy cow munches around 45 kilograms of grass and feed every day — and drinks a whole bathtub's worth of water.",
      duration: "all day",
    },
    {
      id: "milking",
      caption: "Milking machines collect the milk",
      detail:
        "Cows are milked twice a day. A gentle suction machine does what farmers used to do by hand for thousands of years.",
      duration: "5–7 minutes",
    },
    {
      id: "chilled",
      caption: "Milk is chilled fast in big tanks",
      detail:
        "Warm milk spoils quickly, so it gets cooled to about 4°C within minutes of leaving the cow.",
    },
    {
      id: "trucked",
      caption: "A refrigerated truck takes it to the dairy",
      detail:
        "Big stainless-steel tankers carry milk to the dairy — usually the same day it was collected.",
    },
    {
      id: "pasteurised",
      caption: "Heated quickly to kill germs",
      detail:
        "The milk is heated to about 72°C for just 15 seconds. That's hot enough to make it safe, but not so hot that it tastes cooked.",
      duration: "15 seconds",
    },
    {
      id: "bottled",
      caption: "Bottled, boxed, and off to the shop",
      detail:
        "Sealed in plastic bottles or paper-and-foil cartons, then trucked to supermarkets — all kept cold the whole way.",
    },
  ],

  stat: {
    headline: "Under 48 hours, udder to fridge",
    body: "The milk in your cereal this morning was probably inside a cow two days ago.",
  },

  history: [
    "People have been drinking milk from animals for about 10,000 years — ever since we figured out how to domesticate cows, goats, and sheep. Most adults around the world actually can't digest milk easily; the genes that let us keep doing it as grown-ups only spread in places where dairying was common.",
    "For most of that time, milk had to be drunk within a day or two of milking, because it spoiled so fast. People made cheese, yogurt, and butter so it would last longer.",
    "The big change came in the 1860s when Louis Pasteur figured out that briefly heating milk killed the germs that made it go off. Pasteurisation plus refrigerated trucks made it possible to drink fresh cow's milk in cities far from any farm.",
  ],

  uses: [
    { label: "Cereal" },
    { label: "Hot chocolate" },
    { label: "Cheese" },
    { label: "Yogurt" },
    { label: "Butter" },
    { label: "Ice cream" },
  ],

  didYouKnow: {
    fact: "A cow produces around 25 litres of milk a day — about 100 glasses. That's why one cow can feed a lot of people.",
  },

  quizContributions: [
    {
      type: "flow-scramble",
      id: "milk-flow-scramble",
      itemSlug: "milk",
      correctOrder: ["grass", "milking", "chilled", "trucked"],
    },
    {
      type: "mystery-item",
      id: "milk-mystery",
      distractors: [],
      answer: "milk",
      clues: [
        "I start out as grass.",
        "I'm collected twice a day from a big four-legged animal.",
        "Pasteur is the reason I last more than a day in your fridge.",
      ],
    },
  ],
};
