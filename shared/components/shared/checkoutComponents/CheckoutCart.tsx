import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from '../WhiteBlock';
import { CheckoutItem } from '../CheckoutItem';
import { getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { CartStateItem } from '@/shared/lib/getCartDetails';

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  onClickCountButton,
  removeCartItem,
  className,
}) => {
  return (
    <WhiteBlock title="1. Кошик" className={cn('', className)}>
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
  );
};
