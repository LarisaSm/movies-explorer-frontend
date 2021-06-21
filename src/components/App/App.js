// App.js
import './App.css';

import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'
import ProtectedRoute from '../ProtectedRoute'
import Errors from '../Errors/Errors'

import { getAllMovies } from '../../utils/MoviesApi'
import { editUserInfo, getSavedMovies, addMovie, deleteMovie, register, authorize, getContent } from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { MOVIE_URL, DURATION_SHORT, COUNTER_MAX, COUNTER_ROW_MAX, COUNTER_MIDDLE, COUNTER_ROW_MIDDLE, COUNTER_MIN, COUNTER_ROW_MIN } from '../../utils/Constants'



function App() {
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [findMovies, setFindMovies] = React.useState([]);
  const [findSavedMovies, setFindSavedMovies]= React.useState([]);
  
  
  const [isFind, setIsFind] = React.useState(false);
  const [isSaveFind, setIsSaveFind] = React.useState(true);


  const [isLoading, setIsLoading] = React.useState(false);

  const [windowInnerWidth, setWindowInnerWidth] = React.useState([]);
  const [windowCounterMovies, setWindowCounterMovies] = React.useState();
  const [counterMovies, setCounterMovies] = React.useState();
  const [counterRow, setCounterRow] = React.useState();
  const [viewMovies, setViewMovies] = React.useState([]);
  const [isResetForm, setIsResetForm] = React.useState(false);

  const history = useHistory();


  const [currentUser, setСurrentUser] = React.useState({ name: "", email: "", token: "" });
  const [currentUserHeaders, setCurrentUserHeaders] = React.useState();

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState('');
  const [showErrPopup, setShowErrPopup] = React.useState(false);
  const [showUserErrPopup, setShowUserErrPopup] = React.useState(false);
  const [errorApiMessage, setErrorApiMessage] = React.useState('');
  const [isShowOk, setIsShowOk] = React.useState(false);

  


  function showErr (err) {
    setIsLoading(false);
    setErrorMessage(err.message);
    setShowErrPopup(true);
  }

  function closeErrPopup () {
    setErrorMessage('');
    setShowErrPopup(false);
  } 

  function handleAddViewMovies () {
    setCounterMovies(counterMovies+counterRow);
  }
  
  React.useEffect( () => {
    setWindowInnerWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', function(event){
      // do stuff here
      setTimeout(function () {setWindowInnerWidth(document.documentElement.clientWidth)}, 1000);
    });
  }, []);
  
  React.useEffect( () => {
    if (windowInnerWidth >= 1270) {
      setWindowCounterMovies(COUNTER_MAX);
      setCounterRow(COUNTER_ROW_MAX);
    }
    else if (windowInnerWidth >= 760) {
      setWindowCounterMovies(COUNTER_MIDDLE);
      setCounterRow(COUNTER_ROW_MIDDLE);
    }
    else {
      setWindowCounterMovies(COUNTER_MIN);
      setCounterRow(COUNTER_ROW_MIN);
    }
  }, [windowInnerWidth]);

  React.useEffect( () => {
    // console.log("effect 00000000");
    if (!counterMovies || counterMovies <= windowCounterMovies) {
      setCounterMovies(windowCounterMovies);}
    else return;
  }, [counterMovies, windowCounterMovies]);

  React.useEffect( () => {
//     console.log("=========useEffect ======= 123");
//     console.log(findMovies);
// console.log(isFind);
    if (isFind === true) {
      setViewMovies(findMovies.slice(0, counterMovies));
    }
  }, [findMovies, counterMovies, isFind]);

  React.useEffect(() => {
    let searchCheck;
  if (localStorage.getItem("searchCheck") === 'false') {
    searchCheck = false;
  }
  else {
    searchCheck = true;

  }
    filterMovies(localStorage.getItem("searchWord"), searchCheck);
  }, [movies])

  React.useEffect(() => {
    // console.log("SAVE MOVIES!!!!");
    // console.log(localStorage.getItem("searchSaveWord"));
    // console.log(localStorage.getItem("searchSaveCheck"));
    let searchCheck;
  if (localStorage.getItem("searchSaveCheck") === 'false') {
    searchCheck = false;
  }
  else {
    searchCheck = true;
  }
    filterSavedMovies(localStorage.getItem("searchSaveWord"), searchCheck);
  }, [savedMovies])

  function filterMovies (world, inputShortValue) {
    // console.log("FILTERFILTER!!!!!!");
    // console.log(movies);
  //   console.log(inputShortValue);
    // setFindMovies(movies.filter(item => item.duration <= 40));
    // if(world === ''){
    //   return
    // }
    let durationFilter = DURATION_SHORT;
    if (inputShortValue) 
    {durationFilter = 0;
    }
   else {durationFilter = DURATION_SHORT}
    // console.log(durationFilter)
    setCounterMovies(windowCounterMovies);
    setIsLoading(true);
    // setFindMovies(movies.filter(item => item.nameRU.includes(world)));
    const filteredMovies = movies.filter(item => item.nameRU.includes(world));
    // console.log(filteredMovies);
    // console.log("find movies 123======");
    setFindMovies(filteredMovies.filter(item => item.duration >= durationFilter));
    setIsLoading(false);
    // console.log(findMovies);
    // console.log(movies);
  }

  function filterSavedMovies (world, inputShortValue) {
    setIsLoading(true);
    // console.log("FILTERFILTER!!!!!!");
    // console.log(inputShortValue);
    let durationFilter = DURATION_SHORT;
    if (inputShortValue) 
    {durationFilter = 0;
    }
   else {durationFilter = DURATION_SHORT}
    
    // setFindMovies(movies.filter(item => item.nameRU.includes(world)));
    const filterSavedMovies = savedMovies.filter(item => item.nameRU.includes(world));
    setFindSavedMovies(filterSavedMovies.filter(item => item.duration >= durationFilter));
  
    setIsLoading(false);
  }

