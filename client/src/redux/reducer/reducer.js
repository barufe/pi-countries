import {
  COUNTRIES,
  SEARCHBYNAME,
  FILTER,
  ORDER,
} from "../actionsTypes/actionsTypes";

const initialState = {
  countries: [],
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
    case COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SEARCHBYNAME:
      return state;
    case FILTER:
      return state;
    case ORDER:
      return state;
    default:
      return state;
  }
};
export default reducer;
