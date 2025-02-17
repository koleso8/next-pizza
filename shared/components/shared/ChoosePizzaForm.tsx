import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductImage } from './ProductImage';
import { Title } from './title';
import { Button } from '../ui';
import { ChooseVariants } from './ChooseVariants';
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/shared/constants/pizza';
import { Ingredient } from '@prisma/client';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetaills = '30 cm, традиційне тісто';
  const totalPrice = 350;
  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage src={imageUrl} alt={name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <div className=" flex flex-col gap-4 mt-5">
          <ChooseVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={value => setSize(Number(value) as PizzaSize)}
          />

          <ChooseVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={value => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3"></div>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};
