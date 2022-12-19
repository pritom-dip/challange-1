import classNames from 'classnames';
import styles from './input.module.scss';

interface InputProps {
  type: string;
  placeholder?: string;
  value: any;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  id?: string;
  classes?: string;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  id = '',
  classes = ''
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      type={type}
      id={id}
      className={classNames(styles.input, classes)}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
