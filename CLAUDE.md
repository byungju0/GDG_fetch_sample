# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
npx tsc --noEmit # TypeScript type check (no test framework configured)
```

## Architecture

Next.js 14 App Router + Tailwind CSS + TypeScript. No database — all state is client-side.

### Data flow

All todo state lives in `src/components/TodoApp.tsx` (the only `useState` owner). It computes `filteredTodos` as a derived value and passes data + callbacks down to children:

```
TodoApp (owns todos[], filter)
├── TodoInput   — local input state only; calls onAdd(text)
├── TodoFilter  — renders All/Active/Done tabs; calls onFilterChange(filter)
└── TodoList    — maps filtered todos → TodoItem
    └── TodoItem — checkbox toggle + hover-reveal delete button
```

### Key conventions

- `'use client'` is declared only on components that use `useState` or event handlers: `TodoApp`, `TodoInput`, `TodoFilter`, `TodoItem`. `TodoList` is a Server Component.
- Shared types (`Todo`, `FilterType`) live in `src/types/todo.ts` and are imported by all components.
- Todo IDs use `crypto.randomUUID()` — no external ID library.
- The package name in `package.json` is `gdg-todo-app` (directory name `GDG_fetch_sample` has capital letters which npm rejects, so `create-next-app` was not used — the project was set up manually).

### Design

GDG On Campus Korea University branding: crimson red background (`#7f1d2e`→`#9b1c31`), white card, Google 4-color accents (blue `#4285F4`, red `#EA4335`, yellow `#FBBC05`, green `#34A853`) used for filter tabs and interactive states.
