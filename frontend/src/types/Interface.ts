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

export interface FoundersProps {
  foundersItems: {
    id: string;
    name: string;
    title: string;
    image: string;
    icons: TIcons[],
    contact: string;
  }[];
}

export interface IconProps<TIcons> {
  iconsItems: { id: string; star: JSX.Element }[];
}
