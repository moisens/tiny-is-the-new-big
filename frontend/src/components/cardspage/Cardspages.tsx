import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { BsSearch, BsCheck } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const Cardspage = ({ productData, status, error }: Housedata) => {
  const { products } = productData;
  const [search, setSearch] = useState("");

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return error;

  const filtredSearch =
    search === ""
      ? products
      : products.filter((product) =>
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
              <header className="filter__header">
                <p className="filter__title">Filter by country</p>
                <RiArrowDownSFill className="search__arrow" size="1.8rem" />
              </header>
              <section className="filter__section filter__country">
                {products?.map((product) => (
                  <article className="filter__article" key={product._id}>
                    <p>{product.country}</p>
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
                  <Button as="button" className="apply__reset__btn" handleClick={() => {}}>Apply</Button>
                  <Button as="button" className="apply__reset__btn" handleClick={() => {}}>Reset</Button>
                </div>
              </section>
            </section>
            {/*End Filter by country*/}

            {/*Start Filter by price*/}
            <section className="filter__by__content">
              <header className="filter__header">
                <p className="filter__title">Filter by price</p>
                <RiArrowDownSFill className="search__arrow" size="1.8rem" />
              </header>
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
                  <Button as="button" className="apply__reset__btn" handleClick={() => {}}>Apply</Button>
                  <Button as="button" className="apply__reset__btn" handleClick={() => {}}>Reset</Button>
              </div>
              </section>
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
