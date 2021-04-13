import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import * as mainApi from '../../utils/mainApi';
import * as moviesApi from '../../utils/moviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import '../../vendor/inter.css';
import './App.css';
import { withRouter, useLocation } from 'react-router-dom';

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowsWidth] = useState(1280);
  const [initCardsCount, setInitCardsCount] = useState(12);
  const [loadCardsCount, setLoadCardsCount] = useState(3);
  const path = useLocation().pathname;

  function updateWindowWidth() {
    setWindowsWidth(window.innerWidth);
  }

  function handleLogin(password, email) {

    mainApi.authorize(password, email)
    .then((data) => { 
      if (data.token){
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        setUserData(email);
        props.history.push("/movies");
      }
    })
    .catch((err) => { 
      console.log(err);
    });

  } 

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('cards');
    localStorage.removeItem('search_string');
    props.history.push('/signin');
  }


  function handleRegister(password, email, name) { 

    mainApi.register(password, email, name)
    .then((res) => {
      if(res.status !== undefined && res.status === 200 || res.status === 201) {
        props.history.push("/signin");
      } else {
        console.log(res.status);
      }
      props.history.push("/signin");
      })
      .catch(err => {
        console.log(err);
      });

  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      mainApi.getContent(jwt)
      .then((res) => {
        setUserData(res.email);
        setLoggedIn(true);
        setCurrentUser(res);
        props.history.push(path);
      })
      .catch(err => console.log(err));
    }
  }

  async function loadCards() {
      const cards = JSON.parse(localStorage.getItem('cards'));
      setIsLoad(true);
      await loadSavedCards();
      if(cards) {
       await setCards(cards);
        setIsLoad(false);
      } else {
        await moviesApi.getMovies()
          .then((data) => {
            setCards(data);
            localStorage.setItem('cards', JSON.stringify(data));
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            setIsLoad(false);
          });
      }
  }

  function loadSavedCards() {
    setIsLoad(true);
    const jwt = localStorage.getItem('jwt');
    mainApi.getMovies(jwt)
      .then((data) => {
        setSavedCards(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoad(false);
      })
  }

  function handleOpenMenu() {
    setMenu(true);
  }

  function handleCloseMenu() {
    setMenu(false);
  }


  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      loadCards();
    }
  }, [loggedIn])

  React.useEffect(() => {
    setWindowsWidth(window.innerWidth);
    window.addEventListener('resize', updateWindowWidth);
  }, [])

  React.useEffect(() => {
    if (windowWidth > 1010) {
        setInitCardsCount(12);
        setLoadCardsCount(3);
    } else if (windowWidth <= 1010 && windowWidth > 540) {
        setInitCardsCount(8);
        setLoadCardsCount(2);
    } else if (windowWidth <= 540) {
        setInitCardsCount(5);
        setLoadCardsCount(1);
    }
  }, [windowWidth])

  function handleMoreCards() {
    setInitCardsCount(initCardsCount + loadCardsCount);
  } 

  function handleCardSave(card) {
    let cardImageUrl = "https://images.unsplash.com/photo-1613843596852-9a6317dae0b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80";
    let thumbnailUrl = "https://images.unsplash.com/photo-1613843596852-9a6317dae0b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80";
    if (card.image && card.image.url) {
        cardImageUrl = "https://api.nomoreparties.co" + card.image.url;
        thumbnailUrl = "https://api.nomoreparties.co" + card.image.formats.thumbnail.url;
    }
    const movie = {
      movieId: card.id,
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: cardImageUrl,
      trailer: card.trailerLink,
      thumbnail: thumbnailUrl,
      nameRU: card.nameRU,
      nameEN: card.nameEN
    };

    const jwt = localStorage.getItem('jwt');

    mainApi.saveMovie(jwt, movie)
      .then((data) => {
        if (data) {
          setSavedCards([data, ...savedCards]);
        }
      })
      .catch(err => {
        console.log(err);
      })

  }

  function handleCardDelete(card) {
    const jwt = localStorage.getItem('jwt');
    let movie = savedCards.filter((movie) => movie.movieId === card.id);
    let id;
    if (movie[0] === undefined) {
      id = card._id;
    } else {
      id = movie[0]._id;
    }
    mainApi.deleteMovie(jwt, id)
      .then(() => {
        const newCards = savedCards.filter((c) => c.movieId !== card.movieId);
        setSavedCards(newCards);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleUpdateUser(email, name) {
    const jwt = localStorage.getItem('jwt');
    mainApi.updateUser(jwt, email, name)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App"> 
      <Switch>
        <Route path="/signin">
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path="/signup">
          <Register handleRegister={handleRegister}/>
        </Route>
        <ProtectedRoute path="/movies"
        loggedIn={loggedIn}
        component={Movies}
        cards={cards}
        savedCards={savedCards}
        userData={userData}
        signOut={signOut}
        isLoad={isLoad}
        handleMoreCards={handleMoreCards}
        initCardsCount={initCardsCount}
        windowWidth={windowWidth}
        handleOpenMenu={handleOpenMenu}
        handleCardSave={handleCardSave}
        handleCardDelete={handleCardDelete}
        currentUser={currentUser}/>
        <ProtectedRoute path="/saved-movies"
        loggedIn={loggedIn}
        component={SavedMovies} 
        cards={savedCards}
        userData={userData} 
        signOut={signOut}
        isLoad={isLoad}
        handleMoreCards={handleMoreCards}
        initCardsCount={initCardsCount}
        windowWidth={windowWidth}
        handleOpenMenu={handleOpenMenu}
        handleCardDelete={handleCardDelete}
        currentUser={currentUser}/>
        <ProtectedRoute path="/profile"
        loggedIn={loggedIn}
        component={Profile} 
        userData={currentUser} 
        signOut={signOut}
        windowWidth={windowWidth}
        handleOpenMenu={handleOpenMenu}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleUpdateUser={handleUpdateUser}/>
        <Route path="/">
          <Main loggedIn={loggedIn} userData={userData} signOut={signOut} currentUser={currentUser} windowWidth={windowWidth} handleOpenMenu={handleOpenMenu}/>
        </Route>
      </Switch>
      <BurgerMenu open={menu} setClose={handleCloseMenu}/>
    </div>
  );
}

export default withRouter(App);
