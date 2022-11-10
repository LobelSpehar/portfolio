import { contactsType } from 'modules/types/contactsType';
import { iconsType } from 'modules/types/iconsType';
import { useState } from 'react';
import email from '../../assets/svg/contactIcons/email.svg';
import git from '../../assets/svg/contactIcons/git.svg';
import linkedin from '../../assets/svg/contactIcons/linkedin.svg';
import phone from '../../assets/svg/contactIcons/phone.svg';
import unknown from '../../assets/svg/contactIcons/unknown.svg';

export function useContactsDB() {
  const icons: iconsType = {
    email: email,
    git: git,
    linkedin: linkedin,
    phone: phone,
    unknown: unknown,
  };

  const baseContacts: Array<contactsType> = [
    {
      id: 0,
      icon: icons['email'],
      value: 'lobel.spehar.os@gmail.com',
    },
    {
      id: 1,
      icon: icons['phone'],
      value: '0953135205',
    },
    {
      id: 2,
      icon: icons['git'],
      value: 'github.com/LobelSpehar',
    },
    {
      id: 3,
      icon: icons['linkedin'],
      value: 'linkedin.com/in/lobelspehar',
    },
  ];

  const [contactList, setContactList] = useState(baseContacts);
  const onDeleteContact = (id: number) => {
    let filteredList = contactList.filter((contact) => contact.id !== id);
    setContactList(filteredList);
  };
  const onAddContact = (contact: contactsType) => {
    let newList = contactList.concat(contact);
    setContactList(newList);
  };
  return { contactList, onDeleteContact, onAddContact, icons };
}
