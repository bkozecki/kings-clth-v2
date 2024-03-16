import { createContext, useReducer } from "react";
import {
  createAction,
  INITIAL_CART_STATE,
  CART_ACTIONS,
} from "../utils/helpers/reducerUtils";

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.TOGGLE_CART_OPEN:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      throw new Error(`Unhandled type of ${type}`);
  }
};

const addCartItem = (cartItems, productToAdd) => {
  const productExists = cartItems.find((el) => el.id === productToAdd.id);
  if (productExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const productExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (productExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  if (productExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, cartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_CART_STATE
  );

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTIONS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemfromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };
  const clearItemfromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const setCartOpen = () => {
    dispatch(createAction(CART_ACTIONS.TOGGLE_CART_OPEN));
  };

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
    removeItemfromCart,
    clearItemfromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
