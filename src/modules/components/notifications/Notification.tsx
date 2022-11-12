import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { notificationAtom } from 'recoil/atoms/notificationAtom';

export function Notification() {
  const [{ color, text, duration }, setNotification] =
    useRecoilState(notificationAtom);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (duration) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setNotification({
          color: color,
          text: text,
          duration: duration - 1,
        });

        if (duration <= 1) {
          timer.current = setTimeout(() => {
            setNotification({ color: '', text: '', duration: 0 });
          }, 2000);
        }
      }, 1000);
    }
  }, [duration]);
  return (
    <div
      className={
        'transiton-all text-center w-auto rounded-full px-4 py-2 duration-500 ease-in-out fixed top-4 left-[50vw] -translate-x-1/2 z-[60] ' +
        (duration ? ' opacity-100' : 'opacity-0 w-0')
      }
      style={{ backgroundColor: color }}
    >
      <strong className='tracking-widest text-xl'>{text}</strong>
    </div>
  );
}
