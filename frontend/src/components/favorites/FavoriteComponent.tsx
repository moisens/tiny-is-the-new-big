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
    </header>
  )
}

export default FavoriteComponent;