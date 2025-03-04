import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from './WhiteBlock';
import { CheckoutItemDetails } from './CheckoutItemDetails';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';

const VAT = 10;
const DELIVERY_PRICE = 80;

interface Props {
  totalAmount: number;
  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  className,
}) => {
  return (
    <div className={cn('', className)}>
      {' '}
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Загалом:</span>
          <span className="text-[34px] font-extrabold">
            {totalAmount + DELIVERY_PRICE + (totalAmount / 100) * VAT} ₴
          </span>
        </div>
        <CheckoutItemDetails
          icon={<Package size={18} />}
          title="Вартість товарів"
          value={String(totalAmount)}
        />
        <CheckoutItemDetails
          icon={<Percent size={18} />}
          title="Податок"
          value={String(Math.round((totalAmount / 100) * VAT))}
        />
        <CheckoutItemDetails
          icon={<Truck size={18} />}
          title="Доставка"
          value={String(DELIVERY_PRICE)}
        />
        <Button
          type="submit"
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          До сплати
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
