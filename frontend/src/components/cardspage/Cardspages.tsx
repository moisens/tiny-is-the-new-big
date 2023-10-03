import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import FilterWithCheckBox from "../filterComponents/FilterWithCheckBox";
import FilterByPrice from "../filterComponents/FilterByPrice";

const Cardspage = ({ productData, status, error }: Housedata): JSX.Element => {
  const { products } = productData;

  const [toggleFilterCountry, setToggleFilterCountry] = useState(false);
  const [toggleFilterByPrice, setToggleFilterByPrice] = useState(false);

  const [search, setSearch] = useState("");

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error; //TODO: Check why `return` is causing a TS error!!!


  const handleToggleFilterCountry = () => setToggleFilterCountry(!toggleFilterCountry);
  const handleToggleFilterByPrice = () => setToggleFilterByPrice(!toggleFilterByPrice)

  const filtredSearch =
  search === ""
  products
  products?.filter((product) =>
    product.country
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(search.toLowerCase().replace(/\s+/g, ""))
  );

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
              className="page__input"
              placeholder="canada..."
            />
            <Button
              as="button"
              className="search__btn"
              handleClick={() => console.log("search")}
            >
              <BsSearch className="search__search" size="1.8rem" />
            </Button>
          </div>
        </form>
        <div className="page__filter__by">
          <div className="filter__by__container">
            {/*Start Filter by country*/}
            <section className="filter__by__content">
              <header className="filter__header" onClick={handleToggleFilterCountry}>
                <p className="filter__title">Filter by country</p>
                <RiArrowDownSFill className={`${toggleFilterCountry ? "search__arrow rotate__arrow" : "search__arrow"}`} size="1.8rem" />
              </header>
              {toggleFilterCountry 
              ? <FilterWithCheckBox products={products} /> 
              : null}
            </section>
            {/*End Filter by country*/}

            {/*Start Filter by price*/}
            <section className="filter__by__content">
              <header className="filter__header" onClick={handleToggleFilterByPrice}>
                <p className="filter__title">Filter by price</p>
                <RiArrowDownSFill className={`${toggleFilterByPrice ? "search__arrow rotate__arrow" : "search__arrow"}`} size="1.8rem" />
              </header>
              {toggleFilterByPrice ? <FilterByPrice /> : null}
              
            </section>
            {/*End Filter by price*/}

            {/*Start Filter by reference*/}
            <section className="filter__by__content">3-Reference</section>
            {/*End Filter by reference*/}
            {/*Start Filter by size*/}
            <section className="filter__by__content">4-Size</section>
            {/*End Filter by size*/}
            {/*Start Filter by bedroom*/}
            <section className="filter__by__content">5-Bedroom</section>
            {/*End Filter by number of bedroom*/}
          </div>
        </div>
      </section>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*Card*/}
          {status === "resolved" &&
            products?.map((product) => {
              const { _id } = product;
              return <CardList product={product} key={_id} />;
            })}

          {/*Card*/}
        </div>
      </div>
      <div className="lodmore__container">
        <Button
          className="lodmore__btn"
          as="button"
          handleClick={() => {
            console.log("clicked");
          }}
        >
          load more
        </Button>
      </div>
    </section>
  );
};

export default Cardspage;
