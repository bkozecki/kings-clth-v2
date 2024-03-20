import {
  USER_ACTION_TYPES,
  createAction,
} from "../../utils/helpers/reducerUtils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
