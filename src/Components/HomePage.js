import "../App.css";
import { TopBar } from "./TopBar";
import { HSecondBar } from "./Home/HSecondBar";
import { ThirdBar } from "./Home/ThirdBar";
import { Whybar } from "./Home/Whybar";
import ContactUs from "./Home/ContactUs";
import BottomBar from "./Home/BottomBar";
import ContactUsFull from "./ContactUsFull";
// import {NavLink} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BottomBar from './Components/BottomBar';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import WhyPage from "./WhyPage";
import WorkWithUs from "./WorkWithUs";
import AboutOurServ from "./AboutOurServ";


function HomePage() {
  return (
    <>
      <TopBar />
      

      <Router>
        <Switch>
          <Route path="/WhyPage">
            {/* Why PAge COntents */}
            <WhyPage />
          </Route>
          <Route path="/WorkWithUs">
            {/* Work with us Page Contents */}
             <WorkWithUs/>
             </Route>
             <Route path="/ContactUs">
               {/* Only Contact Us Proper Page Contents will be shown here */}
               <ContactUsFull/>  
               </Route>
               <Route path="/AboutOurServ"><AboutOurServ/></Route>
          <Route path="/">
            {/* main page contents */}
            <HSecondBar /> <ThirdBar /> <Whybar /> <ContactUs /><BottomBar />
             
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default HomePage;
