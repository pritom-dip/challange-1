import { MultiSelect, Option } from 'react-multi-select-component';

interface SelectProps {
  options: Option[];
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  multiple?: boolean;
  labelledBy?: string;
  size?: number;
  hasSelectAll?: boolean;
}

const Select = ({
  options,
  selected,
  setSelected,
  multiple = true,
  labelledBy = 'Select',
  size = 100,
  hasSelectAll = false
}: SelectProps) => {
  const handleChange = (data: Option[]) => {
    if (multiple) {
      if (size && selected.length >= size) {
        return;
      }
      setSelected(data);
    }
    setSelected;
  };
  return (
    <>
      {multiple ? (
        <MultiSelect
          options={options}
          value={selected}
          onChange={handleChange}
          labelledBy={labelledBy}
          hasSelectAll={hasSelectAll}
        />
      ) : (
        <select>
          {options.map((option: any) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Select;
