'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './CartDrawerItem';
import { calcTotalText, getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import Image from 'next/image';
import { Title } from './title';

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              в кошику{' '}
              <span className="font-bold">
                {items.length} {calcTotalText(items.length)}
              </span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalAmount && (
          <div className="flex flex-col items-center justify-center w-72 mx-auto my-auto">
            <Image
              src="/assets/images/empty-box.png"
              alt="пустий кошик"
              width={120}
              height={120}
            />
            <Title
              size="sm"
              text="Кошик порожній"
              className="text-center font-bold my-2"
            />
            <p className="text-center text-neutral-500 mb-5">
              Додайте товар для замовлення
            </p>

            <SheetClose>
              <Button className="w-56 h-12 text-base">
                <ArrowLeft className="w-5 mr-2" />
                Назад
              </Button>
            </SheetClose>
          </div>
        )}

        {totalAmount > 0 && (
          <>
            <div className="-mx-6 mt-5 overflow-auto flex-1">
              {items.map(item => (
                <CartDrawerItem
                  key={item.id}
                  disabled={item.disabled}
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
                  onClickCountButton={type =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>

            <SheetFooter className="-mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Загалом
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                  </span>
                  <span className="font-bold text-lg">{totalAmount} ₴</span>
                </div>
                <Link href="/cart">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base"
                    disabled={totalAmount === 0}
                  >
                    Оформити замовлення
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
