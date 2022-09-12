import "./cardspage.scss";
import Button from "../button/Button";


const Cardspage = () => {
  

  return (
    <section className="page__container">
      {/*Filter component*/}
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
      <div className="page__gridcontainer">
          {/*First Card*/}
          {/* <CardList data={data} status={status} error={error} /> */}
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