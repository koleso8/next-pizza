'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../ChoosePizzaForm';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  console.log(`prod :${product}`);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden ',
          className
        )}
      >
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={[]}
        />
      </DialogContent>
    </Dialog>
  );
};
