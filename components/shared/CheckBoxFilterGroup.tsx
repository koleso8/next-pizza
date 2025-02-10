import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Input, Skeleton } from '../ui';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { useSet } from 'react-use';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckBoxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = 'Пошук...',
  className,
  onClickCheckbox,
  selected,
  name,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searcValue, setSearchValue] = useState('');

  const [set, { toggle }] = useSet(new Set<string>([]));

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className=" font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="mb-5 h-6 rounded-[8px]" />
          ))}
        <Skeleton className="mb-4 h-6 rounded-[8px] w-28" />
      </div>
    );
  }

  const allItems = showAll
    ? items.filter(item =>
        item.text.toLocaleLowerCase().includes(searcValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className=" font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar">
        {allItems.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selected?.has(item.value)}
            value={item.value}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? 'Сховати' : '+ Показати всі'}
          </button>
        </div>
      )}
    </div>
  );
};
