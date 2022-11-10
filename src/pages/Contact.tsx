import { ContactListItem } from 'modules/components/contact/ContactListItem';
import { useContactsDB } from 'modules/hooks/useContactsDB';
import { FormEvent, useState, useEffect } from 'react';

export function Contact() {
  const { contactList, onDeleteContact, onAddContact, icons } = useContactsDB();
  const iconsList = Object.keys(icons);
  const [selectValue, setSelectValue] = useState<string>('email');
  const [inputValue, setInputValue] = useState<string>('');
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(contactList);
    onAddContact({
      id: contactList[contactList.length - 1].id + 1,
      icon: icons[selectValue as keyof typeof icons],
      value: inputValue,
    });
    setSelectValue('email');
    setInputValue('');
  };
  return (
    <section className='w-full h-screen py-20 select-none'>
      <div className='min-w-[280px] flex text-black flex-col justify-between overflow-hidden w-[90%] lg:w-1/3 h-[80vh] rounded-xl border border-secondary border-2 mx-auto lg:mt-10 bg-pale'>
        <div className=' p-3 w-full mb-0.5 border-b border-secondary'>
          <h2 className='text-3xl font-bold tracking-wide '>Contacts</h2>
        </div>
        <ul className=' lg:text-xl grow flex flex-col overflow-y-scroll'>
          {contactList.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
          {inputValue && (
            <li className='w-full flex flex-row group border-b border-secondary'>
              <img
                src={icons[selectValue as keyof typeof icons]}
                className='w-10 h-10 object-cover m-3 ml-4 object-cover'
                alt='contact icon'
              ></img>
              <p className='lg:text-xl p-4 select-text break-words w-1/2'>
                {inputValue}
              </p>
              <button
                onClick={(e) => setInputValue('')}
                className='opacity-0 pr-2 ml-auto group-hover:opacity-100 duration-200 scale-90 hover:scale-100'
              >
                delete
              </button>
            </li>
          )}
        </ul>
        <form
          className='h-24 w-full lg:text-2xl border-t border-secondary'
          onSubmit={(e) => onSubmitForm(e)}
        >
          <div className='h-12 w-full'>
            <select
              onChange={(e) => setSelectValue(e.target.value)}
              className='h-12 w-[25%]  border-r border-secondary'
              value={selectValue}
            >
              {iconsList.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <input
              type={
                selectValue === 'email'
                  ? 'email'
                  : selectValue === 'phone'
                  ? 'number'
                  : 'text'
              }
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className='h-12 w-[70%] ml-1 '
              placeholder='Enter new contact info here'
            ></input>
          </div>
          <button
            disabled={inputValue.length === 0}
            className='px-2 bg-accent h-12 w-full hover:bg-accent duration-300 '
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
}
