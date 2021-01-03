import React from 'react';

const DoneTask = (props) => {
     const tasks = props.tasks.map (task => {
          return (
               <div className="element" key = {task.id}>
                    {!task.active ? <li>{task.value}</li> : null}
                    <div className="buttons">
                         {!task.active && <button onClick = {() => props.delete(task.id)}>DELETE</button>}
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
 
export default DoneTask;