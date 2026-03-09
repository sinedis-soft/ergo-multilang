import type { LeadFormDictionary } from "@/dictionaries/types";

export const leadLv: LeadFormDictionary = {
  title: "Apdrošināšanas pieteikums",
  description: "Norādiet kontaktinformāciju un polises parametrus.",
  fields: {
    fullName: { label: "Vārds un uzvārds", placeholder: "Ievadiet vārdu un uzvārdu" },
    phone: { label: "Tālrunis", placeholder: "+371..." },
    email: { label: "E-pasts", placeholder: "name@example.com" },
    vehicleType: { label: "Transporta veids", placeholder: "Izvēlieties veidu" },
    period: { label: "Termiņš", placeholder: "Izvēlieties termiņu" },
    message: { label: "Komentārs", placeholder: "Papildu informācija" },
  },
  consent: {
    terms: "Piekrītu lietošanas noteikumiem",
    privacy: "Piekrītu privātuma politikai",
  },
  submit: "Nosūtīt pieteikumu",
};
