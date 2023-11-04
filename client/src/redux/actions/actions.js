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

export const getActivities = (actividad) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/activities`);
      dispatch({
        type: ACTIVITIES,
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

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/countries?name=${name}`);
      console.log("Tengo la data");
      console.log(response.data);
      dispatch({
        type: SEARCHBYNAME,
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

export const filterContinents = (continent) => {
  console.log(continent);
  return {
    type: FILTERCONTINENTS,
    payload: continent,
  };
};
export const filterActivities = (activity) => {
  console.log(activity);
  return {
    type: FILTERACTIVITIES,
    payload: activity,
  };
};

export const orderCountries = (order) => {
  console.log(order);
  return {
    type: ORDERCOUNTRIES,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  console.log(order);
  return {
    type: ORDERBYPOPULATION,
    payload: order,
  };
};
