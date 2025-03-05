import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Ім`я має бути мінімум 2 символи' }),
  lastName: z
    .string()
    .min(2, { message: 'Прізвище має бути мінімум 2 символи' }),
  email: z.string().email({ message: 'Введіть коректну електронну адресу' }),
  phone: z.string().min(10, { message: 'Введіть коректний номер телефону' }),
  address: z.string().min(5, { message: 'Введіть коректну адресу' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
