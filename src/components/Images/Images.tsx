import { useState } from "react";
import { Link } from "react-router-dom";
import { ImagesModel } from "../../api";

import "./Images.scss";

type Props = {
  images: ImagesModel;
  onLoadMore: () => Promise<boolean>;
  getRouterLink: (id: string) => string;
};

const Images = ({ images, onLoadMore, getRouterLink }: Props) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);

  const handleScroll = async ({
    target: { scrollTop, scrollHeight, clientHeight },
  }: any) => {
    if (shouldLoadMore && scrollTop + 2 * clientHeight > scrollHeight) {
      const hasMore = await onLoadMore();
      setShouldLoadMore(hasMore);
    }
  };

  return (
    <div className="images" onScroll={handleScroll}>
      {images.map((image, index) => (
        <Link
          className="images__image"
          key={index}
          to={getRouterLink(image.id)}
        >
          <img src={image.url} alt={image.description ?? "No title"} />
        </Link>
      ))}
    </div>
  );
};

export default Images;
