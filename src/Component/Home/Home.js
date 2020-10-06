import React, { useEffect, useState } from 'react';
import '..//..//../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {FaSearch} from 'react-icons/fa';
import WorkShop from './../WorkShop/WorkShop';



const Home = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch('https://evening-beach-61521.herokuapp.com/task')
        .then(res => res.json())
        .then(data => {
            setTask(data)
        })

    },[])
    return (
        <>
           
           <div className='heading'>
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
               <div className="box-container">
               <table className='element-container'>
                   <tr>
                    <td>
                        <input className='search' type="text" placeholder="Search" />
                    </td>
                    
                   <td>
                       <FaSearch className='faSearch'/>
                    </td>
                   </tr>
               </table>
               </div>
           </div>
           <div className="row">         
                        {
                            task.map(task => <WorkShop work={task} id={task._id} ></WorkShop>)
                        }     
            </div>    
           
        </>
    );
};

export default Home;