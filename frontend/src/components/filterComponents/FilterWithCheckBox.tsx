import Button from "../button/Button";
import { HousedataType } from "../../types/interface-housedata";

export type FilterWhithCheckboxType = {
  products: HousedataType["products"];
  titleHeader: string;
  sizes?: number[];
  setSizes?: React.Dispatch<React.SetStateAction<number[]>>;
  countries?: string[];
  setCountries?: React.Dispatch<React.SetStateAction<string[]>>;
  references?: number[];
  setReferences?: React.Dispatch<React.SetStateAction<number[]>>;
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
      setCountries!((prevCountries) =>
        prevCountries.includes(value as string)
          ? prevCountries.filter((prevValue) => prevValue !== value)
          : [...prevCountries, value as string]
      );
    } else if (titleHeader === "reference") {
      setReferences!((prevReferences) =>
        prevReferences.includes(value as number)
          ? prevReferences.filter((prevValue) => prevValue !== value)
          : [...prevReferences, value as number]
      );
    } else {
      setSizes!((prevSizes) =>
        prevSizes.includes(value as number)
          ? prevSizes.filter((prevValue) => prevValue !== value)
          : [...prevSizes, value as number]
      );
    }
  };

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
              checked={
                titleHeader === "country"
                  ? countries?.includes(product.country)
                  : titleHeader === "reference"
                  ? references?.includes(product.reference)
                  : sizes?.includes(product.size)
              }
              onChange={() =>
                toggleFilterCheck(
                  titleHeader === "country"
                    ? product.country
                    : titleHeader === "reference"
                    ? product.reference
                    : product.size
                )
              }
              id={product._id}
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default FilterWithCheckBox;
