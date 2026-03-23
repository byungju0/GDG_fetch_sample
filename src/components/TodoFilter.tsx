'use client';

import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
}

const FILTERS: { label: string; value: FilterType; activeColor: string; activeBg: string }[] = [
  { label: 'All', value: 'all', activeColor: 'text-white', activeBg: 'bg-[#4285F4]' },
  { label: 'Active', value: 'active', activeColor: 'text-white', activeBg: 'bg-[#FBBC05]' },
  { label: 'Done', value: 'completed', activeColor: 'text-white', activeBg: 'bg-[#34A853]' },
];

export default function TodoFilter({
  currentFilter,
  onFilterChange,
  activeCount,
}: TodoFilterProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-100">
      <span className="text-xs text-gray-500 font-medium">
        {activeCount}개 남음
      </span>
      <div className="flex gap-1">
        {FILTERS.map(({ label, value, activeColor, activeBg }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer
              ${currentFilter === value
                ? `${activeBg} ${activeColor} shadow-sm`
                : 'text-gray-500 hover:bg-gray-100'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
