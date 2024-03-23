import { createSelector } from "reselect";

import {
  CATEGORIES_ACTION_TYPES,
  createAction,
} from "../../utils/helpers/reducerUtils";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

const selectCategoryReducer = (state) => state.categories;

export const categoriesSelector = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategories = createSelector(
  [categoriesSelector],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
