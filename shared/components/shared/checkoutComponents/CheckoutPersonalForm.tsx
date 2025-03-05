import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from '../WhiteBlock';
import { FormInput } from '../formComponents';
import { Input } from '../../ui';

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональні данні" className={cn('', className)}>
      <div className="grid grid-cols-2 gap-5 ">
        <Input name="firsName" className="text-base" placeholder="Ім`я" />
        <Input name="lastName" className="text-base" placeholder="Прізвище" />
        <Input name="email" className="text-base" placeholder="E-mail" />
        <FormInput name={'phone'} placeholder="Телефон" className="text-base" />
      </div>
    </WhiteBlock>
  );
};
