import type { HomePageDictionary } from "@/dictionaries/types";

export const homeLv: HomePageDictionary = {
  hero: {
    badge: "Tiešsaistes noformēšana",
    title: "Pārrobežu apdrošināšana braucieniem uz ES",
    description: "Aprēķiniet izmaksas un nosūtiet pieteikumu dažos soļos.",
    primaryCta: "Atstāt pieteikumu",
    secondaryCta: "Uzzināt nosacījumus",
  },
  sections: {
    processTitle: "Kā tas darbojas",
    processDescription: "Skaidrs process bez liekas birokrātijas.",
    processItems: [
      { title: "Pieteikums", description: "Aizpildāt formu vietnē." },
      { title: "Pārbaude", description: "Mēs pārbaudām datus un segumu." },
      { title: "Polise", description: "Saņemat apstiprinājumu un polisi." },
    ],
  },
};
