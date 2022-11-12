import { projectsType } from 'modules/types/index';

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
      className='lg:absolute h-[250px] w-[95vw] m-2 animate-appear select-none group text-[#2a2b2a] overflow-hidden rounded rounded-xl'
      style={
        window.innerWidth < 769
          ? { backgroundColor: `${project.color}` }
          : {
              left: `${project.posX}%`,
              top: `${project.posY}%`,
              height: `${project.height}px`,
              width: `${project.width}px`,
              backgroundColor: `${project.color}`,
            }
      }
    >
      <div className='lg:p-6 lg:absolute lg:top-0  lg:group-hover:opacity-0 transition-opacity duration-700 ease-out text-left'>
        {children}
      </div>
      <img
        draggable={false}
        src={image[0]}
        className='object-cover w-full h-full touch-none opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 ease-out'
        alt='text'
      ></img>
    </div>
  );
}
