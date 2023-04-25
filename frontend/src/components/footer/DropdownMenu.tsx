import { ILinkProps } from "../../types/Interface";
import { useLocation } from "react-router-dom";


const DropdownMenu = ({ linksData }: ILinkProps) => {
  const location = useLocation();

  return (
    <>
      {linksData.map((link) => (
        <li className="footer__li" key={link.id}>
          <a href={location.pathname !== "/" ? `/${link.url}` : link.url}>
            {link.text}
          </a>
        </li>
      ))}
    </>
  );
};

export default DropdownMenu;
