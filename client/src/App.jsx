import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import FormPage from "./components/formPage/FormPage";

const App = () => {
  const location = useLocation(); // useLocation es un gancho (hook) proporcionado por React Router, una librería utilizada para manejar la navegación en aplicaciones de React. Este gancho se utiliza para acceder al objeto de ubicación actual en tu aplicación. La ubicación contiene información sobre la URL actual y se utiliza para determinar qué componente debe renderizarse en función de la ruta.
  const pathname = location.pathname;
  return (
    <div>
      {console.log(pathname)}
      {pathname === "/" ? <LandingPage /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
