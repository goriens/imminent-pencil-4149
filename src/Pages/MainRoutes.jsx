import React from "react";
import { Route, Routes } from "react-router-dom";
import Integrations from "./Integrations";
import { Login } from "./Login";
import LandingPAge from "../Pages/LandingPAge";
import Feature from "../Components/Feature";
import Project from "./Project";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPAge />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
};
