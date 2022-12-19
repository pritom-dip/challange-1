interface CheckboxProps {
  id: string;
  label: string;
  value: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ id, label, value, onChange }: CheckboxProps) => {
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <div>
      <input id={id} type="checkbox" checked={value} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
