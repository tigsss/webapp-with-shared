import { testFunction } from '@webapp/shared/util2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col max-w-5xl w-full items-center justify-between text-sm lg:flex">
        Testing attention please {testFunction(2, 3)}
      </div>
    </main>
  );
}
