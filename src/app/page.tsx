import TodoApp from '@/components/TodoApp';

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-start justify-center pt-16 px-4 pb-16"
      style={{ background: 'linear-gradient(135deg, #7f1d2e 0%, #9b1c31 50%, #6b1527 100%)' }}
    >
      <TodoApp />
    </main>
  );
}
