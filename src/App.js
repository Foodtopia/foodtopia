import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import Nav from "./components/nav/Nav.js";
import Loginform from './components/logInform/Loginform.js';
import Head_slider from './components/head_slider/head_slider.js';
import Recommend from './components/recommend/recommend.js';
import Day_rank from './components/rank/day_rank.js';
import Product_slider from './components/product_slider/product_slider.js';
import Product_slider_right from './components/product_slider/product_slider_right.js';
import Nav from "./components/nav/Nav.js";
import Register from './components/register/Register.js';
import RegisterSuccessful from './components/registerSuccessful/RegisterSuccessful.js';
import MemberCenter from './components/memberCenter/MemberCenter.js';
import BasicInfo from './components/basicInfo/BasicInfo.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Loginform />
          <Head_slider />
          <div className="middle_section container d-flex justify-content-center">
            <Recommend />
            <Day_rank />
          </div>
          <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider/>
          <Route path="/register" component={Register} />
          <Route path="/registerSuccessful" component={RegisterSuccessful} />
          <div className="container d-flex">
            <Route path="/memberCenter" component={MemberCenter} />
            <Route path="/memberCenter/BasicInfo" component={BasicInfo} />
          </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
