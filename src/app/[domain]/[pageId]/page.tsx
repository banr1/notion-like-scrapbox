interface Props {
  params: {
    domain: string;
    pageId: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  return (
    <main className='px-10 py-6 bg-white flex-grow'>
      <div className='mx-auto max-w-xl md:max-w-2xl'>
        <h1 className='text-4xl font-bold mb-4 text-gray-800'>{params.pageId}</h1>
        <p className='text-gray-500'>Hello world!</p>
        <p className='text-gray-500'>This is a sample page.</p>
        <p className='text-gray-500'>I love Notion and Scrapbox.</p>
      </div>
    </main>
  );
}
