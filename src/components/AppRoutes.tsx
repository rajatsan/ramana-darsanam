import React from "react";
import { Route, Routes } from "react-router-dom";
import GenericPage from "./GenericPage";
import Home from "./Home";
import Settings from "../pages/Settings";

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
      <Route
        path="ulladu-narpadu"
        element={
          <GenericPage
            pageTitle="Uḷḷadu Nāṟpadu (Forty Verses on What Exists)"
            pageDataPath="collected_works/ulladu_narpadu.json"
          />
        }
      />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}
