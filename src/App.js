import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./components/card";
import {BrowserRouter,Route} from "react-router-dom";
import Resume from "./components/Resume";
function App() {
return (
    <div className="App">
      <BrowserRouter>
       <Route exact path="/" component={Cards}/>
       <Route exact path="/Resume" component={Resume}/>
      </BrowserRouter>
      {/*<Cards/>*/}
    </div>
    
  );
  
}

export default App;
