import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registation from './Component/Registetion/Registation';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ShowEventItem from './Component/ShowEventItem/ShowEventItem';
import Navbar from './Component/Navbar/Navbar';

export const UserContext =  createContext()
function App() {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/home'>
        <Home/>
        </Route>
        <PrivateRoute path='/event'>
          <ShowEventItem/>
        </PrivateRoute>
        <PrivateRoute path='/registation/:eventName'>
          <Registation/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/showEventItem'>
          <ShowEventItem/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
     
    </UserContext.Provider>
  );
}

export default App;
