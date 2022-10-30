import { projectsType } from 'modules/types/projectsType';

export function Tile({
  project,
  children,
}: {
  project: projectsType;
  children: JSX.Element;
}) {
  const image = project.images || [''];
  return (
    <div
      className='absolute animate-appear select-none group text-primary overflow-hidden rounded rounded-xl'
      style={{
        left: `${project.posX}%`,
        top: `${project.posY}%`,
        height: `${project.height}px`,
        width: `${project.width}px`,
        backgroundColor: `${project.color}`,
      }}
    >
      <img
        draggable={false}
        src={image[0]}
        className='object-cover w-full h-full touch-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'
        alt='text'
      ></img>
      <div className='p-6 absolute top-0 group-hover:opacity-0 transition-opacity duration-700 ease-out'>
        {children}
      </div>
    </div>
  );
}
