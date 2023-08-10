import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NotFound from "./pages/NotFound";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/home";
import { AppContextProvider } from "./context/ContextProvider";
import './assets/styles/main.scss';
import News from "./pages/News";
import Adverts from "./pages/Adverts";
import FullPost from "./pages/FullPost";
import Create from "./pages/Create";
import MyPosts from "./pages/MyPosts";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/discover' element={<News />} />
            <Route path='/my-posts' element={<MyPosts />} />
            <Route path='/adverts' element={<Adverts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='post/:id' element={<FullPost />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );

}




export default App;
