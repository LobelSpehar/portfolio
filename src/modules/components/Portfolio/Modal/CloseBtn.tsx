export function CloseBtn({ onCloseModal }: { onCloseModal: Function }) {
  return (
    <button
      onClick={(e) => onCloseModal(false)}
      className='text-accent absolute w-12 h-12 top-20 right-[2vw] text-4xl hover:font-bold border rounded-full border-accent border-2'
    >
      X
    </button>
  );
}
