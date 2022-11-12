import { NavLink } from 'react-router-dom';

export function SideBarLink({
  children,
  path,
}: {
  children: any;
  path: String;
}) {
  return (
    <li className='hover:tracking-widest hover:font-bold hover:animate-pulse ease-in transition-all duration-200 my-4'>
      <NavLink
        draggable={false}
        to={'/' + path}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#F03A47',
                letterSpacing: '0.1em',
                fontWeight: 'bold',
              }
            : {}
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
