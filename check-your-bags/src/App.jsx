import { useState } from 'react';
import React from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/home';
import AboutPage from './Pages/about';
import PackingList from './Pages/packingList';
import Postcard from './Pages/postcard';
import UserProfile from './Pages/userProfile';
import Layout from './Layout';
import Footer from './Components/Footer';


const App = () => {
 

  return (
    <>
    <header>
     <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/packingList" element={<PackingList />}/>
            <Route path="/postcard" element={<Postcard />}/>
            <Route path="/userProfile" element={<UserProfile />}/>
          </Route>
        </Routes>
      </Router>
    </header>
    
    <Footer />
    </>
  )
}

export default App
