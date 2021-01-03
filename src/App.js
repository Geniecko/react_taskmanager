import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style/App.css';
import './style/media.css'

import AddTask from './components/addTask'
import Navigation from './components/Navigation'
import Page from './components/Page'




class App extends Component {
  
  index = 0

  state = {
    tasks: []
  }

  deleteTaskFromList = (id) => {
    const tasks = this.state.tasks
    const indexTask = tasks.findIndex( task => task.id === id)
    tasks.splice(indexTask, 1)
    this.setState({
      tasks
    })

  }

  changeTask = (id) => {
    const tasks = this.state.tasks
    const indexTask = tasks.findIndex( task => task.id === id)
    tasks[indexTask].active = false;
    this.setState({
      tasks
    })
  }

  addTaskToList = (value) => {
    const id = this.index 
    const tasks = this.state.tasks
    console.log(tasks)
    if(value){
      tasks.push({id, value, active: true})
      this.setState({
        tasks
      })
      this.index ++
    }
  }

  render() {

    return (
      <BrowserRouter>
      <div className = "wrapper">
        <header>
          <h1>TASK MANAGER</h1>
          <p>Dodawaj swoje zadania, aby o nich nie zapomnieć!</p>
        </header>
        <AddTask addTaskToList = {this.addTaskToList}/>
        
        <main>
          <Navigation/>
          
          <div className = 'page'>
            <Page tasks = {this.state.tasks} delete = {this.deleteTaskFromList} change = {this.changeTask}/>
          </div>
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
