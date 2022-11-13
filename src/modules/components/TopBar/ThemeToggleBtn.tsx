import { Cherry, Moon } from 'assets/images';

export function ThemeToggleBtn({
  onToggleTheme,
  theme,
}: {
  onToggleTheme: Function;
  theme: string;
}) {
  const toggleHandler = () => {
    onToggleTheme((current: string) =>
      current === 'dark' ? 'cherry' : 'dark'
    );
  };
  const isThemeDark = theme === 'dark';
  return (
    <button
      onClick={toggleHandler}
      className='mt-6 mr-8 h-9 w-16 group rounded-full bg-primary border border-secondary hover:border-accent border-2 duration-500'
    >
      <img
        src={isThemeDark ? Moon : Cherry}
        alt='Theme'
        className={
          'relative w-7 transition-all bg-secondary group-hover:bg-accent border border-2 border-black rounded-full duration-200 delay-100 ease-in-out ' +
          (isThemeDark ? 'left-1' : 'left-7')
        }
      ></img>
    </button>
  );
}
