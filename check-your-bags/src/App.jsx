import { useState } from 'react'
import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/home';
import AboutPage from './Pages/about';
import Itinerary from './Pages/itinerary';
import Postcard from './Pages/postcard';
import UserProfile from './Pages/userProfile';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/itinerary" element={<Itinerary />}/>
        <Route path="/postcard" element={<Postcard />}/>
        <Route path="/userProfile" element={<UserProfile />}/>
      </Routes>
    </Router>
  )
}

export default App
