import { useEffect, useState } from "react";

import { getImages, ImageModel, PAGE_SIZE } from "../../api";
import { Images } from "../../components";
import { ROUTES } from "../../router.model";

const Feed = () => {
  const [images, setImages] = useState<ImageModel[]>([]);

  const fetchImages = async (page: number) => {
    const newImages = await getImages(page);
    if (newImages.length === 0) {
      return false;
    }
    setImages([...images, ...newImages]);
    return true;
  };

  useEffect(() => {
    fetchImages(Math.floor(images.length / PAGE_SIZE + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Images
      images={images}
      onLoadMore={() => fetchImages(images.length / PAGE_SIZE + 1)}
      getRouterLink={(id) => ROUTES.FEED_IMAGE.replace(":imageId", id)}
    />
  );
};

export default Feed;
