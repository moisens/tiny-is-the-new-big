import Button from "../button/Button";
import { HousedataType } from "../../types/interface-housedata";

export type FilterWhithCheckboxType = {
  products: HousedataType["products"];
  titleHeader: string;
  sizes?: number[];
  setSizes?: React.Dispatch<React.SetStateAction<number[]>>;
  countries?: string[];
  setCountries?: React.Dispatch<React.SetStateAction<string[]>>;
  references?: string[];
  setReferences?: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterWithCheckBox = ({
  products,
  titleHeader,
  sizes,
  setSizes,
  countries,
  setCountries,
  references,
  setReferences,
}: FilterWhithCheckboxType) => {
  const toggleFilterCheck = (value: string | number) => {
    if (titleHeader === "country") {
      setCountries((prevCountries) =>
        prevCountries.includes(value)
          ? prevCountries.filter((prevValue) => prevValue !== value)
          : [...prevCountries, value]
      );
    }
  };

  const toggleSizes = (sizes: number) => {
    setSizes!((prevSizes) => {
      if (prevSizes.includes(sizes)) {
        return prevSizes.filter((size) => size !== sizes);
      } else {
        return [...prevSizes, sizes];
      }
    });
  };

  //TODO: create toggle country --> must be able to filter by country too!

  return (
    <section className="filter__section filter__country">
      {products?.map((product) => (
        <article className="filter__article" key={product._id}>
          <p>
            {titleHeader === "country"
              ? product.country
              : titleHeader === "reference"
              ? product.reference
              : product.size}
          </p>
          <div className="filter__icon__container">
            <input
              type="checkbox"
              name={product.country}
              value={product.country}
              checked={sizes?.includes(product.size)}
              onChange={() => toggleSizes(product.size)}
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
