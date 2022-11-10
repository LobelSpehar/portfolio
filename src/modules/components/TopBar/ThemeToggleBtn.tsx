export function ThemeToggleBtn({
  onToggleTheme,
  theme,
}: {
  onToggleTheme: Function;
  theme: string;
}) {
  const toggleHandler = () => {
    onToggleTheme((current: string) => (current === 'dark' ? 'light' : 'dark'));
  };
  const isThemeDark = theme === 'dark';
  return (
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
  );
}
