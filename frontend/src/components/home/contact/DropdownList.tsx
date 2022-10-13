import { OptionsProps } from "../../../types/Interface";

const DropdownList = ({
  options,
  dropIsActive,
  setDropIsActive,
  setSelected,
}: OptionsProps) => {
  return (
    <div
      className={
        dropIsActive ? "dropdown__select isSelected" : "dropdown__select"
      }
    >
      {options.map((list) => {
        const { id, listOptions, country } = list;
        return (
          <li
            className="dropdown__selectLi"
            key={id}
            onClick={() => {
              setSelected(listOptions);
              setDropIsActive(!dropIsActive);
            }}
          >
            <span className="dropdown__span">{country ? country : null}</span>
            {listOptions}
          </li>
        );
      })}
    </div>
  );
};

export default DropdownList;
