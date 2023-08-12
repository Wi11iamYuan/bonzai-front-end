import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { DensityPage } from './pages/Density';
import { StatsPage } from './pages/Stats';
import { InfoPage } from './pages/Info';
import { SettingsPage } from './pages/Settings';

export const NavRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Navigate to="/home" />}>

                </Route>
                <Route exact path="/home" element={<HomePage />}>
                    
                </Route>
                <Route exact path="/density" element={<DensityPage />}>
                    
                </Route>
                <Route exact path="/stats" element={<StatsPage />}>
                    
                </Route>
                <Route exact path="/info" element={<InfoPage />}>
                    
                </Route>
                <Route exact path="/settings" element={<SettingsPage />}>
                    
                </Route>
            </Routes>
        </Router>
    );
}