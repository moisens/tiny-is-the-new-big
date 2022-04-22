import { ILinkProps } from "../../types/Interface";

const DropdowList = (props: ILinkProps) => {
  const { linksData, setIsDropdown } = props;

  const handleCloseDropdown = () => {
    setIsDropdown?.(false);
  }

  return (
    <>
      {linksData.map((link) => (
        <li className="dropdown__li" key={link.id} onClick={handleCloseDropdown}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </>
  );
};

export default DropdowList;
