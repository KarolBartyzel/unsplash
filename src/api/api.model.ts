const PAGE_SIZE = 20;

type ImagesDto = {
  id: string;
  urls: {
    regular: string;
  };
  description: string | null;
};

type ImagesModel = {
  id: string;
  url: string;
  description: string | null;
};

type ImageDto = {
  id: string;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
  description: string | null;
  urls: {
    regular: string;
  };
  exif: {
    make: string | null;
    model: string | null;
    focal_length: string | null;
    aperture: string | null;
    iso: string | null;
    exposure_time: string | null;
  };
};

type ImageModel = {
  id: string;
  user: {
    name: string;
    image: string;
  };
  description: string | null;
  url: string;
  camera: {
    make: string | null;
    model: string | null;
    focalLength: number | null;
    aperture: number | null;
    shutterSpeed: number | null;
    iso: number | null;
  };
};

export type { ImagesDto, ImagesModel, ImageDto, ImageModel };
export { PAGE_SIZE };
