import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';
import { ChevronsRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from '.';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className={cn('group relative ', className)}>
        <b>520 ₴ </b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className=" relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ChevronsRight
          size={28}
          className="absolute right-5 opacity-0 transition duration-300 group-hover:opacity-100 animate-wiggle "
        />
      </Button>
    </CartDrawer>
  );
};
