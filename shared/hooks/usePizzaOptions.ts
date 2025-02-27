import React from 'react';
import { Variant } from '../components/shared/ChooseVariants';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { ProductItem } from '@prisma/client';
import { getAvaliablePizzaSizes } from '../lib';

interface ReturnProns {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  avaliableSizes: Variant[];
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProns => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const avaliableSizes = getAvaliablePizzaSizes(type, items);

  const currentItemId = items.find(
    item => item.pizzaType === type && item.size === size
  )?.id;
  React.useEffect(() => {
    const isAvaliableSize = avaliableSizes?.find(
      item => Number(item.value) === size && !item.disabled
    );
    const avaliableSize = avaliableSizes?.find(item => !item.disabled);
    if (!isAvaliableSize && avaliableSize) {
      setSize(Number(avaliableSize.value) as PizzaSize);
    }
  }, [type]);
  return {
    size,
    type,
    selectedIngredients,
    avaliableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
