import { CarouselImage } from 'modules/components/Portfolio/Modal/CarouselImage';
import { CarouselNavigation } from 'modules/components/Portfolio/Modal/CarouselNavigation';
import { CloseBtn } from 'modules/components/Portfolio/Modal/CloseBtn';
import { useState } from 'react';
export function Modal({
  images,
  onCloseModal,
}: {
  images: Array<string>;
  onCloseModal: Function;
}) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className='backdrop-blur-sm w-full h-full bg-transparent fixed top-0'>
      <CarouselImage image={images[activeImage]} />
      <CloseBtn onCloseModal={onCloseModal} />
      <CarouselNavigation
        length={images.length}
        activeImage={activeImage}
        onSetActiveImage={setActiveImage}
      />
    </div>
  );
}
