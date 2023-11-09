import {
  COUNTRIES,
  ACTIVITIES,
  SEARCHBYID,
  SEARCHBYNAME,
  CREATEACTIVITY,
  FILTERCONTINENTS,
  FILTERACTIVITIES,
  ORDERCOUNTRIES,
  ORDERBYPOPULATION,
} from "../actionsTypes/actionsTypes";

const initialState = {
  countries: [],
  countriesWitchActivities: [],
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
    
    case ACTIVITIES:
      return {
        ...state,
        countriesWitchActivities: action.payload,
      };
    
    case SEARCHBYID:
      return {
        ...state,
        countryDetail: action.payload,
      };
    
    case SEARCHBYNAME:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    
    case CREATEACTIVITY:
      return { ...state, activities: action.payload }; // Se recibe la activities para que luego mostremos un detail con la actividad creada
    
    case FILTERCONTINENTS:
      let filtered = state.countries;
      if (action.payload !== "Todos") {
        filtered = state.countries.filter((country) => {
          return country.continents.includes(action.payload);
        });
      }
      return {
        ...state,
        filteredCountries: filtered,
      };
    
    case FILTERACTIVITIES:
      let filteredActivities = state.countriesWitchActivities;
      if (action.payload !== "Todos") {
        filteredActivities = state.countriesWitchActivities.filter((country) =>
          country.Activities.some(
            (activity) => activity.name === action.payload
          )
        );
      }
      return {
        ...state,
        filteredCountries: filteredActivities,
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
    
    case ORDERBYPOPULATION:
      let resultOrderByPopulation = [...state.filteredCountries];
      if (action.payload === "mayor") {
        resultOrderByPopulation.sort((a, b) => b.population - a.population);
      } else {
        resultOrderByPopulation.sort((a, b) => a.population - b.population);
      }
      return {
        ...state,
        filteredCountries: resultOrderByPopulation,
      };
    default:
      return state;
  }
};
export default reducer;
