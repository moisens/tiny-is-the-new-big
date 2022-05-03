import { OptionsProps } from "../../../types/Interface";

const DropdownList = ({ options, dropIsActive }: OptionsProps) => {
  return (
    <div className={dropIsActive ? "dropdown__select isSelected" : "dropdown__select"}>
      {options.map((location) => {
        const { id, country } = location;
        return (
          <li className="dropdown__selectLi" key={id}>
            {country}
          </li>
        );
      })}
    </div>
  );
};

export default DropdownList;
