export const INITIAL_CART_STATE = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const INITIAL_USER_STATE = {
  currentUser: null,
};

export const INITIAL_CATEGORIES_STATE = {
  categories: [],
};

export const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

export const createAction = (type, payload) => ({ type, payload });
