import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import Cards from "../cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.homeContainer}>
      <h2>Estamos en home</h2>
      <Cards countries={countries}></Cards>
    </div>
  );
};

export default Home;
