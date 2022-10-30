export function ListItem({
  children,
  year,
  title,
  duration,
}: {
  year: number;
  title: string;
  children: string;
  duration: string;
}) {
  return (
    <li className='mt-6 w-full text-4xl pl-[10vw] animate-appear'>
      {year} -<small className='ml-2'>{title}</small>
      <small className='text-primary ml-2'>{children}</small>
      <small className='text-primary float-right pr-44'>{duration}</small>
    </li>
  );
}
