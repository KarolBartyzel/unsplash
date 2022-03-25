import classNames from "classnames";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getImage, ImageModel } from "../../api";
import { ROUTES } from "../../router.model";
import ImageDetailsCamera from "../ImageDetailsCamera";
import ImageDetailsControls from "../ImageDetailsControls";
import ImageDetailsInfo from "../ImageDetailsInfo";

import "./ImageDetails.scss";

type Props = {
  parentRoute: ROUTES;
};

const ImageDetails = ({ parentRoute }: Props) => {
  const { imageId } = useParams();
  const [image, setImage] = useState<ImageModel | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getImage(imageId!).then((image) => setImage(image));
  }, [imageId]);

  useEffect(() => {
    if (image) {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, [image]);

  if (!image) {
    return null;
  }

  return (
    <div className={classNames("image", { "image--visible": isVisible })}>
      <div className="image__modal">
        <div className="image__photo">
          <img src={image.url} alt={image.description ?? "No title"} />
        </div>
        <div className="image__details">
          <ImageDetailsControls parentRoute={parentRoute} image={image} />
          <ImageDetailsInfo image={image} />
          <ImageDetailsCamera>
            <ImageDetailsCamera.Item
              label="Camera make"
              value={image.camera.make}
            />
            <ImageDetailsCamera.Item
              label="Camera model"
              value={image.camera.model}
            />
            <ImageDetailsCamera.Item
              label="Focal length"
              value={
                image.camera.focalLength
                  ? `${image.camera.focalLength}mm`
                  : null
              }
            />
            <ImageDetailsCamera.Item
              label="Aparture"
              value={
                image.camera.aperture ? `f/${image.camera.aperture}` : null
              }
            />
            <ImageDetailsCamera.Item
              label="Shutter speed"
              value={
                image.camera.shutterSpeed
                  ? `${Math.round(image.camera.shutterSpeed)}s`
                  : null
              }
            />
            <ImageDetailsCamera.Item
              label="ISO"
              value={String(image.camera.iso)}
            />
          </ImageDetailsCamera>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
