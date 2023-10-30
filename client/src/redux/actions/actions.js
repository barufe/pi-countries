import {
  COUNTRIES,
  SEARCHBYID,
  SEARCHBYNAME,
  FILTER,
  ORDER,
} from "../actionsTypes/actionsTypes";

import axios from "axios";

const endpoint = "http://localhost:3001/countries";

export const getCountries = () => {
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

export const getCountrieById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/${id}`);
      console.log("Tengo la data del id");
      console.log(response.data);
      dispatch({
        type: SEARCHBYID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
