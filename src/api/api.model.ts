const PAGE_SIZE = 100;

type ImageDto = {
  id: string;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
  description: string;
  urls: {
    regular: string;
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
};

export type { ImageDto, ImageModel };
export { PAGE_SIZE };
