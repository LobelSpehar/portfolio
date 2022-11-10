export function CarouselNavigation({
  length,
  activeImage,
  onSetActiveImage,
}: {
  length: number;
  activeImage: number;
  onSetActiveImage: Function;
}) {
  const eventHandler = (amount: number) => {
    let newAmount = activeImage + amount;
    onSetActiveImage(newAmount);
  };
  return (
    <section className='w-52 flex justify-around flex-row relative lg:-top-[5vw] mx-auto text-4xl text-accent font-bold text-center'>
      <button
        disabled={activeImage === 0}
        onClick={(e) => eventHandler(-1)}
        className='hover:scale-100 scale-75 duration-200'
      >
        &#x2190;
      </button>
      <ul className='flex flex-row mt-3'>
        {[...new Array(length)].map((i, index) => (
          <li
            className={
              'mx-1 w-4 h-4 rounded-full border-accent border border-2 ' +
              (index === activeImage && 'bg-accent')
            }
          ></li>
        ))}
      </ul>
      <button
        disabled={length === activeImage + 1}
        onClick={(e) => eventHandler(1)}
        className='hover:scale-100 scale-75 duration-200'
      >
        &#x2192;
      </button>
    </section>
  );
}
