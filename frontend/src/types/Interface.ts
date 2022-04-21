export interface ILinkProps {
  linksData: { id: string; text: string; url: string }[];
  //linksData: LinkType[]; => Can also write like this!!!
}

//type LinkType = {
//  id: string;
//  text: string;
//  url: string
//}