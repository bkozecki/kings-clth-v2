import {
  INITIAL_USER_STATE,
  USER_ACTION_TYPES,
} from "../../utils/helpers/reducerUtils";

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