function handleMovieLike(movie) {
  if (!movie.like) {
    addMovie(movie, currentUserHeaders)
    .then ((newMovie) => {
      setSavedMovies([newMovie,...savedMovies]);
      const newViewMovies = viewMovies.map((m) => 
      m.movieId === newMovie.movieId ?
        {
          country: newMovie.country,
          director: newMovie.director,
          duration: newMovie.duration,
          year: newMovie.year,
          description: newMovie.description,
          image: newMovie.image,
          thumbnail: newMovie.thumbnail,
          trailer: newMovie.trailer,
          nameRU: newMovie.nameRU,
          nameEN: newMovie.nameEN,
          movieId: newMovie.movieId,
          movie_Id: newMovie._id,
          like: true,
        }
        : m
      );
      setViewMovies(newViewMovies);
    })
    .catch((err) => {
      showErr(err);

      console.log(err); // выведем ошибку в консоль
    });
  }
    
    else {
      deleteMovie(movie.movie_Id, currentUserHeaders)
      .then((newMovie) => {
        const newSavedMovies = savedMovies.filter((c) => c.movie_Id !== newMovie._Id);
        setSavedMovies(newSavedMovies);
        const newViewMovies = viewMovies.map((m) => 
            m.movieId === newMovie.movieId ?
              {
                country: newMovie.country,
                director: newMovie.director,
                duration: newMovie.duration,
                year: newMovie.year,
                description: newMovie.description,
                image: newMovie.image,
                thumbnail: newMovie.thumbnail,
                trailer: newMovie.trailer,
                nameRU: newMovie.nameRU,
                nameEN: newMovie.nameEN,
                movieId: newMovie.movieId,
                like: false,
              }
              : m
            );

            setViewMovies(newViewMovies);
      })
      .catch((err) => {
      showErr(err);

        console.log(err); // выведем ошибку в консоль
      });
  }
}

function handleMovieDelete (movieId) {
  deleteMovie(movieId, currentUserHeaders)
    .then(() => {
      const newCards = savedMovies.filter((c) => c.movie_Id !== movieId);
      setSavedMovies(newCards);
    })
    .catch((err) => {
      showErr(err);

      console.log(err); // выведем ошибку в консоль
    });
 
}

function handleRegister(inputPassValue, inputEmailValue, inputNameValue) {
// console.log("====REGIREGIREGOGOGOGOGOGOOG=====");
    register(inputPassValue, inputEmailValue, inputNameValue)
    .then((data) => {
      if (data._id) {
        // setConfirmAuth(true);
        setIsResetForm(true);
        history.push("/sign-in");
      }
      // setInfoTooltipOpen(true);
    })
    .catch((err) => {
      console.log(err);
      showErr(err);
      // setConfirmAuth(false);
      // setInfoTooltipOpen(true);
    });
}

function handleLogin(inputEmailValue, inputPassValue) {

    authorize(inputPassValue, inputEmailValue)
    .then((data) => {
      if (data.token) {
        setLoggedIn(true);
        setIsResetForm(true);
        setСurrentUser({ email: data.email, name: data.name });
        setCurrentUserHeaders(data.token);
        history.push("/movies");
      }
    })
    .catch((err) => {
      showErr(err);

      console.log(err);
    });
}

