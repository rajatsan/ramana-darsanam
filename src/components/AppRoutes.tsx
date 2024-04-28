import React from "react";
import { Route, Routes } from "react-router-dom";
import GenericPage from "../common/GenericPage";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import Miscellanous from "../pages/Miscellanous";
import { UPADESA_CONFIG } from "../constants";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path={UPADESA_CONFIG[0].pageRoute}
        element={
          <GenericPage
            pageTitle={UPADESA_CONFIG[0].title}
            pageDataPath={UPADESA_CONFIG[0].pageDataPath}
          />
        }
      />
      <Route
        path={UPADESA_CONFIG[1].pageRoute}
        element={
          <GenericPage
            pageTitle={UPADESA_CONFIG[1].title}
            pageDataPath={UPADESA_CONFIG[1].pageDataPath}
          />
        }
      />
      <Route
        path={UPADESA_CONFIG[2].pageRoute}
        element={
          <GenericPage
            pageTitle={UPADESA_CONFIG[2].title}
            pageDataPath={UPADESA_CONFIG[2].pageDataPath}
          />
        }
      />
      <Route path="settings" element={<Settings />} />
      <Route path="miscellanous" element={<Miscellanous />} />
    </Routes>
  );
}
