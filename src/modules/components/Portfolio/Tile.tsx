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
      className='md:absolute h-[250px] w-[95vw] m-2 animate-appear select-none group text-[#2a2b2a] overflow-hidden rounded rounded-xl'
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
      <div className='md:p-6 md:absolute md:top-0 text-left backdrop-blur-sm z-10'>
        {children}
      </div>
      <img
        draggable={false}
        src={image[0]}
        className='object-cover w-full h-full touch-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-out'
        alt='text'
      ></img>
    </div>
  );
}
