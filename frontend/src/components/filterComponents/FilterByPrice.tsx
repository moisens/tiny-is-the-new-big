import Button from "../button/Button";


export type MinMaxpriceType = {
  minPrice: number | null,
  maxPrice: number | null,
  setMinPrice: React.Dispatch<React.SetStateAction<number | null>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number | null>>
}


const FilterByPrice = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }: MinMaxpriceType) => {
  return (
    <section className="filter__section filter__price">
      <form className="filter__form price">
        <div>
          <label htmlFor="from" />
          <input
            type="number"
            name="from"
            min="10000"
            max="800000"
            value={minPrice?.toString()}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="10000"
          />
        </div>
        <p>To</p>
        <div>
          <label htmlFor="to" />
          <input
            type="number"
            name="to"
            min="10000"
            max="800000"
            value={maxPrice?.toString()}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="800000"
          />
        </div>
      </form>
      <div className="apply__reset__container">
        <Button
          as="button"
          className="apply__reset__btn"
          handleClick={() => {}}
        >
          Apply
        </Button>
        <Button
          as="button"
          className="apply__reset__btn"
          handleClick={() => {}}
        >
          Reset
        </Button>
      </div>
    </section>
  );
};

export default FilterByPrice;
