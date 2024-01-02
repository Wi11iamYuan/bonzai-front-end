// const BASE = process.env.REACT_APP_API_URL;
const BASE = "https://bonzai-server-4c7d151df85e.herokuapp.com/";


export const getMap = () => {
  let data = {
  };
  let options = {
    method:"POST",
    headers:new Headers({
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }),
    body:JSON.stringify(data)
  };
  return fetch(`${BASE}/stats/map/`,options);
}

export const getStats = (disease, year, group, state) => {
  let data = {
    disease,
    year,
    group,
    state
  };
  let options = {
    method:"POST",
    headers:new Headers({
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }),
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