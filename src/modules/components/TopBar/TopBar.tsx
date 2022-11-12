import { ThemeToggleBtn } from 'modules/components/index';

export function TopBar({
  pathName,
  onToggleTheme,
  theme,
}: {
  pathName: string;
  onToggleTheme: Function;
  theme: string;
}) {
  return (
    <header className='z-40 select-none hidden lg:block backdrop-blur-sm w-full fixed h-20'>
      <div className='border-b border-secondary h-20 fixed left-72 right-72 flex flex-row justify-between'>
        <h2 className='ml-8 text-4xl text-secondary tracking-widest ml-10 mt-5'>
          {pathName}
        </h2>
        <ThemeToggleBtn onToggleTheme={onToggleTheme} theme={theme} />
      </div>
    </header>
  );
}
