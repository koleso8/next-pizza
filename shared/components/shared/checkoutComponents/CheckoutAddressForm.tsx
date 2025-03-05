import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from '../WhiteBlock';
import { Input, Textarea } from '../../ui';
import { FormTextarea } from '../formComponents';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адреса доставки" className={cn('', className)}>
      <div className="flex flex-col gap-5">
        <Input name="phone" className="text-base" placeholder="Address" />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Коментар до замовлення"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
