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

const transformImages = (image: ImagesDto): ImagesModel => ({
  id: image.id,
  url: image.urls.regular,
  description: image.description,
});

const getImages = async (page: number): Promise<ImagesModel[]> => {
  const rawData: ImagesDto[] = await axios
    .get(`https://api.unsplash.com/photos?per_page=${PAGE_SIZE}&page=${page}`)
    .then((response) => response.data);

  return rawData.map(transformImages);
};

const transformImage = (image: ImageDto): ImageModel => {
  const aperture = image.exif.aperture ? Number(image.exif.aperture) : null;
  const iso = image.exif.iso ? Number(image.exif.iso) : null;
  const focalLength = image.exif.focal_length
    ? Number(image.exif.focal_length)
    : null;
  let exposureTime;
  if (image.exif.exposure_time) {
    const exposureTimeFraction = image.exif.exposure_time.split("/");
    if (exposureTimeFraction.length === 2) {
      exposureTime =
        Number(exposureTimeFraction[0]) / Number(exposureTimeFraction[1]);
    } else {
      exposureTime = Number(image.exif.exposure_time);
    }
  }

  const shutterSpeed =
    aperture && iso && exposureTime
      ? (100 * Math.pow(aperture, 2)) / (iso * Math.pow(2, exposureTime))
      : null;

  return {
    id: image.id,
    user: {
      name: image.user.name,
      image: image.user.profile_image.small,
    },
    description: image.description,
    url: image.urls.regular,
    camera: {
      make: image.exif.make,
      model: image.exif.model,
      focalLength,
      aperture,
      shutterSpeed,
      iso,
    },
  };
};

const getImage = async (pageId: string): Promise<ImageModel> => {
  const rawData: ImageDto = await axios
    .get(`https://api.unsplash.com/photos/${pageId}`)
    .then((response) => response.data);

  return transformImage(rawData);
};

export { transformImages, transformImage, getImages, getImage };
