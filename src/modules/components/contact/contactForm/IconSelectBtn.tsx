export function IconSelectBtn({
  setSelectValue,
  selectValue,
  iconsList,
}: {
  setSelectValue: Function;
  selectValue: string;
  iconsList: string[];
}) {
  return (
    <select
      onChange={(e) => setSelectValue(e.target.value)}
      className='h-12 w-[25%]  border-r border-secondary'
      value={selectValue}
    >
      {iconsList.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
}
