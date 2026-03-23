'use client';

import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 group transition-colors">
      {/* Custom checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '완료 취소' : '완료로 표시'}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    transition-all duration-150 cursor-pointer
                    ${todo.completed
                      ? 'bg-[#34A853] border-[#34A853]'
                      : 'border-gray-300 hover:border-[#34A853]'
                    }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        className={`flex-1 text-sm transition-colors ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="삭제"
        className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 rounded-full
                   flex items-center justify-center text-gray-300 hover:text-[#EA4335]
                   hover:bg-red-50 cursor-pointer text-base leading-none"
      >
        ×
      </button>
    </li>
  );
}
