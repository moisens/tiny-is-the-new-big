import { contactDatas } from "../../../types/interface-MultiImg";
import { Fragment } from "react";

const ContactImgList = ({ contactData }: contactDatas) => {
  return (
    <Fragment>
      {contactData.map((contactList) => {
        const { id, name, image } = contactList;
        return <img key={id} src={image} alt={name} />;
      })}
    </Fragment>
  );
};

export default ContactImgList;
