interface InputProps {
  type: string;
  placeholder?: string;
  value: any;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  id?: string;
  classNames?: string;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  id = '',
  classNames = ''
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      type={type}
      id={id}
      className={classNames}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
