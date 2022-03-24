import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageModel } from "../../api";

import "./Images.scss";

type Props = {
  images: ImageModel[];
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
    <div className="photos" onScroll={handleScroll}>
      {images.map((image, index) => (
        <Link
          className="photos__photo"
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
