import type { HomePageDictionary } from "@/dictionaries/types";

export const homeEn: HomePageDictionary = {
  hero: {
    badge: "Online issuance",
    title: "Cross-border insurance for travel to the EU",
    description: "Estimate price and submit your request in a few steps.",
    primaryCta: "Submit request",
    secondaryCta: "View terms",
  },
  sections: {
    processTitle: "How it works",
    processDescription: "A transparent process with no extra friction.",
    processItems: [
      { title: "Request", description: "You fill in the form online." },
      { title: "Review", description: "We check data and coverage." },
      { title: "Policy", description: "You receive confirmation and policy." },
    ],
  },
};
