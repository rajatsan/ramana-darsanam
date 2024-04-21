import React from "react";
import { Route, Routes } from "react-router-dom";
import GenericPage from "./GenericPage";
import Settings from "../pages/Settings";
import Home from "../pages/Home";

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
      <Route
        path="upadesa-undiyar"
        element={
          <GenericPage
            pageTitle="Upadēśa-v-Undiyār (Teachings in an Undiyār Song of Thirty Verses)"
            pageDataPath="collected_works/upadesa_undiyar.json"
          />
        }
      />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}
