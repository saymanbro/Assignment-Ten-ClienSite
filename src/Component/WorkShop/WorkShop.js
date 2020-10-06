import React from 'react';
import './WorkShop.css';
import {Link} from 'react-router-dom'



const WorkShop = (props) => {
    const {taskName} = props.work
   
    return (
        <>
          <div  className="col-md-3 task-container">
          <h4><Link to={`/registation/${taskName}`}>{taskName}</Link> </h4> 
      
         </div>  
        </>
    );
};

export default WorkShop;