import { Outlet } from "react-router-dom";

import { Favorites } from "../components";

const FavoritesPage = () => (
  <>
    <Favorites />
    <Outlet />
  </>
);

export default FavoritesPage;
