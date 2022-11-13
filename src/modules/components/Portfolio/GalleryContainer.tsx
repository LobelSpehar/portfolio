import { useState } from 'react';

import { MouseEvent } from 'modules/types/index';

export function GalleryContainer({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: MouseEvent) => {
    setMousePosition({
      x: -event.pageX,
      y: -event.pageY,
    });
  };

  return (
    <div className='w-screen md:h-screen pt-20 md:pt-0'>
      <div
        className='md:h-[200vh] md:w-[200vw] duration-500 ease-out'
        onMouseMove={handleMouse}
        style={
          window.innerWidth < 769
            ? {}
            : {
                transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
              }
        }
      >
        {children}
      </div>
    </div>
  );
}
