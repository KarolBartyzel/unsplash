import axios from "axios";
import {
  ImageDto,
  ImageModel,
  ImagesDto,
  ImagesModel,
  PAGE_SIZE,
} from "./api.model";

axios.defaults.headers.common[
  "Authorization"
] = `Client-ID ${process.env.REACT_APP_API_TOKEN}`;

const getImages = async (page: number) => {
  const rawData: ImagesDto = await axios
    .get(`https://api.unsplash.com/photos?per_page=${PAGE_SIZE}&page=${page}`)
    .then((response) => response.data);

  const data: ImagesModel = rawData.map((image) => ({
    id: image.id,
    url: image.urls.regular,
    description: image.description,
  }));

  return data;
};

const getImage = async (pageId: string): Promise<ImageModel> => {
  const rawData: ImageDto = await axios
    .get(`https://api.unsplash.com/photos/${pageId}`)
    .then((response) => response.data);

  const aperture = rawData.exif.aperture ? Number(rawData.exif.aperture) : null;
  const iso = rawData.exif.iso ? Number(rawData.exif.iso) : null;
  const focalLength = rawData.exif.focal_length
    ? Number(rawData.exif.focal_length)
    : null;
  let exposureTime;
  if (rawData.exif.exposure_time) {
    const exposureTimeFraction = rawData.exif.exposure_time.split("/");
    if (exposureTimeFraction.length) {
      exposureTime =
        Number(exposureTimeFraction[0]) / Number(exposureTimeFraction[1]);
    } else {
      exposureTime = Number(rawData.exif.exposure_time);
    }
  }
  const shutterSpeed =
    aperture && iso && exposureTime
      ? (100 * Math.pow(aperture, 2)) / (iso * Math.pow(2, exposureTime))
      : null;

  return {
    id: rawData.id,
    user: {
      name: rawData.user.name,
      image: rawData.user.profile_image.small,
    },
    description: rawData.description,
    url: rawData.urls.regular,
    camera: {
      make: rawData.exif.make,
      model: rawData.exif.model,
      focalLength,
      aperture,
      shutterSpeed,
      iso,
    },
  };
};

export { getImages, getImage };
