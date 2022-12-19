interface ButtonProps {
  onClick: () => void;
  text: string;
  classNames?: string;
}

const Button = ({
  text = 'Confirm',
  onClick,
  classNames = ''
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames}>
      {text}
    </button>
  );
};
export default Button;
