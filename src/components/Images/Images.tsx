import { useState } from "react";

import { ImagesModel } from "../../api";
import Image from "../Image";

import "./Images.scss";

type Props = {
  images: ImagesModel[];
  onLoadMore?: () => Promise<boolean>;
};

const Images = ({ images, onLoadMore }: Props) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);

  const handleScroll = async ({
    target: { scrollTop, scrollHeight, clientHeight },
  }: any) => {
    if (
      onLoadMore &&
      shouldLoadMore &&
      scrollTop + 2 * clientHeight > scrollHeight
    ) {
      const hasMore = await onLoadMore();
      setShouldLoadMore(hasMore);
    }
  };

  return (
    <div className="images" onScroll={handleScroll}>
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </div>
  );
};

export default Images;
