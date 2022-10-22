import "../components/home/home.scss";
import FavoriteComponent from "../components/favorites/FavoriteComponent";
import { FavoritesProvider } from "../context/favoriteContext";

const Favorites = () => {
  return (
    <div className="home-container">
      <FavoritesProvider>
        <FavoriteComponent />
      </FavoritesProvider>
      
    </div>
  )
}

export default Favorites