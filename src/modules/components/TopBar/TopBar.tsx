export function TopBar({ pathName }: { pathName: String }) {
  return (
    <header className='z-40 select-none backdrop-blur-sm w-full fixed h-20'>
      <div className='border-b border-secondary h-20 fixed left-72 right-72'>
        <h2 className='ml-8 text-4xl text-secondary tracking-widest ml-10 mt-5'>
          {pathName}
        </h2>
      </div>
    </header>
  );
}
