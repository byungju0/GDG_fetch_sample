'use client';

import { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요..."
        className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-gray-700
                   placeholder:text-gray-400 focus:outline-none focus:border-[#9b1c31]
                   transition-colors duration-150"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150
                   bg-[#9b1c31] hover:bg-[#7f1d2e] disabled:bg-gray-300 disabled:cursor-not-allowed
                   shadow-sm cursor-pointer"
      >
        추가
      </button>
    </form>
  );
}
