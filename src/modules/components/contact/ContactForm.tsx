import { SubmitBtn } from 'modules/components/contact/contactForm/SubmitBtn';
import { ContactFormInput } from 'modules/components/contact/contactForm/ContactFormInput';
import { IconSelectBtn } from 'modules/components/contact/contactForm/IconSelectBtn';
import { contactsType } from 'modules/types/contactsType';
import { iconsType } from 'modules/types/iconsType';
import { FormEvent, useState } from 'react';

export function ContactForm({
  icons,
  onAddContact,
  contactList,
}: {
  icons: iconsType;
  onAddContact: Function;
  contactList: Array<contactsType>;
}) {
  const [selectValue, setSelectValue] = useState<string>('email');
  const [inputValue, setInputValue] = useState<string>('');

  const iconsList = Object.keys(icons);
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(contactList);
    onAddContact({
      id: contactList[contactList.length - 1].id + 1,
      icon: icons[selectValue as keyof typeof icons],
      value: inputValue,
    });
    setInputValue('');
  };
  return (
    <form
      className='h-24 w-full lg:text-2xl border-t border-secondary'
      onSubmit={(e) => onSubmitForm(e)}
    >
      <div className='h-12 w-full'>
        <IconSelectBtn
          setSelectValue={setSelectValue}
          selectValue={selectValue}
          iconsList={iconsList}
        />
        <ContactFormInput
          selectValue={selectValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <SubmitBtn isDisabled={inputValue.length === 0} />
    </form>
  );
}
