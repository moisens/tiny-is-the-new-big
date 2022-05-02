import { OptionsProps } from "../../../types/Interface";

const DropdownList = ({ options }: OptionsProps) => {
  return (
    <div className="dropdown__select isSelected">
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
