import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/auth" />}
      />
      <Route path="/auth" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
