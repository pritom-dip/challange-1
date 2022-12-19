import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
  classes?: string;
}

const Button = ({ text = 'Confirm', onClick, classes = '' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, classes)}>
      {text}
    </button>
  );
};
export default Button;
