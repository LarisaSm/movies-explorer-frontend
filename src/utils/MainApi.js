// Auth.js

// export const BASE_URL = "https://auth.nomoreparties.co";
// export const BASE_URL = "http://localhost:3005";
export const BASE_URL = "https://api.larisasm.nomoredomains.icu";
// const TOKEN = "123eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzNjdmZDdmOTc5YjEyYzJmMTE1MGMiLCJpYXQiOjE2MjM0MTg4ODMsImV4cCI6MTYyNDAyMzY4M30.GaK4DsjbyysPaTUC65lYfc46gFV7_yuDrxpT__J5j8g";

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return returnData(res);
    })
    .then((data) => {
      return data;
      });
};

export const  addMovie = ({country,
  director,
  duration,
  year,
  description,
  src,
  trailer,
  nameRU,
  nameEN,
  thumbnail,
  movieId}, token) => {
  return fetch (`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: country,
    director: director,
    duration: duration,
    year: year,
    description: description,
    image: src,
    trailer: trailer,
    nameRU: nameRU,
    nameEN: nameEN,
    thumbnail: thumbnail,
    movieId: movieId,
    }),
  }).then((res) => returnData(res));
};

export const deleteMovie = (movieId, token) => {

  return fetch (`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => returnData(res));
};


export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
      name: name
    }),
  }).then((res) => returnData(res));
};


export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) => returnData(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("isLogin", true);
        return data;
      }
    });
};


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return returnData(res);
    })
    .then((data) => {
      return data;
      });
};

export function editUserInfo (name, email, token) {
  return fetch(`${BASE_URL}/users/me`, {
  method: 'PATCH',
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    
  },
  body: JSON.stringify({
    name: name,
    email: email 
  })
})
.then((res) => returnData(res));
}

function returnData(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(r => Promise.reject(r));
  // return Promise.reject(`Ошибка: ${res.status}`);
  // Promise.reject(res.json()).then((res) => console.log(res));
  // res.json().then(res => console.log(res));
  
}
