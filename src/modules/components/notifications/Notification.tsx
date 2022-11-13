import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { notificationAtom } from 'recoil/atoms/notificationAtom';

export function Notification() {
  const [{ color, text, duration }, setNotification] =
    useRecoilState(notificationAtom);
  const timer = useRef<any>(null);
  const borderColor =
    color === 'green' ? '#4CAF50' : color === 'blue' ? '#2196F3' : '#F44336';
  useEffect(() => {
    if (duration) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setNotification({
          color: color,
          text: text,
          duration: duration - 1,
        });
      }, 1000);
    }
  }, [duration]);
  return (
    <div
      className={
        'transiton-all text-center text-pale border border-4 w-auto rounded-md px-4 py-2 duration-200 ease-out fixed top-4 left-[50vw] -translate-x-1/2 z-[60] ' +
        (duration ? ' opacity-100' : 'opacity-0')
      }
      style={{ borderColor: borderColor }}
    >
      <strong className='tracking-widest text-xl'>{text}</strong>
    </div>
  );
}
