import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ImageModel } from "../../api";
import { CloseIcon, FavoritesIcon } from "../../icons";
import {
  addToFavorites,
  getIsFavorite,
  removeFromFavorites,
} from "../../reducers/favoritesReducer";
import { ROUTES } from "../../router.model";

import "./ImageDetailsControls.scss";

type Props = {
  parentRoute: ROUTES;
  image: ImageModel;
};

const ImageDetailsControls = ({ parentRoute, image }: Props) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(getIsFavorite(image.id));

  const handleLikeClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(image));
    } else {
      dispatch(addToFavorites(image));
    }
  };

  return (
    <div className="image-details-controls">
      <button
        className={classNames("image-details-controls__like", {
          "image-details-controls__like--checked": isFavorite,
        })}
        onClick={handleLikeClick}
      >
        <FavoritesIcon /> {isFavorite ? "Unlike" : "Like"}
      </button>
      <Link to={parentRoute}>
        <button className="image-details-controls__close">
          <CloseIcon />
        </button>
      </Link>
    </div>
  );
};

export default ImageDetailsControls;
