import React from "react";
import { Route, Routes } from "react-router-dom";
import GenericPage from "./GenericPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
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
