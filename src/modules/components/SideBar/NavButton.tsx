interface navBtnInterface {
  children: String;
  onToggleMenu: Function;
  onHover: Function;
  tagState: Boolean;
}

export function NavButton({
  children,
  onToggleMenu,
  onHover,
  tagState,
}: navBtnInterface) {
  return (
    <button
      className={
        'ease-in transition-all duration-150 backdrop-blur-sm w-20 text-left ' +
        (tagState && 'tracking-widest')
      }
      onClick={(e) => onToggleMenu()}
      onMouseEnter={(e) => onHover(true)}
      onMouseLeave={(e) => onHover(false)}
    >
      {children}
    </button>
  );
}
