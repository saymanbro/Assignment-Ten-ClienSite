import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import logo from './../../volunteer-network-main/logos/Group 1329.png';
import {FcGoogle} from 'react-icons/fc';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedUser,setLoggedUser] = useContext(UserContext);
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
   
   
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedUser(signedInUser);
            history.replace(from)
           
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
  
    return (
        <>
        <div>
            <img src={logo} alt=""/>
            <div className="sign-container">
                <h1>Login With</h1>
                <button onClick={handleSignIn} > <FcGoogle style={{fontSize:'25px',marginRight:'30px'}}/>Continue With Google</button>
                <p><small>Don't you have account? <a href='/'>Create account</a></small></p> 
                      
            </div>       
        </div>
       
            
        </>
    );
};

export default Login;