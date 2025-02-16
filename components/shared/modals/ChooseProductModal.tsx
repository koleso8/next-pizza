import React from 'react';
import { cn } from '../../lib/utils';
import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import { Title } from '../title';
import { Product } from '@prisma/client';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className }) => {
  return (
    <Dialog>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        <Title text="Choose Product" />
      </DialogContent>
    </Dialog>
  );
};
