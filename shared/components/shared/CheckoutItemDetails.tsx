import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({ className }) => {
  return <div className={cn('', className)}></div>;
};
