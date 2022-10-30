import { Routes, Navigate, Route, useLocation } from 'react-router-dom';

import { SideBar } from 'modules/components/SideBar/SideBar';
import { AboutMe } from 'pages/AboutMe';
import { Home } from 'pages/Home';
import { Portfolio } from 'pages/Portfolio';
import { Contact } from 'pages/Contact';
import { SideBarLink } from 'modules/components/SideBar/SideBarLink';
import { TopBar } from 'modules/components/TopBar/TopBar';

export function App() {
  return (
    <div className='bg-primary w-full'>
      <SideBar>
        <SideBarLink path={'home'}>{'<Home />'}</SideBarLink>
        <SideBarLink path={'portfolio'}>{'<Portfolio />'}</SideBarLink>
        <SideBarLink path={'about_me'}>{'<AboutMe />'}</SideBarLink>
        <SideBarLink path={'contact'}>{'<Contact />'}</SideBarLink>
      </SideBar>
      <TopBar pathName={useLocation().pathname} />

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
