interface ButtonProps {
  className: string;
  type: "button" | "submit";
  title: string;
  otherProps?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const Button = ({
  className = "",
  type,
  title,
  handleClick,
  ...otherProps
  
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}//(e) => handleClick(e) => with the event
      className={className}
      type={type}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
