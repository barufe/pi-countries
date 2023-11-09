import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import DetailActivity from "./components/detail/DetailActivity";
import FormPage from "./components/formPage/FormPage";

const App = () => {
  const location = useLocation(); 
  const pathname = location.pathname;
  return (
    <div>
      {pathname === "/" ? <LandingPage /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<FormPage />} />
        <Route path="/detail/activity" element={<DetailActivity/>} />
      </Routes>
    </div>
  );
};

export default App;