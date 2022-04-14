import { ChangeEventHandler } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  type: "button" | "submit";
  title: string;
  otherProps?: string;
}

const Button = ({
  className = "",
  type,
  title,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      //onClick={(e) => {console.log(e)}}
      className={className}
      type={type}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
