import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Фукнція для підрахунку загальної вартості піци
 *
 * @param type
 * @param size
 * @param items
 * @param ingredients
 * @param selectedIngredients
 * @returns
 */
export const calcTotalPizzaPrices = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find(item => item.pizzaType === type && item.size === size)?.price ||
    0;
  const totalIngradientsPrice = ingredients
    .filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngradientsPrice;
};
