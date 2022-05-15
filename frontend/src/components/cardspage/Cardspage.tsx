import "./cardspage.scss";
import Button from "../button/Button";
import CardList from "./CardList";
import { CardProps } from "../../types/interface-Dataproducts";

const CardsPage = ({data, status, error}: CardProps) => {
  return (
    <section className="page__container">
      <div className="page__triangle1"></div>
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*First Card*/}
          <CardList data={data} status={status} error={error} />
          {/*End First Card*/}
        </div>
        <div className="page__triangle2"></div>
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

export default CardsPage;
