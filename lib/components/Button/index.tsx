import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
  classes?: string;
  loading?: boolean;
}

const Button = ({
  text = 'Confirm',
  onClick,
  classes = '',
  loading = false
}: ButtonProps) => {
  return (
    <div onClick={onClick} className={classNames(styles.wrapper)}>
      {loading && <div className={styles.loading}></div>}
      <button disabled={loading} className={classNames(styles.button, classes)}>
        {text}
      </button>
    </div>
  );
};
export default Button;
