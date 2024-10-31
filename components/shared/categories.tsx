'use client';

import { cn } from '../../lib/utils';
import { useCategoryStore } from '../../store/category';

interface Props {
  className?: string;
}

const cats: { id: number; name: string }[] = [
  { id: 0, name: 'Піци' },
  { id: 1, name: 'Комбо' },
  { id: 2, name: 'Закуски' },
  { id: 3, name: 'Коктейлі' },
  { id: 4, name: 'Кава' },
  { id: 5, name: 'Напої' },
  { id: 6, name: 'Десерти' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryIdActive = useCategoryStore(state => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map(({ name, id }, index) => {
        return (
          <a
            key={index}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              categoryIdActive === id &&
                'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            href={`/#${name}`}
          >
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
