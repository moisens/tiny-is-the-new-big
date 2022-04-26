interface BaseProps {
  children: React.ReactNode;
}

interface AsButtonProps extends BaseProps {
  as: "button" | "submit";
  onClick: () => void;
  href?: never;
  className: string;
  //otherProps: string;
  //handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AsLinkProps extends BaseProps {
  as: "a";
  href: string;
  onClick?: never;
  className: string;
  //otherProps: string;
  //handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = AsButtonProps | AsLinkProps;

const Button = ({
  children,
  as,
  href,
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <>
      {as === "a" && (
        <a href={href} className={className}>
          {children}
        </a>
      )}

      {as === "button" && <button onClick={onClick}>{children}</button>}
      {as === "submit" && <button onClick={onClick}>{children}</button>}
    </>
  );
};

export default Button;

/*

interface ButtonProps {
  className: string;
  type: "button" | "submit";
  title: string;
  otherProps?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const Button = ({ className = "", type, title, handleClick, ...otherProps }: ButtonProps) => {
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


*/
