import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductImage } from './ProductImage';
import { Title } from './title';
import { Button } from '../ui';
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { ChooseVariants } from './ChooseVariants';
import { IngredientBox } from './IngredientBox';
import { useSet } from 'react-use';
import { DialogTitle } from '@radix-ui/react-dialog';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const pizzaPrice =
    items.find(item => item.pizzaType === type && item.size === size)?.price ||
    0;
  const totalIngradientsPrice = ingredients
    .filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const textDetaills = `${size} cm, ${mapPizzaType[type]} тісто`;
  const totalPrice = pizzaPrice + totalIngradientsPrice;

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({ size, type, ingredients: selectedIngredients });
  };

  const avaliablePizzas = items.filter(item => item.pizzaType === type);
  const avaliablePizzaSizes = pizzaSizes.map(item => ({
    name: item.name,
    value: item.value,
    disabled: !avaliablePizzas.some(
      pizza => Number(pizza.size) === Number(item.value)
    ),
  }));

  React.useEffect(() => {
    const isAvaliableSize = avaliablePizzaSizes?.find(
      item => Number(item.value) === size && !item.disabled
    );
    const avaliableSize = avaliablePizzaSizes?.find(item => !item.disabled);
    if (!isAvaliableSize && avaliableSize) {
      setSize(Number(avaliableSize.value) as PizzaSize);
    }
  }, [type]);

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage src={imageUrl} alt={name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <DialogTitle className="font-extrabold mb-1 text-3xl">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetaills}</p>
        <div className=" flex flex-col gap-4 mt-5">
          <ChooseVariants
            items={avaliablePizzaSizes}
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
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};
