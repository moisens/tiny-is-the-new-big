import { NavLink } from "react-router-dom";

export interface ILinkProps {
  linksData: { id: string; text: string; url: string }[];
  //linksData: LinkType[]; => Can also write like this!!!
}

//type LinkType = {
//  id: string;
//  text: string;
//  url: string
//}

const LinkList = (props: ILinkProps): JSX.Element => {
  const { linksData } = props;

  return (
    <>
      {linksData.map((link) => (
        <li className="nav__li" key={link.id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__a activeLink" : "nav__a"
            }
            to={link.url}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default LinkList;

/*
React.FC version


import { NavLink } from "react-router-dom";

interface ILinkProps {
  linksData: { id: string; text: string; url: string  }[];
}

const LinkList: React.FC<ILinkProps> = ({ linksData }) => {
  console.log(linksData);
  
  return (
    <>
      {linksData.map(link => (
        <li key={link.id}><NavLink to={link.url}>{link.text}</NavLink></li>
      ))}
    </>
  );
};

export default LinkList;

*/
