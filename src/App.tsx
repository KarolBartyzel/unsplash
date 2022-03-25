import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useLocalStorage } from "./hooks";
import { getFavorites, init } from "./reducers/favoritesReducer";
import { LS_KEY } from "./reducers/favoritesReducer.model";
import { AppBar, ImageDetails } from "./components";
import { FeedPage, FavoritesPage } from "./pages";
import { DEFAULT_ROUTE, ROUTES } from "./router.model";
import { ImageModel } from "./api";

import "./App.scss";

const App = () => {
  const [lsFavorites, setLsFavorites] = useLocalStorage<ImageModel[]>(
    LS_KEY,
    []
  );
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    dispatch(init(lsFavorites));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLsFavorites(favorites);
  }, [favorites, setLsFavorites]);

  return (
    <div className="app">
      <Router>
        <AppBar />
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Navigate replace to={DEFAULT_ROUTE} />}
          />

          <Route path={ROUTES.FEED} element={<FeedPage />}>
            <Route
              path={ROUTES.IMAGE}
              element={<ImageDetails parentRoute={ROUTES.FEED} />}
            />
          </Route>

          <Route path={ROUTES.FAVORITES} element={<FavoritesPage />}>
            <Route
              path={ROUTES.IMAGE}
              element={<ImageDetails parentRoute={ROUTES.FAVORITES} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
