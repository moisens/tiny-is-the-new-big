import "./favorite.scss";
import Button from "../button/Button";
import { MdOutlineArrowLeft } from "react-icons/md";
import { btnsFavorites } from "../../utils/favorites-utils";
import { BtnsProps } from "../../types/Interface";
import { useState } from "react";
import useFavorite from "../../hooks/useFavorite";
import { useNavigate } from "react-router-dom";



const FavoriteComponent = () => {
  const { favorites } = useFavorite()
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  console.log(favorites);
  

  return (
    <header className="favorite__header">
      <Button 
        as="button" 
        className="favorite__button" 
        handleClick={() => navigate(-1)
      } >
        <MdOutlineArrowLeft size="2rem" className="btn__icon" />
        Previous page
      </Button>
      <section className="btn__container">
        {btnsFavorites.map(({ id, text }: BtnsProps, index: number) => (
          <Button 
          as="button" 
          className={
            index === value 
            ? "btn__house active__btn" 
            : "btn__house"
          } 
          handleClick={() => 
            setValue(index)
          }
          key={id}
          >
        <span className="btn__text">{text}</span>
        <span className="btn__count">(0)</span>
      </Button>
        ))}
      </section>
      <section className="cards__container">
        <article className="favorite__cards">
          <div className="card__favorite">1</div>
          <div className="card__favorite">2</div>
          <div className="card__favorite">3</div>
        </article>
      </section>
    </header>
  )
}

export default FavoriteComponent;