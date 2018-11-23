import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/nav/Nav.js";
import Order from "./components/order/Order.js";
import Register from './components/register/Register.js';
import RegisterSuccessful from './components/registerSuccessful/RegisterSuccessful.js';
import MemberCenter from './components/memberCenter/MemberCenter.js';
import BasicInfo from './components/basicInfo/BasicInfo.js';
import Subscription from './components/subscription/Subscription.js';
import Favorite from './components/favorite/Favorite.js';
import MyOrder from './components/myOrder/myOrder.js';
import MyService from './components/myService/MyService.js';
import Footer from './components/footer/Footer.js';
import HomePage from './components/homePage/HomePage.js';
import Sec1 from "./components2/Sec1";
import Sec2 from "./components2/Sec2";
import Sec3_4 from "./components2/Sec3_4";
import Sec5 from "./components2/Sec5";
import Sec6 from "./components2/Sec6";
import Sec7 from "./components2/Sec7";
import Sec8 from "./components2/Sec8";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Route path="/homePage" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/registerSuccessful" component={RegisterSuccessful} />
          <div className="container">
          <Route path="/order" component={Order} />
            <Route path="/memberCenter" component={MemberCenter} />
            <Route path="/memberCenter/BasicInfo" component={BasicInfo} />
            <Route path="/memberCenter/subscription" component={Subscription} />
            <Route path="/memberCenter/favorite" component={Favorite} />
            <Route path="/memberCenter/myOrder" component={MyOrder} />
            <Route path="/memberCenter/myService" component={MyService} />
            <Sec1/>
            <Sec2/>
            <Sec3_4/>
            <Sec5/>
            <Sec6/>
            <Sec7/>
            <Sec5/>
            <Sec8/>                  
          </div>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
