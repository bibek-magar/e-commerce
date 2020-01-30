import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS
} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };

    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case EMAIL_SIGN_IN_START:
    case GOOGLE_SIGN_IN_START:

    default:
      return state;
  }
};

export default userReducer;
