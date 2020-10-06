import React from 'react';

const TaskName = () => {
    return (
        <div>
         <form action="/addTaskName" method='post'>
                <input type="text" placeholder="taskName" name="taskName"/>
                <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default TaskName;