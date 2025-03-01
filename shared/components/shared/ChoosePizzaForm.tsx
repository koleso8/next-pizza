import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductImage } from './ProductImage';
import { Button } from '../ui';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { ChooseVariants } from './ChooseVariants';
import { IngredientBox } from './IngredientBox';
import { usePizzaOptions } from '@/shared/hooks';
import { getPizzaDetails } from '@/shared/lib';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onSubmit,
  loading,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    avaliableSizes,
    currentItemId,

    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,

    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage src={imageUrl} alt={name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <h3 className="font-extrabold mb-1 text-3xl">{name}</h3>
        <p className="text-gray-400">{textDetaills}</p>
        <div className=" flex flex-col gap-4 mt-5">
          <ChooseVariants
            items={avaliableSizes}
            value={String(size)}
            onClick={value => setSize(Number(value) as PizzaSize)}
          />

          <ChooseVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={value => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="mt-5 bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map(ingredient => (
              <IngredientBox
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                key={ingredient.id}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};
