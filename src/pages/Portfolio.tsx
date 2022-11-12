import { useEffect, useState } from 'react';

import {
  GalleryContainer,
  Tile,
  TileInfo,
  Modal,
} from 'modules/components/index';
import { useProjectsDB } from 'modules/hooks/useProjectsDB';
import { projectsType } from 'modules/types/index';
import { GitHubLogo } from '../assets/images/index';

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
    <main className='w-full h-full lg:overflow-hidden pb-10 lg:pb-0'>
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
                posY: 40,
                width: 200,
                height: 200,
                color: '#f8f4e3',
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
