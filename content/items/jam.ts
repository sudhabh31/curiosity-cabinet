import type { Item } from "@/content/types";

export const jam: Item = {
  slug: "jam",
  name: "Jam",
  hook: "Fruit caught in time by a flood of sugar.",
  accent: "terracotta",

  flow: [
    {
      id: "fruit-grows",
      caption: "Fruit ripens in summer",
      detail:
        "Strawberries, raspberries, plums, apricots — almost any fruit can be turned into jam. The riper and sweeter, the better.",
    },
    {
      id: "picked-washed",
      caption: "Picked and washed",
      detail:
        "Jam-makers work fast — soft fruit doesn't keep for long after picking, so it's washed and cleaned the same day.",
    },
    {
      id: "sugar-added",
      caption: "Mixed with sugar (lots of it)",
      detail:
        "About half a kilo of sugar for every kilo of fruit. That much sugar isn't just for taste — it's what makes the jam keep.",
    },
    {
      id: "boiled",
      caption: "Boiled until it thickens",
      detail:
        "The fruit-and-sugar mix is heated to about 105°C. A natural ingredient in fruit called pectin starts to form a gel — that's what makes jam wobble.",
      duration: "15–30 minutes",
    },
    {
      id: "tested",
      caption: "Tested with the 'wrinkle test'",
      detail:
        "A drop on a cold plate should wrinkle when you push it. That's the jam-maker's signal that the jam will set, not run.",
    },
    {
      id: "jarred-sealed",
      caption: "Spooned into hot jars and sealed",
      detail:
        "Hot jam goes into hot jars, sealed while still warm. As it cools, the lid sucks down — and the jar will keep, unopened, for a year or more.",
    },
  ],

  stat: {
    headline: "Half sugar, by weight",
    body: "That's why jam keeps — most bacteria can't grow in something that sugary. The sugar pulls water out of them.",
  },

  history: [
    "People have been preserving fruit since ancient times. Romans cooked fruit in honey; medieval Europeans candied it in syrup. But true jam, set with pectin and stored in jars, needed cheap sugar to become common.",
    "Sugar came from sugar cane, originally grown in India and Southeast Asia. By the 1500s European colonies in the Caribbean and Brazil were producing it on a massive scale — sadly, much of it with enslaved labour. As sugar got cheaper, jam-making spread from royal kitchens to ordinary homes.",
    "The Victorian era was jam's golden age. Industrial canning meant jam could be made in factories, sealed in jars, and shipped across the country. Every breakfast table in 19th-century Britain had a pot of it.",
  ],

  uses: [
    { label: "Toast" },
    { label: "Scones" },
    { label: "Sandwiches" },
    { label: "Tarts" },
    { label: "Doughnuts" },
    { label: "Yogurt swirl" },
  ],

  didYouKnow: {
    fact: "Fruit contains a natural ingredient called pectin. It's the same stuff that helps a wobbly jelly set — and what makes jam stiff enough to spread.",
  },

  sources: [
    {
      title: "Fruit preserves — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Fruit_preserves",
      note: "Jam, jelly, marmalade — all the variations.",
    },
    {
      title: "Pectin — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pectin",
      note: "The natural gel that makes jam set.",
    },
    {
      title: "Sugar — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Sugar",
    },
  ],

  quizContributions: [
    {
      type: "flow-scramble",
      id: "jam-flow-scramble",
      itemSlug: "jam",
      correctOrder: ["fruit-grows", "picked-washed", "sugar-added", "boiled"],
    },
    {
      type: "mystery-item",
      id: "jam-mystery",
      distractors: [],
      answer: "jam",
      clues: [
        "I'm fruit caught in a flood of sugar.",
        "A natural ingredient called pectin makes me wobble instead of run.",
        "Victorians put me on everything; the cheap sugar made me possible.",
      ],
    },
  ],
};
