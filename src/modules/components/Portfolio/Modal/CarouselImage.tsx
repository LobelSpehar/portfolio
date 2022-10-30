export function CarouselImage({ image }: { image: string }) {
  return (
    <img
      draggable={false}
      src={image}
      alt='Project screenshots'
      className='object-cover mt-24 w-[85vw] h-auto rounded rounded-xl overflow-hidden mx-auto'
    ></img>
  );
}
