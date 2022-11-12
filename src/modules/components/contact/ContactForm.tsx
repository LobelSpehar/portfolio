import { FormEvent, useState } from 'react';

import { useSetRecoilState } from 'recoil';
import { notificationAtom } from 'recoil/atoms/notificationAtom';

import {
  SubmitBtn,
  ContactFormInput,
  IconSelectBtn,
} from 'modules/components/index';
import { iconsType } from 'modules/types/index';

export function ContactForm({
  icons,
  onAddContact,
}: {
  icons: iconsType;
  onAddContact: Function;
}) {
  const [selectValue, setSelectValue] = useState<string>('email');
  const [inputValue, setInputValue] = useState<string>('');
  const setNotification = useSetRecoilState(notificationAtom);
  const [id, setId] = useState(10);

  const iconsList = Object.keys(icons);
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    onAddContact({
      id: id,
      icon: icons[selectValue as keyof typeof icons],
      value: inputValue,
    });
    setId(id + 1);

    setInputValue('');
    setNotification({
      color: 'green',
      text: 'New contact added successfully',
      duration: 3,
    });
  };
  return (
    <form
      className='h-24 w-full lg:text-2xl border-t border-secondary'
      onSubmit={submitForm}
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
