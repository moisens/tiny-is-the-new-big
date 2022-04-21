import { ILinkProps } from "../../types/Interface";

const DropdowList = (props: ILinkProps) => {
  const { linksData } = props;

  return (
    <>
      {linksData.map((link) => (
        <li className="dropdown__li" key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </>
  );
};

export default DropdowList;
