import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ImagesModel } from "../../api";
import { FavoritesIcon } from "../../icons";
import { getIsFavorite } from "../../reducers/favoritesReducer";
import { ROUTES } from "../../router.model";

import "./Image.scss";

type Props = {
  image: ImagesModel;
  onLoadMore?: () => Promise<boolean>;
};

const Image = ({ image }: Props) => {
  const isFavorite = useSelector(getIsFavorite(image.id));

  return (
    <Link
      className="images__image"
      to={ROUTES.IMAGE.replace(":imageId", image.id)}
    >
      {isFavorite && <FavoritesIcon className="images__image-favorite" />}
      <img src={image.url} alt={image.description ?? "No title"} />
    </Link>
  );
};

export default Image;
