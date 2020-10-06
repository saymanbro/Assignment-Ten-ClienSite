import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserEvent from '../UserEvent/UserEvent';

const ShowEventItem = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const [eventItem, setEventItem] = useState([])
    useEffect(() => {
        fetch('https://evening-beach-61521.herokuapp.com/showEventItem?email='+loggedUser.email)
        .then(res =>res.json())
        .then(data => setEventItem(data))
    }, [])

    const headingStyle={
                 textAlign: 'center',
                 backgroundColor:'black',
                 color:'white', display:'black',
                 padding:'10px 5px'

                  }
    return (
        <div>
            <h1 style={headingStyle}> You have {eventItem.length} Event Items</h1>
            {
               
               eventItem.map(event => <UserEvent event={event} ></UserEvent>)
            }
        </div>
    );
};

export default ShowEventItem;