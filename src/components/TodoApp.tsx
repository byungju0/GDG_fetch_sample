'use client';

import { useState } from 'react';
import { Todo, FilterType } from '@/types/todo';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-white font-bold text-lg tracking-wider opacity-80">&lt;&gt;</span>
          <span className="text-white text-xs font-medium tracking-widest uppercase opacity-60">
            GDG On Campus · Korea University
          </span>
          <span className="text-white font-bold text-lg tracking-wider opacity-80">&lt;/&gt;</span>
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          My Todos
        </h1>
        <div className="flex justify-center gap-1.5 mt-3">
          <span className="w-3 h-3 rounded-full bg-[#4285F4]" />
          <span className="w-3 h-3 rounded-full bg-[#EA4335]" />
          <span className="w-3 h-3 rounded-full bg-[#FBBC05]" />
          <span className="w-3 h-3 rounded-full bg-[#34A853]" />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="p-6 border-b border-gray-100">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter */}
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {/* List */}
        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ) : (
          <div className="m-6 border-2 border-dashed border-gray-200 rounded-2xl py-10 px-6 text-center">
            <p className="text-gray-400 text-sm">
              {todos.length === 0
                ? '📋 할 일을 추가해보세요!'
                : '🔍 해당하는 할 일이 없습니다.'}
            </p>
          </div>
        )}

        {/* Footer */}
        {todos.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-400 text-center">
              {activeCount > 0
                ? `${activeCount}개 남음 · 완료 ${todos.length - activeCount}개`
                : '모든 할 일을 완료했습니다! 🎉'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
