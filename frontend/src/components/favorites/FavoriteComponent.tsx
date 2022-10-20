import "./favorite.scss";
import Button from "../button/Button";
import { MdOutlineArrowLeft } from "react-icons/md"



const FavoriteComponent = () => {
  return (
    <header className="favorite__header">
      <Button as="button" className="favorite__button" handleClick={() => console.log("clicked")
      } >
        <MdOutlineArrowLeft size="2rem" color="#A23B24" />
        Previous page
      </Button>
      <section className="btn__container">
        <Button as="button" className="btn__house" handleClick={() => console.log("clicked!")}>
          <span className="btn__text">favorites tiny houses</span>
          <span className="btn__count">(0)</span>
        </Button>
        <Button as="button" className="btn__location" handleClick={() => console.log("clicked!")}>
          <span className="btn__text">favorites tiny houses</span>
          <span className="btn__count">(0)</span>
        </Button>
      </section>
    </header>
  )
}

export default FavoriteComponent;