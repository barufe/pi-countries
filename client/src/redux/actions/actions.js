import {
  COUNTRIES,
  SEARCHBYID,
  CREATEACTIVITY,
  FILTERCONTINENTS,
  ORDERCOUNTRIES,
} from "../actionsTypes/actionsTypes";

import axios from "axios";

const endpoint = "http://localhost:3001";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/countries`);
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
      const response = await axios.get(`${endpoint}/countries/${id}`);
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

export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${endpoint}/activities`, activity);
      console.log(response.data);
      dispatch({
        type: CREATEACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const orderCountries = (order) => {
  console.log(order);
  return {
    type: ORDERCOUNTRIES,
    payload: order,
  };
};

export const filterContinents = (continent) => {
  console.log(continent);
  return {
    type: FILTERCONTINENTS,
    payload: continent,
  };
};
