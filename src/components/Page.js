import React from 'react';
import { Route, Switch} from 'react-router-dom'

import '../style/page.css'

import ActiveTask from './active'
import HomePage from './HomePage'
import DoneTask from './DoneTask'


const Page = (props) => {

     return ( 
          <Switch>
               <Route path = '/' exact component = {HomePage}/>
               <Route path = '/active' exact render = {() => <ActiveTask tasks = {props.tasks} delete = {props.delete} change = {props.change}/>}/>
               <Route path = '/done' exact render = {() => <DoneTask tasks = {props.tasks} delete = {props.delete} />}/>
          </Switch>
      );
}
 
export default Page;