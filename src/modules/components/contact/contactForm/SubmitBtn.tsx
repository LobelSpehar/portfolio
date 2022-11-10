export function SubmitBtn({ isDisabled }: { isDisabled: boolean }) {
  return (
    <button
      disabled={isDisabled}
      className='px-2 bg-accent h-12 w-full hover:bg-accent duration-300 '
    >
      Add
    </button>
  );
}
