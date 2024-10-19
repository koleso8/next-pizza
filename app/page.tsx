import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from '../components/shared';

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
            {/* <ProductCard
              id={1}
              name={'Маринара'}
              price={95}
              imageUrl={'https://bot.tgmall.io/static/JXMLB9.png'}
            /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
