import "./cardspage.scss";
import Button from "../button/Button";

interface Housedata {
  productData: HousedataType;
}

type HousedataType = {
  products: Productsdata[];
  totalHouses: string;
};

type Productsdata = {
  readonly _id: string;
  country: string;
  price: number;
  ref: number;
  size: number;
  image: string[];
  bedroom: number;
  bathroom: number;
  kitchen: number;
  livingroom: number;
  description: string;
  statusofhouse: string;
  yearofconstruction: string;
  energyclass: string;
  pebuniquecode: string;
  espec: string;
  typeofheating: string;
  category: string;
};




const Cardspage = (props: Housedata) => {
  const { products } = props.productData
  console.log(products);
  {/*products.map(product => (product.country))*/}
  

  return (
    <>
      {products?.map(product => {
        const { _id, country } = product;
        return (
          <p key={_id}>{country}</p>
        )
      })}
    </>
    // <section className="page__container">
    //   {/*Filter component*/}
    //   <div className="page__filter">Filter goes here!</div>
    //   <div className="page__content">
    //   <div className="page__gridcontainer">
    //       {/*First Card*/}
    //       {/* <CardList data={data} status={status} error={error} /> */}
    //       {/*End First Card*/}
    //     </div>
    //   </div>
    //   <div className="lodmore__container">
    //     <Button
    //       className="lodmore__btn"
    //       as="button"
    //       handleClick={() => {
    //         console.log("clicked");
    //       }}
    //     >
    //       load more
    //     </Button>
    //   </div>
    // </section>
  )
}

export default Cardspage;



{/*


<section className="page__container">
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          
          <CardList data={data} status={status} error={error} />
        
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

*/}