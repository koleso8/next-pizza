import { Title, WhiteBlock } from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';

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
            <div className="flex my-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Вартість товарів:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{200} ₴</span>
            </div>
          </WhiteBlock>
        </div>
      </div>
    </div>
  );
}
