// Cross-sell apps configuration

export interface CrossSellApp {
  slug: string;
  name: string;
  reason: string;
  url?: string;
}

const CROSS_SELL_CATALOG: Record<string, CrossSellApp[]> = {
  professional: [
    { slug: "cpa", name: "Koydo CPA", reason: "Practice for the CPA exam" },
    { slug: "ca-final", name: "Koydo CA Final", reason: "Advance to CA Final preparation" },
  ],
  admissions: [
    { slug: "sat", name: "Koydo SAT", reason: "SAT test prep" },
    { slug: "gmat", name: "Koydo GMAT", reason: "GMAT prep for business school" },
  ],
};

export function getCrossSellApps(category: string): CrossSellApp[] {
  return CROSS_SELL_CATALOG[category] ?? [];
}
