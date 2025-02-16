import React from 'react';
import { cn } from '@/lib/utils';
import { ProductImage } from './ProductImage';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: any[];
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
  const textDetaills = '30 cm, традиційне тісто';
  const totalPrice = 350;
  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage src={imageUrl} alt={name} size={30} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};
