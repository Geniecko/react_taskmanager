import React from 'react';

import '../style/HomePage.css'

const HomePage = () => {
     return ( 
          <div className = 'home-page'>
               <h1>Witaj w TASK MANAGER</h1>
               <p>Aplikacja jest stworzona dla osób, które chcą pamiętać o swoich zadaniach lub też wyznaczacz sobie nowe cele, a pózniej je realizować.</p>
               <p>Wpisz w okienku powyżej treść swojego zadania a następnie przejdź do zakładki aktywne, aby sprawdzić twoje zadania</p>
          </div>
      );
}
 
export default HomePage;