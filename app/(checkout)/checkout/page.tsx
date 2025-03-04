'use client';

import {
  CheckoutItem,
  CheckoutSidebar,
  FormInput,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import { getCartItemDetails } from '@/shared/lib';

export default function CheckoutPage() {
  const { totalAmount, items, loading, removeCartItem, updateItemQuantity } =
    useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <div className="mt-5">
      <Title
        text={'Оформлення замовлення'}
        className="font-extrabold mb-8 text-[36px]"
        //TODO SKELETON
      />
      <div className="flex gap-10">
        {/* leftSide */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <div className="flex flex-col gap-5">
            <WhiteBlock title="1. Кошик">
              {items.map(item => (
                <CheckoutItem
                  key={item.id}
                  disabled={item.disabled}
                  onClickCountButton={type =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={
                    item.pizzaSize && item.pizzaType
                      ? getCartItemDetails(
                          item.ingredients,
                          item.pizzaType as PizzaType,
                          item.pizzaSize as PizzaSize
                        )
                      : ''
                  }
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </WhiteBlock>
          </div>
          <WhiteBlock title="2. Персональні данні">
            <div className="grid grid-cols-2 gap-5 ">
              <Input name="firsName" className="text-base" placeholder="Ім`я" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Прізвище"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <FormInput
                name={'phone'}
                placeholder="Телефон"
                className="text-base"
              />
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
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
}
