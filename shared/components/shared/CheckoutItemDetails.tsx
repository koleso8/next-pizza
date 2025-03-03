import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({
  icon,
  title,
  value,
  className,
}) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">{icon}</span>
          {title}
        </div>
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
      </span>
      <span className="font-bold text-lg">{value} ₴</span>
    </div>
  );
};
