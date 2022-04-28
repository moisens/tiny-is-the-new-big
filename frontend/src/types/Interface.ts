export interface ILinkProps {
  linksData: { id: string; text: string; url: string }[];
  setIsDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebarAfterClick: () => void;
}

export interface FoundersProps {
  foundersItems: {
    id: string;
    name: string;
    title: string;
    image: string;
    icons: { id: string; star: JSX.Element }[];
    contact: string;
  }[];
}

export interface IconProps {
  iconsItems: { id: string; star: JSX.Element }[];
}
