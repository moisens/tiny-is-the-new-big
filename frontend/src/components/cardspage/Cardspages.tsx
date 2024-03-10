import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import FilterWithCheckBox from "../filterComponents/FilterWithCheckBox";
import FilterByPrice from "../filterComponents/FilterByPrice";
import FilterByBedroom from "../filterComponents/FilterByBedroom";
import useDebouncedSearch from "../../hooks/useDebouncedSearch";

export type FilterSizeCountryRefType = "size" | "country" | "reference";

const Cardspage = ({ productData, status, error }: Housedata): JSX.Element => {
  const { products } = productData;

  const [toggleFilterCountry, setToggleFilterCountry] = useState(false);
  const [toggleFilterByPrice, setToggleFilterByPrice] = useState(false);
  const [toggleFilterByReference, setToggleFilterByReference] = useState(false);
  const [toggleFilterBySize, setToggleFilterBySize] = useState(false);
  const [toggleFilterByBedroom, setToggleFilterByBedroom] = useState(false);

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sizes, setSizes] = useState<number[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [references, setReferences] = useState<number[]>([]);
  const [bedroomNum, setBedroomNum] = useState<number>(0);

  const debouncedSearchValue = useDebouncedSearch(search, 1000);
  const [isVisible, setIsVisible] = useState(3); //TODO: make it 9

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error; //TODO: Check why `return` is causing a TS error!!!

  //TODO: make it dynamic. Must be a better way to write the same functonality, for example with accordion!!!
  const handleToggleFilterCountry = () =>
    setToggleFilterCountry(!toggleFilterCountry);
  const handleToggleFilterByPrice = () =>
    setToggleFilterByPrice(!toggleFilterByPrice);
  const handleToggleFilterByRef = () =>
    setToggleFilterByReference(!toggleFilterByReference);
  const handleToggleFilterBySize = () =>
    setToggleFilterBySize(!toggleFilterBySize);
  const handleToggleFilterByBedroom = () =>
    setToggleFilterByBedroom(!toggleFilterByBedroom);

  const filtredProducts = products?.filter((product) => {
    const filtredSearch = product.country
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(debouncedSearchValue.toLowerCase().replace(/\s+/g, ""));

    //TODO: Use the debounced value function on price!!!
    const filterByPrice =
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice);

    const filterCheckBySizes =
      sizes.length === 0 || sizes.includes(product.size);

    const checkAndFilterByCountry =
      countries.length === 0 || countries.includes(product.country);

    const checkAndFilterByReference =
      references.length === 0 || references.includes(product.reference);

    const bedroomRange = () => {
      if (bedroomNum >= 1 && bedroomNum <= 2) {
        return bedroomNum;
      } else if (bedroomNum > 2) {
        return;
      } else {
        return product.bedroom;
      }
    };

    const filterByBedroomNum =
      bedroomRange() === null || bedroomRange() === product.bedroom;

    return (
      filtredSearch &&
      filterByPrice &&
      filterCheckBySizes &&
      checkAndFilterByCountry &&
      checkAndFilterByReference &&
      filterByBedroomNum
    );
  });

  const handleLoadMore = () => {
    setIsVisible((prevValue) => prevValue + 3);
  };

  return (
    <section className="page__container">
      {/*Filter component*/}
      <section className="page__filter__container">
        <form className="page__filter">
          <div className="page__input__container">
            <label htmlFor="search" />
            <input
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="page__input"
              placeholder="Search a country..."
            />
          </div>
        </form>
        <div className="page__filter__by">
          <div className="filter__by__container">
            {/*Start Filter by country*/}
            <section className="filter__by__content">
              <header
                className="filter__header"
                onClick={handleToggleFilterCountry}
              >
                <p className="filter__title">Filter by country</p>
                <RiArrowDownSFill
                  className={`${
                    toggleFilterCountry
                      ? "search__arrow rotate__arrow"
                      : "search__arrow"
                  }`}
                  size="1.8rem"
                />
              </header>
              {toggleFilterCountry ? (
                <FilterWithCheckBox
                  products={products}
                  titleHeader="country"
                  countries={countries}
                  setCountries={setCountries}
                />
              ) : null}
            </section>
            {/*End Filter by country*/}

            {/*Start Filter by price*/}
            <section className="filter__by__content">
              <header
                className="filter__header"
                onClick={handleToggleFilterByPrice}
              >
                <p className="filter__title">Filter by price</p>
                <RiArrowDownSFill
                  className={`${
                    toggleFilterByPrice
                      ? "search__arrow rotate__arrow"
                      : "search__arrow"
                  }`}
                  size="1.8rem"
                />
              </header>
              {toggleFilterByPrice ? (
                <FilterByPrice
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              ) : null}
            </section>
            {/*End Filter by price*/}

            {/*Start Filter by reference*/}
            <section className="filter__by__content">
              <header
                className="filter__header"
                onClick={handleToggleFilterByRef}
              >
                <p className="filter__title">Filter by reference</p>
                <RiArrowDownSFill
                  className={`${
                    toggleFilterByReference
                      ? "search__arrow rotate__arrow"
                      : "search__arrow"
                  }`}
                  size="1.8rem"
                />
              </header>
              {toggleFilterByReference ? (
                <FilterWithCheckBox
                  products={products}
                  titleHeader="reference"
                  references={references}
                  setReferences={setReferences}
                />
              ) : null}
            </section>
            {/*End Filter by reference*/}

            {/*Start Filter by size*/}
            <section className="filter__by__content">
              <header
                className="filter__header"
                onClick={handleToggleFilterBySize}
              >
                <p className="filter__title">Filter by size</p>
                <RiArrowDownSFill
                  className={`${
                    toggleFilterBySize
                      ? "search__arrow rotate__arrow"
                      : "search__arrow"
                  }`}
                  size="1.8rem"
                />
              </header>
              {toggleFilterBySize ? (
                <FilterWithCheckBox
                  products={products}
                  titleHeader="size"
                  sizes={sizes}
                  setSizes={setSizes}
                />
              ) : null}
            </section>
            {/*End Filter by size*/}

            {/*Start Filter by bedroom*/}
            <section className="filter__by__content">
              <header
                className="filter__header"
                onClick={handleToggleFilterByBedroom}
              >
                <p className="filter__title">Filter by bedroom</p>
                <RiArrowDownSFill
                  className={`${
                    toggleFilterByBedroom
                      ? "search__arrow rotate__arrow"
                      : "search__arrow"
                  }`}
                  size="1.8rem"
                />
              </header>
              {toggleFilterByBedroom ? (
                <FilterByBedroom
                  bedroomNum={bedroomNum}
                  setBedroomNum={setBedroomNum}
                />
              ) : null}
            </section>
            {/*End Filter by number of bedroom*/}
          </div>
        </div>
      </section>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*Card*/}
          {status === "resolved" && filtredProducts?.length === 0 ? (
            <p>No tiny house matches that search!</p>
          ) : (
            filtredProducts?.slice(0, isVisible)?.map((product) => {
              const { _id } = product;
              return <CardList product={product} key={_id} />;
            })
          )}

          {/*Card*/}
        </div>
      </div>
      <div className="lodmore__container">
        {/* //TODO: Load more functionality -- and check that lodmore class typo*/}
        <Button
          className="lodmore__btn"
          as="button"
          handleClick={() => handleLoadMore()}
        >
          load more
        </Button>
      </div>
    </section>
  );
};

export default Cardspage;
