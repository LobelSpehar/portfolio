import { useEffect, useState } from 'react';

import { GalleryContainer } from 'modules/components/Portfolio/GalleryContainer';
import { Tile } from 'modules/components/Portfolio/Tile';
import { TileInfo } from 'modules/components/Portfolio/TileInfo';
import { useProjectsDB } from 'modules/hooks/useProjectsDB';
import { projectsType } from 'modules/types/projectsType';
import GitHubLogo from '../assets/images/GitHubLogo.png';
import { Modal } from 'modules/components/Portfolio/Modal';

export function Portfolio() {
  const { fetchProjectList, fetchImages } = useProjectsDB();
  const [projectsState, setProjectsState] = useState<Array<projectsType>>([]);
  const [modalState, setModalState] = useState(false);
  const [modalImages, setModalImages] = useState<Array<string> | undefined>([]);
  useEffect(() => {
    let projects: Array<projectsType> = fetchProjectList();
    setProjectsState(projects);
  }, []);
  const handleProjectExpand = (title: string | undefined) => {
    setModalState(true);
    let res = fetchImages(title);
    setModalImages(res);
  };
  return (
    <main className='bg-primary w-full h-full overflow-hidden'>
      <GalleryContainer>
        <>
          {projectsState &&
            projectsState.map((item) => (
              <button
                key={item.title}
                onClick={(e) => handleProjectExpand(item.title)}
              >
                <Tile project={item}>
                  <TileInfo title={item.title}>{item.text}</TileInfo>
                </Tile>
              </button>
            ))}
          <a
            draggable={false}
            href='https://github.com/LobelSpehar'
            target='_blank'
            rel='noopener noreferrer'
            className='h-full w-full hover:animate-pulse'
          >
            <Tile
              project={{
                posX: 46,
                posY: 36,
                width: 200,
                height: 200,
                color: '#706C61',
                title: '',
                text: '',
                images: [GitHubLogo],
              }}
            >
              <TileInfo title={'GitHub'}>/LobelSpehar</TileInfo>
            </Tile>
          </a>
        </>
      </GalleryContainer>
      {modalState && (
        <Modal images={modalImages || ['']} onCloseModal={setModalState} />
      )}
    </main>
  );
}
