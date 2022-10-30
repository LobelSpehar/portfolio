export function CarouselBtn({
  disabled,
  children,
  onSetActiveImage,
  activeImage,
  amount,
}: {
  disabled: boolean;
  children: string;
  onSetActiveImage: Function;
  activeImage: number;
  amount: number;
}) {
  const eventHandler = (amount: number) => {
    let newAmount = activeImage + amount;
    onSetActiveImage(newAmount);
  };
  return (
    <button
      disabled={disabled}
      onClick={(e) => eventHandler(amount)}
      className='hover:scale-100 scale-75 duration-200'
    >
      {children}
    </button>
  );
}
