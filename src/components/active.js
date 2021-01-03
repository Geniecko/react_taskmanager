import React from 'react';

const ActiveTask = (props) => {
     const tasks = props.tasks.map (task => {
          return (
               <div className="element" key = {task.id}>
                    <div className = 'tasks'>{task.active ? <li>{task.value}</li> : null}</div>
                    <div className="buttons">
                         {task.active && <button onClick = {() => props.delete(task.id)}>DELETE</button>}
                         {task.active && <button onClick = {() => props.change(task.id)}>WYKONANE</button>}
                    </div>
               </div>
          )
     })
     return ( 
          <ul className="task-list">
               {tasks}
          </ul>
      );
}
 
export default ActiveTask;