import { useState } from 'react';
import { useScroll } from 'framer-motion';
import { LandingView } from 'modules/components/index';

export function Home() {
  const [height, setHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  scrollYProgress.onChange((current) => setHeight(current));

  return (
    <main className=''>
      <LandingView skewAmount={Math.round(height * 1000)} />
    </main>
  );
}
