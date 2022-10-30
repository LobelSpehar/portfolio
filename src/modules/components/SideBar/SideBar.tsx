import { NavButton } from 'modules/components/SideBar/NavButton';
import { useState } from 'react';

export function SideBar(props: { children: any }) {
  const [menuState, setMenuState] = useState<Boolean>(false);
  const [tagState, setTagState] = useState<Boolean>(false);

  const onHover = (state: Boolean) => {
    setTagState(state);
  };
  const onToggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <nav
      className={
        'z-50 fixed backdrop-blur-sm select-none pl-12 w-72 pt-8 tracking-wider border-secondary text-2xl ease-in transition-all duration-700 ' +
        (menuState
          ? ' text-accent border-r border-opacity-100 h-screen'
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
        {props.children}
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
