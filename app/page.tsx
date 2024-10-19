import { Container, Filters, Title, TopBar } from '../components/shared';
import { testPizzaList } from '../testPizzaList';
import { ProductsGroupList } from '../components/shared/ProductsGroupList';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Staff list */}
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Піци"
              items={testPizzaList}
              categoryId={0}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
