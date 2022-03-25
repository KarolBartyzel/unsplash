import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./reducers/favoritesReducer";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
