import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ImageModel } from "../api";
import { StateModel } from "./favoritesReducer.model";

const initialState: StateModel = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<ImageModel[]>) => action.payload,
    addToFavorites: (state, action: PayloadAction<ImageModel>) => [
      ...state,
      action.payload,
    ],
    removeFromFavorites: (state, action: PayloadAction<ImageModel>) =>
      state.filter(({ id }) => id !== action.payload.id),
  },
});

const { init, addToFavorites, removeFromFavorites } = favoritesSlice.actions;

const getFavorites = ({ favorites }: { favorites: StateModel }) => favorites;

const getIsFavorite =
  (imageId: string) =>
  ({ favorites }: { favorites: StateModel }) =>
    favorites.some(({ id }) => id === imageId);

export {
  init,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  getIsFavorite,
};
export default favoritesSlice.reducer;
