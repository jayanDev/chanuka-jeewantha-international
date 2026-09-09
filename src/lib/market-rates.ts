// Reference snapshot, not a live rate or a promise of payment-provider availability.
export const marketRateDate = "2026-09-09";
export const marketRateSource = "https://www.exchangerate-api.com";
export const marketRates: Record<string, { rate: number; roundTo: number }> = {
  USD: { rate: 1, roundTo: 1 },
  GBP: { rate: 0.738452, roundTo: 1 },
  AUD: { rate: 1.385421, roundTo: 1 },
  CAD: { rate: 1.378466, roundTo: 1 },
  NZD: { rate: 1.708006, roundTo: 1 },
  AED: { rate: 3.6725, roundTo: 1 },
  SAR: { rate: 3.75, roundTo: 1 },
  MVR: { rate: 15.444527, roundTo: 1 },
  SGD: { rate: 1.264905, roundTo: 1 },
  MYR: { rate: 4.061131, roundTo: 1 },
  RUB: { rate: 86.419769, roundTo: 1 },
  QAR: { rate: 3.64, roundTo: 1 },
  OMR: { rate: 0.384497, roundTo: 0.001 },
  KWD: { rate: 0.308568, roundTo: 0.001 },
  EUR: { rate: 0.860279, roundTo: 1 },
  INR: { rate: 94.843169, roundTo: 1 },
  BDT: { rate: 122.859871, roundTo: 1 },
  VND: { rate: 25932.753145, roundTo: 1000 },
};
