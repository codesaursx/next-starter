import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <h1 className="font-mono text-6xl font-bold text-white">
        CodesaursX<span className="text-indigo-500">.</span>
      </h1>
    </div>
  );
};

export default HomePage;
