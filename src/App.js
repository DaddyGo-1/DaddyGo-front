import React, { Component } from "react";
import SideBar from "./components/sidebar";
import SideBarBottom from "./components/sideBarBottom";
import { InfoList } from "./info";
import { getInfoList } from "./info";
import Feed from "./components/feed";
import Nav from "./components/MobileNav";
import { paginate } from "./utilities/paginate1";
import reviews from "./app/data";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/home";
import { AppContextProvider } from "./context/ContextProvider";
import './assets/styles/main.scss';
import News from "./pages/News";
import Adverts from "./pages/Adverts";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/news' element={<News />} />
            <Route path='/adverts' element={<Adverts />} />
            <Route path='/post/:id' element={<News/>}/>
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );

}




export default App;
