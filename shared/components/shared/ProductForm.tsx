'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { useCart } from '@/shared/hooks/use-cart';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from './ChoosePizzaForm';
import { ChooseProductForm } from './ChooseProductForm';

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const { addCartItem, loading } = useCart();

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      //TODO не добавляется в продукты
      await addCartItem({ productItemId: itemId, ingredients });
      _onSubmit?.();
      toast.success(product.name + ' додано у кошик');
    } catch (error) {
      toast.error(product.name + ' не вдалось додати у кошик');
      console.error(error);
    }
  };
  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};
