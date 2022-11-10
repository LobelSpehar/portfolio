import { HomeDetails } from 'modules/components/home/HomeDetails';
import { LandingView } from 'modules/components/home/LandingView';

export function Home() {
  return (
    <main className=''>
      <LandingView />
      <HomeDetails />
    </main>
  );
}
