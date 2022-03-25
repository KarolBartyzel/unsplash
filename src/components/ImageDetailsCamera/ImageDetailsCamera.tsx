import { ReactNode } from "react";

import "./ImageDetailsCamera.scss";

type ContainerProps = {
  children: ReactNode;
};

const ImageDetailsCamera = ({ children }: ContainerProps) => (
  <div className="image-details-camera">{children}</div>
);

type ItemProps = {
  label: string;
  value: string | null;
};

const ImageDetailsCameraItem = ({ label, value }: ItemProps) => (
  <div className="image-details-camera-item">
    <div className="image-details-camera-item__label">{label}</div>
    <div className="image-details-camera-item__value">{value ?? "No data"}</div>
  </div>
);

ImageDetailsCamera.Item = ImageDetailsCameraItem;

export default ImageDetailsCamera;
