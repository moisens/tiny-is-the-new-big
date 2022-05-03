import { OptionsProps } from "../../../types/Interface";

const DropdownList = ({ options, dropIsActive }: OptionsProps) => {
  return (
    <div className={dropIsActive ? "dropdown__select isSelected" : "dropdown__select"}>
      {options.map((list) => {
        const { id, listOptions, country } = list;
        return (
          <li className="dropdown__selectLi" key={id}>
            <span className="dropdown__span">{country}</span>{listOptions}
          </li>
        );
      })}
    </div>
  );
};

export default DropdownList;
