import { Feed, ImageDetails } from "../components";
import { ROUTES } from "../router.model";

const FeedImagePage = () => (
  <>
    <Feed />
    <ImageDetails parentRoute={ROUTES.FEED} />
  </>
);

export default FeedImagePage;
