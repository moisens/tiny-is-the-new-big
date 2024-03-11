export type bedroomType = {
  bedroomNum: number;
  setBedroomNum: React.Dispatch<React.SetStateAction<number>>;
};

const FilterByBedroom = ({ bedroomNum, setBedroomNum }: bedroomType) => {
  return (
    <section className="filter__section filter__bedroom">
      <div className="filter__bedroom__container">
        <input
          type="number"
          min="1"
          max="2"
          className="filter__bedroom__input"
          value={bedroomNum ? bedroomNum : ""}
          onChange={(e) => setBedroomNum(Number(e.target.value))}
        />
      </div>
    </section>
  );
};

export default FilterByBedroom;
