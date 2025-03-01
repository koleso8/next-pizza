import { Container, Filters, Title, TopBar } from '@/shared/components/shared';
import { ProductsGroupList } from '@/shared/components/shared/ProductsGroupList';
import { findPizzas, GetSearchParams } from '@/shared/lib/findPizzas';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);
  return (
    <>
      <Container className="mt-10 ">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(category => category.products.length > 0)}
      />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Staff list */}
          <div className="flex flex-col gap-16 ">
            {categories.map(
              category =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
