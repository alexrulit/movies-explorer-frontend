import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import '../../vendor/inter.css';
import './App.css';

function App() {
  const [LandHeader, setLandHeader] = useState(false);

  return (
    <div className="App">
      <Header color={LandHeader}/>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Movies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/">
          <Main changeHeader={setLandHeader}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
