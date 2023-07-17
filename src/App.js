import React, { Component } from "react";
import SideBar from "./components/sidebar";
import SideBarBottom from "./components/sideBarBottom";
import { InfoList } from "./info";
import { getInfoList } from "./info";
import "bootstrap/dist/css/bootstrap.css";
import Feed from "./components/feed";
import Nav from "./components/nav1";
import { paginate } from "./utilities/paginate1";
import reviews from "./app/data";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/home";
import { AppContextProvider } from "./context/ContextProvider";
import "./assets/styling/nav1.css";
import "./assets/styling/sideBar.css";
import "./assets/styling/MainApp.css";
import "./assets/styling/feed.css";
import "./assets/styling/sideBarBottom.css";
import "./assets/styling/home.css";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LoginForm />} />

          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );

}




export default App;
