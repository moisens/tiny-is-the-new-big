import "./cardspage.scss";
import Button from "../button/Button";
import { Housedata } from "../../types/interface-housedata";
import CardList from "./CardList";


const Cardspage = ({ productData, status, error }: Housedata) => {
  const { products } = productData;
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;



  return (
    <section className="page__container">
      {/*Filter component*/}
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*Card*/}
          {status === "resolved" && products?.map(product => {
            const { _id } = product;
            return (
              <CardList
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
