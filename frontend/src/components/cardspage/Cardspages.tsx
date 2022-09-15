import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList"

const Cardspage = ({ productData, statusType }: Housedata) => {
  const { products } = productData;
  console.log(statusType);
  console.log(products);
  

  return (
    <section className="page__container">
      {/*Filter component*/}
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*First Card*/}
          {products?.map(product  => {
            return <CardList key={product._id} {...product} />
          })}
          {/*End First Card*/}
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
