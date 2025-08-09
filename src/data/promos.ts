export type PromoTier = {
  meals: number;
  discounts: [number, number, number, number];
  total: number;
  appliedCode: string;
};
export type PromoMatrix = {
  key: "PROMO85" | "PROMO95";
  label: string;
  tiers: PromoTier[];
  stackable: boolean;
};
export const PROMO85: PromoMatrix = {
  key: "PROMO85",
  label: "Rentrée 85€",
  stackable: false,
  tiers: [
    { meals:4,  discounts:[15,8,7,5],  total:35, appliedCode:"RENTREE85-4" },
    { meals:5,  discounts:[16,10,10,5], total:41, appliedCode:"RENTREE85-5" },
    { meals:6,  discounts:[21,10,10,5], total:46, appliedCode:"RENTREE85-6" },
    { meals:7,  discounts:[25,15,10,5], total:55, appliedCode:"RENTREE85-7" },
    { meals:8,  discounts:[27,15,10,10], total:62, appliedCode:"RENTREE85-8" },
    { meals:9,  discounts:[29,15,10,10], total:64, appliedCode:"RENTREE85-9" },
    { meals:10, discounts:[30,15,10,10], total:65, appliedCode:"RENTREE85-10" },
    { meals:11, discounts:[32,20,10,10], total:72, appliedCode:"RENTREE85-11" },
    { meals:12, discounts:[33,20,10,10], total:73, appliedCode:"RENTREE85-12" },
    { meals:13, discounts:[34,20,10,10], total:74, appliedCode:"RENTREE85-13" },
    { meals:14, discounts:[35,20,15,10], total:80, appliedCode:"RENTREE85-14" },
    { meals:15, discounts:[36,20,15,12], total:83, appliedCode:"RENTREE85-15" },
    { meals:16, discounts:[40,20,15,10], total:85, appliedCode:"RENTREE85-16" },
  ]
};
export const PROMO95: PromoMatrix = {
  key: "PROMO95",
  label: "Affiliation 95€",
  stackable: true,
  tiers: [
    { meals:4,  discounts:[20,15,10,10], total:55, appliedCode:"AFF95-4" },
    { meals:6,  discounts:[30,20,15,10], total:75, appliedCode:"AFF95-6" },
    { meals:8,  discounts:[35,25,20,15], total:95, appliedCode:"AFF95-8" },
  ]
};
export type VisibleCode = {
  visible: string;
  matrix: "PROMO85" | "PROMO95";
  type: "Inscription" | "Parrainage" | "Affiliation" | "Fidélisation" | "Test" | "Autre";
  category: "Acquisition" | "Parrainage" | "Cadeau" | "Autre";
  source?: string;
  stackableOverride?: boolean;
};
export const visibleCodes: VisibleCode[] = [
  { visible: "RENTREE85", matrix:"PROMO85", type:"Inscription", category:"Acquisition", source:"Meta Back-to-school" },
  { visible: "PARTENAIRE95", matrix:"PROMO95", type:"Affiliation", category:"Parrainage", source:"Influenceur IG" },
];
export const matrices = { PROMO85, PROMO95 };
export function getAppliedTier(visibleCode: string, meals: number){
  const meta = visibleCodes.find(v => v.visible.toLowerCase() === visibleCode.toLowerCase());
  if(!meta) return null;
  const matrix = matrices[meta.matrix];
  const tier = matrix.tiers.find(t => t.meals === meals);
  if(!tier) return null;
  return { matrix, tier, stackable: meta.stackableOverride ?? matrix.stackable };
}
