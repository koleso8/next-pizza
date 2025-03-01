import React from 'react';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  ingredients,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map(ing => ing.name).join(', ')}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            від <b>{price} ₴</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
          </Button>
        </div>
      </Link>
    </div>
  );
};
