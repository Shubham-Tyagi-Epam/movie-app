import "./App.css";
import React from "react";

import Home from "./components/Home/Home";
import { Outlet, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
