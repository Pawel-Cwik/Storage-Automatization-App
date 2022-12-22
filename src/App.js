import Home from "./components/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginRegister from "./components/LoginRegister";
import AddToList from "./components/AddToList";
import BarCode from "./components/BarCode";
import Search from "./components/Search/Search";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact></Route>
            <Route element={<AddToList />} path="/AddToList" exact></Route>
            <Route element={<BarCode />} path="/BarCode" exact></Route>
            <Route element={<Search />} path="/Search" exact></Route>
          </Route>

          <Route
            element={
              <LoginRegister
                currentForm={currentForm}
                toggleForm={toggleForm}
              />
            }
            path="/login"
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
