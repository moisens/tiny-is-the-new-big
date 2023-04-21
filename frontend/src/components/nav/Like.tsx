import { BsHeart, BsHeartFill } from "react-icons/bs";
import Button from "../button/Button";
import useFavorite from "../../hooks/useFavorite";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const { favorites } = useFavorite();
  //console.log("FAV FROM NAV",favorites.length);
  
  
  const navigate = useNavigate();

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
      <Button
        className="nav__like"
        as="button"
        handleClick={() => navigate("/favorites")}
      >
        {/*handle click go on favorite page component*/}
        <BsHeart size="1.79rem" color="#87B222" />
      </Button>
    </div>
  );
};

export default Like;
