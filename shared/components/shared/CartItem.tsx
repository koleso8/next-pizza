'use client';

import { CartItemProps } from './cart-item-details/cart-item-details.types';

interface Props extends CartItemProps {
  onClickRomove: () => void;
  onClickCountButton: CountButtonProps['onClick'];
}
