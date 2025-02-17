export const mapPizzaSize = {
  20: 'Маленька',
  30: 'Середня',
  40: 'Велика',
} as const;

export const mapPizzaType = {
  1: 'Традиційне',
  2: 'Тонке',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map((name, value) => ({
  name,
  value,
}));
