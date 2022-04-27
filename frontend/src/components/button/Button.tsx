interface BaseProps {
  children: React.ReactNode;
}

interface AsButtonProps extends BaseProps {
  as: "button" | "submit";
  href?: never;
  className: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AsLinkProps extends BaseProps {
  as: "a";
  href: string;
  className: string;
  handleClick?: never;
}

type ButtonProps = AsButtonProps | AsLinkProps;

const Button = ({
  children,
  as,
  href,
  handleClick,
  className = "",
}: ButtonProps) => {
  return (
    <>
      {as === "a" && (
        <a href={href} className={className}>
          {children}
        </a>
      )}

      {as === "button" && (
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      )}
      {as === "submit" && (
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
