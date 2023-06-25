interface ParamsProps {
  domain: string;
  pageId: string;
}

export default function Page({ params }: { params: ParamsProps }): JSX.Element {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <header className='w-full bg-gray-800 text-white px-6 py-4'>
        <h1 className='text-xl font-bold'>{params.domain}</h1>
      </header>

      <main className='px-10 py-6 bg-white flex-grow'>
        <div className='mx-auto max-w-xl md:max-w-2xl'>
          <h1 className='text-4xl font-bold mb-4'>{params.pageId}</h1>
          <p className='text-gray-500'>Hello world!</p>
          <p className='text-gray-500'>This is a sample page.</p>
          <p className='text-gray-500'>I love Notion and Scrapbox.</p>
        </div>
      </main>

      <footer className='w-full bg-gray-800 text-white px-6 py-4'>
        <div className='flex justify-between items-center'>
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
