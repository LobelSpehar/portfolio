import { contactsType } from 'modules/types/contactsType';

export function ContactListItem({
  contact,
  onDeleteContact,
}: {
  contact: contactsType;
  onDeleteContact: Function;
}) {
  return (
    <li className='w-full flex flex-row group border-b border-secondary'>
      <img
        src={contact.icon}
        className='w-10 h-10 object-cover m-3 ml-4 object-cover'
        alt='contact icon'
      ></img>

      <p className='p-4 select-text break-words w-1/2'>{contact.value}</p>
      <button
        onClick={(e) => onDeleteContact(contact.id)}
        className='opacity-0 pr-2 ml-auto group-hover:opacity-100 duration-200 scale-90 hover:scale-100'
      >
        delete
      </button>
    </li>
  );
}
