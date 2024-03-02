import { Productsdata } from "../types/interface-housedata";
import useFavorite from "./useFavorite";

const useLikedTinyHouse = () => {
  const { likedTinyHouse, toggleLikeTinyHouse } = useFavorite();

  const getLikedTinyhouse = (product: Productsdata) => {
    //const { _id } = product;
    //! weird behaviour, once destructured, typeScript says that `_id` doesn't exist
    //! on `product` as it is undefined! Need to use optional chaining so that
    //! typeScript stops yelling at me

    const liked = likedTinyHouse.some((liked) => liked?._id === product?._id);
    return liked;
  };

  const handleActiveLike = (product: Productsdata) => {
    toggleLikeTinyHouse(product);
  };
  return {
    getLikedTinyhouse,
    handleActiveLike,
  };
};

export default useLikedTinyHouse;
