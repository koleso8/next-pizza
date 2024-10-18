import React from 'react';
import { cn } from '../../lib/utils';
import { Input } from '../ui';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckBoxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Пошук...',
  className,
  onChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <p className=" font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={ids => console.log(ids)}
            checked={false}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};
