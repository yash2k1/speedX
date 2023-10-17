import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import GenericCategory from "./pages/GenericCategory";
import axios from "axios";
import Login from "./Components/Login&signUp/Login";
import Register from "./Components/Login&signUp/Register";
import Cart from "./pages/Cart";
import FallBack from "./Components/Login&signUp/FallBack";

const RoutesFile = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path="/:category"  element={<GenericCategory/>} />
        <Route path="/:category/:id" element={<SinglePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fallBack" element={<FallBack />} />
      </Routes>
    </>
  );
};

export default RoutesFile;
