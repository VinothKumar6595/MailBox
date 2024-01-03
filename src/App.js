import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { useSelector } from "react-redux";
import ComposeMail from "./Components/ComposeMail";
import SentMail from "./Components/SentMail";
import Inbox from "./Components/Inbox";

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
      <Route path="/composeMail" element={<ComposeMail />} />
      <Route path="/sentBox" element={<SentMail />} />
      <Route path="/inBox" element={<Inbox />} />
    </Routes>
  );
}

export default App;
