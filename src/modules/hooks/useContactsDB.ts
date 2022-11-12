import { useState } from 'react';

import { contactsType, iconsType } from 'modules/types/index';

import { email, git, linkedin, phone, unknown } from 'assets/svg/index';

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
  const onRefreshList = () => {
    setContactList(baseContacts);
  };
  return { contactList, onDeleteContact, onAddContact, icons, onRefreshList };
}
