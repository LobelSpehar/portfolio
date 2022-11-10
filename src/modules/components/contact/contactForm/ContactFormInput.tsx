export function ContactFormInput({
  selectValue,
  inputValue,
  setInputValue,
}: {
  selectValue: string;
  inputValue: string;
  setInputValue: Function;
}) {
  return (
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
  );
}
