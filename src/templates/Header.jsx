import React from "react";
import '../templates/Header.css'
import { BrowserRouter as Router, Switch,  Route} from  'react-router-dom';
import User from "../pages/User"


 
 function header() {

   
  return(
<div className="header">
  
<div className="home" > <a  href="/Home">INICIO </a></div>
<div className="users"> <a href="/User"> USUARIOS </a></div>

<Router>

<Switch>

<Route exact path="/"></Route>
<Route path="/User"><User></User></Route>


</Switch>



</Router>






</div>
 )}
 export default header