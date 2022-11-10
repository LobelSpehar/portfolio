import { Routes, Navigate, Route, useLocation } from 'react-router-dom';

import { SideBar } from 'modules/components/sideBar/SideBar';
import { AboutMe } from 'pages/AboutMe';
import { Home } from 'pages/Home';
import { Portfolio } from 'pages/Portfolio';
import { Contact } from 'pages/Contact';
import { SideBarLink } from 'modules/components/sideBar/SideBarLink';
import { TopBar } from 'modules/components/topBar/TopBar';
import { useEffect, useState } from 'react';

export function App() {
  const [theme, setTheme] = useState<string>('dark');
  const pathName = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <div className={'bg-primary w-full duration-500 ' + theme}>
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
