import { ContactForm } from 'modules/components/contact/ContactForm';
import { ContactListItem } from 'modules/components/contact/ContactListItem';
import { useEffect } from 'react';
import { useContactsDB } from 'modules/hooks/useContactsDB';

export function Contact() {
  const { onDeleteContact, contactList, onAddContact, icons } = useContactsDB();

  useEffect(() => {}, [contactList]);
  return (
    <section className='w-full h-screen py-20 select-none'>
      <div className='min-w-[280px] flex text-black flex-col justify-between overflow-hidden w-[90%] lg:w-1/3 h-[80vh] rounded-xl border border-accent border-2 mx-auto lg:mt-10 bg-pale'>
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
        </ul>
        <ContactForm
          icons={icons}
          onAddContact={onAddContact}
          contactList={contactList}
        />
      </div>
    </section>
  );
}
