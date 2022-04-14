import { ChangeEventHandler } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      onClick={(e) => handleClick(e)}//onClick={handleClick} => without the event
      className={className}
      type={type}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
