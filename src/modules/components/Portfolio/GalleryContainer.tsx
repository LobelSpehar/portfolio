import { useState } from 'react';

export function GalleryContainer({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: any) => {
    setMousePosition({
      x: -event.pageX,
      y: -event.pageY,
    });
  };

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <div
        className='h-[200vh] w-[200vw] duration-500 ease-out'
        onMouseMove={handleMouse}
        style={{
          transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
