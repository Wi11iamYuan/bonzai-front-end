import logo from './logo.svg';
import './App.css';
import { getStats } from './services/api.service';
import { useState, useEffect } from 'react';

function App() {
  const [stats, setStats] = useState(null);
  const getAPIStats = async () => {
    const res = await getStats();
    setStats(res);
  }
  useEffect(() => {
    getAPIStats();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(stats)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
