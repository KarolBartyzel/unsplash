export enum ROUTES {
  HOME = "/",
  FAVORITES = "/favorites",
  FEED = "/feed",
  FEED_IMAGE = "/feed/image/:imageId",
  FAVORITES_IMAGE = "/favorites/image/:imageId",
}

export const DEFAULT_ROUTE = ROUTES.FEED;
