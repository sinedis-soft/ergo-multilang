// app/lib/insurancePrices.ts

export type PriceVehicle =
  | "car"
  | "van"
  | "truck"
  | "trailer"
  | "special"
  | "bus"
  | "moto";

export type PriceTerm = "30" | "60" | "90" | "180" | "365";

export const PRICES_EUR: Record<PriceVehicle, Partial<Record<PriceTerm, number>>> = {
  car: { "30": 54.17, "60": 104.17, "90": 150, "180": 265.5, "365": 500 },
  van: { "30": 541.67, "60": 1041.67, "90": 1500, "180": 2625, "365": 5000 },
  bus: { "30": 541.67, "60": 1041.67, "90": 1500, "180": 2625, "365": 5000 },
  truck: { "30": 100, "60": 200, "90": 300, "180": 0, "365": 0 },
  trailer: { "30": 15, "60": 30, "90": 45, "180": 100, "365": 200 },
  special: { "30": 43.33, "60": 83.33, "90": 120, "180": 210, "365": 400 },
  moto: { "30": 43.33, "60": 83.33, "90": 120, "180": 210, "365": 400 },
};

export function getPolicyPrice(vehicle: string, term: string): number | null {
  const price = PRICES_EUR[vehicle as PriceVehicle]?.[term as PriceTerm];

  if (!price || price <= 0) return null;

  return price;
}

export function formatEUR(value: number): string {
  return `€ ${value.toFixed(2)}`;
}