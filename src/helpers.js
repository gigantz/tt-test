import { TT_WIDTH, MIN_WEIGHT, MAX_WEIGHT } from "./constants";

export function generateRandomShape() {
  const type = Math.floor(Math.random() * 3);
  const key = Date.now();
  const weight = Math.floor(Math.random() * MAX_WEIGHT) + MIN_WEIGHT;
  const size = weight * 16;
  const offset = Math.floor((Math.random() * TT_WIDTH) / 2) + 1;
  const color = [
    "rgba(174,214,241, 0.6)",
    "rgba(175,122,197, 0.6)",
    "rgba(250,215,160, 0.6)",
    "rgba(118,215,196, 0.6)",
    "rgba(250,219,216, 0.6)",
    "rgba(213,219,219, 0.6)",
    "rgba(252,243,207, 0.6)",
    "rgba(212,230,241, 0.6)",
    "rgba(208,236,231, 0.6)",
    "rgba(235,222,240, 0.6)",
    "rgba(242,215,213, 0.6)"
  ][weight];

  return {
    key,
    type,
    weight,
    size,
    offset,
    color
  };
}