function handleUpdateUser(name, email) {
  setIsLoading(true);
  editUserInfo(name, email, currentUserHeaders)
    .then((res) => {
      setСurrentUser(res)})
    .then(() => {
      showErr({"message": "Данные успешно обновлены"})
      setIsLoading(false);
    })
    .catch((err) => {
      showErr(err);
      console.log([err]); // выведем ошибку в консоль
    });
}

function signOut() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("isLogin");
  localStorage.removeItem("searchSaveCheck");
  localStorage.removeItem("searchCheck");
  localStorage.removeItem("searchSaveWord");
  localStorage.removeItem("searchWord");
  history.push("/");
}

function tokenCheck () {  
  // если у пользователя есть токен в localStorage,
  // эта функция проверит валидность токена
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // проверим токен
  
      getContent(jwt)
      .then((res) => {
        if (res.name) {
          // авторизуем пользователя
          setLoggedIn(true);
          setСurrentUser({ email: res.email, name: res.name });
          setCurrentUserHeaders(jwt);
          

          // обернём App.js в withRouter
          // так, что теперь есть доступ к этому методу
          // history.push(currentPage);
          // console.log(history.location);
        }
      })
      .catch((err) => {
      showErr(err);

        console.log(err); // выведем ошибку в консоль
      });
  }
}

React.useEffect(() => {
  // setIsLoading(true);
// console.log("MOVIES MONVIWWMEFMSDMS");
  tokenCheck();
  getAllMovies()
  .then((res) => {
    setMovies(
        res.map((movie) => ({
          country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: MOVIE_URL + movie.image.url,
            trailer: movie.trailerLink,
            thumbnail: MOVIE_URL + movie.image.formats.thumbnail.url,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            movieId: movie.id,
        }))
      );
      // setIsLoading(false);
  })
  .catch((err) => {
    setErrorApiMessage(err);
    console.log(err); // выведем ошибку в консоль
  });
}, []);

React.useEffect(() => {
  // setIsLoading(true);
  // console.log("token check!!!!");
  // console.log(currentUserHeaders);

  getSavedMovies(currentUserHeaders)
  .then((res) => {
    setSavedMovies(
        res.map((movie) => ({
          movie_Id: movie._id,
          country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailer: movie.trailerLink,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            movieId: movie.movieId,
        }))
      );
      // setIsLoading(false);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}, [currentUserHeaders]);

React.useEffect(() => {
  //сравнить 2 массива
  movies.forEach((item) => {
    savedMovies.forEach((saveMovie) => {
      if( item.movieId === saveMovie.movieId) {
        item.like = true;
        item.movie_Id = saveMovie.movie_Id;
        // console.log("ура!!! есть сохраненный фильм");
      }

    })
  });
}, [movies, savedMovies])

React.useEffect(() => {
  setFindSavedMovies(savedMovies);
  // console.log(findSavedMovies);
  // console.log(savedMovies);
  // console.log("===========useEffect");
}, [savedMovies])


  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <ProtectedRoute
            exact path="/movies"
            component={Movies}
            loggedRouteIn={true}
            isFind={isFind} 
            setIsFind={setIsFind} 
            viewMovies={viewMovies} 
            movies={findMovies} 
            findMovies={findMovies}
            isLoading={isLoading} 
            filterMovies={filterMovies} 
            onMovieLike={handleMovieLike} 
            handleAddViewMovies={handleAddViewMovies}
            setShowUserErrPopup={setShowUserErrPopup}
            errorApiMessage={errorApiMessage}
          />
        <ProtectedRoute
            exact path="/saved-movies"
            component={SavedMovies}
            loggedRouteIn={true}
            isFind={isSaveFind} 
            setIsFind={setIsSaveFind}  
            savedMovies={findSavedMovies} 
            isLoading={isLoading} 
            onMovieDelete={handleMovieDelete} 
            filterSavedMovies={filterSavedMovies} 
            setShowUserErrPopup={setShowUserErrPopup}
          />
          <ProtectedRoute
            exact path="/profile"
            component={Profile}
            loggedRouteIn={true}
            signOut={signOut}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading} 
            setShowUserErrPopup={setShowUserErrPopup}
            setIsShowOk={setIsShowOk}
          />
       
       <ProtectedRoute
          exact path="/sign-in"
          component={Login}
          loggedRouteIn={false}
            onLogin={handleLogin} 
            setShowUserErrPopup={setShowUserErrPopup}
        />

        <ProtectedRoute
          exact path="/sign-up"
          component={Register}
          loggedRouteIn={false}
          onRegister={handleRegister} 
          setShowUserErrPopup={setShowUserErrPopup}/>
        
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
      <Errors isOk={isShowOk} isShow={showUserErrPopup} isOpen={showErrPopup} onClose={closeErrPopup} errorMessage={errorMessage}/>
    </div>
    </CurrentUserContext.Provider>

  );
}

export default App;