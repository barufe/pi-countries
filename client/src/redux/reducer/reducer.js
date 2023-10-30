import {
  COUNTRIES,
  SEARCHBYID,
  SEARCHBYNAME,
  FILTER,
  ORDER,
} from "../actionsTypes/actionsTypes";

const initialState = {
  countries: [],
  activities: [],
  countryDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
    case COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SEARCHBYID:
      return {
        ...state,
        countryDetail: action.payload,
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
