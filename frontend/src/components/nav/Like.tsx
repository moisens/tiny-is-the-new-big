import { BsHeart, BsHeartFill } from "react-icons/bs";
import Button from "../button/Button";
import useFavorite from "../../hooks/useFavorite";

const Like = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorite();
  
  
  return (
    <div className="nav__favorites">
      <p
        className={`${
          favorites.length < 1
            ? "nav__favorites-count hide__favorite"
            : "nav__favorites-count"
        }`}
      >
        {favorites.length}
      </p>
      <Button className="nav__like" as="button" handleClick={(e) => console.log("clic")}>
        {/*handle click go on favorite page component*/}
        <BsHeart size="2rem" color="#87B222" />
      </Button>
    </div>
  );
};

export default Like;
