import {
  CATEGORIES_ACTION_TYPES,
  createAction,
} from "../../utils/helpers/reducerUtils";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const selectCategories = ({ categories }) =>
  categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
