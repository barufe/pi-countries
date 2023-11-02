import {
  COUNTRIES,
  SEARCHBYID,
  CREATEACTIVITY,
  FILTERCONTINENTS,
  ORDERCOUNTRIES,
} from "../actionsTypes/actionsTypes";

const initialState = {
  countries: [],
  activities: [],
  filteredCountries: [],
  countryDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case SEARCHBYID:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case CREATEACTIVITY:
      return { ...state, activities: action.payload };
    case FILTERCONTINENTS:
      let filtered = state.countries;
      console.log(state.filteredCountries);
      if (action.payload !== "Todos") {
        filtered = state.countries.filter((country) => {
          return country.continents.includes(action.payload);
        });
      }
      return {
        ...state,
        filteredCountries: filtered,
      };
    case ORDERCOUNTRIES:
      let resultOrder = [...state.filteredCountries];
      if (action.payload === "ascendente") {
        resultOrder.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        resultOrder.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filteredCountries: resultOrder,
      };
    default:
      return state;
  }
};
export default reducer;
