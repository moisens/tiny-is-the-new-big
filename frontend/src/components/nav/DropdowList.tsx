import { ILinkProps } from "../../types/Interface";
import { useLocation } from "react-router-dom";

const DropdowList = (props: ILinkProps) => {
  const { linksData, setIsDropdown, handleSidebarAfterClick } = props;

  const handleCloseDropdown = () => {
    setIsDropdown?.(false);
  };

  const location = useLocation();

  return (
    <>
      {linksData.map((link) => (
        <li
          className="dropdown__li"
          key={link.id}
          onClick={handleCloseDropdown}
        >
          {/*On small device, close the sidebar after clicking on link in the dropdown menu*/}
          <a
            href={location.pathname !== "/" ? `/${link.url}` : link.url}
            onClick={handleSidebarAfterClick}
          >
            {link.text}
          </a>
        </li>
      ))}
    </>
  );
};

export default DropdowList;
