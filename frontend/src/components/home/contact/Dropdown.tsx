import { RiArrowDownSFill } from "react-icons/ri";
import { ContactProps } from "../../../types/Interface";
import Button from "../../button/Button";
import DropdownList from "./DropdownList";
import React from "react";

const SelectServices = ({ countries }: ContactProps) => {
  return (
    <div className="dropdown__container">
      {countries.map((country) => {
        const { id, defaultValues, options } = country;
        return (
          <React.Fragment key={id}>
            <div className="input__input">
              <p>{defaultValues}</p>
              <Button
                className="input__button"
                as="button"
                handleClick={() => console.log("selected")}
              >
                <RiArrowDownSFill size="1.3rem" />
              </Button>
            </div>
            <DropdownList options={options} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SelectServices;
