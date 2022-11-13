import { useEffect, useState } from 'react';

import { MovingText } from 'modules/components/index';

import { Portrait } from 'assets/images/index';

export function LandingView({ skewAmount }: { skewAmount: number }) {
  const myText = [
    <p>const myObject =&#65371;</p>,
    <p>&emsp;name:&#65371;</p>,
    <p>&emsp;&emsp;first:&emsp;' Lobel ' ,</p>,
    <p>&emsp;&emsp;last:&emsp;' Spehar ' ,</p>,
    <p>&emsp;&#65373;, </p>,
    <p>&emsp;about:&#65371;</p>,
    <p>&emsp;&emsp;location:&emsp;' Osijek ' , </p>,
    <p>&emsp;&emsp;skills:&emsp;[ "html", "css", "js", "react", "ts",..] ,</p>,
    <p>&emsp;&emsp;goal:&emsp;' Find a job ' ,</p>,
    <p>&emsp;&#65373;,</p>,
    <p>&#65373;;</p>,
  ];
  const [delayedText, setDelayedText] = useState<Array<JSX.Element>>([]);
  const delayAnimation = () => {
    myText.forEach((item, index) => {
      let delay = index * (300 - index * 12);
      setTimeout(() => {
        setDelayedText(myText.slice(0, index + 1));
      }, delay);
    });
  };
  useEffect(() => {
    delayAnimation();
  }, []);
  return (
    <section className='h-screen pt-20'>
      <ul className='ml-[20vw] pt-32 text-pale sm:text-xl md:text-3xl lg:text-4xl font-bold w-1/2 overflow-hidden transition-all ease-out transform -skew-y-6 text-transparent'>
        {delayedText.map((item, index) => (
          <MovingText key={index}>{item}</MovingText>
        ))}
      </ul>
      <img
        src={Portrait}
        className='saturate-[0.8] z-10 absolute left-[70vw] top-20 mt-10 rounded-full border w-1/4 h-auto border-8 border-blueish animate-appear'
        alt='Portrait'
      ></img>
    </section>
  );
}
