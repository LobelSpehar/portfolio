export function TileInfo({
  title,
  children,
}: {
  title: string | undefined;
  children: string | undefined;
}) {
  return (
    <article>
      <h2 className='text-4xl mb-2'>{title}</h2>
      <p className='text-2xl indent-2.5'>{children}</p>
    </article>
  );
}
