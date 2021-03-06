import { useEffect, useState } from "react";

import { getImages, ImagesModel, PAGE_SIZE } from "../../api";
import { Images } from "../../components";

const Feed = () => {
  const [images, setImages] = useState<ImagesModel[]>([]);

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
    />
  );
};

export default Feed;
