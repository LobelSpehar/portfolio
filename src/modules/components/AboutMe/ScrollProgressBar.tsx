import { motion, useScroll } from 'framer-motion';
import { ScrollReminder } from 'modules/components/aboutMe/ScrollReminder';
import { useState } from 'react';

export function ScrollProgressBar() {
  const [height, setHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  scrollYProgress.onChange((current) => setHeight(current));
  return (
    <motion.div
      className='w-full bg-pale fixed top-0 origin-bottom overflow-hidden'
      style={{ height: `calc(${height}*100vh)` }}
    >
      <ScrollReminder opacity={height} />
    </motion.div>
  );
}
