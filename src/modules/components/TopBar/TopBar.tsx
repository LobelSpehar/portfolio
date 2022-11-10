export function TopBar({
  pathName,
  onToggleTheme,
  theme,
}: {
  pathName: string;
  onToggleTheme: Function;
  theme: string;
}) {
  const toggleHandler = () => {
    onToggleTheme((current: string) => (current === 'dark' ? 'light' : 'dark'));
  };
  const isThemeDark = theme === 'dark';
  return (
    <header className='z-40 select-none hidden lg:block backdrop-blur-sm w-full fixed h-20'>
      <div className='border-b border-secondary h-20 fixed left-72 right-72 flex flex-row justify-between'>
        <h2 className='ml-8 text-4xl text-secondary tracking-widest ml-10 mt-5'>
          {pathName}
        </h2>

        <button
          onClick={toggleHandler}
          className='bg-pale mt-6 mr-8 h-8 w-20 rounded-full border border-transparent hover:border-accent border-2 duration-500'
        >
          <p
            className={
              'relative w-0 h-0 text-accent duration-500 font-bold tracking-widest ' +
              (isThemeDark ? 'left-2' : 'left-8')
            }
          >
            {theme}
          </p>

          <div
            className={
              'h-6 w-6 bg-primary rounded-full mx-1 transition-all duration-500 ' +
              (isThemeDark ? 'translate-x-11' : '')
            }
          ></div>
        </button>
      </div>
    </header>
  );
}
