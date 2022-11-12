import { atom } from 'recoil';

export const notificationAtom = atom<{
  color: 'green' | 'red' | 'blue' | '';
  text: string;
  duration: number;
}>({
  key: 'notificationAtom',
  default: {
    color: 'green',
    text: 'test',
    duration: 0,
  },
});
