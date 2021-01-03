import React from 'react';
import {NavLink} from 'react-router-dom'

import '../style/Navigation.css'

const Navigation = () => {
     return ( 
          <nav className = 'nav-links'>
               <ul>
                    <NavLink to = '/' exact>HOME</NavLink>
                    <NavLink to = '/active'>AKTYWNE</NavLink>
                    <NavLink to = '/done'>ZROBIONE</NavLink>
               </ul>
          </nav>
      );
}
 
export default Navigation;