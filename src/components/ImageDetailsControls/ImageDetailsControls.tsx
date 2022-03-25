import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, FavoritesIcon } from "../../icons";
import { ROUTES } from "../../router.model";

import "./ImageDetailsControls.scss";

type Props = {
  parentRoute: ROUTES;
};

const ImageDetailsControls = ({ parentRoute }: Props) => {
  const [isLiked, setIsLiked] = useState(true);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="image-details-controls">
      <button
        className={classNames("image-details-controls__like", {
          "image-details-controls__like--checked": isLiked,
        })}
        onClick={handleLikeClick}
      >
        <FavoritesIcon /> {isLiked ? "Unlike" : "Like"}
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
