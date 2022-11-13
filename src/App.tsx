import { useEffect, useState } from 'react';
import { Routes, Navigate, Route, useLocation } from 'react-router-dom';

import {
  SideBar,
  SideBarLink,
  TopBar,
  Notification,
} from 'modules/components/index';
import { AboutMe, Home, Portfolio, Contact } from 'pages/index';

export function App() {
  const [theme, setTheme] = useState<string>('dark');
  const pathName = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <div className={'bg-primary w-full duration-500 ' + theme}>
      <Notification />
      <SideBar pathName={pathName}>
        <SideBarLink path={'home'}>{'<Home />'}</SideBarLink>
        <SideBarLink path={'portfolio'}>{'<Portfolio />'}</SideBarLink>
        <SideBarLink path={'about_me'}>{'<AboutMe />'}</SideBarLink>
        <SideBarLink path={'contact'}>{'<Contact />'}</SideBarLink>
      </SideBar>
      <TopBar pathName={pathName} onToggleTheme={setTheme} theme={theme} />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about_me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<div>Error no match</div>} />
      </Routes>
    </div>
  );
}
