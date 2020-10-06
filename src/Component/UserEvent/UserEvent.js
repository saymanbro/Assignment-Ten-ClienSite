import React from 'react';

const User = (props) => {
   const {Name,Email,Date,Description,TaskName,_id} = props.event;
  function handleDelete(id){
      fetch(`https://evening-beach-61521.herokuapp.com/delete/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result)
      })
  }
  const divStyle={
    border:'2px solid black',
    textAlign:'center',
    margin:'20px 300px 10px 300px',
    backgroundColor:'#555',
    color:'white',
    padding:'10px'

                 }
    return (
        <div>
            <div style={divStyle}>
                    <h3>RegisterPerson:  {Name}</h3>
                <h5>Email: {Email}</h5>
                <p>Date:{Date}</p>
                <p>Description: {Description}</p>
                <h4>TaskName: {TaskName}</h4>
                <button onClick={ () => handleDelete(_id)} className='button-submit'>Delete </button>
                </div>
        </div>
    );
};

export default User;