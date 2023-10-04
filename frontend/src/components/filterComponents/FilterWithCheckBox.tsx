import Button from "../button/Button";
import { HousedataType } from "../../types/interface-housedata";


export type FilterWhithCheckboxType = {
  products: HousedataType['products'],
  titleHeader: string
}


const FilterWithCheckBox = ({ products, titleHeader } : FilterWhithCheckboxType) => {
  return (
    <section className="filter__section filter__country">
      {products?.map((product) => (
        <article className="filter__article" key={product._id}>
          <p>{titleHeader === "country" ? product.country : (titleHeader === "reference" ? product.reference : product.size)}</p>
          <div className="filter__icon__container">
            <input
              type="checkbox"
              name={product.country}
              value={product.country}
              id={product._id}
            />
          </div>
        </article>
      ))}
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

export default FilterWithCheckBox;
