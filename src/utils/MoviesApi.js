// import React from "react";

// import CurrentUserContext from "../contexts/CurrentUserContext";

// class Api {
//   constructor (config) {
//       URL = config.url;
//       this._headers = config.headers;
//   }

// const URL = "http://localhost:3005/";
const URL = "https://api.nomoreparties.co/beatfilm-movies";


export function getAllMovies () {
  return fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => returnData(res));
}

function returnData (res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}. Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз `);
}



// const api = new Api({
//   url: "https://mesto.nomoreparties.co/v1/cohort-20/",
//   headers: {
// 		authorization: '4b126959-9593-4c1c-9c1d-30d3e8eeddbf',
//     "content-type": "application/json",
//   }
// });

// const api = new Api({
//   url: "http://localhost:3005/",
//   headers: {
//         "content-type": "application/json"
//       }
// });