// const BASE = process.env.REACT_APP_API_URL;
const BASE = "http://127.0.0.1:8000";


export const getStats = (disease, geo, year, group) => {
  let data = {
    disease,
    geo,
    year,
    group
  };
  let options = {
    method:"POST",
    body:JSON.stringify(data)
  };

  return fetch(`${BASE}/stats/`,options);
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