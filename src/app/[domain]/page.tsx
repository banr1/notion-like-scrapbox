interface Props {
  params: {
    domain: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <main className='px-10 py-6 bg-white flex-grow'>
      <div>{params.domain}</div>
    </main>
  );
}
