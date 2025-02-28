'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';
import { ChevronsRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from '.';
import { useCart } from '@/shared/hooks/use-cart';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { loading, totalAmount, items } = useCart();
  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn('group relative ', { 'w-[105px]': loading }, className)}
      >
        <b>{totalAmount} ₴ </b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className=" relative" strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ChevronsRight
          size={28}
          className="absolute right-5 opacity-0 transition duration-300 group-hover:opacity-100 animate-wiggle "
        />
      </Button>
    </CartDrawer>
  );
};
