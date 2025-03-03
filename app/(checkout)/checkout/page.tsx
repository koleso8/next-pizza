import {
  CheckoutItemDetails,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';
import { Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="mt-5">
      <Title
        text={'Оформлення замовлення'}
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        {/* leftSide */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Кошик">1313213</WhiteBlock>
          <WhiteBlock title="2. Персональні данні">
            <div className="grid grid-cols-2 gap-5 ">
              <Input name="firsName" className="text-base" placeholder="Ім`я" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Прізвище"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адреса доставки">
            <div className="flex flex-col gap-5">
              <Input name="phone" className="text-base" placeholder="Address" />
              <Textarea
                className="text-base"
                placeholder="Коментар до замовлення"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        {/* rightSide  */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Загалом:</span>
              <span className="text-[34px] font-extrabold">{20} ₴</span>
            </div>
            <CheckoutItemDetails
              icon={<Package size={18} />}
              title="Вартість товарів"
              value="300"
            />
            <CheckoutItemDetails
              icon={<Percent size={18} />}
              title="Податок"
              value="15"
            />
            <CheckoutItemDetails
              icon={<Truck size={18} />}
              title="Доставка"
              value="80"
            />
          </WhiteBlock>
        </div>
      </div>
    </div>
  );
}
