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
        'ease-in transition-all duration-150 ' + (tagState && 'tracking-widest')
      }
      onClick={(e) => onToggleMenu()}
      onMouseEnter={(e) => onHover(true)}
      onMouseLeave={(e) => onHover(false)}
    >
      {children}
    </button>
  );
}
