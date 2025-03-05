import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from '../WhiteBlock';
import { FormInput } from '../formComponents';

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональні данні" className={cn('', className)}>
      <div className="grid grid-cols-2 gap-5 ">
        <FormInput name="firstName" className="text-base" placeholder="Ім`я" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Прізвище"
        />
        <FormInput name="email" className="text-base" placeholder="E-mail" />
        <FormInput name={'phone'} placeholder="Телефон" className="text-base" />
      </div>
    </WhiteBlock>
  );
};
