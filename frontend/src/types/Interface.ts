export interface ILinkProps {
  linksData: { id: string; text: string; url: string }[];
  setIsDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebarAfterClick: () => void;
  //linksData: LinkType[]; => Can also write like this!!!
}

//type LinkType = {
//  id: string;
//  text: string;
//  url: string
//}