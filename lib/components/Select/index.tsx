import { MultiSelect, Option } from 'react-multi-select-component';
import { toast } from 'react-toastify';

interface SelectProps {
  options: Option[];
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  multiple?: boolean;
  labelledBy?: string;
  size?: number;
  hasSelectAll?: boolean;
  isLoading?: boolean;
}

const Select = ({
  options,
  selected,
  setSelected,
  multiple = true,
  labelledBy = 'Select',
  size = 100,
  hasSelectAll = false,
  isLoading = false
}: SelectProps) => {
  const handleChange = (data: Option[]) => {
    if (multiple) {
      if (size && data.length - 1 >= size) {
        toast.error(`You can only select ${size} items`);
        return;
      } else {
        setSelected(data);
      }
    }
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
          isLoading={isLoading}
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
