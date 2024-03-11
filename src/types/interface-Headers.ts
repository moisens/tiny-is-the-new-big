//export interface BaseProps {
//  children: React.ReactNode;
//}

export interface DataHeaderProps {
  dataHeaders: {
    readonly id: string;
    image: string;
    icon: JSX.Element;
    category: string;
    title: string;
    description: string;
  }[];
}

//export type HeaderProps = DataHeaderProps;