export function ScrollReminder({ opacity }: { opacity: number }) {
  return (
    <div
      style={{ opacity: 1 - opacity * 2 }}
      className='fixed text-accent border border-accent border-4 top-[65vh] text-center left-[calc(50vw-2.5rem)] rounded-full animate-bounce w-32 h-32 '
    >
      <div className='mt-4'>
        <big className='text-2xl font-bold tracking-widest'>Scroll</big>
        <br />
        <big className=' text-6xl font-bold'>&#8595;</big>
      </div>
    </div>
  );
}
