import { Outlet } from "react-router-dom";

import { Feed } from "../components";

const FeedPage = () => (
  <>
    <Feed />;
    <Outlet />
  </>
);

export default FeedPage;
