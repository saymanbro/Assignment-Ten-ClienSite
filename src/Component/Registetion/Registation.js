import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './../../volunteer-network-main/logos/Group 1329.png';
import './Registetion.css';
import {useForm} from 'react-hook-form';

const Registation = () => {
    const {eventName} =useParams(); 
    const {register, handleSubmit} = useForm();
    const [loggedUser] = useContext(UserContext);
    const history = useHistory();
   
   useEffect(() => {
       fetch(`https://evening-beach-61521.herokuapp.com/${eventName}`)
       .then(res => res.json())
       .then(data => {
           console.log(data)
       })
   });
 const onSubmit = data =>{  
        fetch('https://evening-beach-61521.herokuapp.com/registeredEvent', {
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
        })
        history.push('/showEventItem')
    }
   

    return (
        <div>
            <img src={logo} alt=""/>
            <div className='register-form'>
                <h1>Register As Volunteer</h1>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='Name' placeholder='Full Name' value={loggedUser.name} ref={register}  required/><br/>
                    <input type="text" name='Email' placeholder='Your Email' value={loggedUser.email} ref={register}  required/><br/>
                    <input type='date' name='Date' placeholder='data' ref={register} required/><br/>
                    <input type="text" name='Description' placeholder='Description' ref={register} required/><br/>
                    <input type="text" name='TaskName' placeholder='task Name' value={eventName} ref={register}  required/><br/>
                    <input  type='submit' value="submit"  />
                 </form>

                 
        
            </div>
        </div>
    );
};

export default Registation;