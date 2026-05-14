import type { Item } from "@/content/types";

export const yogurt: Item = {
  slug: "yogurt",
  name: "Yogurt",
  hook: "Milk transformed by bacteria you can actually eat.",
  accent: "soft-pink",

  flow: [
    {
      id: "milk-warmed",
      caption: "Milk is gently heated",
      detail:
        "Heating to about 85°C kills off any unwanted bacteria and changes the milk's proteins so they'll set into a thicker yogurt.",
      duration: "20–30 minutes",
    },
    {
      id: "cooled",
      caption: "Cooled down to lukewarm",
      detail:
        "Around 43°C — too hot for your hand to bear, but the perfect temperature for the friendly bacteria we're about to add.",
    },
    {
      id: "culture-added",
      caption: "A spoonful of 'starter' is stirred in",
      detail:
        "The starter is a tiny amount of bacteria — usually Lactobacillus and Streptococcus. They eat the milk's sugar and make lactic acid.",
    },
    {
      id: "fermented",
      caption: "Kept warm to ferment",
      detail:
        "The bacteria multiply quickly in the warm milk. Within hours, the lactic acid they make turns the milk thick and tangy.",
      duration: "4–12 hours",
    },
    {
      id: "chilled",
      caption: "Chilled to slow the bacteria",
      detail:
        "Once it tastes right, the yogurt is moved to the fridge. The bacteria are still alive — they just go to sleep when it's cold.",
    },
    {
      id: "packaged",
      caption: "Spooned into pots",
      detail:
        "Flavours, fruit, or extra sugar can be mixed in. Every pot you open still contains millions of those friendly bacteria.",
    },
  ],

  stat: {
    headline: "Billions of friendly bacteria per spoonful",
    body: "A typical teaspoon of plain yogurt contains around a billion live bacterial cells — and they're the reason it tastes like yogurt.",
  },

  history: [
    "Yogurt was probably discovered by accident, thousands of years ago, by nomads in Central Asia or the Middle East who carried milk in animal-skin pouches. Warm air and natural bacteria from the pouch turned the milk into something thicker, tangier, and longer-lasting.",
    "The word 'yogurt' comes from Turkish, and yogurt has been a daily food in Turkey, the Balkans, the Middle East, and South Asia for centuries — long before it caught on in the West.",
    "Yogurt only became a Western breakfast staple in the 1900s. A Russian-born scientist named Élie Metchnikoff argued that the bacteria in yogurt explained why people in Bulgaria lived so long. The longevity claim has been mostly disproven, but the idea stuck.",
  ],

  uses: [
    { label: "Breakfast pot" },
    { label: "Smoothies" },
    { label: "Marinades" },
    { label: "Raita & tzatziki" },
    { label: "Frozen yogurt" },
    { label: "Yogurt cake" },
  ],

  didYouKnow: {
    fact: "Most cheeses and yogurts are made by the same trick: friendly bacteria eat milk sugar and make acid that thickens the milk.",
  },

  sources: [
    { title: "Yogurt — Wikipedia", url: "https://en.wikipedia.org/wiki/Yogurt" },
    {
      title: "Lactic acid bacteria — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lactic_acid_bacteria",
      note: "The microbes doing the work.",
    },
    {
      title: "Fermentation in food processing — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Fermentation_in_food_processing",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "yogurt-flow-scramble",
      itemSlug: "yogurt",
      correctOrder: ["milk-warmed", "cooled", "culture-added", "fermented"],
    },
    {
      type: "mystery-item",
      id: "yogurt-mystery",
      distractors: [],
      answer: "yogurt",
      clues: [
        "I'm milk transformed by living bacteria.",
        "I was probably first made by accident in an animal-skin pouch.",
        "Every spoonful of me contains billions of microbes \u2014 the good kind.",
      ],
    },
  ],
};
