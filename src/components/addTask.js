import React, { Component } from 'react';

import '../style/addTask.css'

class AddTask extends Component {
     state = { 
          value: '', 
      }

     handleInputChange = (event) => {
          this.setState({
               value: event.target.value,
          })
     }

     handleInputSubmit = (event) => {
          event.preventDefault()
          this.props.addTaskToList(this.state.value)
          this.setState({
               value: ''
          })
     }

     render() { 
          return ( 
               <form className = 'add-form' onSubmit = {this.handleInputSubmit}>
                    <input type="text" value = {this.state.value} onChange = {this.handleInputChange}/>
                    <button>ADD</button>
               </form>
           );
     }
}
 
export default AddTask;
