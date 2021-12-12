import React from "react";
import logo from "./images/logoo.png";
import {NavLink} from 'react-router-dom';
import {BrowserRouter as Router,Switch} from 'react-router-dom' 
// import WhyPage from "./WhyPage";
export const TopBar = () => {
  return (
    <div className="topbar_wrapper">
      <div>
        
        
        <a href="/">
          
        <img src={logo} alt="" style={{ width: "90px",height:"90px" }}></img>
        </a>
        
        
      </div>


      


      <Router>


      <div className="topBar_right">


        <NavLink to="/WhyPage"><h3>Why Us</h3></NavLink>
        <NavLink to="/WorkWithUs"><h3>Work With Us</h3></NavLink>
        <NavLink to="/ContactUs"><h3>Contact Us</h3></NavLink>
        <NavLink to="/AboutOurServ"><h3>About Our Services</h3></NavLink>

      </div>

<Switch>
{/* <Route exact path="/" component={TopBar}> </Route> */}

{/* <Route  path="/ContactUs">  <WhyPage/>  </Route>
<Route  path="/WorkWithUs">  <TopBar/>  </Route> */}

</Switch>

      </Router>
    </div>
  );
};
