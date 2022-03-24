import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import { LogoIcon, FeedIcon, FavoritesIcon } from "../../icons";
import { ROUTES } from "../../router.model";

import "./AppBar.scss";

const AppBar = () => {
  const location = useLocation();

  return (
    <div className="app-bar">
      <Link className="app-bar__logo" to={ROUTES.HOME}>
        <LogoIcon />
      </Link>
      <Link to={ROUTES.FEED}>
        <FeedIcon
          className={classnames("app-bar__navigation-icon", {
            "app-bar__navigation-icon--active": location.pathname.startsWith(
              ROUTES.FEED
            ),
          })}
        />
      </Link>
      <Link to={ROUTES.FAVORITES}>
        <FavoritesIcon
          className={classnames("app-bar__navigation-icon", {
            "app-bar__navigation-icon--active": location.pathname.startsWith(
              ROUTES.FAVORITES
            ),
          })}
        />
      </Link>
    </div>
  );
};

export default AppBar;
