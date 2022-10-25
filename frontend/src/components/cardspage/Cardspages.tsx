import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata, Productsdata } from "../../types/interface-housedata";
import CardList from "./CardList";
import { FavoritesProvider } from "../../context/favoriteContext";

const Cardspage = ({ productData, statusType }: Housedata) => {
  const { products } = productData;
  if (statusType === "pending") return <h2>Loading...</h2>;
  if (statusType === "rejected") throw new Error(statusType); // need to be refactored!



  return (
    <section className="page__container">
      {/*Filter component*/}
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*Card*/}
          {statusType === "resolved" && products?.map(product => {
            const { _id, country, price, reference, size, image, bathroom, bedroom } = product;
            return (
              <CardList<Productsdata>
                product={product}
                key={_id} 
              />
            );
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
