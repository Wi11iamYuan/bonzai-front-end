import './App.css';
import { getStats } from './services/api.service';
import { useState, useEffect } from 'react';
import { NavRoutes } from './Routes';

function App() {
  // const [stats, setStats] = useState(null);
  // const getAPIStats = async () => {
  //   const res = await getStats();
  //   setStats(res);
  // }
  // useEffect(() => {
  //   getAPIStats();
  // }, []);

  return (
    <NavRoutes />
  );
}

export default App;
