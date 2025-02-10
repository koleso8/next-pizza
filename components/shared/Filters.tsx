'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './RangeSlider';
import { CheckBoxFilterGroup } from './CheckBoxFilterGroup';
import { useFilterIngredients } from '../../hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selected } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map(item => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value });
  };

  React.useEffect(() => {
    console.log({ prices, pizzaTypes, sizes, selected });
  }, [prices, pizzaTypes, sizes, selected]);

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      {/* Top checkbox */}
      <CheckBoxFilterGroup
        title="Тип тіста"
        name="pizzaTypees"
        className="mb-5"
        items={[
          { text: 'Тонке', value: '1' },
          { text: 'Традиційне', value: '2' },
        ]}
        loading={loading}
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
      />
      <CheckBoxFilterGroup
        title="Розміри"
        name="sizes"
        className="mb-5"
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        loading={loading}
        onClickCheckbox={toggleSizes}
        selected={sizes}
      />

      {/* nim-max filter and slider */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від - до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={e => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={50}
            max={1000}
            value={String(prices.priceTo)}
            onChange={e => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      {/* ingradients filter */}
      <CheckBoxFilterGroup
        title="Інградієнти"
        name="ingredienst"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selected}
      />
    </div>
  );
};
