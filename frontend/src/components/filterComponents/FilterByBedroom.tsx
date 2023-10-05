const FilterByBedroom = () => {
  return (
    <section className="filter__section filter__bedroom">
      <div className="filter__bedroom__container">
        <input
          type="number"
          min="0"
          max="2"
          className="filter__bedroom__input"
        />
      </div>
    </section>
  );
};

export default FilterByBedroom;
