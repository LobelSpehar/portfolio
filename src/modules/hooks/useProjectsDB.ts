import { projectsType } from 'modules/types/projectsType';
import CarConfig1 from '../../assets/images/portfolioImages/CarConfig1.png';
import CarConfig2 from '../../assets/images/portfolioImages/CarConfig2.png';
import CarConfig3 from '../../assets/images/portfolioImages/CarConfig3.png';
import CarConfig4 from '../../assets/images/portfolioImages/CarConfig4.png';
import ContactList1 from '../../assets/images/portfolioImages/ContactList1.png';
import ContactList2 from '../../assets/images/portfolioImages/ContactList2.png';
import ContactList3 from '../../assets/images/portfolioImages/ContactList3.png';
import ContactList4 from '../../assets/images/portfolioImages/ContactList4.png';
import Movies1 from '../../assets/images/portfolioImages/Movies1.png';
import Movies2 from '../../assets/images/portfolioImages/Movies2.png';
import Movies3 from '../../assets/images/portfolioImages/Movies3.png';
import Movies4 from '../../assets/images/portfolioImages/Movies4.png';
import Weather1 from '../../assets/images/portfolioImages/Weather1.png';
import Weather2 from '../../assets/images/portfolioImages/Weather2.png';
import Weather3 from '../../assets/images/portfolioImages/Weather3.png';
import Weather4 from '../../assets/images/portfolioImages/Weather4.png';

export function useProjectsDB() {
  const projectsDB: Array<projectsType> = [
    {
      posX: 12,
      posY: 13,
      width: 800,
      height: 450,
      color: '#79A9D1',
      title: 'Car configurator',
      text: '  App that allows logged in users to customize cars and add them to their list. Made with React, Recoil, Firebase, Typescrypt and Tailwind',
      images: [CarConfig1, CarConfig2, CarConfig3, CarConfig4],
    },
    {
      posX: 67,
      posY: 18,
      width: 400,
      height: 600,
      color: '#CD79D1',
      title: 'Contact list',
      text: '  Contact list with multiple filter and search parameters. Options to manually enter contacts or import them via Random contact API. IndexedDB Dexie used to store users list to browser.',

      images: [ContactList1, ContactList2, ContactList3, ContactList4],
    },
    {
      posX: 61,
      posY: 57,
      width: 1024,
      height: 576,
      color: '#D1A179',
      title: 'Movies list',
      text: '  App that allows user to search an online movie database and save favourite movies',
      images: [Movies1, Movies2, Movies3, Movies4],
    },
    {
      posX: 22,
      posY: 53,
      width: 558,
      height: 744,
      color: '#7DD179',
      title: 'Weather app',
      text: '  Simple weather app widget style. Custom animations and data fetching based on locations.',
      images: [Weather1, Weather2, Weather3, Weather4],
    },
  ];
  const fetchProjectList = () => {
    let result = projectsDB;
    return result;
  };
  const fetchImages = (title: string | undefined) => {
    let rawRes = projectsDB.filter((project) => project.title === title);
    let result = rawRes[0].images;
    return result;
  };

  return { fetchProjectList, fetchImages };
}
