import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import Register from "../pages/register.js";
import Dashboard from "../pages/dashboard.js";
import Profile from "../pages/profile.js";
import Information from "../pages/information.js";
import Kagit from "../pages/kagit.js";
import Plastik from "../pages/plastik.js";
import Su from "../pages/su.js";
import Badges from "../pages/badges.js";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/information" element={<Information />} />
        <Route path="/information/kagit" element={<Kagit />} />
        <Route path="/information/plastik" element={<Plastik />} />
        <Route path="/information/su" element={<Su />} />
        <Route path="/badges" element={<Badges />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
