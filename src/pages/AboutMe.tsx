import { ListItem } from 'modules/components/AboutMe/ListItem';
import { ScrollProgressBar } from 'modules/components/AboutMe/ScrollProgressBar';

export function AboutMe() {
  return (
    <main className='w-full h-[4000px]'>
      <ul className='mt-32 select-none w-full pr-20 pl-20 fixed top-0 z-20 text-accent font-bold text-3xl'>
        <ListItem year={1992} title={'born'} duration={''}>
          on 15th of April in Pula, Croatia
        </ListItem>
        <ListItem year={1999} title={'elementary school'} duration={''}>
          in Osijek
        </ListItem>
        <ListItem year={2007} title={'high school'} duration={''}>
          II Gymnasium in Osijek
        </ListItem>
        <ListItem year={2011} title={'college'} duration={''}>
          Faculty of Electrical Engineering, University of Osijek
        </ListItem>
        <ListItem year={2012} title={'Customer support'} duration={'6 months'}>
          Transcom, Osijek
        </ListItem>
        <ListItem
          year={2016}
          title={'Electrical design assistant'}
          duration={'1.5 years'}
        >
          Agenor, Osijek
        </ListItem>
        <ListItem year={2017} title={'IT assistant'} duration={'4 months'}>
          Aminess, Novigrad
        </ListItem>
        <ListItem year={2018} title={'Shift runner'} duration={'2 years'}>
          Dominoes, Killarney, Ireland
        </ListItem>
        <ListItem year={2021} title={'Web development'} duration={'1 year'}>
          self taught
        </ListItem>
        <ListItem year={2022} title={'New job'} duration={'for a long time'}>
          *Insert your bussiness name here*
        </ListItem>
      </ul>
      <ScrollProgressBar />
    </main>
  );
}
