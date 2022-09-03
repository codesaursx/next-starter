import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <h1 className="text-6xl font-bold font-mono text-white">
        CodesaursX<span className="text-indigo-500">.</span>
      </h1>
    </div>
  );
};

export default HomePage;
