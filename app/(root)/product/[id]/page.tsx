import React from 'react';
import { prisma } from '../../../../prisma/prisma-client';
import { notFound } from 'next/navigation';
import {
  ChooseVariants,
  Container,
  ProductImage,
  Title,
} from '@/shared/components/shared';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          className=""
          size={40}
        />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi
            quos blanditiis autem doloremque sequi dolorem repudiandae harum sed
            rerum.
          </p>

          <ChooseVariants
            items={[
              { name: 'Маленька', value: '1', disabled: true },
              { name: 'Середня', value: '2' },
              { name: 'Велика', value: '3' },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
