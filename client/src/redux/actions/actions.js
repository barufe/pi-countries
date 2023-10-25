import {
  COUNTRIES,
  SEARCHBYNAME,
  FILTER,
  ORDER,
} from "../actionsTypes/actionsTypes";
import axios from "axios";

const endpoint = "http://localhost:3001/countries";
export const loadCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      console.log("Tengo la data");
      console.log(response.data);
      dispatch({
        type: COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
