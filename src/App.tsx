import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AppBar } from "./components";
import { Feed } from "./pages";
import { DEFAULT_ROUTE, ROUTES } from "./router.model";
import "./api";

import "./App.scss";

const ImageDetails = () => {
  return <div>ImageDetails</div>;
};

const Favorites = () => {
  return <div>Favorites</div>;
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppBar />
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Navigate replace to={DEFAULT_ROUTE} />}
          />

          <Route path={ROUTES.FEED} element={<Feed />} />

          <Route
            path={ROUTES.FEED_IMAGE}
            element={
              <>
                <Feed />
                <ImageDetails />
              </>
            }
          />

          <Route path={ROUTES.FAVORITES} element={<Favorites />} />

          <Route
            path={ROUTES.FAVORITES_IMAGE}
            element={
              <>
                <Favorites />
                <ImageDetails />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
