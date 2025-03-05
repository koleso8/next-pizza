'use client';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  checkoutFormSchema,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Title,
} from '@/shared/components/shared';
import { useCart } from '@/shared/hooks/use-cart';
import { CheckoutFormValues } from '@/shared/components/shared/checkoutComponents/checkoutFormSchema';

export default function CheckoutPage() {
  const { totalAmount, items, loading, removeCartItem, updateItemQuantity } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
    },
  });
  const onSubmit: SubmitHandler<CheckoutFormValues> = data => {
    console.log(data);
  };

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
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* leftSide */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <div className="flex flex-col gap-5">
                <CheckoutCart
                  items={items}
                  onClickCountButton={onClickCountButton}
                  removeCartItem={removeCartItem}
                />
              </div>
              <CheckoutPersonalForm />
              <CheckoutAddressForm />
            </div>
            {/* rightSide  */}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
