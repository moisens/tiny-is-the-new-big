import { Productsdata } from "../types/interface-housedata";
import useFavorite from "./useFavorite";

const useLikedTinyHouse = () => {
  const { likedTinyHouse, toggleLikeTinyHouse } = useFavorite();

  const getLikedTinyhouse = (product: Productsdata) => {
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
