'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './FilterCheckbox';
import { Input } from '../ui';
import { RangeSlider } from './RangeSlider';
import { CheckBoxFilterGroup } from './CheckBoxFilterGroup';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      {/* Top checkbox */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можливо зібрати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* nim-max filter and slider */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від - до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={50} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* ingradients filter */}
      <CheckBoxFilterGroup
        title="Інградієнти"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сирний соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Часник',
            value: '3',
          },
          {
            text: 'Солені огірки',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Томати',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Сирний соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Часник',
            value: '3',
          },
          {
            text: 'Солені огірки',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Томати',
            value: '6',
          },
          {
            text: 'Сирний соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Часник',
            value: '3',
          },
          {
            text: 'Солені огірки',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Томати',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
