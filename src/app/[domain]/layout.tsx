'use client';

import { useRouter } from 'next/navigation';

export default function PageLayout({ children, params }: { children: React.ReactNode; params: { domain: string } }) {
  const router = useRouter();
  return (
    <>
      {' '}
      <header className='w-full bg-gray-800 text-white px-6 py-4'>
        <button onClick={() => router.push(`/${params.domain}`)}>
          <h1 className='text-xl font-bold'>{params.domain}</h1>
        </button>
      </header>
      <div className='flex flex-col h-screen justify-between'>{children}</div>
      <footer className='w-full bg-gray-800 text-white px-6 py-4'>
        <div className='flex justify-between items-center'>
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
