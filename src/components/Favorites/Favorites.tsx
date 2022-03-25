import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Images from "../Images";
import { ROUTES } from "../../router.model";
import { getFavorites } from "../../reducers/favoritesReducer";

import "./Favorites.scss";

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  if (favorites.length === 0) {
    return (
      <div className="favorites-no-data">
        No liked images yet. Go{" "}
        <Link className="favorites-no-data__link" to={ROUTES.FEED}>
          here
        </Link>{" "}
        and like some.
      </div>
    );
  }

  return <Images images={favorites} />;
};

export default Favorites;
