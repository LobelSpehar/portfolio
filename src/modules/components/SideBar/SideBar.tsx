import { NavButton } from 'modules/components/sideBar/NavButton';
import { useEffect, useState } from 'react';

export function SideBar({
  pathName,
  children,
}: {
  pathName: string;
  children: JSX.Element[];
}) {
  const [menuState, setMenuState] = useState<Boolean>(false);
  const [tagState, setTagState] = useState<Boolean>(false);
  useEffect(() => {
    setMenuState(false);
  }, [pathName]);
  const onHover = (state: Boolean) => {
    setTagState(state);
  };
  const onToggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <nav
      className={
        'z-50 fixed select-none pl-12 w-72 pt-4 tracking-wider border-secondary text-2xl ease-in transition-all duration-700 ' +
        (menuState
          ? ' text-accent border-r border-opacity-100 h-screen backdrop-blur-md'
          : ' text-secondary border-opacity-0 border-accent h-0')
      }
    >
      <NavButton
        onToggleMenu={onToggleMenu}
        onHover={onHover}
        tagState={tagState}
      >
        {'<nav>'}
      </NavButton>
      <ul
        className={
          'pl-8 border-l text-secondary border-secondary overflow-hidden ease-in transition-[height] duration-500 ' +
          (menuState ? 'h-[210px] ' : 'h-0')
        }
      >
        {children}
      </ul>
      <NavButton
        onToggleMenu={onToggleMenu}
        onHover={onHover}
        tagState={tagState}
      >
        {'</nav>'}
      </NavButton>
    </nav>
  );
}
