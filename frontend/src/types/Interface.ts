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

export interface SliderPeople {
  sliderPeople: {
    id: string;
    name: string;
    text: string;
    image: string;
    icons: { id: string; star: JSX.Element }[];
  }[];
}

export interface ServiceProps {
  services: {
    id: string;
    title: string;
    icon: JSX.Element;
    text: string;
  }[];
}

export interface ContactProps {
  dataDropdownList: {
    id: string;
    defaultValues: string;
    options: { id: string; listOptions: string, country?: string }[];
  }[];
}

export interface OptionsProps {
  options: { id: string; listOptions: string, country?: string }[]
  dropIsActive: boolean;
}


