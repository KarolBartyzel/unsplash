import axios from "axios";
import { ImageDto, ImageModel, PAGE_SIZE } from "./api.model";

axios.defaults.headers.common[
  "Authorization"
] = `Client-ID ${process.env.REACT_APP_API_TOKEN}`;

const getImages = async (page: number) => {
  const rawData: ImageDto[] = await axios
    .get(`https://api.unsplash.com/photos?per_page=${PAGE_SIZE}&page=${page}`)
    .then((response) => response.data);
  const data: ImageModel[] = rawData.map((image) => ({
    id: image.id,
    user: {
      name: image.user.name,
      image: image.user.profile_image.small,
    },
    description: image.description,
    url: image.urls.regular,
  }));
  return data;
};

export { getImages };
