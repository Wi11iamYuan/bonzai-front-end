import './App.css';
import { getStats } from './services/api.service';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { DensityPage } from './pages/Density';
import { StatsPage } from './pages/Stats';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('token')
  );


  return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/home" />}>
            </Route>

            <Route exact path="/home" element={<HomePage />}>
            </Route>
            
            <Route exact path="/density" element={isAuthenticated ? <DensityPage /> : <Navigate to="/login" />}>
            </Route>

            <Route exact path="/stats" element={isAuthenticated ? <StatsPage /> : <Navigate to="/login" />}>
            </Route>

            <Route exact path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}>
            </Route>

            <Route exact path="/register" element={<RegisterPage />}>
            </Route>

        </Routes>
    </Router>
);
}

export default App;
