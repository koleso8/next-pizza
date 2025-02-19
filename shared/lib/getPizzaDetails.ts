import { Ingredient, ProductItem } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';
import { calcTotalPizzaPrices } from './calcTotalPizzaPrices';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrices(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetaills = `${size} cm, ${mapPizzaType[type]} тісто`;
  return { totalPrice, textDetaills };
};
