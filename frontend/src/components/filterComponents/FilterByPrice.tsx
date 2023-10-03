import Button from "../button/Button";

const FilterByPrice = () => {
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
