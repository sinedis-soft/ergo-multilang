import type { LeadFormDictionary } from "@/dictionaries/types";

export const leadEn: LeadFormDictionary = {
  title: "Insurance request",
  description: "Provide contact data and policy details.",
  fields: {
    fullName: { label: "Full name", placeholder: "Enter full name" },
    phone: { label: "Phone", placeholder: "+371..." },
    email: { label: "Email", placeholder: "name@example.com" },
    vehicleType: { label: "Vehicle type", placeholder: "Select type" },
    period: { label: "Period", placeholder: "Select period" },
    message: { label: "Comment", placeholder: "Additional information" },
  },
  consent: {
    terms: "I accept the terms of use",
    privacy: "I agree to the privacy policy",
  },
  submit: "Submit request",
};
