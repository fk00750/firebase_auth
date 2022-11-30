import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./src/components/login/Login";
import Register from "./src/components/register/Register";
import Dashboard from "./src/components/dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
