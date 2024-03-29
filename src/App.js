import Home from "./components/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React, { useState } from "react";
import LoginRegister from "./components/LoginRegister";
import AddToList from "./components/AddToList/AddToList";
import BarCode from "./components/Barcode/BarCode";
import Search from "./components/Search/Search";
import background from "./images/background.jpg";
import Login from "./components/Login";
const backGroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  height: "100vh",
  backgroundRepeat: "repeat-y",
};

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App" style={backGroundStyle}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LoginRegister
                currentForm={currentForm}
                toggleForm={toggleForm}
              />
            }
            path="/login"
          ></Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<Login />} path="/" exact></Route>
            <Route element={<Home />} path="/Home" exact></Route>
            <Route element={<AddToList />} path="/AddToList" exact></Route>
            <Route element={<BarCode />} path="/Barcode" exact></Route>
            <Route element={<Search />} path="/Search" exact></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
