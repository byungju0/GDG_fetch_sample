'use client';

import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: { label: string; value: FilterType; activeBg: string; activeText: string }[] = [
  { label: 'All',    value: 'all',       activeBg: 'bg-[#4285F4]', activeText: 'text-white' },
  { label: 'Active', value: 'active',    activeBg: 'bg-[#FBBC05]', activeText: 'text-gray-800' },
  { label: 'Done',   value: 'completed', activeBg: 'bg-[#34A853]', activeText: 'text-white' },
];

export default function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  return (
    <div className="flex items-center justify-end px-6 py-3 bg-gray-50 border-b border-gray-100">
      <div className="flex gap-1">
        {FILTERS.map(({ label, value, activeBg, activeText }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer
              ${currentFilter === value
                ? `${activeBg} ${activeText} shadow-sm`
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
