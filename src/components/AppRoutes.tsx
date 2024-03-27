import React from "react";
import { Route, Routes } from "react-router-dom";
import GenericPage from "./GenericPage";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="nan-yar"
        element={
          <GenericPage
            pageTitle="Nāṉ Ār? (Who am I?)"
            pageDataPath="collected_works/nan_yar.json"
          />
        }
      />
    </Routes>
  );
}
