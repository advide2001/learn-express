const plans = [
  { id: 1, name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
  { id: 2, name: "Advanced", monthlyPrice: 12, yearlyPrice: 120 },
  { id: 3, name: "Pro", monthlyPrice: 15, yearlyPrice: 150 },
];

const addons = [
  {
    id: 1,
    name: "Online Services",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 1,
    name: "Online Services",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 1,
    name: "Online Services",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export const state = {
  currentPage: 1,
  subscriptionType: "monthly",
  plan: 1,
  addons: [],
};
