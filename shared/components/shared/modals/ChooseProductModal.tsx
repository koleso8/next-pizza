'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../ChooseProductForm';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../ChoosePizzaForm';
import { useCart } from '@/shared/hooks/use-cart';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const { addCartItem, loading } = useCart();
  const onAddProduct = () => {
    addCartItem({ productItemId: firstItem.id });
  };
  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({ productItemId, ingredients });
      toast.success('Додано у кошик');
      router.back();
    } catch (error) {
      toast.error('Не вдалось додати у кошик');
      console.error(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[520px] bg-white overflow-hidden ',
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
