// const BASE = process.env.REACT_APP_API_URL;
const BASE = "http://127.0.0.1:8000";


export const getStats = () => {
    return fetch(`${BASE}stats/2`);
}

export const login = (username,password) => {
  let data = {
      username,
      password
  };
  let options = {
    method:"POST",
    body:JSON.stringify(data)
  };
  return fetch(`${BASE}/auth/login/`,options);
}

export const register = (username,password) => {
  let data = {
    username,
    password
  };

  let options = {
    method:"POST",
    body:JSON.stringify(data)
  };

  return fetch(`${BASE}/auth/register/`,options);
}

// const [stats, setStats] = useState(null);
  // const getAPIStats = async () => {
  //   const res = await getStats();
  //   setStats(res);
  // }
  // useEffect(() => {
  //   getAPIStats();
  // }, []);