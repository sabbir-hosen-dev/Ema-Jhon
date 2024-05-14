import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import Navber from "./../components/Navber/Navber";
import Error from "../pages/Error";
import Revew from "../pages/Revew";
import Inventory from "../pages/Inventory";
import ProductDelels from "../pages/ProductDelels";
import Login from "../pages/Login";
import PrivetRoute from "./PrivetRoute";
import ShepMent from "../pages/ShepMent";
import ThankYou from "../pages/ThankYou";

function RouteAll() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/revew" element={<Revew />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/product/:key" element={<ProductDelels />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/shep-ment"
          element={
            <PrivetRoute>
              <ShepMent />
            </PrivetRoute>
          }
        />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteAll;
