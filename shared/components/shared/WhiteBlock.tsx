import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';

interface Props {
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  title?: string;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({
  endAdornment,
  contentClassName,
  title,
  children,
  className,
}) => {
  return (
    <div className={cn('bg-white rounded-3xl', className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}

      <div className={cn('px-5 py-4', contentClassName)}>{children}</div>
    </div>
  );
};
