import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import RecommendationsPage from './pages/Recommendation';
import ProfileSettings from "./pages/ProfileSetting";
import FilterPage from "./pages/Filter";
import Footer from './pages/Footer';
import './App.css';
import ContactUs from './pages/Contactus';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/recommendation" element={<RecommendationsPage />} />
            <Route path="/profilesetting" element={<ProfileSettings />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            
          
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
