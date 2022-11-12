import { useSetRecoilState } from 'recoil';
import { notificationAtom } from 'recoil/atoms/notificationAtom';

import { Copy, Trash } from 'assets/images/index';
import { contactsType } from 'modules/types/index';

export function ContactListItem({
  contact,
  onDeleteContact,
}: {
  contact: contactsType;
  onDeleteContact: Function;
}) {
  const setNotification = useSetRecoilState(notificationAtom);
  const copyHandler = () => {
    navigator.clipboard.writeText(contact.value);
    setNotification({
      color: 'blue',
      text: 'Copied to clipboard!',
      duration: 2,
    });
  };
  const deleteHandler = () => {
    navigator.clipboard.writeText(contact.value);
    setNotification({
      color: 'green',
      text: 'Contact deleted successfully',
      duration: 3,
    });
    onDeleteContact(contact.id);
  };
  return (
    <li className='w-full flex flex-row group border-b border-secondary'>
      <img
        src={contact.icon}
        className='w-10 h-10 object-cover m-3 ml-4 object-cover'
        alt='contact icon'
      ></img>

      <p className='p-4 select-text break-words w-1/2'>{contact.value}</p>
      <button
        onClick={copyHandler}
        className='opacity-0 pr-4 ml-auto group-hover:opacity-100 duration-200 scale-90 hover:scale-100'
      >
        <img src={Copy} alt='Copy'></img>
      </button>
      <button
        onClick={deleteHandler}
        className='opacity-0 pr-2 group-hover:opacity-100 duration-200 scale-90 hover:scale-100 pr-4'
      >
        <img src={Trash} alt='Trash'></img>
      </button>
    </li>
  );
}
