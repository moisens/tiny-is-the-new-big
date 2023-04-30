import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { BsSearch, BsCheck } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

const Cardspage = ({ productData, status, error }: Housedata) => {
  const { products } = productData;
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <section className="page__container">
      {/*Filter component*/}
      <section className="page__filter__container">
        <form className="page__filter">
          <div className="page__input__container">
            <label htmlFor="saerch" />
            <input type="search" name="search" className="page__input" />
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
            <section className="filter__by__content">
              <header className="filter__header">
                <p className="filter__title">Filter by country</p>
                <RiArrowDownSFill className="search__arrow" size="1.8rem" />
              </header>
              <section className="filter__section">
                <article className="filter__article">
                  <p>Switzerland</p>
                  <div className="filter__icon__container">
                    <BsCheck size="2rem" className="filter__icon" />
                  </div>
                </article>
              </section>
            </section>
            <section className="filter__by__content">
              <header className="filter__header">
                <p className="filter__title">Filter by price</p>
                <RiArrowDownSFill className="search__arrow" size="1.8rem" />
              </header>
              <section className="filter__section">
                <form className="filter__form">
                  <div>
                    <label htmlFor="from" />
                    <input
                      type="text"
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
                      type="text"
                      name="to"
                      min="10000"
                      max="800000"
                      placeholder="800000"
                    />
                  </div>
                  <div className="filter__icon__container">
                    <BsCheck size="2rem" className="filter__icon" />
                  </div>
                </form>
              </section>
            </section>
            <section className="filter__by__content">3-Reference</section>
            <section className="filter__by__content">4-Size</section>
            <section className="filter__by__content">5-Bedroom</section>
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
