
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
