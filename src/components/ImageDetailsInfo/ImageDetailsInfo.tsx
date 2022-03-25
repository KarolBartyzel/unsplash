import { ImageModel } from "../../api";
import { UserIcon } from "../../icons";

import "./ImageDetailsInfo.scss";

type Props = {
  image: ImageModel;
};

const ImageDetailsInfo = ({ image }: Props) => {
  return (
    <div className="image-details-info">
      <div className="image-details-info__title">
        {image.description ?? "Untitled"}
      </div>
      <div className="image-details-info__author">
        {image.user.image ? (
          <img
            className="image-details-info__author-icon"
            src={image.user.image}
            alt="User"
          />
        ) : (
          <UserIcon className="image-details-info__author-icon" />
        )}
        <div className="image-details-info__author-name">{image.user.name}</div>
      </div>
    </div>
  );
};

export default ImageDetailsInfo;
