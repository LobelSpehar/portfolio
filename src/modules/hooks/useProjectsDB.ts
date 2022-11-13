import { projectsType } from 'modules/types/index';

import {
  CarConfig1,
  CarConfig2,
  CarConfig3,
  CarConfig4,
  ContactList1,
  ContactList2,
  ContactList3,
  ContactList4,
  Movies1,
  Movies2,
  Movies3,
  Movies4,
  Weather1,
  Weather2,
  Weather3,
  Weather4,
} from 'assets/images/portfolioImages/index';

export function useProjectsDB() {
  const projectsDB: Array<projectsType> = [
    {
      posX: 20,
      posY: 14,
      width: 800,
      height: 450,
      color: '#79A9D1',
      title: 'Car configurator',
      text: '  App that allows logged in users to customize cars and add them to their list. Made with React, Recoil, Firebase, Typescrypt and Tailwind',
      images: [CarConfig1, CarConfig2, CarConfig3, CarConfig4],
    },
    {
      posX: 60,
      posY: 16,
      width: 400,
      height: 600,
      color: '#CD79D1',
      title: 'Contact list',
      text: '  Contact list with multiple filter and search parameters. Options to manually enter contacts or import them via Random contact API. IndexedDB Dexie used to store users list to browser.',

      images: [ContactList1, ContactList2, ContactList3, ContactList4],
    },
    {
      posX: 56,
      posY: 57,
      width: 1024,
      height: 576,
      color: '#D1A179',
      title: 'Movies list',
      text: '  App that allows user to search an online movie database and save favourite movies',
      images: [Movies1, Movies2, Movies3, Movies4],
    },
    {
      posX: 26,
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
