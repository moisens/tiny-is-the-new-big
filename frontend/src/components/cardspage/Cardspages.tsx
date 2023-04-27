import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { BsSearch } from "react-icons/bs";
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
        <div className="page__filter">
          <Button
            as="button"
            className="search__btn"
            handleClick={() => console.log("search")}
          >
            <span className="filter__by__span">Filter by</span>{" "}
            <RiArrowDownSFill className="search__search" size="1.8rem" />
          </Button>
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
