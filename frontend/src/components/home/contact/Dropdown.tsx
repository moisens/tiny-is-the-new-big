import React, {useState} from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { ContactProps } from "../../../types/Interface";
import Button from "../../button/Button";
import DropdownList from "./DropdownList";


const SelectServices = ({ countries }: ContactProps) => {
  const [dropIsActive, setDropIsActive] = useState<boolean>(false);

  const handleActiveDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setDropIsActive(!dropIsActive)
  }

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
                handleClick={handleActiveDropdown}
              >
                <RiArrowDownSFill size="1.3rem" />
              </Button>
            </div>
            <DropdownList options={options} dropIsActive={dropIsActive} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SelectServices;
